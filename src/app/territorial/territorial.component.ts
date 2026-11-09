import { Component } from '@angular/core';
import { MAP_REGIONS, MapRegionPath } from './map-regions.data';
import { ARTICLES_DATABASE, Articulo, RegionArticulos } from './articles-database.data';
import html2pdf from 'html2pdf.js';

// ─────────────────────────────────────────────
// Tipos e interfaces públicas
// ─────────────────────────────────────────────

export type CategoriaTipo =
  | 'Tendencias'
  | 'Riesgos'
  | 'Oportunidades'
  | 'Señal débil'
  | 'Carta salvaje'
  | 'Escenarios';

export type VistaVisualizacion = 'radar' | 'cono';

export interface ArticuloConRegion extends Articulo {
  regionOriginaria: string;
}

export interface RadarNode {
  number: number;
  icono: string;
  x: number;
  y: number;
  label: string;
  shortLabel: string;
  color: string;
  periodo: string;
  categoria: string;
  url: string;
}

export interface ConoItem {
  titulo: string;
  shortLabel: string;
  categoria: string;
  tema?: string;
  periodo: string;
  url: string;
  icono: string;
  color: string;
}

export interface ConoGroup {
  categoria: string;
  items: ConoItem[];
}

export interface RadarColumna {
  nombre: string;
  border: string;
  badgeBg: string;
  badgeText: string;
  icono: string;
  items: RadarNode[];
}

export interface ConoColumn {
  key: 'presente' | 'medio' | 'lejano';
  label: string;
  totalCount: number;
  groups: ConoGroup[];
}

export interface FilaArticulo extends Articulo {
  categoria: string;
}

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

// ─────────────────────────────────────────────
// Constantes de configuración por categoría
// (unifica getCategoryColorData + iconoCategoria)
// ─────────────────────────────────────────────

interface CategoriaConfig {
  border: string;
  badgeBg: string;
  badgeText: string;
  icono: string;
}

const CATEGORIA_CONFIG: { match: string; config: CategoriaConfig }[] = [
  {
    match: 'tendencia',
    config: { border: '#3B82F6', badgeBg: '#E0F2FE', badgeText: '#0369A1', icono: '#ico-tendencia' },
  },
  {
    match: 'riesgo',
    config: { border: '#EF4444', badgeBg: '#FEE2E2', badgeText: '#B91C1C', icono: '#ico-riesgo' },
  },
  {
    match: 'oportun',
    config: { border: '#10B981', badgeBg: '#D1FAE5', badgeText: '#047857', icono: '#ico-oportunidad' },
  },
  {
    match: 'señal',
    config: { border: '#0E7490', badgeBg: '#CFFAFE', badgeText: '#155E75', icono: '#ico-senal-debil' },
  },
  {
    match: 'carta',
    config: { border: '#7A5AA6', badgeBg: '#EDE7F6', badgeText: '#5B3F86', icono: '#ico-carta-salvaje' },
  },
  {
    match: 'escenario',
    config: { border: '#8B5CF6', badgeBg: '#EDE9FE', badgeText: '#6D28D9', icono: '#ico-escenario' },
  },
];

const CATEGORIA_CONFIG_DEFAULT: CategoriaConfig = {
  border: '#0d6efd',
  badgeBg: '#e7f1ff',
  badgeText: '#0d6efd',
  icono: '#ico-tendencia',
};

// ─────────────────────────────────────────────
// Configuración de periodos (unifica radius + conoKey)
// ─────────────────────────────────────────────

interface PeriodoConfig {
  radius: number;
  conoKey: 'presente' | 'medio' | 'lejano';
}

const PERIODO_CONFIG: Record<string, PeriodoConfig> = {
  '2023-2030': { radius: 70,  conoKey: 'presente' },
  '2030':      { radius: 70,  conoKey: 'presente' },
  '2030-2040': { radius: 140, conoKey: 'medio' },
  '2040-2050': { radius: 205, conoKey: 'lejano' },
};

const PERIODO_DEFAULT: PeriodoConfig = { radius: 140, conoKey: 'medio' };
const PERIODO_FALLBACK = '2030-2040';

// Hero slides: datos estáticos → fuera de la clase
const HERO_SLIDES = [
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
] as const;

// ─────────────────────────────────────────────
// Componente
// ─────────────────────────────────────────────

@Component({
  selector: 'app-territorial',
  templateUrl: './territorial.component.html',
  styleUrls: ['./territorial.component.css'],
})
export class TerritorialComponent {

