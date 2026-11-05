import { Component } from '@angular/core';
import { MAP_REGIONS, MapRegionPath } from './map-regions.data';
import { ARTICLES_DATABASE, Articulo, RegionArticulos } from './articles-database.data';
import html2pdf from 'html2pdf.js';

export type CategoriaTipo =
  | 'Tendencias'
  | 'Riesgos'
  | 'Oportunidades'
  | 'Señal débil'
  | 'Carta salvaje'
  | 'Escenarios';

interface HeroSlide {
  image: string;
  title: string;
  subtitle?: string;
}

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

export type VistaVisualizacion = 'radar' | 'cono';

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

@Component({
  selector: 'app-territorial',
  templateUrl: './territorial.component.html',
  styleUrls: ['./territorial.component.css'],
})
export class TerritorialComponent {
  activeTab: string = 'teoria';

  readonly mapViewBox = '0 0 220 320';
  readonly regions: MapRegionPath[] = MAP_REGIONS;
  private readonly articlesDatabase = ARTICLES_DATABASE;

  selectedRegion: string | null = null;
  categories: string[] = [];
  regionData: RegionArticulos | null = null;
  activeIndex: number | number[] | null = null;

  textoBusqueda = '';
  temaSeleccionadoSelect = '';

  // Tablas
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

  hoveredNode: number | null = null;
  vistaVisualizacion: VistaVisualizacion = 'cono';

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

