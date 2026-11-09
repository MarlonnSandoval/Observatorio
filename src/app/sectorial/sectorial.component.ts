import { Component, ElementRef, AfterViewInit, ViewChild, Input, OnChanges } from '@angular/core';
import * as d3 from 'd3';
import { ArticuloRadar, SECTOR_DATABASE, ContenidoSector, CategoriaSectorDetalle } from './articles-database.data';

type SvgRootSelection = d3.Selection<HTMLDivElement, unknown, null, undefined>;

interface HeroSlide {
  image: string;
  title: string;
  subtitle?: string;
}

interface SectorConfig {
  nombre: string;
  color: string;
  anillo: string;
  icono: string; // <-- Nuevo campo para el icono de Bootstrap
}

export interface ConoItem {
  titulo: string;
  shortLabel: string;
  categoria: string;
  horizonte: string;
  url: string;
  icono: string; // id del símbolo SVG (ver sprite en el HTML)
  color: string;
}

export interface ConoGroup {
  categoria: string;
  items: ConoItem[];
}

export interface ConoColumn {
  key: 'presente' | 'medio' | 'lejano';
  label: string;
  totalCount: number;
  groups: ConoGroup[];
}

/** Fila de las tablas (Elementos futuros / Escenarios). Los campos extra son opcionales según el dato. */
export type FilaArticulo = ArticuloRadar & {
  categoria: string;
  resumen?: string;
  imagenUrl?: string;
  tematica?: string;
  tema?: string;
};

export interface FiltroElementos {
  texto: string;
  tipo: string;
  tema: string;
  periodo: string;
}

export interface FiltroEscenarios {
  texto: string;
  tema: string;
  periodo: string;
}

export interface RadarItem {
  articulo: ArticuloRadar;
  numero: number;
  icono: string; // id del símbolo SVG (ver sprite en el HTML)
}

export interface RadarNodo {
  articulo: ArticuloRadar;
  numero: number;
  icono: string;
  categoria: string;
  color: string;
  x: number;
  y: number;
}

export interface RadarColumna {
  nombre: string;
  border: string;
  badgeBg: string;
  badgeText: string;
  items: RadarItem[];
}

const DEFINICION_ANILLOS: { id: string; inner: number; outer: number; modoTexto: 'curvo' | 'radial' }[] = [
  { id: 'interior', inner: 45, outer: 100, modoTexto: 'radial' },
  { id: 'exterior', inner: 102, outer: 145, modoTexto: 'curvo' },
  { id: 'exterior_2', inner: 148, outer: 190, modoTexto: 'curvo' }
];
const RADIO_CENTRO = 40;

@Component({
  selector: 'app-explorador-sectorial',
  templateUrl: './sectorial.component.html',
  styleUrls: ['./sectorial.component.css']
})
export class SectorialComponent implements AfterViewInit, OnChanges {

  @Input() selectedSector: string | null = null;
  @Input() sectorData: ContenidoSector | null = null;

  // Estado de la vista activa: 'radar' o 'cono'
  vistaActual: 'radar' | 'cono' = 'cono';

  readonly categoriesBase: (keyof ContenidoSector)[] = ['Tendencias', 'Riesgos', 'Oportunidades'];

  /** Categorías de "elementos futuros" (todas menos Escenarios), en el orden de la leyenda. */
  readonly categoriasElementos: string[] = ['Tendencias', 'Riesgos', 'Oportunidades', 'Señal débil', 'Carta salvaje'];

  private readonly horizontes: string[] = ['PRESENTE-2030', '2030-2040', '2040-2050'];

  // ---- Tablas (pestañas "Elementos futuros" y "Escenarios") ----
  filtroElementos: FiltroElementos = { texto: '', tipo: '', tema: '', periodo: '' };
  filtroEscenarios: FiltroEscenarios = { texto: '', tema: '', periodo: '' };

  filasElementos: FilaArticulo[] = [];
  filasElementosFiltradas: FilaArticulo[] = [];
  filasEscenarios: FilaArticulo[] = [];
  filasEscenariosFiltradas: FilaArticulo[] = [];

  tiposElementos: string[] = [];
  temasElementos: string[] = [];
  periodosElementos: string[] = [];
  temasEscenarios: string[] = [];
  periodosEscenarios: string[] = [];

  primeraFilaElementos = 0;
  primeraFilaEscenarios = 0;

  @ViewChild('svgContainer', { static: false })
  private svgContainer!: ElementRef<HTMLDivElement>;

  sectorSeleccionado: string | null = null;
  articuloDestacado: ArticuloRadar | null = null;
  private svgRoot: SvgRootSelection | null = null;

  private readonly colorPorSector = new Map<string, string>();
  private readonly sectoresPorAnillo = new Map<string, SectorConfig[]>();