  // ── Estado de UI ──────────────────────────
  activeTab: string = 'teoria';
  vistaVisualizacion: VistaVisualizacion = 'cono';
  hoveredNode: number | null = null;

  // ── Mapa ──────────────────────────────────
  readonly mapViewBox = '0 0 220 320';
  readonly regions: MapRegionPath[] = MAP_REGIONS;
  readonly heroSlides = HERO_SLIDES;

  // ── Región seleccionada ───────────────────
  selectedRegion: string | null = null;
  categories: string[] = [];
  regionData: RegionArticulos | null = null;

  // ── Búsqueda global (sin región) ──────────
  textoBusqueda = '';
  temaSeleccionadoSelect = '';

  // ── Tablas ────────────────────────────────
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

  private readonly articlesDatabase = ARTICLES_DATABASE;

  // ─────────────────────────────────────────
  // Helpers de configuración unificados
  // ─────────────────────────────────────────

  /** Devuelve colores e ícono para una categoría. Reemplaza getCategoryColorData + iconoCategoria. */
  private getCategoriaConfig(categoria: string): CategoriaConfig {
    const c = (categoria || '').toLowerCase();
    return (
      CATEGORIA_CONFIG.find((entry) => c.includes(entry.match))?.config ??
      CATEGORIA_CONFIG_DEFAULT
    );
  }

  getCategoryColorData(categoria: string): Pick<CategoriaConfig, 'border' | 'badgeBg' | 'badgeText'> {
    return this.getCategoriaConfig(categoria);
  }

  iconoCategoria(categoria: string): string {
    return this.getCategoriaConfig(categoria).icono;
  }

  private getPeriodoConfig(periodo?: string): PeriodoConfig {
    return PERIODO_CONFIG[periodo ?? ''] ?? PERIODO_DEFAULT;
  }

  /** shortLabel reutilizable con límite de caracteres configurable */
  private getShortLabel(art: Articulo, maxLength: number): string {
    if (art.tituloCorto) return art.tituloCorto;
    return art.titulo.length > maxLength
      ? art.titulo.substring(0, maxLength) + '…'
      : art.titulo;
  }

  // ─────────────────────────────────────────
  // Getters de categorías (evita repetir el filtro)
  // ─────────────────────────────────────────

  get categoriasElementos(): string[] {
    return this.categories.filter((c) => !c.includes('Escenarios'));
  }

  get categoriasEscenarios(): string[] {
    return this.categories.filter((c) => c.includes('Escenarios'));
  }

  // ─────────────────────────────────────────
  // Getters de estado
  // ─────────────────────────────────────────

  get hasSelection(): boolean {
    return this.selectedRegion !== null;
  }

  get hasData(): boolean {
    return this.selectedRegion ? this.hasDataForRegion(this.selectedRegion) : false;
  }

  // ─────────────────────────────────────────
  // Acceso a datos de región
  // ─────────────────────────────────────────

  getArticulos(categoria: CategoriaTipo | string): Articulo[] {
    if (!this.regionData) return [];
    const catData = (this.regionData as any)?.[categoria];
    return catData?.articulos ?? [];
  }

  getDescargaUrl(categoria: CategoriaTipo | string): string | null {
    if (!this.regionData) return null;
    const catData = (this.regionData as any)?.[categoria];
    return catData?.descargaUrl || null;
  }

  getCount(categoria: CategoriaTipo | string): number {
    return this.getArticulos(categoria).length;
  }

  hasDataForRegion(regionName: string): boolean {
    const data = this.articlesDatabase[regionName] as any;
    if (!data) return false;
    return Object.keys(data).some((key) => {
      const cat = data[key];
      return typeof cat === 'object' && cat !== null && Array.isArray(cat.articulos) && cat.articulos.length > 0;
    });
  }

  // ─────────────────────────────────────────
  // Colores temáticos
  // ─────────────────────────────────────────