  get radarColumnas(): RadarColumna[] {
    const nodos = this.radarNodes;
    return this.categories.map((cat) => {
      const colores = this.getCategoryColorData(cat);
      return {
        nombre: cat,
        border: colores.border,
        badgeBg: colores.badgeBg,
        badgeText: colores.badgeText,
        icono: this.iconoCategoria(cat),
        items: nodos.filter((n) => n.categoria === cat),
      };
    });
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

  /**
   * Genera los nodos del Radar distribuyéndolos según su categoría en subsectores angulares dedicados
   * con radios ampliados para un radar de mayor tamaño.
   */
  get radarNodes(): RadarNode[] {
    if (!this.selectedRegion || !this.regionData) return [];

    const nodes: RadarNode[] = [];
    const center = 250; // Centro del SVG (500x500)
    let numeroGlobal = 0;

    // 1. Radios base para los 3 horizontes temporales
    const getRadiusByPeriod = (periodo?: string): number => {
      switch (periodo) {
        case '2023-2030':
        case '2030':
          return 70;
        case '2030-2040':
          return 140;
        case '2040-2050':
          return 205;
        default:
          return 140;
      }
    };

    // 2. Ángulos centrales para cada cuadrante/categoría (en radianes)
    const getCategoryBaseAngle = (catName: string): number => {
      const c = catName.toLowerCase();
      if (c.includes('tendencia')) return -Math.PI * 0.70;  // Cuadrante Superior-Izquierdo (~ -126°)
      if (c.includes('riesgo')) return -Math.PI * 0.30;     // Cuadrante Superior-Derecho (~ -54°)
      if (c.includes('oportun')) return Math.PI * 0.20;     // Cuadrante Inferior-Derecho (~ 36°)
      if (c.includes('señal') || c.includes('senal')) return Math.PI * 0.42; // Cuadrante Inferior-Derecho (~ 75°)
      if (c.includes('carta')) return Math.PI * 0.75;       // Cuadrante Inferior-Izquierdo (~ 135°)
      return -Math.PI * 0.5;
    };

    const categoriasValidas = this.categories.filter((cat) => !cat.includes('Escenarios'));

    categoriasValidas.forEach((cat) => {
      const articulos = this.getArticulos(cat);
      const baseAngle = getCategoryBaseAngle(cat);
      const color = this.getCategoryColorData(cat).border;

      // Agrupamos por periodo para calcular la dispersión exacta dentro de cada anillo
      const periodGroups = new Map<string, Articulo[]>();
      articulos.forEach((art) => {
        const p = art.periodo || '2030-2040';
        if (!periodGroups.has(p)) periodGroups.set(p, []);
        periodGroups.get(p)!.push(art);
      });

      periodGroups.forEach((artList, periodoKey) => {
        const baseRadius = getRadiusByPeriod(periodoKey);
        const countInPeriod = artList.length;

        // Spread angular escalado: mínimo 0.4 rad, máximo 1.1 rad (~63°) para muchos nodos
        const angularSpread = Math.min(1.1, Math.max(0.4, 0.18 * countInPeriod));

        artList.forEach((art, index) => {
          numeroGlobal++;

          // Ángulo individual distribuido simétricamente alrededor del ángulo base
          const angleOffset = countInPeriod > 1
            ? -angularSpread / 2 + (angularSpread / (countInPeriod - 1)) * index
            : 0;

          const finalAngle = baseAngle + angleOffset;

          // Jitter radial en 3 niveles para evitar superposición cuando hay muchos nodos
          const jitterValues = [0, 18, -18, 30, -30];
          const radialJitter = countInPeriod > 1 ? (jitterValues[index % jitterValues.length] ?? 0) : 0;

          const radius = baseRadius + radialJitter;

          // Coordenadas cartesianas
          const x = center + radius * Math.cos(finalAngle);
          const y = center + radius * Math.sin(finalAngle);

          const shortLabel = art.tituloCorto
            ? art.tituloCorto
            : art.titulo.length > 80
              ? art.titulo.substring(0, 80) + '…'
              : art.titulo;

          nodes.push({
            number: numeroGlobal,
            icono: this.iconoCategoria(cat),
            x: Math.round(x),
            y: Math.round(y),
            label: art.titulo,
            shortLabel,
            color,
            periodo: art.periodo || '2030-2040',
            categoria: cat,
            url: art.url
          });
        });
      });
    });

    return nodes;
  }

  setVistaVisualizacion(vista: VistaVisualizacion): void {
    this.vistaVisualizacion = vista;
  }

  private getConoColumnKey(periodo?: string): 'presente' | 'medio' | 'lejano' {
    switch (periodo) {
      case '2023-2030':
      case '2030':
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

    if (!this.selectedRegion || !this.regionData) {
      return rawData.map(col => ({ key: col.key, label: col.label, totalCount: 0, groups: [] }));
    }

    this.categories
      .filter((cat) => !cat.includes('Escenarios'))
      .forEach((cat) => {
        const colorData = this.getCategoryColorData(cat);
        this.getArticulos(cat).forEach((art) => {
          const columna = rawData.find((c) => c.key === this.getConoColumnKey(art.periodo));
          if (!columna) return;

          const shortLabel = art.tituloCorto
            ? art.tituloCorto
            : art.titulo.length > 38
              ? art.titulo.substring(0, 38) + '…'
              : art.titulo;

          columna.items.push({
            titulo: art.titulo,
            shortLabel: shortLabel,
            categoria: cat,
            tema: art.tema,
            periodo: art.periodo || '2030-2040',
            url: art.url,
            icono: this.iconoCategoria(cat),
            color: colorData.border,
          });
        });
      });

    return rawData.map(col => {
      const groupsMap = new Map<string, ConoItem[]>();
      col.items.forEach(item => {
        if (!groupsMap.has(item.categoria)) {
          groupsMap.set(item.categoria, []);
        }
        groupsMap.get(item.categoria)!.push(item);
      });

      const groups: ConoGroup[] = Array.from(groupsMap.entries()).map(([categoria, items]) => ({
        categoria,
        items
      }));

      return {
        key: col.key,
        label: col.label,
        totalCount: col.items.length,
        groups
      };
    });
  }

  get conoEscenarios(): Articulo[] {
    return this.getArticulos('Escenarios');
  }

  get tieneEscenariosCono(): boolean {
    return this.conoEscenarios.length > 0;
  }

  selectRegion(regionName: string): void {
    this.selectedRegion = regionName;
    this.activeIndex = null;
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
    this.selectedRegion = regionName;
    if (regionName) {
      this.selectRegion(regionName);
    } else {
      this.resetearFiltroGlobal();
    }
  }

  get articulosPorTemaGlobal(): ArticuloConRegion[] {
    const query = this.textoBusqueda.toLowerCase().trim();
    const tema = this.temaSeleccionadoSelect;

    if (!query && !tema) {
      return [];
    }

    const resultados: ArticuloConRegion[] = [];

    Object.keys(this.articlesDatabase).forEach((region) => {
      const dataRegion = this.articlesDatabase[region] as any;
      if (!dataRegion) return;

      const categoriasDeRegion = Object.keys(dataRegion).filter((key) => key !== 'urlRegion');

      categoriasDeRegion.forEach((cat) => {
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

  resetearFiltroGlobal(): void {
    this.selectedRegion = null;
    this.regionData = null;
    this.categories = [];
    this.textoBusqueda = '';
    this.temaSeleccionadoSelect = '';
    this.construirTablas();
  }

  hasDataForRegion(regionName: string): boolean {
    const data = this.articlesDatabase[regionName] as any;
    if (!data) return false;

    return Object.keys(data).some((key) => {
      const cat = data[key];
      return typeof cat === 'object' && cat !== null && Array.isArray(cat.articulos) && cat.articulos.length > 0;
    });
  }

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

  get hasSelection(): boolean {
    return this.selectedRegion !== null;
  }

  get hasData(): boolean {
    return this.selectedRegion ? this.hasDataForRegion(this.selectedRegion) : false;
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

  private periodoDe(art: Articulo): string {
    return art.periodo || '2030-2040';
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
      (art.titulo || '').toLowerCase().includes(q) ||
      (art.resumen || '').toLowerCase().includes(q) ||
      (art.tema || '').toLowerCase().includes(q) ||
      (art.tematica || '').toLowerCase().includes(q)
    );
  }

  private construirTablas(): void {
    const categoriasElementos = this.categories.filter((c) => !c.includes('Escenarios'));

    this.filasElementos = categoriasElementos.flatMap((cat) =>
      this.getArticulos(cat).map((a) => ({ ...a, categoria: cat }))
    );
    this.filasEscenarios = this.categories
      .filter((c) => c.includes('Escenarios'))
      .flatMap((cat) => this.getArticulos(cat).map((a) => ({ ...a, categoria: cat })));

    this.tiposElementos = categoriasElementos.filter((c) => this.getCount(c) > 0);
    this.temasElementos = this.unicos(this.filasElementos.map((f) => f.tematica));
    this.periodosElementos = this.unicos(this.filasElementos.map((f) => this.periodoDe(f)));
    this.temasEscenarios = this.unicos(this.filasEscenarios.map((f) => f.tematica));
    this.periodosEscenarios = this.unicos(this.filasEscenarios.map((f) => this.periodoDe(f)));

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
        (!f.periodo || this.periodoDe(a) === f.periodo)
    );
    this.primeraFilaElementos = 0;
  }

  aplicarFiltroEscenarios(): void {
    const f = this.filtroEscenarios;
    this.filasEscenariosFiltradas = this.filasEscenarios.filter(
      (a) =>
        this.coincideTexto(a, f.texto) &&
        (!f.tema || a.tematica === f.tema) &&
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

  descargarListaCompletaPDF(): void {
    if (!this.selectedRegion || !this.regionData) return;

    const reporteContenedor = document.createElement('div');
    reporteContenedor.style.padding = '30px';
    reporteContenedor.style.fontFamily = "'Helvetica Neue', Arial, sans-serif";
    reporteContenedor.style.backgroundColor = '#ffffff';

    let contenidoHtml = `
    <div style="border-bottom: 2px solid #0d6efd; padding-bottom: 15px; margin-bottom: 25px;">
      <h1 style="color: #0c4a6e; font-size: 22px; margin: 0; font-weight: bold;">
        Reporte: ${this.selectedRegion}
      </h1>
      <p style="color: #6c757d; font-size: 13px; margin-top: 5px; margin-bottom: 0;">
        Fichas explicativas e información territorial consolidada.
      </p>
    </div>
    `;

    this.categories.forEach((categoria) => {
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
              ${articulo.tema || categoria} (${articulo.periodo || '2030-2040'})
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
      filename: `Reporte_${this.selectedRegion.replace(/\s+/g, '_')}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, logging: false },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    } as const;

    html2pdf().set(opciones).from(reporteContenedor).save();
  }
}