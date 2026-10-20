import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import {
  CATEGORIAS_VIG, CategoriaVig, CapturaTerritorio, DireccionSenal, DisenoEscenario, DisenoTerritorio,
  ElementoFuturo, EncuestaValidacion, EvaluacionSenal, EvidenciaCaptada, FichaCatalogo, FuenteBusqueda,
  HechoPrecursor, MaterialBusqueda, MecanismoCaptacion, NivelAlerta, NivelFuente, OrigenEvidencia,
  PerfilBusqueda, ResultadoExterno, SenalHorizonte, TipoHecho, TipoUmbral
} from './radar-item.model';
import { VigilanciaService } from './vigilancia.service';
import { MAP_REGIONS, MapRegionPath } from './map-regions.data';

export type CategoriaTipo =
  | 'Tendencias'
  | 'Riesgos'
  | 'Oportunidades'
  | 'Escenarios';

interface HeroSlide {
  image: string;
  title: string;
  subtitle?: string;
}

/** Estado del asistente de estrategia de búsqueda (Paso 2, Etapa 1). */
interface AsistenteBusqueda {
  paso: 1 | 2 | 3 | 4;
  planIds: string[];
  onpIds: string[];
  externosIds: string[];
  terminos: string;
  ecuacion: string;
  filtros: string;
  niveles: NivelFuente[];
  buscado: boolean;
  fuentes: FuenteBusqueda[];
  modalidad: 'DIRIGIDA' | 'EXPLORATORIA';
  informacionRequerida: string;
  acceso: string;
  mecanismo: MecanismoCaptacion;
  frecuencia: string;
  pertinencia: string;
}

@Component({
  selector: 'app-radar-vigilancia',
  templateUrl: './radar-vigilancia.component.html',
  styleUrls: ['./radar-vigilancia.component.css']
})
export class RadarVigilanciaComponent implements OnInit {

  readonly mapViewBox = '0 0 220 320';
  readonly regions: MapRegionPath[] = MAP_REGIONS;
  readonly categorias = CATEGORIAS_VIG;
  readonly etapasPaso1 = [
    'Recuperar los insumos del plan',
    'Reconstruir la secuencia lógica',
    'Identificar hechos precursores',
    'Definir indicadores, fuentes y umbrales'
  ];
  readonly pasosBusqueda = ['Insumos del plan', 'Búsqueda en el ONP', 'Búsqueda abierta', 'Configuración en el ONP'];
  readonly direcciones: DireccionSenal[] = ['CONSISTENTE', 'CONTRARIA', 'NEUTRA', 'INCIERTA'];
  readonly nivelesFuente: NivelFuente[] = ['OFICIAL', 'CIENTIFICA', 'SENAL_TEMPRANA', 'ABIERTA'];

  selectedRegion: string | null = null;
  pasoActivo = 0;                                   // 0 = Paso 1, 1 = Paso 2 ...

  constructor(private catalogo: VigilanciaService) { }

  // =====================================================================
  // TERRITORIO Y CATÁLOGO DEL OBSERVATORIO
  // =====================================================================
  fichas: FichaCatalogo[] = [];                     // casos existentes en el Observatorio
  diseno: DisenoTerritorio | null = null;           // diseño de vigilancia (Fase 1)
  captacion: CapturaTerritorio | null = null;       // búsqueda y captación (Fase 2)

  selectRegion(regionName: string): void {
    this.selectedRegion = regionName;
    forkJoin({
      fichas: this.catalogo.getFichas(regionName),
      diseno: this.catalogo.getDiseno(regionName),
      captacion: this.catalogo.getCaptacion(regionName)
    }).subscribe(({ fichas, diseno, captacion }) => {
      this.fichas = fichas;
      this.diseno = diseno;
      this.captacion = captacion;
      this.fichaVigilada = null;
      this.asistente = null;
      this.seleccionarCategoria('Escenarios');
    });
  }

  onRegionChange(regionName: string | null): void {
    if (regionName) {
      this.selectRegion(regionName);
    } else {
      this.resetearFiltroGlobal();
    }
  }

  resetearFiltroGlobal(): void {
    this.selectedRegion = null;
    this.fichas = [];
    this.diseno = null;
    this.captacion = null;
    this.fichaVigilada = null;
    this.fichaActiva = null;
    this.asistente = null;
    this.elementoResaltado = null;
  }