  getTematicaColorData(tematicaName?: string | null) {
    const nombre = tematicaName ?? '';
    if (nombre.includes('Social'))
      return { border: 'rgb(255, 85, 51)', badgeBg: 'rgb(255, 234, 230)', badgeText: 'rgb(255, 85, 51)' };
    if (nombre.includes('Ambiental'))
      return { border: 'rgb(5, 145, 65)', badgeBg: 'rgb(221, 255, 236)', badgeText: 'rgb(5, 145, 65)' };
    if (nombre.includes('Económica'))
      return { border: 'rgb(239, 197, 20)', badgeBg: 'rgb(255, 247, 216)', badgeText: 'rgb(239, 197, 20)' };
    if (nombre.includes('Tecnológica'))
      return { border: 'rgb(78, 135, 198)', badgeBg: 'rgb(225, 239, 255)', badgeText: 'rgb(78, 135, 198)' };
    if (nombre.includes('Política'))
      return { border: 'rgb(154, 32, 226)', badgeBg: 'rgb(243, 223, 255)', badgeText: 'rgb(154, 32, 226)' };
    if (nombre.includes('Actitud, valores y ética'))
      return { border: 'rgb(131, 183, 221)', badgeBg: 'rgb(227, 243, 255)', badgeText: 'rgb(131, 183, 221)' };
    return { border: '#bababa', badgeBg: 'rgb(232, 242, 255)', badgeText: '#bababa' };
  }

  // ─────────────────────────────────────────
  // Vista Radar
  // ─────────────────────────────────────────

  get radarColumnas(): RadarColumna[] {
    const nodos = this.radarNodes;
    return this.categories.map((cat) => {
      const colores = this.getCategoriaConfig(cat);
      return {
        nombre: cat,
        border: colores.border,
        badgeBg: colores.badgeBg,
        badgeText: colores.badgeText,
        icono: colores.icono,
        items: nodos.filter((n) => n.categoria === cat),
      };
    });
  }

  get radarNodes(): RadarNode[] {
    if (!this.selectedRegion || !this.regionData) return [];

    const nodes: RadarNode[] = [];
    const center = 250;
    let numeroGlobal = 0;

    const getCategoryBaseAngle = (catName: string): number => {
      const c = catName.toLowerCase();
      if (c.includes('tendencia')) return -Math.PI * 0.70;
      if (c.includes('riesgo'))    return -Math.PI * 0.30;
      if (c.includes('oportun'))   return  Math.PI * 0.20;
      if (c.includes('señal') || c.includes('senal')) return Math.PI * 0.42;
      if (c.includes('carta'))     return  Math.PI * 0.75;
      return -Math.PI * 0.5;
    };

    this.categoriasElementos.forEach((cat) => {
      const articulos = this.getArticulos(cat);
      const baseAngle = getCategoryBaseAngle(cat);
      const color = this.getCategoriaConfig(cat).border;

      // Agrupar por periodo
      const periodGroups = new Map<string, Articulo[]>();
      articulos.forEach((art) => {
        const p = art.periodo || PERIODO_FALLBACK;
        if (!periodGroups.has(p)) periodGroups.set(p, []);
        periodGroups.get(p)!.push(art);
      });

      periodGroups.forEach((artList, periodoKey) => {
        const baseRadius = this.getPeriodoConfig(periodoKey).radius;
        const countInPeriod = artList.length;
        const angularSpread = Math.min(1.1, Math.max(0.4, 0.18 * countInPeriod));
        const jitterValues = [0, 18, -18, 30, -30];

        artList.forEach((art, index) => {
          numeroGlobal++;

          const angleOffset = countInPeriod > 1
            ? -angularSpread / 2 + (angularSpread / (countInPeriod - 1)) * index
            : 0;
          const finalAngle = baseAngle + angleOffset;
          const radialJitter = countInPeriod > 1 ? (jitterValues[index % jitterValues.length] ?? 0) : 0;
          const radius = baseRadius + radialJitter;

          nodes.push({
            number: numeroGlobal,
            icono: this.getCategoriaConfig(cat).icono,
            x: Math.round(center + radius * Math.cos(finalAngle)),
            y: Math.round(center + radius * Math.sin(finalAngle)),
            label: art.titulo,
            shortLabel: this.getShortLabel(art, 80),
            color,
            periodo: art.periodo || PERIODO_FALLBACK,
            categoria: cat,
            url: art.url,
          });
        });
      });
    });

    return nodes;
  }

  setVistaVisualizacion(vista: VistaVisualizacion): void {
    this.vistaVisualizacion = vista;
  }

  // ─────────────────────────────────────────
  // Vista Cono
  // ─────────────────────────────────────────

