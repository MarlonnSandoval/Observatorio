import { Component, OnInit } from '@angular/core';
import { Evento, DATABASE, SVG_PATHS } from './evento.model';

export type CategoriaPestana = 'senales' | 'cartas' | 'tecnologias';

interface Opcion {
  label: string;
  value: string;
}

interface Definicion {
  termino: string;
  texto: string;
}

interface PestanaConfig {
  id: CategoriaPestana;
  titulo: string;
  tituloDescripcion: string;
  imagen: string;
  placeholder: string;
  definiciones: Definicion[];
  opcionesTipo: Opcion[]; // vacío = no muestra el filtro de período
}

interface EstadoTabla {
  // filtros ('' = todos)
  texto: string;
  tema: string;
  tipo: string;
  // orden (lo gestiona p-table; se guarda aquí para poder restablecerlo)
  sortField: string;
  sortOrder: 1 | -1;
  // paginación (two-way con p-table)
  primera: number;
  // resultado filtrado y total de la categoría
  filtrados: Evento[];
  total: number;
}

/** Evento con sus valores ya normalizados, calculados una sola vez al clasificar. */
interface EventoIndexado {
  evento: Evento;
  nombreNorm: string;    // para buscar por texto
  temaNorm: string;      // para filtrar por temática
  horizonteNorm: string; // en mayúsculas, para filtrar por período
  prefijo: string;       // SD, RD, CS, EC o ''
}

const CATEGORIAS: readonly CategoriaPestana[] = ['senales', 'cartas', 'tecnologias'];

const OPCIONES_PERIODO: readonly Opcion[] = [
  { label: '2040-2050', value: '2040-2050' },
  { label: '2030-2040', value: '2030-2040' },
  { label: 'PRESENTE-2030', value: 'PRESENTE-2030' },
];

const ORDEN_INICIAL = { sortField: 'fechaActualizacion', sortOrder: -1 as const };

const REGEX_PREFIJO = /^\s*([a-z]{2})\s*-/i;