  private readonly configSectores: SectorConfig[] = [
    { nombre: 'Comercio Exterior y Turismo', color: 'rgb(44, 194, 177)', anillo: 'exterior_2', icono: 'bi-airplane' },
    { nombre: 'Desarrollo e Inclusión Social', color: 'rgb(101, 161, 169)', anillo: 'exterior_2', icono: 'bi-people' },
    { nombre: 'Competitividad Institucional', color: 'rgb(84, 203, 51)', anillo: 'exterior_2', icono: 'bi-building' },
    { nombre: 'Mujer y poblaciones vulnerables', color: 'rgb(193, 202, 51)', anillo: 'exterior_2', icono: 'bi-person-hearts' },
    { nombre: 'Transporte y Comunicaciones', color: 'rgb(97, 149, 131)', anillo: 'exterior_2', icono: 'bi-truck' },
    { nombre: 'Trabajo y Promoción de Empleo', color: 'rgb(142, 68, 173)', anillo: 'exterior_2', icono: 'bi-briefcase' },
    { nombre: 'Energía y Minas', color: 'rgb(211, 84, 0)', anillo: 'exterior_2', icono: 'bi-lightning' },
    { nombre: 'Relaciones exteriores', color: 'rgb(35, 158, 215)', anillo: 'exterior', icono: 'bi-globe2' },
    { nombre: 'Economía y Finanzas', color: 'rgb(243, 120, 24)', anillo: 'exterior', icono: 'bi-graph-up-arrow' },
    { nombre: 'Agrario y de Riesgo', color: 'rgb(146, 24, 47)', anillo: 'exterior', icono: 'bi-tree' },
    { nombre: 'Vivienda, construcción y saneamiento', color: 'rgb(108, 117, 125)', anillo: 'exterior', icono: 'bi-house' },
    { nombre: 'Salud', color: 'rgb(247, 182, 26)', anillo: 'interior', icono: 'bi-heart-pulse' },
    { nombre: 'Defensa', color: 'rgb(214, 53, 68)', anillo: 'interior', icono: 'bi-shield-shaded' },
    { nombre: 'Justicia', color: 'rgb(63, 93, 122)', anillo: 'interior', icono: 'bi-duffle' },
    { nombre: 'Interior', color: 'rgb(12, 86, 165)', anillo: 'interior', icono: 'bi-shield-lock' },
    { nombre: 'Educación', color: 'rgb(127, 179, 69)', anillo: 'interior', icono: 'bi-book' },
    { nombre: 'Ambiental', color: 'rgb(24, 175, 158)', anillo: 'interior', icono: 'bi-leaf' },
    { nombre: 'Producción', color: 'rgb(235, 154, 161)', anillo: 'interior', icono: 'bi-gear' },
    { nombre: 'Cultura', color: 'rgb(15, 148, 165)', anillo: 'interior', icono: 'bi-palette' },
  ];

  readonly sectoresDisponibles: string[] = [
    'Producción', 'Comercio Exterior y Turismo', 'Desarrollo e Inclusión Social',
    'Competitividad Institucional', 'Educación', 'Ambiental',
    'Mujer y poblaciones vulnerables', 'Cultura', 'Salud',
    'Agrario y de Riesgo', 'Relaciones exteriores', 'Defensa',
    'Economía y Finanzas', 'Energía y Minas', 'Justicia',
    'Transporte y Comunicaciones', 'Interior', 'Trabajo y Promoción de Empleo',
    'Vivienda, construcción y saneamiento'
  ];

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

  constructor() {
    for (const sector of this.configSectores) {
      this.colorPorSector.set(sector.nombre, sector.color);
      const grupo = this.sectoresPorAnillo.get(sector.anillo);
      if (grupo) {
        grupo.push(sector);
      } else {
        this.sectoresPorAnillo.set(sector.anillo, [sector]);
      }
    }
  }

  ngOnChanges(): void {
    this.construirTablas();
  }

  ngAfterViewInit(): void {
    this.generarGraficoSVG();
  }

