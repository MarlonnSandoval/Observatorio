import { Component, ElementRef, AfterViewInit, ViewChild, Input } from '@angular/core';
import * as d3 from 'd3';
import { ArticuloRadar, SECTOR_DATABASE, ContenidoSector, CategoriaSectorDetalle } from './sector-articulos';

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
}

export interface ConoItem {
  titulo: string;
  shortLabel: string;
  categoriaNombre: string;
  horizonte: string;
  url: string;
  icon: string;
  color: string;
}

export interface ConoColumn {
  key: 'PRESENTE-2030' | '2030-2040' | '2040-2050';
  label: string;
  items: ConoItem[];
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
export class SectorialComponent implements AfterViewInit {

  @Input() selectedSector: string | null = null;
  @Input() sectorData: ContenidoSector | null = null;

  // Estado de la vista activa: 'radar' o 'cono'
  vistaActual: 'radar' | 'cono' = 'radar';

  readonly categoriesBase: (keyof ContenidoSector)[] = ['Tendencias', 'Riesgos', 'Oportunidades'];

  @ViewChild('svgContainer', { static: false })
  private svgContainer!: ElementRef<HTMLDivElement>;

  sectorSeleccionado: string | null = null;
  articuloDestacado: ArticuloRadar | null = null;
  private svgRoot: SvgRootSelection | null = null;

  flagPeruUrl = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg';

  private readonly colorPorSector = new Map<string, string>();
  private readonly sectoresPorAnillo = new Map<string, SectorConfig[]>();