/** Minúsculas, sin tildes ni espacios extremos. Tolera null/undefined. */
function norm(valor: unknown): string {
  return String(valor ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase();
}

/** Prefijo de dos letras del nombre (SD, RD, CS, EC) o '' si no tiene. */
function prefijoDe(e: Evento): string {
  const m = REGEX_PREFIJO.exec(String(e?.nombre ?? ''));
  return m ? m[1].toUpperCase() : '';
}

/** Escapa un valor para CSV (comillas dobles duplicadas). */
function csv(valor: unknown): string {
  return `"${String(valor ?? '').replace(/"/g, '""')}"`;
}

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  /** Filas por página y opciones del selector del paginador. */
  readonly filasPorPagina = 10;
  readonly opcionesFilas = [5, 10, 25];

  readonly opcionesTematica: Opcion[] = [
    { label: 'Ambiental', value: 'Ambiental' },
    { label: 'Tecnológica', value: 'Tecnológica' },
    { label: 'Política', value: 'Política' },
    { label: 'Social', value: 'Social' },
    { label: 'Económica', value: 'Económica' },
    { label: 'General', value: 'General' }
  ];

  readonly coloresTematica: Record<string, string> = {
    'Ambiental': '#059141',   // Verde
    'Tecnológica': '#4E87C6', // Azul
    'Política': '#6f42c1',    // Morado
    'Social': '#FF5533',      // Rojo
    'Económica': '#EFC514',   // Amarillo/Ámbar
    'General': '#6c757d'      // Gris
  };

  readonly pestanas: PestanaConfig[] = [
    {
      id: 'senales',
      titulo: 'Señal débil (SD)',
      tituloDescripcion: 'Señal débil (SD)',
      imagen: 'assets/img/senal-debil.webp',
      placeholder: 'Buscar señal o ruptura...',
      definiciones: [
        { termino: 'Señal débil (SD)', texto: 'indicio temprano y poco visible de un posible cambio futuro con alta incertidumbre.' },
      ],
      opcionesTipo: [...OPCIONES_PERIODO]
    },
    {
      id: 'cartas',
      titulo: 'Carta salvaje (CS)',
      tituloDescripcion: 'Carta salvaje (CS)',
      imagen: 'assets/img/carta-salvaje.webp',
      placeholder: 'Buscar carta salvaje o catástrofe...',
      definiciones: [
        { termino: 'Carta salvaje (CS)', texto: 'evento poco probable, pero de alto impacto que puede transformar escenarios de forma inesperada.' },
      ],
      opcionesTipo: [...OPCIONES_PERIODO]
    },
    {
      id: 'tecnologias',
      titulo: 'Tecnología emergente',
      tituloDescripcion: 'Tecnología emergente',
      imagen: 'assets/img/tendencia-emergente.webp',
      placeholder: 'Buscar tecnología emergente...',
      definiciones: [
        { termino: '', texto: 'Son aquellas innovaciones y avances tecnológicos que están en las etapas iniciales de desarrollo, pero que muestran un gran potencial para impactar significativamente en diversas áreas de la sociedad, la economía y la vida cotidiana.' }
      ],
      opcionesTipo: [...OPCIONES_PERIODO]
    }
  ];

  estado: Record<CategoriaPestana, EstadoTabla> = {
    senales: this.estadoInicial(),
    cartas: this.estadoInicial(),
    tecnologias: this.estadoInicial()
  };

  private base: Record<CategoriaPestana, EventoIndexado[]> = {
    senales: [],
    cartas: [],
    tecnologias: []
  };

  /** Memoriza claseTema(): se llama por cada fila en cada ciclo de detección de cambios. */
  private readonly cacheClaseTema = new Map<string, string>();

  ngOnInit(): void {
    this.clasificarDatos();
    CATEGORIAS.forEach(id => this.recalcular(id));
  }

  // ---------------------------------------------------------------------------
  // Utilidades
  // ---------------------------------------------------------------------------

  private estadoInicial(): EstadoTabla {
    return {
      texto: '', tema: '', tipo: '',
      ...ORDEN_INICIAL,
      primera: 0,
      filtrados: [],
      total: 0
    };
  }

  private categoriaDe(e: Evento): CategoriaPestana {
    const p = e.tipoEvento;
    if (p === 'SD' || p === 'RD') return 'senales';
    if (p === 'CS' || p === 'EC') return 'cartas';
    return 'tecnologias';
  }

  /** Clasifica por pestaña y calcula una sola vez los valores normalizados de cada evento. */
  private clasificarDatos(): void {
    const datos: Evento[] = Array.isArray(DATABASE) ? DATABASE : [];
    this.base = { senales: [], cartas: [], tecnologias: [] };

    for (const e of datos) {
      if (!e) continue;
      this.base[this.categoriaDe(e)].push({
        evento: e,
        nombreNorm: norm(e.nombre),
        temaNorm: norm(e.tematica),
        horizonteNorm: norm((e as any).horizonte).toUpperCase(),
        prefijo: prefijoDe(e)
      });
    }
  }

  // ---------------------------------------------------------------------------
  // Template helpers
  // ---------------------------------------------------------------------------

  obtenerSvgPath(e: Evento): string {
    const tipo = e.tipoEvento || prefijoDe(e);
    if (tipo === 'SD' || tipo === 'RD') return SVG_PATHS['SD_RD'];
    if (tipo === 'CS' || tipo === 'EC') return SVG_PATHS['CS_EC'];
    return SVG_PATHS['TE'];
  }

  /** Color Hex de relleno para el SVG según la temática. */
  obtenerColorIcono(tematica: string): string {
    return this.coloresTematica[tematica] || '#6c757d';
  }

  /** Clase CSS del tag de temática, segura ante valores vacíos: tema-politica, tema-general... */
  claseTema(tematica: unknown): string {
    const clave = String(tematica ?? '');
    let clase = this.cacheClaseTema.get(clave);
    if (clase === undefined) {
      const n = norm(clave).replace(/\s+/g, '-');
      clase = 'tema-' + (n || 'general');
      this.cacheClaseTema.set(clave, clase);
    }
    return clase;
  }

  // ---------------------------------------------------------------------------
  // Filtrado (el orden y la paginación los hace p-table)
  // ---------------------------------------------------------------------------

  recalcular(id: CategoriaPestana): void {
    const s = this.estado[id];
    const texto = norm(s.texto);
    const tema = norm(s.tema);
    const tipo = s.tipo.toUpperCase();

    s.filtrados = this.base[id]
      .filter(i =>
        (!texto || i.nombreNorm.includes(texto)) &&
        (!tema || i.temaNorm === tema) &&
        (!tipo || i.horizonteNorm === tipo || i.prefijo === tipo)
      )
      .map(i => i.evento);

    s.total = this.base[id].length;
    s.primera = 0; // al cambiar el filtro, vuelve a la primera página
  }

  // ---------------------------------------------------------------------------
  // Manejadores
  // ---------------------------------------------------------------------------

  onTexto(id: CategoriaPestana, valor: string): void {
    this.actualizarFiltro(id, 'texto', valor);
  }

  onTema(id: CategoriaPestana, valor: string): void {
    this.actualizarFiltro(id, 'tema', valor);
  }

  onTipo(id: CategoriaPestana, valor: string): void {
    this.actualizarFiltro(id, 'tipo', valor);
  }

  private actualizarFiltro(id: CategoriaPestana, filtro: 'texto' | 'tema' | 'tipo', valor: string): void {
    this.estado[id][filtro] = valor ?? '';
    this.recalcular(id);
  }

  /** (onSort) de p-table: guarda el orden para poder restablecerlo en "Limpiar". */
  onSort(id: CategoriaPestana, e: { field: string; order: number }): void {
    const s = this.estado[id];
    s.sortField = e.field;
    s.sortOrder = e.order === 1 ? 1 : -1;
  }

  hayFiltros(id: CategoriaPestana): boolean {
    const s = this.estado[id];
    return !!(s.texto || s.tema || s.tipo);
  }

  /** Restablece filtros y orden. */
  limpiarFiltros(id: CategoriaPestana): void {
    const s = this.estado[id];
    s.texto = '';
    s.tema = '';
    s.tipo = '';
    s.sortField = ORDEN_INICIAL.sortField;
    s.sortOrder = ORDEN_INICIAL.sortOrder;
    this.recalcular(id);
  }

  // ---------------------------------------------------------------------------
  // Descarga de la lista (CSV de lo que está filtrado)
  // ---------------------------------------------------------------------------

  descargarLista(id: CategoriaPestana): void {
    const filas = this.estado[id].filtrados.map(e => {
      const fecha = e.fechaActualizacion ? new Date(e.fechaActualizacion).toLocaleDateString('es-PE') : '';
      return [e.nombre, e.tematica || 'General', e.horizonte, fecha].map(csv).join(',');
    });

    const contenido = ['Nombre,Temática,Período,Fecha Actualización', ...filas].join('\n');
    // BOM para que Excel respete las tildes; Blob para que '#' u otros caracteres no rompan el archivo
    const blob = new Blob(['\uFEFF' + contenido], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `lista_eventos_${id}_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}