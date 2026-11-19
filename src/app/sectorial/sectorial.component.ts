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
  icono: string;
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

@Component({
  selector: 'app-explorador-sectorial',
  templateUrl: './sectorial.component.html',
  styleUrls: ['./sectorial.component.css']
})
export class SectorialComponent implements AfterViewInit, OnChanges {

  @Input() selectedSector: string | null = null;
  @Input() sectorData: ContenidoSector | null = null;

  readonly categoriesBase: (keyof ContenidoSector)[] = ['Tendencias', 'Riesgos', 'Oportunidades'];
  readonly categoriasElementos: string[] = ['Tendencias', 'Riesgos', 'Oportunidades', 'Señal débil', 'Carta salvaje'];

  filtroElementos: FiltroElementos = { texto: '', tipo: '', tema: '', periodo: '' };
  filasElementos: FilaArticulo[] = [];
  filasElementosFiltradas: FilaArticulo[] = [];

  temasElementos: string[] = [];
  periodosElementos: string[] = [];
  primeraFilaElementos = 0;

  // --- Collapse state for category blocks ---
  categoriaColapsada: Record<string, boolean> = {};
  tematicaActiva: string | null = null;

  toggleCategoria(cat: string): void {
    this.categoriaColapsada[cat] = !this.categoriaColapsada[cat];
  }

  toggleTematica(tema: string): void {
    this.tematicaActiva = this.tematicaActiva === tema ? null : tema;
  }

  @ViewChild('svgContainer', { static: false })
  private svgContainer!: ElementRef<HTMLDivElement>;

  sectorSeleccionado: string | null = null;
  articuloDestacado: ArticuloRadar | null = null;
  private svgRoot: SvgRootSelection | null = null;

  private readonly colorPorSector = new Map<string, string>();