  hasDataForRegion(regionName: string): boolean {
    return this.catalogo.tieneCatalogo(regionName);
  }

  get hasSelection(): boolean {
    return this.selectedRegion !== null;
  }

  get hasData(): boolean {
    return this.fichas.length > 0;
  }

  // =====================================================================
  // PASO 1 · DELIMITACIÓN Y DISEÑO (Fase 1)
  // La unidad de vigilancia es el escenario. Tendencias, riesgos y oportunidades
  // son los elementos que explican por qué se vigila ese escenario.
  // =====================================================================
  categoriaActiva: CategoriaVig = 'Escenarios';
  fichaActiva: FichaCatalogo | null = null;
  elementoResaltado: string | null = null;
  hechoRazonamiento: string | null = null;
  senalEnRevision: SenalHorizonte | null = null;    // señal devuelta desde el Paso 2

  getFichas(categoria: CategoriaVig): FichaCatalogo[] {
    return this.fichas.filter(f => f.categoria === categoria);
  }

  getCount(categoria: CategoriaVig): number {
    return this.getFichas(categoria).length;
  }

  seleccionarCategoria(categoria: CategoriaVig): void {
    this.categoriaActiva = categoria;
    this.elementoResaltado = null;
    this.hechoRazonamiento = null;
    const lista = this.getFichas(categoria);
    this.fichaActiva = lista.find(f => this.tieneDiseno(f)) ?? lista[0] ?? null;
  }

  seleccionarFicha(ficha: FichaCatalogo): void {
    this.fichaActiva = ficha;
    this.elementoResaltado = null;
    this.hechoRazonamiento = null;
  }

  irAFicha(ficha: FichaCatalogo): void {
    this.categoriaActiva = ficha.categoria;
    this.seleccionarFicha(ficha);
  }

  getDisenoEscenario(ficha: FichaCatalogo | null): DisenoEscenario | undefined {
    return ficha && ficha.categoria === 'Escenarios' ? this.diseno?.escenarios[ficha.id] : undefined;
  }

  getHechos(ficha: FichaCatalogo | null): HechoPrecursor[] {
    if (!this.diseno || !ficha) { return []; }
    if (ficha.categoria === 'Escenarios') {
      const ids = (this.diseno.escenarios[ficha.id]?.elementos ?? []).map(e => e.elementoId);
      return this.diseno.hechos.filter(h => ids.includes(h.elementoId));
    }
    return this.diseno.hechos.filter(h => h.elementoId === ficha.id);
  }

  /** Estado de las 4 etapas del diseño de un escenario. */
  getEtapasCompletas(ficha: FichaCatalogo | null): boolean[] {
    const d = this.getDisenoEscenario(ficha);
    if (!d) { return [false, false, false, false]; }
    const hs = this.getHechos(ficha);
    return [
      d.insumos.length > 0,
      d.elementos.length > 0,
      hs.length > 0 && hs.every(h => !!h.razonamiento?.aspecto && !!h.razonamiento?.cambio && !!h.razonamiento?.manifestacion),
      hs.length > 0 && hs.every(h => !!h.indicador && !!h.lineaBase && !!h.fuente && !!h.periodicidad && !!h.umbral)
    ];
  }

  getAvance(ficha: FichaCatalogo | null): number {
    return this.getEtapasCompletas(ficha).filter(x => x).length;
  }

  tieneDiseno(ficha: FichaCatalogo): boolean {
    return ficha.categoria === 'Escenarios' ? this.getAvance(ficha) > 0 : this.getHechos(ficha).length > 0;
  }

  getEtiquetaDiseno(ficha: FichaCatalogo): string {
    if (ficha.categoria !== 'Escenarios') {
      return this.getHechos(ficha).length > 0 ? 'Con hechos precursores' : 'Sin hechos';
    }
    const n = this.getAvance(ficha);
    if (n === 4) { return 'Diseño completo'; }
    return n > 0 ? 'Diseño en curso (' + n + '/4)' : 'Sin diseño';
  }

  getClaseDiseno(ficha: FichaCatalogo): string {
    if (ficha.categoria !== 'Escenarios') {
      return this.getHechos(ficha).length > 0 ? 'estado-configurado' : 'sin-diseno';
    }
    const n = this.getAvance(ficha);
    return n === 4 ? 'hecho-observable' : n > 0 ? 'estado-configurado' : 'sin-diseno';
  }

