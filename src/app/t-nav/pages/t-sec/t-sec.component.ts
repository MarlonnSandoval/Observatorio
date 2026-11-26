import { Component, ElementRef, AfterViewInit, ViewChild, Input, OnChanges } from '@angular/core';
import * as d3 from 'd3';
import { ArticuloRadar, SECTOR_DATABASE, ContenidoSector, CategoriaTendenciasDetalle } from './articles-database.data';

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

export type SubtipoTendencia = 'caracterizan' | 'afectan';

export type FilaArticulo = ArticuloRadar & {
  categoria: string;
  subtipoTendencia: SubtipoTendencia;
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
  selector: 'app-t-sec',
  templateUrl: './t-sec.component.html',
  styleUrls: ['./t-sec.component.css']
})
export class TSecComponent implements AfterViewInit, OnChanges {
  @Input() selectedSector: string | null = null;
  @Input() sectorData: ContenidoSector | null = null;

  readonly categoriesBase: (keyof ContenidoSector)[] = ['Tendencias'];
  readonly categoriasElementos: string[] = ['Ambiental', 'Social', 'Económica', 'Tecnológica', 'Política', 'Actitud, valores y ética'];

  readonly subcategoriasTendencia: { key: SubtipoTendencia; label: string }[] = [
    { key: 'caracterizan', label: 'Tendencias que caracterizan al sector' },
    { key: 'afectan', label: 'Tendencias que afectan al sector' },
  ];

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

  // Agrupa los artículos de una categoría por temática (conservando el orden de aparición)
  getGruposPorTematica(categoria: string): { tematica: string; articulos: FilaArticulo[] }[] {
    const items = this.getArticulosPorCategoria(categoria);
    const mapa = new Map<string, FilaArticulo[]>();

    for (const art of items) {
      const clave = art.tematica?.trim() || 'General';
      if (!mapa.has(clave)) {
        mapa.set(clave, []);
      }
      mapa.get(clave)!.push(art);
    }

    return Array.from(mapa.entries()).map(([tematica, articulos]) => ({
      tematica,
      articulos,
    }));
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

    const logoSize = innerRadius * 1.55;
    g.append('image')
      .attr('href', 'assets/img/peru2050-logo.png')
      .attr('x', -logoSize / 2)
      .attr('y', -logoSize / 2)
      .attr('width', logoSize)
      .attr('height', logoSize)
      .attr('clip-path', `circle(${innerRadius - 4}px at center)`)
      .style('pointer-events', 'none');
  }

  get articulosCompletos(): FilaArticulo[] {
    return this.filasElementos;
  }

  getTendenciasDetalle(): CategoriaTendenciasDetalle | null {
    const sectorNombre = this.sectorSeleccionado || this.selectedSector;
    if (!sectorNombre) return null;

    const sector = this.sectorData || SECTOR_DATABASE[sectorNombre];
    if (!sector) return null;

    return sector['Tendencias'] ?? null;
  }

  getArticulosPorSubtipo(subtipo: SubtipoTendencia): FilaArticulo[] {
    return this.filasElementos.filter(f => f.subtipoTendencia === subtipo);
  }

