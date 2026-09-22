import { Component, OnInit } from '@angular/core';
import { RECURSOS_DATABASE, Glosario } from './recursos.data';

export interface PasoProspectiva {
  numero: string;
  titulo: string;
  fase: string;
  descripcion: string;
  producto: string;
  filtroEtapa: string;
}

@Component({
  selector: 'app-guia-interactiva',
  templateUrl: './guia-interactiva.component.html',
  styleUrls: ['./guia-interactiva.component.css']
})
export class GuiaInteractivaComponent implements OnInit {
  activeTab: string = 'teoria';

  // --- MAPEO DIRECTO DE FASES Y SUBETAPAS ---
  mapaSubetapasPorFase: { [key: string]: string[] } = {
    'Fase 1': ['Caracterización', 'Diagnóstico'],
    'Fase 2': ['Formulación de escenarios', 'Opciones estratégicas'],
    'Fase 3': ['Definición del futuro deseado']
  };

  // --- PASOS PROSPECTIVOS ---
  pasosProspectiva: PasoProspectiva[] = [
    {
      numero: '01',
      titulo: 'Diseño del Modelo Conceptual',
      fase: 'Comprensión de la Realidad',
      descripcion: 'Delimitación del tema o problema central. Se identifican los componentes, variables e interrelaciones del sistema objeto de estudio.',
      producto: 'Mapa del modelo conceptual e inventario inicial de variables.',
      filtroEtapa: 'Caracterización'
    },
    {
      numero: '02',
      titulo: 'Análisis de Tendencias y Eventos',
      fase: 'Diagnóstico de Entorno',
      descripcion: 'Mapeo y evaluación de megatendencias, tendencias globales/nacionales y posibles eventos disruptivos que puedan impactar el territorio o sector.',
      producto: 'Base de datos de tendencias y matriz de impacto.',
      filtroEtapa: 'Diagnóstico'
    },
    {
      numero: '03',
      titulo: 'Identificación de Variables Clave',
      fase: 'Priorización',
      descripcion: 'Análisis de motricidad y dependencia entre variables para seleccionar los factores críticos de cambio sobre los cuales la institución debe actuar.',
      producto: 'Matriz MICMAC o lista de variables estratégicas priorizadas.',
      filtroEtapa: 'Diagnóstico'
    },
    {
      numero: '04',
      titulo: 'Construcción de Escenarios',
      fase: 'Exploración del Futuro',
      descripcion: 'Elaboración del escenario tendencial (si nada cambia) y de escenarios exploratorios para elegir el Escenario Apuesta (futuro deseado e idóneo).',
      producto: 'Narrativa del Escenario Apuesta y metas de futuro.',
      filtroEtapa: 'Formulación de escenarios'
    },
    {
      numero: '05',
      titulo: 'Articulación e Implementación',
      fase: 'Estrategia y Acción',
      descripcion: 'Transformación del Escenario Apuesta en objetivos estratégicos, indicadores, metas y acciones integradas en planes (PESEM, PDRC, PEI).',
      producto: 'Plan de acción estratégico articulado al SINAPLAN.',
      filtroEtapa: 'Opciones estratégicas'
    }
  ];

  // --- BUSCADOR Y FILTROS UNIFICADOS ---
  textoBusqueda: string = '';
  tipoRecursoSelect: string = '';
  etapaSelect: string = '';
  subetapaSelect: string = '';
  instrumentoSelect: string = '';

  opcionesEtapas: string[] = [];
  opcionesInstrumentos: string[] = [];
  recursosUnificados: any[] = [];

  // --- FILTROS GLOSARIO ---
  textoBusquedaGlosario: string = '';
  letraActiva: string = '';
  abecedario: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  ngOnInit(): void {
    const metodosMapeados = RECURSOS_DATABASE.metodos.map((m) => ({
      ...m,
      tipoRecurso: 'metodo',
      imagen: 'https://tse1.mm.bing.net/th/id/OIP.RvMj79MGYauulWOg74BCOAHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
    }));

    const kitsMapeados = RECURSOS_DATABASE.kits.map((k) => ({
      ...k,
      tipoRecurso: 'kit',
      imagen: 'https://img.freepik.com/premium-photo/technology-tree-symbol-digital-evolution_785229-3312.jpg?w=2000'
    }));

    this.recursosUnificados = [...metodosMapeados, ...kitsMapeados];

    this.opcionesEtapas = Object.keys(this.mapaSubetapasPorFase);
    this.opcionesInstrumentos = this.extraerOpcionesUnicas('instrumento');
  }

  // --- OBTENER SUBETAPAS SEGÚN LA FASE SELECCIONADA ---
  get opcionesSubetapasDisponibles(): string[] {
    if (!this.etapaSelect) {
      return Object.values(this.mapaSubetapasPorFase).flat().sort();
    }
    return this.mapaSubetapasPorFase[this.etapaSelect] || [];
  }

  onEtapaChange(): void {
    this.subetapaSelect = '';
  }

