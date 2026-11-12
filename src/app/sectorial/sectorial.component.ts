import { Component, ElementRef, AfterViewInit, ViewChild, Input, OnChanges } from '@angular/core';
import * as d3 from 'd3';
import { ArticuloRadar, SECTOR_DATABASE, ContenidoSector, CategoriaSectorDetalle } from './articles-database.data';
import html2pdf from 'html2pdf.js';

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
  icono: string;
}

export interface ConoItem {
  titulo: string;
  shortLabel: string;
  categoria: string;
  horizonte: string;
  url: string;
  icono: string;
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

export interface RadarNodo {
  articulo: ArticuloRadar;
  numero: number;
  icono: string;
  categoria: string;
  color: string;
  x: number;
  y: number;
}

@Component({
  selector: 'app-explorador-sectorial',
  templateUrl: './sectorial.component.html',
  styleUrls: ['./sectorial.component.css']
})
export class SectorialComponent implements AfterViewInit, OnChanges {

  @Input() selectedSector: string | null = null;
  @Input() sectorData: ContenidoSector | null = null;

  vistaActual: 'radar' | 'cono' = 'cono';

  readonly categoriesBase: (keyof ContenidoSector)[] = ['Tendencias', 'Riesgos', 'Oportunidades'];
  readonly categoriasElementos: string[] = ['Tendencias', 'Riesgos', 'Oportunidades', 'Señal débil', 'Carta salvaje'];
  private readonly horizontes: string[] = ['PRESENTE-2030', '2030-2040', '2040-2050'];

  filtroElementos: FiltroElementos = { texto: '', tipo: '', tema: '', periodo: '' };
  filasElementos: FilaArticulo[] = [];
  filasElementosFiltradas: FilaArticulo[] = [];

  temasElementos: string[] = [];
  periodosElementos: string[] = [];
  primeraFilaElementos = 0;

  @ViewChild('svgContainer', { static: false })
  private svgContainer!: ElementRef<HTMLDivElement>;

  sectorSeleccionado: string | null = null;
  articuloDestacado: ArticuloRadar | null = null;
  private svgRoot: SvgRootSelection | null = null;

  private readonly colorPorSector = new Map<string, string>();

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

    const width = 1180;
    const height = 640;
    const innerRadius = 80;
    const radius = 235;
    const labelX = radius * 1.22;
    const minGap = 26;

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

    // 2. Íconos
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
    return { border: '#bababa', badgeBg: 'rgb(232, 242, 255)', badgeText: '#000000' };
  }

  descargarListaCompletaPDF(): void {
    if (!this.sectorSeleccionado) return;

    const reporteContenedor = document.createElement('div');
    reporteContenedor.style.padding = '30px';
    reporteContenedor.style.fontFamily = "'Helvetica Neue', Arial, sans-serif";
    reporteContenedor.style.backgroundColor = '#ffffff';

    let contenidoHtml = `
    <div style="border-bottom: 2px solid #0d6efd; padding-bottom: 15px; margin-bottom: 25px;">
      <h1 style="color: #0c4a6e; font-size: 22px; margin: 0; font-weight: bold;">
        Reporte: ${this.sectorSeleccionado}
      </h1>
      <p style="color: #6c757d; font-size: 13px; margin-top: 5px; margin-bottom: 0;">
        Fichas explicativas e información territorial consolidada.
      </p>
    </div>
    `;

    const categoriasParaReporte = [...this.categoriasElementos, 'Escenarios'];

    categoriasParaReporte.forEach((categoria: string) => {
      const articulos = this.getArticulos(categoria);
      const colorData = this.getCategoryColorData(categoria);

      if (articulos.length > 0) {
        contenidoHtml += `
        <div style="margin-bottom: 15px;">
          <h3 style="color: ${colorData.border}; font-size: 16px; margin-bottom: 12px; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px;">
            ${categoria}
          </h3>
      `;

        articulos.forEach((articulo) => {
          contenidoHtml += `
          <div style="
            background-color: #f8fafc;
            border: 1px solid ${colorData.border};
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 12px;
            page-break-inside: avoid;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          ">
            <span style="
              background-color: ${colorData.badgeBg};
              color: ${colorData.badgeText};
              padding: 3px 10px;
              border-radius: 12px;
              font-size: 11px;
              font-weight: bold;
              display: inline-block;
              margin-bottom: 8px;
            ">
              ${articulo.tema || categoria} (${articulo.horizonte || '2030-2040'})
            </span>
            <h4 style="color: #0f172a; font-size: 14px; margin: 0 0 6px 0; font-weight: bold;">
              ${articulo.titulo}
            </h4>
            <p style="color: #475569; font-size: 12px; margin: 0 0 8px 0; line-height: 1.5;">
              ${articulo.resumen}
            </p>
            <p style="color: #0e0f11; font-size: 12px; margin: 0; line-height: 1.5;">
              Enlace a la ficha: 
              <a href="${articulo.url}" target="_blank" style="color: #0d6efd; text-decoration: underline;">
                ${articulo.url}
              </a>
            </p> 
          </div>
        `;
        });

        contenidoHtml += `</div>`;
      }
    });

    reporteContenedor.innerHTML = contenidoHtml;

    const opciones = {
      margin: 10,
      filename: `Reporte_${this.sectorSeleccionado.replace(/\s+/g, '_')}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, logging: false },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    } as const;

    html2pdf().set(opciones).from(reporteContenedor).save();
  }

  etiquetaHorizonte(horizonte?: string): string {
    switch (horizonte) {
      case 'PRESENTE-2030':
        return 'Presente – 2030';
      case '2030-2040':
        return '2030 – 2040';
      case '2040-2050':
        return '2040 – 2050';
      default:
        return horizonte || 'Sin Período';
    }
  }

  private unicos(valores: (string | undefined)[]): string[] {
    return Array.from(new Set(valores.filter((v): v is string => !!v))).sort((a, b) =>
      a.localeCompare(b, 'es')
    );
  }

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

  private construirTablas(): void {
    this.filasElementos = this.categoriasElementos.flatMap((cat) =>
      this.getArticulos(cat).map((a) => ({ ...a, categoria: cat } as FilaArticulo))
    );

    this.temasElementos = this.unicos(this.filasElementos.map((f) => f.tematica));
    this.periodosElementos = this.periodosDe(this.filasElementos);

    this.filtroElementos = { texto: '', tipo: '', tema: '', periodo: '' };
    this.aplicarFiltroElementos();
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

  get hayFiltroElementos(): boolean {
    const f = this.filtroElementos;
    return !!(f.texto || f.tipo || f.tema || f.periodo);
  }

  limpiarFiltroElementos(): void {
    this.filtroElementos = { texto: '', tipo: '', tema: '', periodo: '' };
    this.aplicarFiltroElementos();
  }
}