  private generarGraficoSVG(): void {
    if (!this.svgContainer) return;
    this.svgRoot = d3.select(this.svgContainer.nativeElement);
    this.svgRoot.selectAll('svg').remove();

    // viewBox más ajustado: así el gráfico se escala ~1:1 y se ve grande
    const width = 1180;
    const height = 640;
    const innerRadius = 80;
    const radius = 235;          // Tamaño del donut (antes 190)
    const labelX = radius * 1.22; // Distancia hacia las columnas de texto
    const minGap = 26;           // Separación vertical entre textos

    const svg = this.svgRoot
      .append('svg')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet')
      .style('width', '100%')
      .style('height', 'auto');

    const defs = svg.append('defs');

    const filtro = defs.append('filter')
      .attr('id', 'sombra-sector')
      .attr('x', '-40%').attr('y', '-40%')
      .attr('width', '180%').attr('height', '180%');
    filtro.append('feDropShadow')
      .attr('dx', 0).attr('dy', 2)
      .attr('stdDeviation', 2.5)
      .attr('flood-color', '#000')
      .attr('flood-opacity', 0.15);

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const pie = d3.pie<SectorConfig>().value(1).sort(null).padAngle(0.015);
    const pieData = pie(this.configSectores);

    const arcGenerator = d3.arc<d3.PieArcDatum<SectorConfig>>()
      .innerRadius(innerRadius)
      .outerRadius(radius)
      .cornerRadius(2);

    const hoverArc = d3.arc<d3.PieArcDatum<SectorConfig>>()
      .innerRadius(innerRadius)
      .outerRadius(radius + 10)
      .cornerRadius(2);

    const edgeArc = d3.arc<d3.PieArcDatum<SectorConfig>>()
      .innerRadius(radius + 4)
      .outerRadius(radius + 4);

    const outerArc = d3.arc<d3.PieArcDatum<SectorConfig>>()
      .innerRadius(radius * 1.1)
      .outerRadius(radius * 1.1);

    interface LabelPos {
      d: d3.PieArcDatum<SectorConfig>;
      side: 1 | -1;
      y: number;
    }

    const labels: LabelPos[] = pieData.map(d => {
      const mid = (d.startAngle + d.endAngle) / 2;
      const side: 1 | -1 = mid < Math.PI ? 1 : -1;
      return { d, side, y: outerArc.centroid(d)[1] };
    });

    const minY = -height / 2 + 30;
    const maxY = height / 2 - 30;

    for (const side of [1, -1] as const) {
      const col = labels
        .filter(l => l.side === side)
        .sort((a, b) => a.y - b.y);

      for (let i = 0; i < col.length; i++) {
        const previo = i > 0 ? col[i - 1].y + minGap : minY;
        col[i].y = Math.max(col[i].y, previo);
      }

      if (col.length && col[col.length - 1].y > maxY) {
        col[col.length - 1].y = maxY;
      }

      for (let i = col.length - 2; i >= 0; i--) {
        col[i].y = Math.min(col[i].y, col[i + 1].y - minGap);
      }
    }

    const labelOf = new Map<string, LabelPos>(
      labels.map(l => [l.d.data.nombre, l])
    );

    // 1. Porciones
    const slices = g.selectAll<SVGPathElement, d3.PieArcDatum<SectorConfig>>('path.sector-slice')
      .data(pieData)
      .enter()
      .append('path')
      .attr('class', 'sector-slice')
      .attr('d', arcGenerator)
      .attr('fill', d => d.data.color)
      .attr('tabindex', 0)
      .attr('role', 'button')
      .attr('aria-label', d => d.data.nombre)
      .style('filter', 'url(#sombra-sector)')
      .style('cursor', 'pointer')
      .style('outline', 'none')
      .on('mouseenter', function (_event, d) {
        slices.style('opacity', s => (s === d ? 1 : 0.45));
        d3.select(this).transition().duration(150).attr('d', hoverArc(d) as string);
      })
      .on('mouseleave', function (_event, d) {
        slices.style('opacity', 1);
        d3.select(this).transition().duration(150).attr('d', arcGenerator(d) as string);
      })
      .on('click', (_event, d) => this.toggleSector(d.data.nombre));

    slices.append('title').text(d => d.data.nombre);

    // 2. Íconos mejorados (mayor tamaño y mejor contraste con drop-shadow)
    g.selectAll('foreignObject.sector-icon')
      .data(pieData)
      .enter()
      .append('foreignObject')
      .attr('class', 'sector-icon')
      .attr('width', 40)
      .attr('height', 40)
      .attr('x', d => arcGenerator.centroid(d)[0] - 20)
      .attr('y', d => arcGenerator.centroid(d)[1] - 20)
      .style('pointer-events', 'none')
      .append('xhtml:div')
      .style('width', '100%')
      .style('height', '100%')
      .style('display', 'flex')
      .style('align-items', 'center')
      .style('justify-content', 'center')
      .html(d => `<i class="bi ${d.data.icono}" style="color: #ffffff; font-size: 24px; filter: drop-shadow(0px 1px 2px rgba(0,0,0,0.7));"></i>`);

    // 3. Líneas guía
    g.selectAll('polyline.sector-line')
      .data(pieData)
      .enter()
      .append('polyline')
      .attr('class', 'sector-line')
      .attr('points', d => {
        const l = labelOf.get(d.data.nombre)!;
        const p1 = edgeArc.centroid(d);
        const p2 = outerArc.centroid(d);
        const p3: [number, number] = [l.side * (labelX - 12), l.y];
        const p4: [number, number] = [l.side * labelX, l.y];
        return [p1, p2, p3, p4].map(p => p.join(',')).join(' ');
      })
      .style('fill', 'none')
      .style('stroke', d => d.data.color)
      .style('stroke-width', 2)
      .style('opacity', 0.85)
      .style('pointer-events', 'none');

    // 4. Puntos extremos
    g.selectAll('circle.sector-dot')
      .data(pieData)
      .enter()
      .append('circle')
      .attr('class', 'sector-dot')
      .attr('r', 4.5)
      .attr('fill', d => d.data.color)
      .attr('cx', d => labelOf.get(d.data.nombre)!.side * labelX)
      .attr('cy', d => labelOf.get(d.data.nombre)!.y)
      .style('pointer-events', 'none');

    // 5. Textos de los sectores
    g.selectAll('text.sector-label')
      .data(pieData)
      .enter()
      .append('text')
      .attr('class', 'sector-label')
      .attr('dy', '.35em')
      .attr('x', d => labelOf.get(d.data.nombre)!.side * (labelX + 10))
      .attr('y', d => labelOf.get(d.data.nombre)!.y)
      .style('text-anchor', d => (labelOf.get(d.data.nombre)!.side === 1 ? 'start' : 'end'))
      .style('font-size', '16px')
      .style('font-weight', '600')
      .style('fill', '#1e293b')
      .style('cursor', 'pointer')
      .text(d => d.data.nombre)
      .on('click', (_event, d) => this.toggleSector(d.data.nombre));

    // 6. Centro blanco
    g.append('circle')
      .attr('r', innerRadius)
      .attr('fill', '#ffffff')
      .attr('stroke', '#cbd5e1')
      .attr('stroke-width', 2)
      .style('pointer-events', 'none');
  }