  private readonly configSectores: SectorConfig[] = [
    { nombre: 'Comercio Exterior y Turismo', color: 'rgb(44, 194, 177)', anillo: 'exterior_2' },
    { nombre: 'Desarrollo e Inclusión Social', color: 'rgb(101, 161, 169)', anillo: 'exterior_2' },
    { nombre: 'Competitividad Institucional', color: 'rgb(84, 203, 51)', anillo: 'exterior_2' },
    { nombre: 'Mujer y poblaciones vulnerables', color: 'rgb(193, 202, 51)', anillo: 'exterior_2' },
    { nombre: 'Transporte y Comunicaciones', color: 'rgb(97, 149, 131)', anillo: 'exterior_2' },
    { nombre: 'Trabajo y Promoción de Empleo', color: 'rgb(142, 68, 173)', anillo: 'exterior_2' },
    { nombre: 'Energía y Minas', color: 'rgb(211, 84, 0)', anillo: 'exterior_2' },
    { nombre: 'Relaciones exteriores', color: 'rgb(35, 158, 215)', anillo: 'exterior' },
    { nombre: 'Economía y Finanzas', color: 'rgb(243, 120, 24)', anillo: 'exterior' },
    { nombre: 'Agrario y de Riesgo', color: 'rgb(146, 24, 47)', anillo: 'exterior' },
    { nombre: 'Vivienda, construcción y saneamiento', color: 'rgb(108, 117, 125)', anillo: 'exterior' },
    { nombre: 'Salud', color: 'rgb(247, 182, 26)', anillo: 'interior' },
    { nombre: 'Defensa', color: 'rgb(214, 53, 68)', anillo: 'interior' },
    { nombre: 'Justicia', color: 'rgb(63, 93, 122)', anillo: 'interior' },
    { nombre: 'Interior', color: 'rgb(12, 86, 165)', anillo: 'interior' },
    { nombre: 'Educación', color: 'rgb(127, 179, 69)', anillo: 'interior' },
    { nombre: 'Ambiental', color: 'rgb(24, 175, 158)', anillo: 'interior' },
    { nombre: 'Producción', color: 'rgb(235, 154, 161)', anillo: 'interior' },
    { nombre: 'Cultura', color: 'rgb(15, 148, 165)', anillo: 'interior' },
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
      image: 'https://observatorio.ceplan.gob.pe/uploads/A3IXVw9IKvScqsYSMQl-o0zv.png',
      title: 'Mayor demanda de edificios y viviendas inteligentes',
      subtitle: 'Escenarios del Plan Estratégico de Desarrollo Nacional',
    },
    {
      image: 'https://observatorio.ceplan.gob.pe/uploads/tbiiZTH0aN88k81XDBQgKllY.png',
      title: 'Incremento de víctimas de acoso (bullying)',
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

  ngAfterViewInit(): void {
    this.generarGraficoSVG();
  }

  private generarGraficoSVG(): void {
    if (!this.svgContainer) return;
    this.svgRoot = d3.select(this.svgContainer.nativeElement);
    this.svgRoot.selectAll('svg').remove();

    const width = 410;
    const height = 410;

    const svg = this.svgRoot
      .append('svg')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    const defs = svg.append('defs');

    defs.append('clipPath')
      .attr('id', 'centro-bandera-clip')
      .append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', RADIO_CENTRO - 2);

    const filtro = defs.append('filter')
      .attr('id', 'sombra-sector')
      .attr('x', '-40%').attr('y', '-40%')
      .attr('width', '180%').attr('height', '180%');
    filtro.append('feDropShadow')
      .attr('dx', 0).attr('dy', 1.5)
      .attr('stdDeviation', 1.5)
      .attr('flood-color', '#000')
      .attr('flood-opacity', 0.18);

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    for (const anillo of DEFINICION_ANILLOS) {
      const datosAnillo = this.sectoresPorAnillo.get(anillo.id);
      if (!datosAnillo || datosAnillo.length === 0) continue;
      this.dibujarAnillo(g, datosAnillo, anillo);
    }

    g.append('circle')
      .attr('r', RADIO_CENTRO)
      .attr('fill', '#ffffff')
      .attr('stroke', '#cbd5e1')
      .attr('stroke-width', 2);

    g.append('image')
      .attr('href', this.flagPeruUrl)
      .attr('x', -RADIO_CENTRO)
      .attr('y', -RADIO_CENTRO)
      .attr('width', RADIO_CENTRO * 2)
      .attr('height', RADIO_CENTRO * 2)
      .attr('preserveAspectRatio', 'xMidYMid slice')
      .attr('clip-path', 'url(#centro-bandera-clip)');

    this.actualizarEstilosGrafico();
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

  readonly radarCenter = 190;
  readonly radarRadius = 160;
  readonly radarR1 = this.radarRadius * 0.35;
  readonly radarR2 = this.radarRadius * 0.70;
  readonly radarR3 = this.radarRadius * 1.00;

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

  get radarNodes(): { articulo: ArticuloRadar; numero: number; x: number; y: number }[] {
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
      const lista = porCuadrante.get(art.cuadrante) ?? [];
      lista.push({ art, numero: index + 1 });
      porCuadrante.set(art.cuadrante, lista);
    });

    const angleStepCuadrante = Math.PI / 2;
    const margenSeguridad = angleStepCuadrante * 0.12;
    const nodos: { articulo: ArticuloRadar; numero: number; x: number; y: number }[] = [];

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
          x: this.radarCenter + finalRadius * Math.cos(finalAngle),
          y: this.radarCenter + finalRadius * Math.sin(finalAngle)
        });
      });
    });

    return nodos;
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
    const sectorNombre = this.sectorSeleccionado || this.selectedSector;
    if (!sectorNombre) return [];

    const sector = this.sectorData || SECTOR_DATABASE[sectorNombre];
    if (!sector) return [];

    return [
      ...(sector["Tendencias"]?.articulos || []),
      ...(sector["Riesgos"]?.articulos || []),
      ...(sector["Oportunidades"]?.articulos || [])
    ];
  }

  get articulosCaracterizan(): ArticuloRadar[] {
    return this.articulosCompletos.filter(art => art.tipo === 'caracterizan');
  }

  get articulosImpactan(): ArticuloRadar[] {
    return this.articulosCompletos.filter(art => art.tipo === 'impactan');
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
    this.actualizarEstilosGrafico();
  }

  cerrarPanel(): void {
    this.sectorSeleccionado = null;
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

  getConoIcon(categoriaNombre: string): string {
    if (categoriaNombre.includes('Riesgos')) return 'bi bi-exclamation-triangle-fill text-danger';
    if (categoriaNombre.includes('Oportunidades')) return 'bi bi-send-fill text-success';
    if (categoriaNombre.includes('Tendencias')) return 'bi bi-arrow-right text-primary';
    return 'bi bi-activity text-secondary';
  }

  get conoColumns(): ConoColumn[] {
    const columnas: ConoColumn[] = [
      { key: 'PRESENTE-2030', label: 'PRESENTE – 2030', items: [] },
      { key: '2030-2040', label: '2030 – 2040', items: [] },
      { key: '2040-2050', label: '2040 – 2050', items: [] },
    ];

    const sectorNombre = this.sectorSeleccionado || this.selectedSector;
    if (!sectorNombre) return columnas;

    this.categoriesBase.forEach((catNombre) => {
      if (typeof catNombre !== 'string') return;

      const articulos = this.getArticulos(catNombre);

      articulos.forEach((art) => {
        const columna = columnas.find((c) => c.key === art.horizonte) || columnas[0];

        columna.items.push({
          titulo: art.titulo,
          shortLabel: art.tituloCorto,
          categoriaNombre: catNombre,
          horizonte: art.horizonte,
          url: art.url,
          icon: this.getConoIcon(catNombre),
          color: art.colorBadge || '#3b82f6',
        });
      });
    });

    return columnas;
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
    if (categoriaName.includes('Escenarios')) {
      return { border: '#8B5CF6', badgeBg: '#EDE9FE', badgeText: '#6D28D9' };
    }
    return { border: '#0d6efd', badgeBg: '#e7f1ff', badgeText: '#0d6efd' };
  }
}