  /**
   * Devuelve { caracterizan, afectan } de una temática concreta para el sector activo.
   * Se usa en el template con `*ngIf="getTendenciasPorTematica(tematica) as grupo"`.
   */
  getTendenciasPorTematica(tematica: string): { caracterizan: ArticuloRadar[]; afectan: ArticuloRadar[] } {
    const sectorNombre = this.sectorSeleccionado || this.selectedSector;
    const sector = (sectorNombre ? (this.sectorData || SECTOR_DATABASE[sectorNombre]) : null) as ContenidoSector | null;
    const detalle = sector?.[tematica as keyof ContenidoSector] as import('./articles-database.data').CategoriaTendenciasDetalle | undefined;
    return {
      caracterizan: detalle?.caracterizan ?? [],
      afectan: detalle?.afectan ?? [],
    };
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

  getCategoryColorData(categoriaName: string) {
    if (categoriaName.includes('Tendencias')) {
      return { border: '#0369A1', badgeBg: '#0369A1', badgeText: '#ffffff' };
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
    const sectorActivo = this.sectorSeleccionado || this.selectedSector;
    if (!sectorActivo) {
      alert('Por favor, seleccione un sector primero.');
      return;
    }

    const ventanaImpresion = window.open('', '_blank');
    if (!ventanaImpresion) {
      alert('Por favor, permita las ventanas emergentes para descargar el PDF.');
      return;
    }

    const colorSector = this.obtenerColorSector(sectorActivo);

    const escapeHtml = (valor: unknown): string =>
      String(valor ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

    // Recopilamos todos los elementos del sector usando la misma fuente de la vista
    interface FilaExportacion {
      nombre: string;
      descripcion: string;
      relación: 'Caracteriza al sector' | 'Afecta al sector';
      tipoClase: 'caracteriza' | 'impacta';
      tematica: string;
      url: string;
    }

    const filasExportar: FilaExportacion[] = [];

    for (const tematica of this.categoriasElementos) {
      const grupo = this.getTendenciasPorTematica(tematica);
      if (!grupo) continue;

      for (const art of grupo.caracterizan ?? []) {
        filasExportar.push({
          nombre: art.titulo || art.tituloCorto || 'Sin título',
          descripcion: art.resumen || 'Sin resumen disponible.',
          relación: 'Caracteriza al sector',
          tipoClase: 'caracteriza',
          tematica,
          url: (art.url || '').toString().trim(),
        });
      }

      for (const art of grupo.afectan ?? []) {
        filasExportar.push({
          nombre: art.titulo || art.tituloCorto || 'Sin título',
          descripcion: art.resumen || 'Sin resumen disponible.',
          relación: 'Afecta al sector',
          tipoClase: 'impacta',
          tematica,
          url: (art.url || '').toString().trim(),
        });
      }
    }

    const htmlFilas =
      filasExportar.length > 0
        ? filasExportar
          .map((item) => {
            const tematicaColor = this.getTematicaColorData(item.tematica);

            const tematicaHtml = `
              <span class="pill" style="background-color: ${tematicaColor.badgeBg}; color: ${tematicaColor.badgeText};">
                <span class="dot" style="background-color: ${tematicaColor.border};"></span>
                ${escapeHtml(item.tematica)}
              </span>
            `;

            const relacionHtml =
              item.tipoClase === 'caracteriza'
                ? `<span class="badge-rel badge-caracteriza">Caracteriza</span>`
                : `<span class="badge-rel badge-impacta">Afecta</span>`;

            const enlaceHtml = item.url
              ? `<a class="ficha-link" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">↗ Abrir ficha</a>`
              : `<span class="muted">No disponible</span>`;

            return `
              <tr>
                <td><div class="ficha-nombre">${escapeHtml(item.nombre)}</div></td>
                <td>${relacionHtml}</td>
                <td>${tematicaHtml}</td>
                <td>${escapeHtml(item.descripcion)}</td>
                <td>${enlaceHtml}</td>
              </tr>
            `;
          })
          .join('')
        : `
          <tr>
            <td colspan="5" class="empty">Sin elementos registrados para este sector.</td>
          </tr>
        `;

    const tituloSector = escapeHtml(sectorActivo);

    const contenidoHtml = `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>${tituloSector}</title>
        <style>
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            box-sizing: border-box;
          }
          body {
            font-family: Roboto, Arial, sans-serif;
            color: #1e293b;
            margin: 20px 28px;
          }
          h2 {
            color: ${escapeHtml(colorSector)};
            margin: 0 0 4px;
            font-size: 22px;
            page-break-after: avoid;
            break-after: avoid;
          }
          .meta {
            color: #64748b;
            font-size: 12px;
            margin-bottom: 14px;
            page-break-after: avoid;
            break-after: avoid;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 8px;
            font-size: 11px;
          }
          thead {
            display: table-header-group;
          }
          tr {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          th, td {
            border: 1px solid #cbd5e1;
            padding: 8px 10px;
            text-align: left;
            vertical-align: top;
            line-height: 1.4;
          }
          th {
            background-color: #f8fafc;
            color: #1e293b;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 10px;
            letter-spacing: 0.4px;
          }
          tbody tr:nth-child(even) {
            background-color: #f8fafc;
          }
          .ficha-nombre {
            font-weight: 700;
            color: #0f172a;
          }
          .pill {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            font-size: 10.5px;
            font-weight: 600;
            padding: 2px 8px;
            border-radius: 999px;
            white-space: nowrap;
          }
          .dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            display: inline-block;
            flex-shrink: 0;
          }
          .badge-rel {
            display: inline-block;
            font-size: 10.5px;
            font-weight: 700;
            padding: 2px 8px;
            border-radius: 6px;
            white-space: nowrap;
          }
          .badge-caracteriza {
            background-color: #e0f2fe;
            color: #0369a1;
            border: 1px solid #bae6fd;
          }
          .badge-impacta {
            background-color: #fef3c7;
            color: #b45309;
            border: 1px solid #fde68a;
          }
          .ficha-link {
            font-weight: 600;
            color: #0369a1;
            text-decoration: underline;
            white-space: nowrap;
          }
          .muted {
            color: #94a3b8;
            font-style: italic;
          }
          .empty {
            text-align: center;
            color: #64748b;
            font-style: italic;
            padding: 16px;
          }
          @page {
            margin: 12mm;
          }
          @media print {
            body {
              margin: 0;
            }
          }
        </style>
      </head>
      <body>
        <h2>${tituloSector}</h2>
        <div class="meta">
          Fecha de generación: ${new Date().toLocaleDateString('es-PE')} | Total de elementos: ${filasExportar.length}
        </div>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tendencia que</th>
              <th>Temática</th>
              <th>Sumilla</th>
              <th>Enlace</th>
            </tr>
          </thead>
          <tbody>
            ${htmlFilas}
          </tbody>
        </table>
        <script>
          window.onload = function() {
            setTimeout(() => {
              window.print();
            }, 300);
          };
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
    this.categoriasElementos.forEach((cat, index) => {
      this.categoriaColapsada[cat] = index !== 0;
    });

    this.tematicaActiva = null;
    this.filasElementos = this.categoriasElementos.flatMap((cat) =>
      this.getArticulosPorCategoria(cat).map((a) => ({ ...a, categoria: cat } as FilaArticulo))
    );

    this.temasElementos = this.unicos(this.filasElementos.map((f) => f.tematica));
    this.filtroElementos = { texto: '', tipo: '', tema: '', periodo: '' };
  }

  get hayFiltroElementos(): boolean {
    const f = this.filtroElementos;
    return !!(f.texto || f.tipo || f.tema || f.periodo);
  }
}