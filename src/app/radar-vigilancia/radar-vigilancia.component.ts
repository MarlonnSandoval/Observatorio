import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import {
  CATEGORIAS_VIG, CategoriaVig, DisenoTerritorio, ElementoFuturo, EncuestaValidacion, FichaCatalogo, HechoPrecursor, NivelAlerta, TipoHecho,
  CapturaTerritorio, DireccionSenal, EvidenciaCaptada, MecanismoCaptacion, NivelFuente, PerfilBusqueda, SenalHorizonte
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

@Component({
  selector: 'app-radar-vigilancia',
  templateUrl: './radar-vigilancia.component.html',
  styleUrls: ['./radar-vigilancia.component.css']
})
export class RadarVigilanciaComponent implements OnInit {

  readonly mapViewBox = '0 0 220 320';
  readonly regions: MapRegionPath[] = MAP_REGIONS;
  readonly categorias = CATEGORIAS_VIG;
  selectedRegion: string | null = null;

  // ===== PASO 1: Delimitación y diseño de la vigilancia (Fase 1) =====
  fichas: FichaCatalogo[] = [];                 // casos existentes en el Observatorio
  diseno: DisenoTerritorio | null = null;       // hechos precursores diseñados por el Ceplan
  categoriaActiva: CategoriaVig = 'Escenarios';
  fichaActiva: FichaCatalogo | null = null;
  elementoResaltado: string | null = null;

  constructor(private catalogo: VigilanciaService) { }

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

  // ---- Catálogo por categoría ----
  getFichas(categoria: CategoriaVig): FichaCatalogo[] {
    return this.fichas.filter(f => f.categoria === categoria);
  }

  getCount(categoria: CategoriaVig): number {
    return this.getFichas(categoria).length;
  }

  seleccionarCategoria(categoria: CategoriaVig): void {
    this.categoriaActiva = categoria;
    this.elementoResaltado = null;
    const lista = this.getFichas(categoria);
    this.fichaActiva = lista.find(f => this.tieneDiseno(f)) ?? lista[0] ?? null;
  }

  seleccionarFicha(ficha: FichaCatalogo): void {
    this.fichaActiva = ficha;
    this.elementoResaltado = null;
  }

  irAFicha(ficha: FichaCatalogo): void {
    this.categoriaActiva = ficha.categoria;
    this.seleccionarFicha(ficha);
  }

  // ---- Diseño de vigilancia ----
  getHechos(ficha: FichaCatalogo | null): HechoPrecursor[] {
    if (!this.diseno || !ficha) { return []; }
    if (ficha.categoria === 'Escenarios') {
      const ids = (this.diseno.escenarios[ficha.id] ?? []).map(e => e.elementoId);
      return this.diseno.hechos.filter(h => ids.includes(h.elementoId));
    }
    return this.diseno.hechos.filter(h => h.elementoId === ficha.id);
  }

  tieneDiseno(ficha: FichaCatalogo): boolean {
    return this.getHechos(ficha).length > 0;
  }

  getElementosEscenario(escenario: FichaCatalogo): { ficha: FichaCatalogo; justificacion: string }[] {
    const defs = this.diseno?.escenarios[escenario.id] ?? [];
    return defs
      .map(d => ({ ficha: this.getElemento(d.elementoId), justificacion: d.justificacion }))
      .filter((x): x is { ficha: FichaCatalogo; justificacion: string } => !!x.ficha);
  }

  getEscenariosDeElemento(elemento: FichaCatalogo): FichaCatalogo[] {
    if (!this.diseno) { return []; }
    return this.getFichas('Escenarios').filter(e =>
      (this.diseno!.escenarios[e.id] ?? []).some(d => d.elementoId === elemento.id));
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

  // ---- Presentación ----
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

  // Descarga la ficha de diseño (elemento → hecho → indicador → umbral) en CSV
  descargarFicha(): void {
    const f = this.fichaActiva;
    if (!f) { return; }
    const q = (v: string) => '"' + (v ?? '').replace(/"/g, '""') + '"';
    const filas = [
      ['Territorio', 'Ficha', 'Categoría', 'Elemento de futuro', 'Hecho precursor', 'Tipo de hecho',
       'Indicador o proxy', 'Fuente', 'Periodicidad', 'Umbral o condición de alerta'],
      ...this.getHechos(f).map(h => [this.selectedRegion ?? '', f.titulo, f.categoria,
        this.getTituloElemento(h.elementoId), h.descripcion, h.tipo,
        h.indicador, h.fuente, h.periodicidad, h.umbral])
    ];
    const csv = '\ufeff' + filas.map(r => r.map(q).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ficha-diseno-vigilancia.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  // ===== PASO 2: Búsqueda y captación (Fase 2) =====
  pasoActivo = 0;                                   // 0 = Paso 1, 1 = Paso 2 ...
  captacion: CapturaTerritorio | null = null;       // perfiles, evidencias y señales del ONP
  fichaVigilada: FichaCatalogo | null = null;       // caso elegido en el Paso 1
  hechoActivoId: string | null = null;
  pestanaPaso2: 'ESTRATEGIA' | 'EVIDENCIA' = 'ESTRATEGIA';
  senalEnRevision: SenalHorizonte | null = null;    // señal devuelta al Paso 1 para análisis

  mostrarModalEvidencia = false;
  errorEvidencia = '';
  nuevaEvidencia = this.evidenciaVacia();
  nuevaSenal = { titulo: '', fuente: '' };

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

  iniciarVigilancia(): void {
    if (!this.fichaActiva) { return; }
    this.fichaVigilada = this.fichaActiva;
    this.hechoActivoId = this.hechosVigilados[0]?.id ?? null;
    this.pestanaPaso2 = 'ESTRATEGIA';
    this.pasoActivo = 1;
  }

  volverAPaso1(): void {
    this.pasoActivo = 0;
  }

  seleccionarHecho(hechoId: string): void {
    this.hechoActivoId = hechoId;
  }

  getPerfil(hechoId: string): PerfilBusqueda | undefined {
    return this.captacion?.perfiles.find(p => p.hechoId === hechoId);
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

  // ---- Registrar evidencia ----
  private evidenciaVacia() {
    return {
      periodoReferencia: '',
      hallazgo: '',
      valorIndicador: '',
      fuente: '',
      enlace: '',
      mecanismo: 'MANUAL' as MecanismoCaptacion,
      direccion: 'INCIERTA' as DireccionSenal
    };
  }

  abrirModalEvidencia(): void {
    this.nuevaEvidencia = this.evidenciaVacia();
    const fuentePrincipal = this.hechoActivo ? this.getPerfil(this.hechoActivo.id)?.fuentes.find(f => f.principal) : undefined;
    if (fuentePrincipal) { this.nuevaEvidencia.fuente = fuentePrincipal.nombre; }
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

  // ---- Escaneo del horizonte ----
  getSenales(): SenalHorizonte[] {
    return this.captacion?.senales ?? [];
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

  // Devuelve la señal al Paso 1 para analizar si se incorpora como hecho precursor
  proponerSenal(senal: SenalHorizonte): void {
    senal.estado = 'PROPUESTA';
    this.senalEnRevision = senal;
    this.pasoActivo = 0;
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