  // --- RECURSOS FILTRADOS ---
  get recursosFiltrados(): any[] {
    const busqueda = (this.textoBusqueda || '').trim().toLowerCase();

    return this.recursosUnificados.filter((item) => {
      const cumpleTipoRecurso = !this.tipoRecursoSelect || item.tipoRecurso === this.tipoRecursoSelect;

      const cumpleEtapa = !this.etapaSelect ||
        (item.etapa && item.etapa.some((e: string) => e.toLowerCase().includes(this.etapaSelect.toLowerCase())));

      const cumpleSubetapa = !this.subetapaSelect ||
        (item.subetapa && (
          Array.isArray(item.subetapa)
            ? item.subetapa.some((s: string) => s.toLowerCase().includes(this.subetapaSelect.toLowerCase()))
            : item.subetapa.toLowerCase().includes(this.subetapaSelect.toLowerCase())
        ));

      const cumpleInstrumento = !this.instrumentoSelect ||
        (item.instrumento && item.instrumento.includes(this.instrumentoSelect));

      const cumpleTexto = !busqueda ||
        (item.nombre && item.nombre.toLowerCase().includes(busqueda)) ||
        (item.finalidad && item.finalidad.toLowerCase().includes(busqueda)) ||
        (item.producto && item.producto.toLowerCase().includes(busqueda));

      return cumpleTipoRecurso && cumpleEtapa && cumpleSubetapa && cumpleInstrumento && cumpleTexto;
    });
  }

  // --- GLOSARIO FILTRADO ---
  get glosarioFiltrado(): Glosario[] {
    const busqueda = (this.textoBusquedaGlosario || '').trim().toLowerCase();
    return RECURSOS_DATABASE.glosario.filter((g) => {
      const cumpleTexto = !busqueda || g.termino.toLowerCase().includes(busqueda) || g.definicion.toLowerCase().includes(busqueda);
      const cumpleLetra = !this.letraActiva || g.termino.toUpperCase().startsWith(this.letraActiva);
      return cumpleTexto && cumpleLetra;
    }).sort((a, b) => a.termino.localeCompare(b.termino));
  }

  seleccionarLetra(letra: string): void {
    this.letraActiva = this.letraActiva === letra ? '' : letra;
  }

  extraerOpcionesUnicas(propiedad: string): string[] {
    const todos = this.recursosUnificados
      .flatMap(item => item[propiedad] || [])
      .map((v: string) => v.trim())
      .filter((v: string) => v.length > 0);
    return Array.from(new Set(todos)).sort();
  }

  limpiarFiltros(): void {
    this.textoBusqueda = '';
    this.tipoRecursoSelect = '';
    this.etapaSelect = '';
    this.subetapaSelect = '';
    this.instrumentoSelect = '';
  }

  filtrarMetodosPorEtapa(etapa: string): void {
    this.subetapaSelect = etapa;
    this.etapaSelect = '';
    this.activeTab = 'recursos';
  }

  filtrarMetodosPorFase(fase: string): void {
    this.subetapaSelect = '';
    this.etapaSelect = fase;
    this.activeTab = 'recursos';
  }

  seleccionarFaseYSubetapa(fase: string, subetapa: string): void {
    this.etapaSelect = fase;
    this.subetapaSelect = subetapa;
    this.activeTab = 'recursos';
  }

  cambiarTab(tab: string): void {
    this.activeTab = tab;
  }

  descargarKit(item: any): void {
    if (!item.urlDescarga) return;
    const link = document.createElement('a');
    link.href = item.urlDescarga;
    link.download = item.nombreArchivo || `${item.nombre}.${item.extension?.toLowerCase() || 'zip'}`;
    link.click();
  }

  get tituloSeccion(): string {
    // 1. Si hay una subetapa seleccionada, muestra su nombre directamente
    if (this.subetapaSelect) {
      return this.subetapaSelect;
    }

    // 2. Si solo hay fase seleccionada, devuelve el título correspondiente
    const titulosFase: Record<string, string> = {
      'Fase 1': 'Fase 1 · Todas sus etapas',
      'Fase 2': 'Fase 2 · Todas sus etapas',
      'Fase 3': 'Fase 3 · Todas sus etapas'
    };

    return titulosFase[this.etapaSelect] || '';
  }

  get hasSelectionSubetapa(): boolean {
    return this.subetapaSelect !== '';
  }
  get hasSelectionfase(): boolean {
    return this.etapaSelect !== '';
  }

  get tituloSeccion2(): string {
    // 1. Si hay una subetapa seleccionada, muestra su nombre directamente
    if (this.subetapaSelect) {
      return this.subetapaSelect;
    }

    // 2. Si solo hay fase seleccionada, devuelve el título correspondiente
    const titulosFase: Record<string, string> = {
      'Fase 1': 'situación actual',
      'Fase 2': 'análisis prospectivo',
      'Fase 3': 'decisión estratégica'
    };

    return titulosFase[this.etapaSelect] || '';
  }
}