  /** Solo un escenario con las 4 etapas completas puede pasar al Paso 2. */
  get puedeIniciar(): boolean {
    return !!this.fichaActiva && this.fichaActiva.categoria === 'Escenarios' && this.getAvance(this.fichaActiva) === 4;
  }

  getElementosEscenario(escenario: FichaCatalogo): { ficha: FichaCatalogo; justificacion: string }[] {
    const defs = this.getDisenoEscenario(escenario)?.elementos ?? [];
    return defs
      .map(d => ({ ficha: this.getElemento(d.elementoId), justificacion: d.justificacion }))
      .filter((x): x is { ficha: FichaCatalogo; justificacion: string } => !!x.ficha);
  }

  getEscenariosDeElemento(elemento: FichaCatalogo): FichaCatalogo[] {
    if (!this.diseno) { return []; }
    return this.getFichas('Escenarios').filter(e =>
      (this.diseno!.escenarios[e.id]?.elementos ?? []).some(d => d.elementoId === elemento.id));
  }

  getElemento(id: string): FichaCatalogo | undefined {
    return this.fichas.find(f => f.categoria !== 'Escenarios' && f.id === id);
  }

  getTituloElemento(id: string): string {
    return this.getElemento(id)?.titulo ?? id;
  }

  // Resalta los hechos derivados de un elemento del escenario (clic de nuevo = quitar)
  alternarElemento(elementoId: string): void {
    this.elementoResaltado = this.elementoResaltado === elementoId ? null : elementoId;
  }

  estaAtenuado(elementoId: string): boolean {
    return !!this.elementoResaltado && this.elementoResaltado !== elementoId;
  }

  alternarRazonamiento(hechoId: string): void {
    this.hechoRazonamiento = this.hechoRazonamiento === hechoId ? null : hechoId;
  }

  getClaseCategoria(categoria: CategoriaVig): string {
    switch (categoria) {
      case 'Tendencias': return 'cat-tendencias';
      case 'Riesgos': return 'cat-riesgos';
      case 'Oportunidades': return 'cat-oportunidades';
      default: return 'cat-escenarios';
    }
  }

  getEtiquetaCategoria(categoria: CategoriaVig): string {
    switch (categoria) {
      case 'Tendencias': return 'Tendencia';
      case 'Riesgos': return 'Riesgo';
      case 'Oportunidades': return 'Oportunidad';
      default: return 'Escenario';
    }
  }

  getClaseTipoHecho(tipo: TipoHecho): string {
    return tipo === 'OBSERVABLE' ? 'hecho-observable' : 'hecho-potencial';
  }

  getEtiquetaUmbral(tipo: TipoUmbral): string {
    switch (tipo) {
      case 'NORMATIVO': return 'Normativo o técnico';
      case 'HISTORICO': return 'Histórico o estadístico';
      case 'TENDENCIAL': return 'Tendencial';
      case 'EXPERTOS': return 'Expertos';
      default: return 'Por ocurrencia de evento';
    }
  }