  get conoColumns(): ConoColumn[] {
    const rawData: { key: 'presente' | 'medio' | 'lejano'; label: string; items: ConoItem[] }[] = [
      { key: 'presente', label: 'Presente – 2030', items: [] },
      { key: 'medio',    label: '2030 – 2040',     items: [] },
      { key: 'lejano',   label: '2040 – 2050',     items: [] },
    ];

    if (!this.selectedRegion || !this.regionData) {
      return rawData.map((col) => ({ key: col.key, label: col.label, totalCount: 0, groups: [] }));
    }

    this.categoriasElementos.forEach((cat) => {
      const colorData = this.getCategoriaConfig(cat);
      this.getArticulos(cat).forEach((art) => {
        const conoKey = this.getPeriodoConfig(art.periodo).conoKey;
        const columna = rawData.find((c) => c.key === conoKey);
        if (!columna) return;

        columna.items.push({
          titulo: art.titulo,
          shortLabel: this.getShortLabel(art, 38),
          categoria: cat,
          tema: art.tema,
          periodo: art.periodo || PERIODO_FALLBACK,
          url: art.url,
          icono: colorData.icono,
          color: colorData.border,
        });
      });
    });

    return rawData.map((col) => {
      const groupsMap = new Map<string, ConoItem[]>();
      col.items.forEach((item) => {
        if (!groupsMap.has(item.categoria)) groupsMap.set(item.categoria, []);
        groupsMap.get(item.categoria)!.push(item);
      });

      return {
        key: col.key,
        label: col.label,
        totalCount: col.items.length,
        groups: Array.from(groupsMap.entries()).map(([categoria, items]) => ({ categoria, items })),
      };
    });
  }

  get conoEscenarios(): Articulo[] {
    return this.getArticulos('Escenarios');
  }

  get tieneEscenariosCono(): boolean {
    return this.conoEscenarios.length > 0;
  }

  // ─────────────────────────────────────────
  // Selección de región
  // ─────────────────────────────────────────

  selectRegion(regionName: string): void {
    this.selectedRegion = regionName;
    this.textoBusqueda = '';
    this.temaSeleccionadoSelect = '';
    this.vistaVisualizacion = 'cono';

    this.regionData = this.articlesDatabase[regionName] || null;
    this.categories = this.regionData
      ? Object.keys(this.regionData).filter((key) => key !== 'url' && key !== 'urlRegion')
      : [];

    this.construirTablas();
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
    this.regionData = null;
    this.categories = [];
    this.textoBusqueda = '';
    this.temaSeleccionadoSelect = '';
    this.construirTablas();
  }

  // ─────────────────────────────────────────
  // Búsqueda global (sin región)
  // ─────────────────────────────────────────

  get articulosPorTemaGlobal(): ArticuloConRegion[] {
    const query = this.textoBusqueda.toLowerCase().trim();
    const tema = this.temaSeleccionadoSelect;

    if (!query && !tema) return [];

    const resultados: ArticuloConRegion[] = [];

    Object.keys(this.articlesDatabase).forEach((region) => {
      const dataRegion = this.articlesDatabase[region] as any;
      if (!dataRegion) return;

      Object.keys(dataRegion)
        .filter((key) => key !== 'urlRegion')
        .forEach((cat) => {
          const categoriaObj = dataRegion[cat];
          if (!categoriaObj || !Array.isArray(categoriaObj.articulos)) return;

          categoriaObj.articulos.forEach((articulo: Articulo) => {
            const matchQuery =
              !query ||
              articulo.titulo.toLowerCase().includes(query) ||
              articulo.resumen.toLowerCase().includes(query) ||
              region.toLowerCase().includes(query);
            const matchTema = !tema || articulo.tema === tema;

            if (matchQuery && matchTema) {
              resultados.push({ ...articulo, regionOriginaria: region });
            }
          });
        });
    });

    return resultados;
  }

  // ─────────────────────────────────────────
  // Tablas (filtros)
  // ─────────────────────────────────────────

  private periodoDe(art: Articulo): string {
    return art.periodo || PERIODO_FALLBACK;
  }

  private unicos(valores: (string | undefined)[]): string[] {
    return Array.from(new Set(valores.filter((v): v is string => !!v))).sort((a, b) =>
      a.localeCompare(b, 'es')
    );
  }

  private coincideTexto(art: Articulo, texto: string): boolean {
    const q = texto.toLowerCase().trim();
    if (!q) return true;
    return (
      (art.titulo   || '').toLowerCase().includes(q) ||
      (art.resumen  || '').toLowerCase().includes(q) ||
      (art.tema     || '').toLowerCase().includes(q) ||
      (art.tematica || '').toLowerCase().includes(q)
    );
  }