  private dibujarAnillo(
    g: d3.Selection<SVGGElement, unknown, null, undefined>,
    datos: SectorConfig[],
    anillo: { id: string; inner: number; outer: number; modoTexto: 'curvo' | 'radial' }
  ): void {
    const radios = { inner: anillo.inner, outer: anillo.outer };
    const modoTexto = anillo.modoTexto;
    const pie = d3.pie<SectorConfig>().value(1).sort(null).padAngle(0.012);
    const pieData = pie(datos);

    const arcGenerator = d3.arc<d3.PieArcDatum<SectorConfig>>()
      .innerRadius(radios.inner)
      .outerRadius(radios.outer)
      .cornerRadius(3);

    g.selectAll(`path.sector-${anillo.id}`)
      .data(pieData)
      .enter()
      .append('path')
      .attr('class', `sector-path sector-${anillo.id}`)
      .attr('id', d => `d3-sector-${d.data.nombre.replace(/\s+/g, '-')}`)
      .attr('d', d => arcGenerator(d))
      .attr('fill', d => d.data.color)
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 1.5)
      .style('filter', 'url(#sombra-sector)')
      .style('cursor', 'pointer')
      .style('transition', 'opacity 0.25s ease, transform 0.25s ease')
      .style('transform-origin', 'center')
      .on('click', (event, d) => this.toggleSector(d.data.nombre))
      .append('title')
      .text(d => d.data.nombre);