  // Descarga la matriz de diseño del escenario (elemento → hecho → indicador → umbral) en CSV
  descargarFicha(): void {
    const f = this.fichaActiva;
    if (!f) { return; }
    const q = (v: string) => '"' + (v ?? '').replace(/"/g, '""') + '"';
    const filas = [
      ['Territorio', 'Escenario', 'Elemento de futuro', 'Hecho precursor', 'Tipo de hecho', 'Aspecto relevante',
       'Cambio de trayectoria', 'Manifestación anticipatoria', 'Indicador o proxy', 'Línea base', 'Fuente',
       'Periodicidad', 'Tipo de umbral', 'Umbral o condición de alerta'],
      ...this.getHechos(f).map(h => [this.selectedRegion ?? '', f.titulo, this.getTituloElemento(h.elementoId),
        h.descripcion, h.tipo, h.razonamiento.aspecto, h.razonamiento.cambio, h.razonamiento.manifestacion,
        h.indicador, h.lineaBase, h.fuente, h.periodicidad, this.getEtiquetaUmbral(h.tipoUmbral), h.umbral])
    ];
    const csv = '\ufeff' + filas.map(r => r.map(q).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'matriz-diseno-vigilancia.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  iniciarVigilancia(): void {
    if (!this.puedeIniciar || !this.fichaActiva) { return; }
    this.fichaVigilada = this.fichaActiva;
    this.hechoActivoId = this.hechosVigilados[0]?.id ?? null;
    this.pestanaPaso2 = 'ESTRATEGIA';
    this.asistente = null;
    this.pasoActivo = 1;
  }

  // =====================================================================
  // PASO 2 · BÚSQUEDA Y CAPTACIÓN (Fase 2)
  // Etapa 1: diseñar la estrategia (asistente de 4 pasos) · Etapa 2: captar y registrar evidencia
  // Complementaria: escaneo del horizonte
  // =====================================================================
  fichaVigilada: FichaCatalogo | null = null;       // escenario elegido en el Paso 1
  hechoActivoId: string | null = null;
  pestanaPaso2: 'ESTRATEGIA' | 'EVIDENCIA' = 'ESTRATEGIA';
  asistente: AsistenteBusqueda | null = null;

  mostrarModalEvidencia = false;
  errorEvidencia = '';
  nuevaEvidencia = this.evidenciaVacia();
  nuevaSenal = { titulo: '', fuente: '' };
  senalEvaluando: SenalHorizonte | null = null;
  evalDraft: EvaluacionSenal = { relevancia: 'MEDIA', persistencia: 'MEDIA', impacto: 'MEDIA' };

  get puedeIrAPaso2(): boolean {
    return !!this.fichaVigilada;
  }

  get hechosVigilados(): HechoPrecursor[] {
    return this.getHechos(this.fichaVigilada);
  }

  get hechoActivo(): HechoPrecursor | null {
    return this.hechosVigilados.find(h => h.id === this.hechoActivoId) ?? null;
  }

  get totalConfigurados(): number {
    return this.hechosVigilados.filter(h => !!this.getPerfil(h.id)).length;
  }

  get totalEvidencias(): number {
    return this.hechosVigilados.reduce((n, h) => n + this.getEvidencias(h.id).length, 0);
  }

  volverAPaso1(): void {
    this.pasoActivo = 0;
  }

  seleccionarHecho(hechoId: string): void {
    this.hechoActivoId = hechoId;
    this.asistente = null;
  }

  getPerfil(hechoId: string): PerfilBusqueda | undefined {
    return this.captacion?.perfiles.find(p => p.hechoId === hechoId);
  }

  getMaterial(hechoId: string): MaterialBusqueda | undefined {
    return this.captacion?.material.find(m => m.hechoId === hechoId);
  }

  getEvidencias(hechoId: string): EvidenciaCaptada[] {
    return (this.captacion?.evidencias ?? [])
      .filter(e => e.hechoId === hechoId)
      .sort((a, b) => b.fechaCaptacion.localeCompare(a.fechaCaptacion));
  }

  getUltimaCaptacion(hechoId: string): string | null {
    return this.getEvidencias(hechoId)[0]?.fechaCaptacion ?? null;
  }

  getEstadoHecho(hechoId: string): 'SIN_PERFIL' | 'CONFIGURADO' | 'CON_EVIDENCIA' {
    if (this.getEvidencias(hechoId).length > 0) { return 'CON_EVIDENCIA'; }
    return this.getPerfil(hechoId) ? 'CONFIGURADO' : 'SIN_PERFIL';
  }

  getEtiquetaEstadoHecho(hechoId: string): string {
    switch (this.getEstadoHecho(hechoId)) {
      case 'CON_EVIDENCIA': return 'Con evidencia captada';
      case 'CONFIGURADO': return 'Perfil configurado';
      default: return 'Perfil pendiente';
    }
  }

  getClaseEstadoHecho(hechoId: string): string {
    switch (this.getEstadoHecho(hechoId)) {
      case 'CON_EVIDENCIA': return 'estado-evidencia';
      case 'CONFIGURADO': return 'estado-configurado';
      default: return 'sin-diseno';
    }
  }

  getEtiquetaNivel(nivel: NivelFuente): string {
    switch (nivel) {
      case 'OFICIAL': return 'Oficial';
      case 'CIENTIFICA': return 'Científica';
      case 'SENAL_TEMPRANA': return 'Señal temprana';
      default: return 'Abierta';
    }
  }

  getClaseNivel(nivel: NivelFuente): string {
    return 'nivel-' + nivel.toLowerCase().replace('_', '-');
  }

  getEtiquetaMecanismo(m: MecanismoCaptacion): string {
    switch (m) {
      case 'AUTOMATIZADA': return 'Automatizada';
      case 'SEMIAUTOMATIZADA': return 'Semiautomatizada';
      default: return 'Manual';
    }
  }

  getEtiquetaDireccion(d: DireccionSenal): string {
    switch (d) {
      case 'CONSISTENTE': return 'Consistente';
      case 'CONTRARIA': return 'Contraria';
      case 'NEUTRA': return 'Neutra';
      default: return 'Incierta';
    }
  }

  getClaseDireccion(d: DireccionSenal): string {
    return 'dir-' + d.toLowerCase();
  }

  // ---- Etapa 1: asistente de estrategia de búsqueda ----
  abrirAsistente(hechoId: string): void {
    const p = this.getPerfil(hechoId);
    const h = this.hechosVigilados.find(x => x.id === hechoId);
    this.asistente = p ? {
      paso: 1,
      planIds: [...p.planIds], onpIds: [...p.onpIds], externosIds: [...p.externosIds],
      terminos: p.terminos.join(', '), ecuacion: p.ecuacion, filtros: p.filtros,
      niveles: [...this.nivelesFuente], buscado: p.externosIds.length > 0,
      fuentes: p.fuentes.map(f => ({ ...f })),
      modalidad: p.modalidad, informacionRequerida: p.informacionRequerida, acceso: p.acceso,
      mecanismo: p.mecanismo, frecuencia: p.frecuencia, pertinencia: p.pertinencia
    } : {
      paso: 1,
      planIds: [], onpIds: [], externosIds: [],
      terminos: '', ecuacion: '', filtros: '',
      niveles: [...this.nivelesFuente], buscado: false,
      fuentes: [],
      modalidad: 'DIRIGIDA',
      informacionRequerida: h ? 'Datos para actualizar el indicador: ' + h.indicador : '',
      acceso: '', mecanismo: 'MANUAL', frecuencia: h?.periodicidad ?? '', pertinencia: ''
    };
  }

  cerrarAsistente(): void {
    this.asistente = null;
  }

  irAPasoBusqueda(n: number): void {
    if (this.asistente && n < this.asistente.paso) { this.asistente.paso = n as 1 | 2 | 3 | 4; }
  }

  anteriorPaso(): void {
    if (this.asistente && this.asistente.paso > 1) { this.asistente.paso = (this.asistente.paso - 1) as 1 | 2 | 3 | 4; }
  }

  siguientePaso(): void {
    const a = this.asistente;
    if (!a || a.paso >= 4) { return; }
    a.paso = (a.paso + 1) as 1 | 2 | 3 | 4;
    if (a.paso === 4 && this.hechoActivoId) { this.construirFuentes(this.hechoActivoId); }
  }

  alternarSeleccion(lista: 'planIds' | 'onpIds' | 'externosIds', id: string): void {
    const a = this.asistente;
    if (!a) { return; }
    const i = a[lista].indexOf(id);
    if (i >= 0) { a[lista].splice(i, 1); } else { a[lista].push(id); }
  }

  estaSeleccionado(lista: 'planIds' | 'onpIds' | 'externosIds', id: string): boolean {
    return !!this.asistente && this.asistente[lista].includes(id);
  }

  alternarNivel(nivel: NivelFuente): void {
    const a = this.asistente;
    if (!a) { return; }
    const i = a.niveles.indexOf(nivel);
    if (i >= 0) { a.niveles.splice(i, 1); } else { a.niveles.push(nivel); }
  }

  // Búsqueda abierta (simulada): filtra los resultados de ejemplo por nivel de fuente
  buscar(): void {
    const a = this.asistente;
    if (!a) { return; }
    if (!a.ecuacion.trim() && a.terminos.trim()) {
      a.ecuacion = a.terminos.split(',').map(t => t.trim()).filter(t => !!t).map(t => '"' + t + '"').join(' O ');
    }
    a.buscado = true;
  }

  getResultadosFiltrados(hechoId: string): ResultadoExterno[] {
    const a = this.asistente;
    const m = this.getMaterial(hechoId);
    if (!a || !m || !a.buscado) { return []; }
    return m.resultadosExternos.filter(r => a.niveles.includes(r.nivel));
  }

  // Las fuentes del perfil salen de lo seleccionado en los pasos 1 y 3
  private construirFuentes(hechoId: string): void {
    const a = this.asistente;
    const m = this.getMaterial(hechoId);
    if (!a || !m) { return; }
    const candidatas = [
      ...m.referenciasPlan.filter(r => a.planIds.includes(r.id) && r.tipo !== 'Referencia')
        .map(r => ({ nombre: r.descripcion, nivel: r.nivel })),
      ...m.resultadosExternos.filter(r => a.externosIds.includes(r.id))
        .map(r => ({ nombre: r.fuente, nivel: r.nivel }))
    ];
    const vistos = new Set<string>();
    const nuevas: FuenteBusqueda[] = [];
    for (const c of candidatas) {
      if (vistos.has(c.nombre)) { continue; }
      vistos.add(c.nombre);
      const previa = a.fuentes.find(f => f.nombre === c.nombre);
      nuevas.push({ nombre: c.nombre, nivel: c.nivel, principal: previa ? previa.principal : false });
    }
    if (nuevas.length > 0 && !nuevas.some(f => f.principal)) {
      (nuevas.find(f => f.nivel === 'OFICIAL') ?? nuevas[0]).principal = true;
    }
    a.fuentes = nuevas;
  }

  marcarPrincipal(fuente: FuenteBusqueda): void {
    this.asistente?.fuentes.forEach(f => f.principal = (f === fuente));
  }

  get puedeConfigurar(): boolean {
    const a = this.asistente;
    return !!a && a.fuentes.length > 0 && !!a.informacionRequerida.trim() && !!a.acceso.trim()
      && !!a.ecuacion.trim() && !!a.frecuencia.trim() && !!a.pertinencia.trim();
  }

  configurarEnOnp(): void {
    const a = this.asistente;
    const cap = this.captacion;
    const hechoId = this.hechoActivoId;
    if (!a || !cap || !hechoId || !this.puedeConfigurar) { return; }
    const perfil: PerfilBusqueda = {
      hechoId,
      modalidad: a.modalidad,
      informacionRequerida: a.informacionRequerida.trim(),
      planIds: [...a.planIds], onpIds: [...a.onpIds], externosIds: [...a.externosIds],
      fuentes: a.fuentes.map(f => ({ ...f })),
      acceso: a.acceso.trim(),
      terminos: a.terminos.split(',').map(t => t.trim()).filter(t => !!t),
      ecuacion: a.ecuacion.trim(),
      filtros: a.filtros.trim(),
      mecanismo: a.mecanismo,
      frecuencia: a.frecuencia.trim(),
      pertinencia: a.pertinencia.trim()
    };
    this.catalogo.guardarPerfil(this.selectedRegion ?? '', perfil).subscribe(guardado => {
      cap.perfiles = [...cap.perfiles.filter(p => p.hechoId !== hechoId), guardado];
      this.asistente = null;
    });
  }

  // ---- Etapa 2: captar y registrar evidencia ----
  contarDireccion(hechoId: string, d: DireccionSenal): number {
    return this.getEvidencias(hechoId).filter(e => e.direccion === d).length;
  }

  contarIndependientes(hechoId: string): number {
    return this.getEvidencias(hechoId).filter(e => e.origen === 'PRIMARIA').length;
  }

  private evidenciaVacia() {
    return {
      periodoReferencia: '',
      hallazgo: '',
      valorIndicador: '',
      fuente: '',
      nivelFuente: 'OFICIAL' as NivelFuente,
      origen: 'PRIMARIA' as OrigenEvidencia,
      enlace: '',
      mecanismo: 'MANUAL' as MecanismoCaptacion,
      direccion: 'INCIERTA' as DireccionSenal
    };
  }

  abrirModalEvidencia(): void {
    this.nuevaEvidencia = this.evidenciaVacia();
    const perfil = this.hechoActivo ? this.getPerfil(this.hechoActivo.id) : undefined;
    const principal = perfil?.fuentes.find(f => f.principal);
    if (perfil) { this.nuevaEvidencia.mecanismo = perfil.mecanismo; }
    if (principal) { this.nuevaEvidencia.fuente = principal.nombre; this.nuevaEvidencia.nivelFuente = principal.nivel; }
    this.errorEvidencia = '';
    this.mostrarModalEvidencia = true;
  }

  cerrarModalEvidencia(): void {
    this.mostrarModalEvidencia = false;
  }

  guardarEvidencia(): void {
    const hecho = this.hechoActivo;
    const cap = this.captacion;
    const e = this.nuevaEvidencia;
    if (!hecho || !cap) { return; }
    if (!e.periodoReferencia.trim() || !e.hallazgo.trim() || !e.fuente.trim()) {
      this.errorEvidencia = 'Completa el periodo, el hallazgo y la fuente.';
      return;
    }
    const registro: EvidenciaCaptada = {
      id: 'ev-' + Date.now(),
      hechoId: hecho.id,
      fechaCaptacion: new Date().toISOString().slice(0, 10),
      periodoReferencia: e.periodoReferencia.trim(),
      hallazgo: e.hallazgo.trim(),
      valorIndicador: e.valorIndicador.trim() || undefined,
      fuente: e.fuente.trim(),
      nivelFuente: e.nivelFuente,
      origen: e.origen,
      enlace: e.enlace.trim(),
      mecanismo: e.mecanismo,
      direccion: e.direccion
    };
    this.catalogo.guardarEvidencia(this.selectedRegion ?? '', registro).subscribe(guardada => {
      cap.evidencias = [...cap.evidencias, guardada];
      this.cerrarModalEvidencia();
      this.pestanaPaso2 = 'EVIDENCIA';
    });
  }

  // ---- Complementaria: escaneo del horizonte ----
  getSenales(): SenalHorizonte[] {
    return this.captacion?.senales ?? [];
  }

  getEtiquetaEstadoSenal(s: SenalHorizonte): string {
    switch (s.estado) {
      case 'PROPUESTA': return 'Enviada al Paso 1';
      case 'EN_OBSERVACION': return 'En observación';
      default: return 'Nueva';
    }
  }

  agregarSenal(): void {
    const cap = this.captacion;
    if (!cap || !this.nuevaSenal.titulo.trim()) { return; }
    const senal: SenalHorizonte = {
      id: 'sh-' + Date.now(),
      fecha: new Date().toISOString().slice(0, 10),
      titulo: this.nuevaSenal.titulo.trim(),
      fuente: this.nuevaSenal.fuente.trim() || 'Sin especificar',
      estado: 'NUEVA'
    };
    this.catalogo.guardarSenal(this.selectedRegion ?? '', senal).subscribe(guardada => {
      cap.senales = [...cap.senales, guardada];
      this.nuevaSenal = { titulo: '', fuente: '' };
    });
  }

  // Primero se evalúa técnicamente (relevancia, persistencia, impacto); recién después se decide
  abrirEvaluacion(senal: SenalHorizonte): void {
    this.senalEvaluando = senal;
    this.evalDraft = senal.evaluacion ? { ...senal.evaluacion } : { relevancia: 'MEDIA', persistencia: 'MEDIA', impacto: 'MEDIA' };
  }

  cancelarEvaluacion(): void {
    this.senalEvaluando = null;
  }

  guardarEvaluacion(proponer: boolean): void {
    const s = this.senalEvaluando;
    if (!s) { return; }
    s.evaluacion = { ...this.evalDraft };
    s.estado = proponer ? 'PROPUESTA' : 'EN_OBSERVACION';
    this.senalEvaluando = null;
    if (proponer) {
      this.senalEnRevision = s;     // se devuelve a la Fase 1 para analizar su vínculo con los escenarios
      this.pasoActivo = 0;
    }
  }

  heroSlides: HeroSlide[] = [
    {
      image: 'assets/img/A3IXVw9IKvScqsYSMQl-o0zv.png',
      title: 'Aumento del acceso seguro a agua y saneamiento en Amazonas',
      subtitle: 'Escenarios del Plan Estratégico de Desarrollo Nacional',
    },
    {
      image: 'assets/img/tbiiZTH0aN88k81XDBQgKllY.png',
      title: 'Aumento de logros educativos en Cajamarca',
      subtitle: 'Escenarios del Perú al 2050',
    },
  ];

  // En tu radar-vigilancia.component.ts
  getEtiquetaCuadrante(posicion: 'TOP' | 'RIGHT' | 'BOTTOM' | 'LEFT'): string {
    if (this.enfoqueSeleccionado === 'SECTORIAL') {
      switch (posicion) {
        case 'TOP': return 'AGRICULTURA / AGRO';
        case 'RIGHT': return 'MINERÍA / ENERGÍA';
        case 'BOTTOM': return 'SALUD / EDUCACIÓN';
        case 'LEFT': return 'TECNOLOGÍA / COMERCIO';
      }
    } else {
      // Por defecto vista Territorial
      switch (posicion) {
        case 'TOP': return 'MACRO REGIÓN NORTE';
        case 'RIGHT': return 'MACRO REGIÓN ESTE';
        case 'BOTTOM': return 'MACRO REGIÓN SUR';
        case 'LEFT': return 'MACRO REGIÓN CENTRO';
      }
    }
  }

  // Filtros
  enfoqueSeleccionado: string = 'TODOS';
  territorioFiltro: string = 'TODOS';

  // Modal y Encuesta
  mostrarModalEncuesta: boolean = false;
  encuesta: EncuestaValidacion = {
    pertinencia: 'SI',
    nivelAlertaSugerido: 'ROJO',
    comentarios: ''
  };

  elementoSeleccionado: ElementoFuturo | null = null;

  // Datos de ejemplo adaptados al Observatorio
  elementos: ElementoFuturo[] = [
    {
      id: '1',
      titulo: 'Crisis de Escasez Hídrica en Cuencas Sur',
      descripcion: 'Déficit hídrico severo con impacto alto en la producción agropecuaria regional.',
      tipo: 'RIESGO',
      sector: 'Agricultura',
      territorio: 'Sur',
      alerta: 'ROJO',
      distanciaCentro: 22,
      anguloGrados: 45
    },
    {
      id: '2',
      titulo: 'Automatización y Digitalización Agrícola',
      descripcion: 'Adopción acelerada de agrotech e IA en la gestión de cultivos.',
      tipo: 'TENDENCIA',
      sector: 'Tecnología',
      territorio: 'Nacional',
      alerta: 'AMBAR',
      distanciaCentro: 55,
      anguloGrados: 135
    },
    {
      id: '3',
      titulo: 'Apertura de Mercados Agroexportadores',
      descripcion: 'Oportunidades de comercio exterior en el sudeste asiático.',
      tipo: 'OPORTUNIDAD',
      sector: 'Comercio',
      territorio: 'Norte',
      alerta: 'VERDE',
      distanciaCentro: 82,
      anguloGrados: 250
    }
  ];

  ngOnInit(): void { }

  // Cálculo de coordenadas cartesianas desde polares
  getPosicionX(item: ElementoFuturo): number {
    const radioNormalizado = (item.distanciaCentro / 100) * 44;
    const anguloRadianes = (item.anguloGrados * Math.PI) / 180;
    return 50 + radioNormalizado * Math.cos(anguloRadianes);
  }

  getPosicionY(item: ElementoFuturo): number {
    const radioNormalizado = (item.distanciaCentro / 100) * 44;
    const anguloRadianes = (item.anguloGrados * Math.PI) / 180;
    return 50 + radioNormalizado * Math.sin(anguloRadianes);
  }

  getClaseAlerta(alerta: NivelAlerta): string {
    switch (alerta) {
      case 'ROJO': return 'alerta-roja';
      case 'AMBAR': return 'alerta-ambar';
      case 'VERDE': return 'alerta-verde';
      default: return '';
    }
  }

  seleccionarElemento(item: ElementoFuturo): void {
    this.elementoSeleccionado = item;
  }

  // Descarga de reporte
  exportarReporte(): void {
    const datos = JSON.stringify(this.elementos, null, 2);
    const blob = new Blob([datos], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'reporte-radar-vigilancia.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  // Métodos del Modal de Encuesta
  abrirEncuesta(): void {
    if (this.elementoSeleccionado) {
      this.encuesta.nivelAlertaSugerido = this.elementoSeleccionado.alerta;
    }
    this.mostrarModalEncuesta = true;
  }

  cerrarEncuesta(): void {
    this.mostrarModalEncuesta = false;
  }

  enviarEncuesta(): void {
    console.log('Encuesta registrada:', {
      elemento: this.elementoSeleccionado?.titulo || 'General',
      ...this.encuesta
    });
    alert('¡Validación guardada con éxito!');
    this.cerrarEncuesta();
  }
}