  private construirTablas(): void {
    const elemCats = this.categoriasElementos;

    this.filasElementos  = elemCats.flatMap((cat) =>
      this.getArticulos(cat).map((a) => ({ ...a, categoria: cat }))
    );
    this.filasEscenarios = this.categoriasEscenarios.flatMap((cat) =>
      this.getArticulos(cat).map((a) => ({ ...a, categoria: cat }))
    );

    this.tiposElementos    = elemCats.filter((c) => this.getCount(c) > 0);
    this.temasElementos    = this.unicos(this.filasElementos.map((f) => f.tematica));
    this.periodosElementos = this.unicos(this.filasElementos.map((f) => this.periodoDe(f)));
    this.temasEscenarios   = this.unicos(this.filasEscenarios.map((f) => f.tematica));
    this.periodosEscenarios = this.unicos(this.filasEscenarios.map((f) => this.periodoDe(f)));

    this.filtroElementos  = { texto: '', tipo: '', tema: '', periodo: '' };
    this.filtroEscenarios = { texto: '', tema: '', periodo: '' };
    this.aplicarFiltroElementos();
    this.aplicarFiltroEscenarios();
  }

  aplicarFiltroElementos(): void {
    const f = this.filtroElementos;
    this.filasElementosFiltradas = this.filasElementos.filter(
      (a) =>
        this.coincideTexto(a, f.texto) &&
        (!f.tipo   || a.categoria   === f.tipo)   &&
        (!f.tema   || a.tematica    === f.tema)   &&
        (!f.periodo || this.periodoDe(a) === f.periodo)
    );
    this.primeraFilaElementos = 0;
  }

  aplicarFiltroEscenarios(): void {
    const f = this.filtroEscenarios;
    this.filasEscenariosFiltradas = this.filasEscenarios.filter(
      (a) =>
        this.coincideTexto(a, f.texto) &&
        (!f.tema    || a.tematica    === f.tema)   &&
        (!f.periodo || this.periodoDe(a) === f.periodo)
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

  // ─────────────────────────────────────────
  // Exportar PDF
  // ─────────────────────────────────────────

  descargarListaCompletaPDF(): void {
    if (!this.selectedRegion || !this.regionData) return;

    const reporteContenedor = document.createElement('div');
    reporteContenedor.style.cssText =
      'padding:30px;font-family:"Helvetica Neue",Arial,sans-serif;background-color:#ffffff;';

    let contenidoHtml = `
      <div style="border-bottom:2px solid #0d6efd;padding-bottom:15px;margin-bottom:25px;">
        <h1 style="color:#0c4a6e;font-size:22px;margin:0;font-weight:bold;">
          Reporte: ${this.selectedRegion}
        </h1>
        <p style="color:#6c757d;font-size:13px;margin-top:5px;margin-bottom:0;">
          Fichas explicativas e información territorial consolidada.
        </p>
      </div>
    `;

    this.categories.forEach((categoria) => {
      const articulos = this.getArticulos(categoria);
      if (!articulos.length) return;

      const { border, badgeBg, badgeText } = this.getCategoriaConfig(categoria);

      contenidoHtml += `
        <div style="margin-bottom:15px;">
          <h3 style="color:${border};font-size:16px;margin-bottom:12px;border-bottom:1px solid #e2e8f0;padding-bottom:4px;">
            ${categoria}
          </h3>
      `;

      articulos.forEach((articulo) => {
        contenidoHtml += `
          <div style="background-color:#f8fafc;border:1px solid ${border};border-radius:8px;padding:16px;
                      margin-bottom:12px;page-break-inside:avoid;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
            <span style="background-color:${badgeBg};color:${badgeText};padding:3px 10px;border-radius:12px;
                         font-size:11px;font-weight:bold;display:inline-block;margin-bottom:8px;">
              ${articulo.tema || categoria} (${articulo.periodo || PERIODO_FALLBACK})
            </span>
            <h4 style="color:#0f172a;font-size:14px;margin:0 0 6px 0;font-weight:bold;">${articulo.titulo}</h4>
            <p style="color:#475569;font-size:12px;margin:0 0 8px 0;line-height:1.5;">${articulo.resumen}</p>
            <p style="color:#0e0f11;font-size:12px;margin:0;line-height:1.5;">
              Enlace a la ficha:
              <a href="${articulo.url}" target="_blank" style="color:#0d6efd;text-decoration:underline;">
                ${articulo.url}
              </a>
            </p>
          </div>
        `;
      });

      contenidoHtml += `</div>`;
    });

    reporteContenedor.innerHTML = contenidoHtml;

    html2pdf()
      .set({
        margin: 10,
        filename: `Reporte_${this.selectedRegion.replace(/\s+/g, '_')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      })
      .from(reporteContenedor)
      .save();
  }
}