  private readonly configSectores: SectorConfig[] = [
    { nombre: 'Comercio Exterior y Turismo', color: '#572365', anillo: 'exterior_2', icono: 'bi-airplane' },
    { nombre: 'Desarrollo e Inclusión Social', color: '#D43790', anillo: 'exterior_2', icono: 'bi-people' },
    { nombre: 'Competitividad Institucional', color: '#008081', anillo: 'exterior_2', icono: 'bi-building' },
    { nombre: 'Mujer y poblaciones vulnerables', color: '#70259B', anillo: 'exterior_2', icono: 'bi-person-hearts' },
    { nombre: 'Transporte y Comunicaciones', color: '#FFDD00', anillo: 'exterior_2', icono: 'bi-truck' },
    { nombre: 'Trabajo y Promoción de Empleo', color: '#E61E29', anillo: 'exterior_2', icono: 'bi-briefcase' },
    { nombre: 'Energía y Minas', color: '#E94F36', anillo: 'exterior_2', icono: 'bi-lightning' },
    { nombre: 'Relaciones exteriores', color: '#FEE0BC', anillo: 'exterior', icono: 'bi-globe2' },
    { nombre: 'Economía y Finanzas', color: '#C6C6C6', anillo: 'exterior', icono: 'bi-graph-up-arrow' },
    { nombre: 'Agrario y de Riesgo', color: '#83BB26', anillo: 'exterior', icono: 'bi-tree' },
    { nombre: 'Vivienda, construcción y saneamiento', color: '#0B4D90', anillo: 'exterior', icono: 'bi-house' },
    { nombre: 'Salud', color: '#009AFE', anillo: 'interior', icono: 'bi-heart-pulse' },
    { nombre: 'Defensa', color: '#8CA3A0', anillo: 'interior', icono: 'bi-shield-shaded' },
    { nombre: 'Justicia', color: '#000000', anillo: 'interior', icono: 'bi-duffle' },
    { nombre: 'Interior', color: '#9E4523', anillo: 'interior', icono: 'bi-shield-lock' },
    { nombre: 'Educación', color: '#810016', anillo: 'interior', icono: 'bi-book' },
    { nombre: 'Ambiental', color: '#00774F', anillo: 'interior', icono: 'bi-leaf' },
    { nombre: 'Producción', color: '#7F8000', anillo: 'interior', icono: 'bi-gear' },
    { nombre: 'Cultura', color: '#572365', anillo: 'interior', icono: 'bi-palette' },
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

    // 6. Centro: círculo blanco + logo Perú 2050
    g.append('circle')
      .attr('r', innerRadius)
      .attr('fill', '#ffffff')
      .attr('stroke', '#cbd5e1')
      .attr('stroke-width', 2)
      .style('pointer-events', 'none');

    // Logo centrado sobre el círculo interior
    const logoSize = innerRadius * 1.55; // ocupa ~155% del radio para que llene bien el espacio
    g.append('image')
      .attr('href', 'assets/img/peru2050-logo.png')
      .attr('x', -logoSize / 2)
      .attr('y', -logoSize / 2)
      .attr('width', logoSize)
      .attr('height', logoSize)
      .attr('clip-path', `circle(${innerRadius - 4}px at center)`)
      .style('pointer-events', 'none');
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

  getArticulosPorCategoria(categoria: string): FilaArticulo[] {
    return this.filasElementos.filter(f => f.categoria === categoria);
  }

  toggleSector(sector: string): void {
    if (this.sectorSeleccionado === sector) {
      this.cerrarPanel();
      return;
    }

    this.sectorSeleccionado = sector;
    this.construirTablas();
  }

  cerrarPanel(): void {
    this.sectorSeleccionado = null;
    this.construirTablas();
    this.tematicaActiva = null;
  }

  obtenerColorSector(sector: string): string {
    return this.colorPorSector.get(sector) ?? '#6c757d';
  }

  // trackBySector(_index: number, sector: string): string {
  //   return sector;
  // }

  getCategoryColorData(categoriaName: string) {
    if (categoriaName.includes('Tendencias')) {
      return { border: '#0369A1', badgeBg: '#0369A1', badgeText: '#ffffff' };
    }
    if (categoriaName.includes('Riesgos')) {
      return { border: '#B91C1C', badgeBg: '#B91C1C', badgeText: '#ffffff' };
    }
    if (categoriaName.includes('Oportunidades')) {
      return { border: '#047857', badgeBg: '#047857', badgeText: '#ffffff' };
    }
    if (categoriaName.includes('Señal')) {
      return { border: '#155E75', badgeBg: '#155E75', badgeText: '#ffffff' };
    }
    if (categoriaName.includes('Carta')) {
      return { border: '#5B3F86', badgeBg: '#5B3F86', badgeText: '#ffffff' };
    }
    if (categoriaName.includes('Escenarios')) {
      return { border: '#6D28D9', badgeBg: '#6D28D9', badgeText: '#ffffff' };
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


  descargarLista(): void {
    if (!this.sectorSeleccionado) return;

    const ventanaImpresion = window.open('', '_blank');
    if (!ventanaImpresion) {
      alert('Por favor, permita las ventanas emergentes para descargar el PDF.');
      return;
    }

    const filasBase = this.hayFiltroElementos
      ? this.filasElementosFiltradas
      : this.filasElementos;

    const seccionesHtml = this.categoriasElementos
      .map((cat) => {
        const itemsCat = filasBase.filter((item) => item.categoria === cat);
        const color = this.getCategoryColorData(cat).border;
        const tituloBloque = `${itemsCat.length} ${cat.toLowerCase()}`;

        const itemsHtml =
          itemsCat.length > 0
            ? itemsCat
              .map((art) => {
                const tituloMostrar = art.titulo || art.tituloCorto || '';
                const resumenMostrar = art.resumen || 'Sin resumen disponible.';
                const urlMostrar = art.url || 'Sin resumen disponible.';
                const tematicaMostrar = art.tematica || 'Sin Temática disponible.';
                
                return `
                  <article class="ficha-item">
                    <div class="ficha-titulo">${tituloMostrar}</div>
                    <p class="ficha-resumen">${resumenMostrar}</p>
                    <p class="ficha-temática">${tematicaMostrar}</p>
                    <a class="ficha-url" href="${urlMostrar}" target="_blank">Ingresar a la ficha</a>
                  </article>
                `;
              })
              .join('')
            : `<p class="empty">Sin elementos registrados para este sector.</p>`;

        return `
        <section class="bloque">
          <div class="bloque-titulo" style="color: ${color};">${cat}</div>
          <div class="bloque-header" style="background-color: ${color};">${tituloBloque}</div>
          <div class="bloque-body" style="border-color: ${color};">${itemsHtml}</div>
        </section>
      `;
      })
      .join('');

    const tituloSector = this.sectorSeleccionado;
    const totalVisible = filasBase.length;

    const contenidoHtml = `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Reporte del sector - ${tituloSector}</title>
        <style>
          body { font-family: Roboto, Arial, sans-serif; color: #1e293b; margin: 28px; }
          h2 { color: #2A68A2; margin: 0 0 6px; font-size: 22px; }
          .meta { color: #64748b; font-size: 12px; margin-bottom: 20px; }
          .bloque { margin-bottom: 18px; break-inside: avoid; }
          .bloque-titulo { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.4px; margin-bottom: 4px; }
          .bloque-header { color: #ffffff; font-size: 13px; font-weight: 600; padding: 6px 12px; border-radius: 6px 6px 0 0; }
          .bloque-body { display: flex; flex-direction: column; gap: 10px; padding: 12px; border: 1.5px solid; border-top: none; border-radius: 0 0 8px 8px; background: #ffffff; }
          .ficha-item { padding: 8px 12px; border-radius: 4px; background: #f8fafc; break-inside: avoid; }
          .ficha-titulo { font-size: 12.5px; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
          .ficha-resumen { font-size: 11.5px; color: #475569; margin: 0; line-height: 1.45; }
          .ficha-temática { font-size: 11.5px; color: #475569; margin: 0; line-height: 1.45; }
          .ficha-url { font-size: 11.5px; color: #006aff; margin: 0; line-height: 1.45; }
          .empty { color: #64748b; font-size: 11.5px; font-style: italic; margin: 0; }
          @media print { body { margin: 14px; } }
        </style>
      </head>
      <body>
        <h2>Elementos del sector - ${tituloSector}</h2>
        <div class="meta">
          Fecha de generación: ${new Date().toLocaleDateString('es-PE')} | Total de elementos: ${totalVisible}
        </div>
        ${seccionesHtml}
        <script>
          window.onload = function() { setTimeout(() => window.print(), 300); };
        </script>
      </body>
    </html>
  `;

    ventanaImpresion.document.write(contenidoHtml);
    ventanaImpresion.document.close();
  }

  private unicos(valores: (string | undefined)[]): string[] {
    return Array.from(new Set(valores.filter((v): v is string => !!v))).sort((a, b) =>
      a.localeCompare(b, 'es')
    );
  }

  private construirTablas(): void {
    this.categoriaColapsada = {};
    this.tematicaActiva = null;
    this.filasElementos = this.categoriasElementos.flatMap((cat) =>
      this.getArticulos(cat).map((a) => ({ ...a, categoria: cat } as FilaArticulo))
    );

    this.temasElementos = this.unicos(this.filasElementos.map((f) => f.tematica));
    this.filtroElementos = { texto: '', tipo: '', tema: '', periodo: '' };
  }

  get hayFiltroElementos(): boolean {
    const f = this.filtroElementos;
    return !!(f.texto || f.tipo || f.tema || f.periodo);
  }
}