    if (modoTexto === 'curvo') {
      const midRadio = (radios.inner + radios.outer) / 2;

      g.selectAll(`path.label-path-${anillo.id}`)
        .data(pieData)
        .enter()
        .append('path')
        .attr('class', `label-path-${anillo.id}`)
        .attr('id', (_d, i) => `label-arc-${anillo.id}-${i}`)
        .attr('d', d => {
          const midAngle = (d.startAngle + d.endAngle) / 2;
          const esMitadInferior = midAngle > Math.PI / 2 && midAngle < (3 * Math.PI) / 2;

          let startA = d.startAngle;
          let endA = d.endAngle;

          if (esMitadInferior) {
            startA = d.endAngle;
            endA = d.startAngle;
          }

          const arcPath = d3.arc<d3.PieArcDatum<SectorConfig>>()
            .innerRadius(midRadio)
            .outerRadius(midRadio)
            .startAngle(startA)
            .endAngle(endA);

          return arcPath(d);
        });

      g.selectAll(`text.label-curvo-${anillo.id}`)
        .data(pieData)
        .enter()
        .append('text')
        .attr('class', `label-curvo-${anillo.id}`)
        .attr('dy', d => {
          const midAngle = (d.startAngle + d.endAngle) / 2;
          const esMitadInferior = midAngle > Math.PI / 2 && midAngle < (3 * Math.PI) / 2;
          return esMitadInferior ? -2 : 3;
        })
        .style('font-size', '9.5px')
        .style('font-weight', 600)
        .style('fill', '#ffffff')
        .style('pointer-events', 'none')
        .append('textPath')
        .attr('href', (_d, i) => `#label-arc-${anillo.id}-${i}`)
        .attr('startOffset', '25%')
        .style('text-anchor', 'middle')
        .text(d => d.data.nombre);

    } else {
      const midRadio = (radios.inner + radios.outer) / 2;
      g.selectAll(`text.label-radial-${anillo.id}`)
        .data(pieData)
        .enter()
        .append('text')
        .attr('class', `label-radial-${anillo.id}`)
        .attr('transform', d => {
          const midAngle = (d.startAngle + d.endAngle) / 2;
          const anguloGrados = (midAngle * 180) / Math.PI;
          const x = midRadio * Math.sin(midAngle);
          const y = -midRadio * Math.cos(midAngle);

          let rotacion = anguloGrados - 90;
          if (midAngle > Math.PI) rotacion += 180;

          return `translate(${x}, ${y}) rotate(${rotacion})`;
        })
        .attr('text-anchor', 'middle')
        .attr('dy', 3)
        .style('font-size', '9px')
        .style('font-weight', 600)
        .style('fill', '#ffffff')
        .style('pointer-events', 'none')
        .text(d => d.data.nombre);
    }
  }

  /* ------------------- RADAR DE PROSPECTIVA ------------------- */

  readonly radarCenter = 250;
  readonly radarR1 = 85;
  readonly radarR2 = 155;
  readonly radarR3 = 225;

  private puntoRadar(anguloGrados: number, radio: number): string {
    const rad = (anguloGrados * Math.PI) / 180;
    const x = this.radarCenter + radio * Math.cos(rad);
    const y = this.radarCenter + radio * Math.sin(rad);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }

  get radarQuadrantPaths() {
    const r = this.radarR3 - 10;
    return {
      territorio: `M ${this.puntoRadar(180, r)} A ${r},${r} 0 0,1 ${this.puntoRadar(270, r)}`,
      personas: `M ${this.puntoRadar(270, r)} A ${r},${r} 0 0,1 ${this.puntoRadar(0, r)}`,
      democracia: `M ${this.puntoRadar(0, r)} A ${r},${r} 0 0,1 ${this.puntoRadar(90, r)}`,
      innovacion: `M ${this.puntoRadar(90, r)} A ${r},${r} 0 0,1 ${this.puntoRadar(180, r)}`
    };
  }

  get radarNodes(): RadarNodo[] {
    const articulos = this.articulosCompletos;
    if (articulos.length === 0) return [];

    const angulosCuadrante: { [key: string]: number } = {
      'Territorio sostenible': -Math.PI * 0.75,
      'Desarrollo de las personas': -Math.PI * 0.25,
      'Democracia y paz': Math.PI * 0.25,
      'Competitividad e innovación': Math.PI * 0.75
    };

    const radioPorHorizonte = (h: ArticuloRadar['horizonte']): number => {
      switch (h) {
        case 'PRESENTE-2030': return this.radarR1 * 0.55;
        case '2030-2040': return (this.radarR1 + this.radarR2) / 2;
        case '2040-2050': return (this.radarR2 + this.radarR3) / 2;
        default: return (this.radarR1 + this.radarR2) / 2;
      }
    };

    const porCuadrante = new Map<string, { art: ArticuloRadar; numero: number }[]>();

    articulos.forEach((art, index) => {
      const cuadrante = art.cuadrante ?? 'Sin cuadrante';
      const lista = porCuadrante.get(cuadrante) ?? [];
      lista.push({ art, numero: index + 1 });
      porCuadrante.set(cuadrante, lista);
    });

    const angleStepCuadrante = Math.PI / 2;
    const margenSeguridad = angleStepCuadrante * 0.12;
    const nodos: RadarNodo[] = [];

    // Categoría de cada artículo (para elegir su ícono y su color)
    const categoriaPorArticulo = new Map<ArticuloRadar, string>();
    this.categoriasElementos.forEach((nombre) => {
      this.getArticulos(nombre).forEach((a) => categoriaPorArticulo.set(a, nombre));
    });

    porCuadrante.forEach((lista, cuadrante) => {
      const baseAngle = angulosCuadrante[cuadrante] ?? 0;
      const n = lista.length;
      const maxHalfSpread = Math.max(0, angleStepCuadrante / 2 - margenSeguridad);
      const halfSpread = n > 1 ? Math.min(maxHalfSpread, 0.12 + n * 0.07) : 0;
      const step = n > 1 ? (halfSpread * 2) / (n - 1) : 0;

      lista.forEach((item, index) => {
        const angleOffset = n > 1 ? -halfSpread + step * index : 0;
        const finalAngle = baseAngle + angleOffset;
        const radialJitter = n > 1 ? ((index % 3) - 1) * 9 : 0;
        const finalRadius = radioPorHorizonte(item.art.horizonte) + radialJitter;

        nodos.push({
          articulo: item.art,
          numero: item.numero,
          icono: this.iconoCategoria(categoriaPorArticulo.get(item.art) ?? ''),
          categoria: categoriaPorArticulo.get(item.art) ?? '',
          color: this.getCategoryColorData(categoriaPorArticulo.get(item.art) ?? '').border,
          x: this.radarCenter + finalRadius * Math.cos(finalAngle),
          y: this.radarCenter + finalRadius * Math.sin(finalAngle)
        });
      });
    });

    return nodos;
  }

  /** Devuelve el id del símbolo SVG según la categoría (Tendencia, Riesgo, Oportunidad, Señal débil, Carta salvaje). */
  iconoCategoria(categoria: string): string {
    const c = (categoria || '').toLowerCase();
    if (c.includes('riesg')) return '#ico-riesgo';
    if (c.includes('oportun')) return '#ico-oportunidad';
    if (c.includes('señal') || c.includes('senal')) return '#ico-senal-debil';
    if (c.includes('carta') || c.includes('salvaje')) return '#ico-carta-salvaje';
    if (c.includes('escenario')) return '#ico-escenario';
    return '#ico-tendencia';
  }

  hoverArticulo(articulo: ArticuloRadar | null): void {
    this.articuloDestacado = articulo;
  }

  public actualizarEstilosGrafico(): void {
    if (!this.svgRoot) return;

    this.svgRoot.selectAll('path.sector-path')
      .style('opacity', (d: any) => {
        if (!this.sectorSeleccionado) return 1;
        return d.data.nombre === this.sectorSeleccionado ? 1 : 0.30;
      });
  }

  get articulosCompletos(): ArticuloRadar[] {
    return this.categoriasElementos.flatMap((cat) => this.getArticulos(cat));
  }

  /**
   * Artículos del radar agrupados por categoría (una columna por categoría).
   * La numeración es correlativa entre columnas y coincide con la de `radarNodes`,
   * ya que `articulosCompletos` concatena las categorías en el mismo orden.
   */
  get radarColumnas(): RadarColumna[] {
    let offset = 0;

    return this.categoriesBase.map((cat) => {
      const nombre = String(cat);
      const articulos = this.getArticulos(nombre);
      const colores = this.getCategoryColorData(nombre);

      const items: RadarItem[] = articulos.map((articulo, i) => ({
        articulo,
        numero: offset + i + 1,
        icono: this.iconoCategoria(nombre),
      }));
      offset += articulos.length;

      return {
        nombre,
        border: colores.border,
        badgeBg: colores.badgeBg,
        badgeText: colores.badgeText,
        items,
      };
    });
  }

  getArticulos(categoriaNombre: string): ArticuloRadar[] {
    const sectorNombre = this.sectorSeleccionado || this.selectedSector;
    if (!sectorNombre) return [];

    const sector = this.sectorData || SECTOR_DATABASE[sectorNombre];
    if (!sector) return [];

    const catDetalle = (sector as any)?.[categoriaNombre] as CategoriaSectorDetalle;
    return catDetalle?.articulos ?? [];
  }

  toggleSector(sector: string): void {
    if (this.sectorSeleccionado === sector) {
      this.cerrarPanel();
      return;
    }

    this.sectorSeleccionado = sector;
    this.vistaActual = 'cono';
    this.construirTablas();
    this.actualizarEstilosGrafico();
  }

  cerrarPanel(): void {
    this.sectorSeleccionado = null;
    this.construirTablas();
    this.actualizarEstilosGrafico();
  }

  obtenerColorSector(sector: string): string {
    return this.colorPorSector.get(sector) ?? '#6c757d';
  }

  trackBySector(_index: number, sector: string): string {
    return sector;
  }

  trackByArticulo(_index: number, articulo: ArticuloRadar): string {
    return articulo.titulo;
  }

  trackByColumna(_index: number, col: RadarColumna): string {
    return col.nombre;
  }

  trackByItemRadar(_index: number, item: RadarItem): string {
    return item.articulo.titulo;
  }

  private getConoColumnKey(horizonte?: string): 'presente' | 'medio' | 'lejano' {
    switch (horizonte) {
      case 'PRESENTE-2030':
        return 'presente';
      case '2040-2050':
        return 'lejano';
      case '2030-2040':
      default:
        return 'medio';
    }
  }

  get conoColumns(): ConoColumn[] {
    const rawData: { key: 'presente' | 'medio' | 'lejano'; label: string; items: ConoItem[] }[] = [
      { key: 'presente', label: 'Presente – 2030', items: [] },
      { key: 'medio', label: '2030 – 2040', items: [] },
      { key: 'lejano', label: '2040 – 2050', items: [] },
    ];

    this.categoriasElementos.forEach((cat) => {
      const colorData = this.getCategoryColorData(cat);
      this.getArticulos(cat).forEach((art) => {
        const columna = rawData.find((c) => c.key === this.getConoColumnKey(art.horizonte));
        if (!columna) return;

        const shortLabel = art.tituloCorto
          ? art.tituloCorto
          : art.titulo.length > 38
            ? art.titulo.substring(0, 38) + '…'
            : art.titulo;

        columna.items.push({
          titulo: art.titulo,
          shortLabel,
          categoria: cat,
          horizonte: art.horizonte ?? 'PRESENTE-2030',
          url: art.url,
          icono: this.iconoCategoria(cat),
          color: colorData.border,
        });
      });
    });

    return rawData.map((col) => {
      const groupsMap = new Map<string, ConoItem[]>();
      col.items.forEach((item) => {
        if (!groupsMap.has(item.categoria)) {
          groupsMap.set(item.categoria, []);
        }
        groupsMap.get(item.categoria)!.push(item);
      });

      const groups: ConoGroup[] = Array.from(groupsMap.entries()).map(([categoria, items]) => ({
        categoria,
        items,
      }));

      return { key: col.key, label: col.label, totalCount: col.items.length, groups };
    });
  }

  get conoEscenarios(): ArticuloRadar[] {
    return this.getArticulos('Escenarios');
  }

  get tieneEscenariosCono(): boolean {
    return this.conoEscenarios.length > 0;
  }

  getCategoryColorData(categoriaName: string) {
    if (categoriaName.includes('Tendencias')) {
      return { border: '#3B82F6', badgeBg: '#E0F2FE', badgeText: '#0369A1' };
    }
    if (categoriaName.includes('Riesgos')) {
      return { border: '#EF4444', badgeBg: '#FEE2E2', badgeText: '#B91C1C' };
    }
    if (categoriaName.includes('Oportunidades')) {
      return { border: '#10B981', badgeBg: '#D1FAE5', badgeText: '#047857' };
    }
    if (categoriaName.includes('Señal')) {
      return { border: '#0E7490', badgeBg: '#CFFAFE', badgeText: '#155E75' };
    }
    if (categoriaName.includes('Carta')) {
      return { border: '#7A5AA6', badgeBg: '#EDE7F6', badgeText: '#5B3F86' };
    }
    if (categoriaName.includes('Escenarios')) {
      return { border: '#8B5CF6', badgeBg: '#EDE9FE', badgeText: '#6D28D9' };
    }
    return { border: '#0d6efd', badgeBg: '#e7f1ff', badgeText: '#0d6efd' };
  }

  getTematicaColorData(tematicaName?: string | null) {
    const nombre = tematicaName ?? '';
    if (nombre.includes('Social')) {
      return { border: 'rgb(255, 85, 51)', badgeBg: 'rgb(255, 234, 230)', badgeText: 'rgb(255, 85, 51)' };
    }
    if (nombre.includes('Ambiental')) {
      return { border: 'rgb(5, 145, 65)', badgeBg: 'rgb(221, 255, 236)', badgeText: 'rgb(5, 145, 65)' };
    }
    if (nombre.includes('Económica')) {
      return { border: 'rgb(239, 197, 20)', badgeBg: 'rgb(255, 247, 216)', badgeText: 'rgb(239, 197, 20)' };
    }
    if (nombre.includes('Tecnológica')) {
      return { border: 'rgb(78, 135, 198)', badgeBg: 'rgb(225, 239, 255)', badgeText: 'rgb(78, 135, 198)' };
    }
    if (nombre.includes('Política')) {
      return { border: 'rgb(154, 32, 226)', badgeBg: 'rgb(243, 223, 255)', badgeText: 'rgb(154, 32, 226)' };
    }
    if (nombre.includes('Actitud, valores y ética')) {
      return { border: 'rgb(131, 183, 221)', badgeBg: 'rgb(227, 243, 255)', badgeText: 'rgb(131, 183, 221)' };
    }
    return { border: '#bababa', badgeBg: 'rgb(232, 242, 255)', badgeText: '#bababa' };
  }

  getCount(categoria: string): number {
    return this.getArticulos(categoria).length;
  }

  /** URL del reporte descargable de una categoría (si el dato la trae). */
  getDescargaUrl(categoria: string): string | null {
    const sectorNombre = this.sectorSeleccionado || this.selectedSector;
    if (!sectorNombre) return null;
    const sector = this.sectorData || SECTOR_DATABASE[sectorNombre];
    return (sector as any)?.[categoria]?.descargaUrl || null;
  }

  /** Abre o descarga el reporte completo en PDF del sector seleccionado. */
  descargarListaCompletaPDF(): void {
    const url = this.getDescargaUrl('Escenarios') || this.getDescargaUrl('Tendencias');
    if (url) {
      window.open(url, '_blank');
    }
  }
  // ===================================================
  //  TABLAS: Elementos futuros / Escenarios
  // ===================================================

  etiquetaHorizonte(horizonte?: string): string {
    switch (horizonte) {
      case 'PRESENTE-2030':
        return 'Presente – 2030';
      case '2030-2040':
        return '2030 – 2040';
      case '2040-2050':
        return '2040 – 2050';
      default:
        return horizonte || '—';
    }
  }

  private unicos(valores: (string | undefined)[]): string[] {
    return Array.from(new Set(valores.filter((v): v is string => !!v))).sort((a, b) =>
      a.localeCompare(b, 'es')
    );
  }

  /** Horizontes presentes en las filas, en orden cronológico. */
  private periodosDe(filas: FilaArticulo[]): string[] {
    const presentes = new Set(filas.map((f) => f.horizonte as string).filter(Boolean));
    const ordenados = this.horizontes.filter((h) => presentes.has(h));
    const otros = Array.from(presentes).filter((h) => !this.horizontes.includes(h)).sort();
    return [...ordenados, ...otros];
  }

  private coincideTexto(art: FilaArticulo, texto: string): boolean {
    const q = texto.toLowerCase().trim();
    if (!q) return true;
    return (
      (art.titulo || '').toLowerCase().includes(q) ||
      (art.resumen || '').toLowerCase().includes(q) ||
      (art.tema || '').toLowerCase().includes(q) ||
      (art.tematica || '').toLowerCase().includes(q)
    );
  }

  /** Reconstruye las filas base de ambas tablas y reinicia sus filtros. */
  private construirTablas(): void {
    this.filasElementos = this.categoriasElementos.flatMap((cat) =>
      this.getArticulos(cat).map((a) => ({ ...a, categoria: cat } as FilaArticulo))
    );
    this.filasEscenarios = this.getArticulos('Escenarios').map(
      (a) => ({ ...a, categoria: 'Escenarios' } as FilaArticulo)
    );

    this.tiposElementos = this.categoriasElementos.filter((c) => this.getCount(c) > 0);
    this.temasElementos = this.unicos(this.filasElementos.map((f) => f.tematica));
    this.periodosElementos = this.periodosDe(this.filasElementos);
    this.temasEscenarios = this.unicos(this.filasEscenarios.map((f) => f.tematica));
    this.periodosEscenarios = this.periodosDe(this.filasEscenarios);

    this.filtroElementos = { texto: '', tipo: '', tema: '', periodo: '' };
    this.filtroEscenarios = { texto: '', tema: '', periodo: '' };
    this.aplicarFiltroElementos();
    this.aplicarFiltroEscenarios();
  }

  aplicarFiltroElementos(): void {
    const f = this.filtroElementos;
    this.filasElementosFiltradas = this.filasElementos.filter(
      (a) =>
        this.coincideTexto(a, f.texto) &&
        (!f.tipo || a.categoria === f.tipo) &&
        (!f.tema || a.tematica === f.tema) &&
        (!f.periodo || a.horizonte === f.periodo)
    );
    this.primeraFilaElementos = 0;
  }

  aplicarFiltroEscenarios(): void {
    const f = this.filtroEscenarios;
    this.filasEscenariosFiltradas = this.filasEscenarios.filter(
      (a) =>
        this.coincideTexto(a, f.texto) &&
        (!f.tema || a.tematica === f.tema) &&
        (!f.periodo || a.horizonte === f.periodo)
    );
    this.primeraFilaEscenarios = 0;
  }

  get hayFiltroElementos(): boolean {
    const f = this.filtroElementos;
    return !!(f.texto || f.tipo || f.tema || f.periodo);
  }

  get hayFiltroEscenarios(): boolean {
    const f = this.filtroEscenarios;
    return !!(f.texto || f.tema || f.periodo);
  }

  limpiarFiltroElementos(): void {
    this.filtroElementos = { texto: '', tipo: '', tema: '', periodo: '' };
    this.aplicarFiltroElementos();
  }

  limpiarFiltroEscenarios(): void {
    this.filtroEscenarios = { texto: '', tema: '', periodo: '' };
    this.aplicarFiltroEscenarios();
  }
}