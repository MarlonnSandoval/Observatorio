import { Component } from '@angular/core';
import { MAP_REGIONS, MapRegionPath } from './map-regions.data';
import { ARTICLES_DATABASE, Articulo, RegionArticulos } from './articles-database.data';
import html2pdf from 'html2pdf.js';

export type CategoriaTipo =
  | 'Tendencias'
  | 'Riesgos'
  | 'Oportunidades'
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
  icono: string; // id del símbolo SVG (ver sprite en el HTML)
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
  icono: string; // id del símbolo SVG (ver sprite en el HTML)
  color: string;
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
  items: ConoItem[];
}

export type VistaVisualizacion = 'radar' | 'cono';

@Component({
  selector: 'app-territorial',
  templateUrl: './territorial.component.html',
  styleUrls: ['./territorial.component.css'],
})
export class TerritorialComponent {
  readonly mapViewBox = '0 0 220 320';
  readonly regions: MapRegionPath[] = MAP_REGIONS;
  private readonly articlesDatabase = ARTICLES_DATABASE;

  selectedRegion: string | null = null;
  categories: string[] = [];
  regionData: RegionArticulos | null = null;
  activeIndex: number | number[] | null = null;

  textoBusqueda = '';
  temaSeleccionadoSelect = '';

  hoveredNode: number | null = null;
  vistaVisualizacion: VistaVisualizacion = 'radar';

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

  /** Artículos del radar agrupados por categoría (una columna por categoría). */
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

  /** Id del símbolo SVG según la categoría (Tendencia, Riesgo, Oportunidad, Señal débil, Carta salvaje, Escenario). */
  iconoCategoria(categoria: string): string {
    const c = (categoria || '').toLowerCase();
    if (c.includes('riesg')) return '#ico-riesgo';
    if (c.includes('oportun')) return '#ico-oportunidad';
    if (c.includes('señal') || c.includes('senal')) return '#ico-senal-debil';
    if (c.includes('carta') || c.includes('salvaje')) return '#ico-carta-salvaje';
    if (c.includes('escenario')) return '#ico-escenario';
    return '#ico-tendencia';
  }

  get radarNodes(): RadarNode[] {
    if (!this.selectedRegion || !this.regionData) return [];

    const nodes: RadarNode[] = [];
    const center = 250;
    let numeroGlobal = 0;

    const categorias = this.categories;
    const totalCategorias = categorias.length;
    const angleStep = totalCategorias > 0 ? (2 * Math.PI) / totalCategorias : 0;
    const anguloInicial = -Math.PI * 0.75;

    const getRadiusByPeriod = (periodo?: string): number => {
      switch (periodo) {
        case '2023-2030':
        case '2030':
          return 55;
        case '2030-2040':
          return 120;
        case '2040-2050':
          return 180;
        default:
          return 120;
      }
    };

    const margenSeguridad = angleStep * 0.12;

    categorias.forEach((cat, catIndex) => {
      const articulos = this.getArticulos(cat);
      const baseAngle = totalCategorias > 0 ? anguloInicial + catIndex * angleStep : 0;
      const color = this.getCategoryColorData(cat).border;
      const n = articulos.length;

      const maxHalfSpread = Math.max(0, angleStep / 2 - margenSeguridad);
      const halfSpread = n > 1 ? Math.min(maxHalfSpread, 0.1 + n * 0.075) : 0;
      const step = n > 1 ? (halfSpread * 2) / (n - 1) : 0;

      articulos.forEach((art, index) => {
        numeroGlobal++;

        const baseRadius = getRadiusByPeriod(art.periodo);
        const angleOffset = n > 1 ? -halfSpread + step * index : 0;
        const finalAngle = baseAngle + angleOffset;

        const radialJitter = n > 1 ? ((index % 3) - 1) * 18 : 0;
        const radius = baseRadius + radialJitter;

        const x = center + radius * Math.cos(finalAngle);
        const y = center + radius * Math.sin(finalAngle);

        // Se asigna tituloCorto si existe; de lo contrario realiza recorte por defecto
        const shortLabel = art.tituloCorto
          ? art.tituloCorto
          : art.titulo.length > 100
          ? art.titulo.substring(0, 100) + '…'
          : art.titulo;

        nodes.push({
          number: numeroGlobal,
          icono: this.iconoCategoria(cat),
          x: Math.round(x),
          y: Math.round(y),
          label: art.titulo,
          shortLabel: shortLabel,
          color: color,
          periodo: art.periodo || '2030-2040',
          categoria: cat,
          url: art.url
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
    const columnas: ConoColumn[] = [
      { key: 'presente', label: 'Presente – 2030', items: [] },
      { key: 'medio', label: '2030 – 2040', items: [] },
      { key: 'lejano', label: '2040 – 2050', items: [] },
    ];

    if (!this.selectedRegion || !this.regionData) return columnas;

    this.categories
      .filter((cat) => !cat.includes('Escenarios'))
      .forEach((cat) => {
        const colorData = this.getCategoryColorData(cat);
        this.getArticulos(cat).forEach((art) => {
          const columna = columnas.find((c) => c.key === this.getConoColumnKey(art.periodo));
          if (!columna) return;

          // Asignación con soporte a tituloCorto en Vista Cono
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

    return columnas;
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
    this.vistaVisualizacion = 'radar';

    this.regionData = this.articlesDatabase[regionName] || null;
    this.categories = this.regionData
      ? Object.keys(this.regionData).filter((key) => key !== 'url' && key !== 'urlRegion')
      : [];
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
    if (categoriaName.includes('Escenarios')) {
      return { border: '#8B5CF6', badgeBg: '#EDE9FE', badgeText: '#6D28D9' };
    }
    return { border: '#0d6efd', badgeBg: '#e7f1ff', badgeText: '#0d6efd' };
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