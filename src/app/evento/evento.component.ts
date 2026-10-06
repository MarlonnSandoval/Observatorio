import { Component, OnInit } from '@angular/core';
import { Evento, DATABASE, SVG_PATHS } from './evento.model';

export type CategoriaPestana = 'senales' | 'cartas' | 'tecnologias';
export type CampoOrden = 'nombre' | 'tematica' | 'fechaActualizacion';

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
  opcionesTipo: Opcion[]; // vacío = no muestra el filtro de categoría
}

interface EstadoTabla {
  // filtros ('' = todos)
  texto: string;
  tema: string;
  tipo: string;
  // orden
  orden: CampoOrden;
  direccion: 1 | -1;
  // resultado calculado (filtrado + ordenado)
  filtrados: Evento[];
}

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

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
    'Tecnológica': '#4E87C6',  // Azul
    'Política': '#6f42c1',     // Morado
    'Social': '#FF5533',       // Rojo
    'Económica': '#EFC514',    // Amarillo/Ámbar
    'General': '#6c757d'       // Gris
  };

  obtenerSvgPath(e: Evento): string {
    const tipo = e.tipoEvento || this.prefijoDe(e);
    if (tipo === 'SD' || tipo === 'RD') return SVG_PATHS['SD_RD'];
    if (tipo === 'CS' || tipo === 'EC') return SVG_PATHS['CS_EC'];
    return SVG_PATHS['TE'];
  }

  /** Retorna el color Hex de relleno para el SVG según la temática */
  obtenerColorIcono(tematica: string): string {
    return this.coloresTematica[tematica] || '#6c757d';
  }

  readonly pestanas: PestanaConfig[] = [
    {
      id: 'senales',
      titulo: 'Señal débil (SD) / Ruptura o disrupción (RD)',
      tituloDescripcion: 'Señal débil (SD) / Ruptura o disrupción (RD)',
      imagen: 'assets/img/senal-debil.webp',
      placeholder: 'Buscar señal o ruptura...',
      definiciones: [
        { termino: 'Señal débil (SD)', texto: 'indicio temprano y poco visible de un posible cambio futuro con alta incertidumbre.' },
        { termino: 'Ruptura o disrupción (RD)', texto: 'cambio abrupto y profundo que altera significativamente el curso de un sistema o una tendencia establecida.' }
      ],
      opcionesTipo: [
        { label: 'Señal débil (SD)', value: 'SD' },
        { label: 'Ruptura / Disrupción (RD)', value: 'RD' }
      ]
    },
    {
      id: 'cartas',
      titulo: 'Carta salvaje (CS) / Evento catastrófico (EC)',
      tituloDescripcion: 'Carta salvaje (CS) / Evento catastrófico (EC)',
      imagen: 'assets/img/carta-salvaje.webp',
      placeholder: 'Buscar carta salvaje o catástrofe...',
      definiciones: [
        { termino: 'Carta salvaje (CS)', texto: 'evento poco probable, pero de alto impacto que puede transformar escenarios de forma inesperada.' },
        { termino: 'Evento catastrófico (EC)', texto: 'fenómeno extremo con efectos devastadores e inmediatos que provocan crisis graves y generalizadas.' }
      ],
      opcionesTipo: [
        { label: 'Carta salvaje (CS)', value: 'CS' },
        { label: 'Evento catastrófico (EC)', value: 'EC' }
      ]
    },
    {
      id: 'tecnologias',
      titulo: 'Tecnologías Emergentes',
      tituloDescripcion: 'Tecnología emergente',
      imagen: 'assets/img/tendencia-emergente.webp',
      placeholder: 'Buscar tecnología emergente...',
      definiciones: [
        { termino: '', texto: 'Son aquellas innovaciones y avances tecnológicos que están en las etapas iniciales de desarrollo, pero que muestran un gran potencial para impactar significativamente en diversas áreas de la sociedad, la economía y la vida cotidiana.' }
      ],
      opcionesTipo: []
    }
  ];

  tabActiva: CategoriaPestana = 'senales';

  private base: Record<CategoriaPestana, Evento[]> = {
    senales: [],
    cartas: [],
    tecnologias: []
  };

  estado: Record<CategoriaPestana, EstadoTabla> = {
    senales: this.estadoInicial(),
    cartas: this.estadoInicial(),
    tecnologias: this.estadoInicial()
  };

  ngOnInit(): void {
    this.clasificarDatos();
    (Object.keys(this.estado) as CategoriaPestana[]).forEach(id => this.recalcular(id));
  }

  // ---------------------------------------------------------------------------
  // Utilidades
  // ---------------------------------------------------------------------------

  private estadoInicial(): EstadoTabla {
    return {
      texto: '', tema: '', tipo: '',
      orden: 'fechaActualizacion', direccion: -1,
      filtrados: []
    };
  }

  /** Minúsculas, sin tildes ni espacios extremos. Tolera null/undefined. */
  private norm(valor: unknown): string {
    return String(valor ?? '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim()
      .toLowerCase();
  }

  /** Prefijo de dos letras del nombre (SD, RD, CS, EC) o '' si no tiene. */
  private prefijoDe(e: Evento): string {
    const m = /^\s*([a-z]{2})\s*-/i.exec(String(e?.nombre ?? ''));
    return m ? m[1].toUpperCase() : '';
  }

  private categoriaDe(e: Evento): CategoriaPestana {
    const p = this.prefijoDe(e);
    if (p === 'SD' || p === 'RD') return 'senales';
    if (p === 'CS' || p === 'EC') return 'cartas';
    return 'tecnologias';
  }

  private clasificarDatos(): void {
    const datos: Evento[] = Array.isArray(DATABASE) ? DATABASE : [];
    this.base = { senales: [], cartas: [], tecnologias: [] };
    for (const e of datos) {
      if (!e) continue;
      this.base[this.categoriaDe(e)].push(e);
    }
  }

  private tiempo(fecha: unknown): number {
    const t = new Date(fecha as any).getTime();
    return isNaN(t) ? 0 : t;
  }

  // ---------------------------------------------------------------------------
  // Cálculo de la tabla (filtrar -> ordenar)
  // ---------------------------------------------------------------------------

  recalcular(id: CategoriaPestana): void {
    const s = this.estado[id];
    const texto = this.norm(s.texto);
    const tema = this.norm(s.tema);
    const tipo = s.tipo.toUpperCase();

    // 1) Filtrar
    let lista = this.base[id].filter(e => {
      const okTexto = !texto || this.norm(e.nombre).includes(texto);
      const okTema = !tema || this.norm(e.tematica) === tema;
      const okTipo = !tipo ||
        this.norm((e as any).tipoEvento).toUpperCase() === tipo ||
        this.prefijoDe(e) === tipo;
      return okTexto && okTema && okTipo;
    });

    // 2) Ordenar (copia, no muta la base)
    const campo = s.orden;
    const dir = s.direccion;
    lista = [...lista].sort((a, b) => {
      if (campo === 'fechaActualizacion') {
        return (this.tiempo(a.fechaActualizacion) - this.tiempo(b.fechaActualizacion)) * dir;
      }
      return String((a as any)[campo] ?? '').localeCompare(
        String((b as any)[campo] ?? ''), 'es', { numeric: true, sensitivity: 'base' }
      ) * dir;
    });

    s.filtrados = lista;
  }

  // ---------------------------------------------------------------------------
  // Manejadores (reciben el valor explícito, sin depender del orden de ngModel)
  // ---------------------------------------------------------------------------

  seleccionarPestana(id: CategoriaPestana): void {
    this.tabActiva = id;
  }

  onTexto(id: CategoriaPestana, valor: string): void {
    this.estado[id].texto = valor ?? '';
    this.recalcular(id);
  }

  onTema(id: CategoriaPestana, valor: string): void {
    this.estado[id].tema = valor ?? '';
    this.recalcular(id);
  }

  onTipo(id: CategoriaPestana, valor: string): void {
    this.estado[id].tipo = valor ?? '';
    this.recalcular(id);
  }

  ordenarPor(id: CategoriaPestana, campo: CampoOrden): void {
    const s = this.estado[id];
    if (s.orden === campo) {
      s.direccion = s.direccion === 1 ? -1 : 1;
    } else {
      s.orden = campo;
      s.direccion = campo === 'fechaActualizacion' ? -1 : 1;
    }
    this.recalcular(id);
  }

  flecha(id: CategoriaPestana, campo: CampoOrden): string {
    const s = this.estado[id];
    if (s.orden !== campo) return '↕';
    return s.direccion === 1 ? '▲' : '▼';
  }

  hayFiltros(id: CategoriaPestana): boolean {
    const s = this.estado[id];
    return !!(s.texto || s.tema || s.tipo);
  }

  /** Restablece filtros y orden; conserva el tamaño de página elegido. */
  limpiarFiltros(id: CategoriaPestana): void {
    const s = this.estado[id];
    s.texto = '';
    s.tema = '';
    s.tipo = '';
    s.orden = 'fechaActualizacion';
    s.direccion = -1;
    this.recalcular(id);
  }

  /** Clase CSS del tag de temática, segura ante valores vacíos: tema-politica, tema-general... */
  claseTema(tematica: unknown): string {
    const n = this.norm(tematica).replace(/\s+/g, '-');
    return 'tema-' + (n || 'general');
  }

  trackByIndex(index: number): number {
    return index;
  }
}