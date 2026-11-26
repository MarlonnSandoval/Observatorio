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


export interface FilaArticulo extends Articulo {
  categoria: string;
}

export interface FiltroElementos {
  texto: string;
  tipo: string;
  tema: string;
  periodo: string;
  fuerzaCambio: string;
}


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

@Component({
  selector: 'app-territorial',
  templateUrl: './territorial.component.html',
  styleUrls: ['./territorial.component.css'],
})
export class TerritorialComponent {

  categoriaColapsada: Record<string, boolean> = {};
  tematicaActiva: string | null = null;

  toggleCategoria(cat: string): void {
    this.categoriaColapsada[cat] = !this.categoriaColapsada[cat];
  }

  toggleTematica(tema: string): void {
    this.tematicaActiva = this.tematicaActiva === tema ? null : tema;
  }

  tooltipRegion: string | null = null;
  tooltipX = 0;
  tooltipY = 0;

  onRegionHover(event: MouseEvent, name: string): void {
    if (name === 'Zoom Lines') return;
    this.tooltipRegion = name;
  }

  onMapMouseMove(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const parent = (target.parentElement as HTMLElement).getBoundingClientRect();
    this.tooltipX = event.clientX - parent.left;
    this.tooltipY = event.clientY - parent.top;
  }

  // ── Mapa ──────────────────────────────────
  readonly mapViewBox = '0 0 220 320';
  readonly regions: MapRegionPath[] = MAP_REGIONS;
  readonly heroSlides = HERO_SLIDES;

  // ── Región seleccionada ───────────────────
  selectedRegion: string | null = null;
  categories: string[] = [];
  regionData: RegionArticulos | null = null;

  // ── Tablas ────────────────────────────────
  filtroElementos: FiltroElementos = { texto: '', tipo: '', tema: '', periodo: '', fuerzaCambio: '' };

  filasElementos: FilaArticulo[] = [];
  filasElementosFiltradas: FilaArticulo[] = [];
  temasElementos: string[] = [];

  private readonly articlesDatabase = ARTICLES_DATABASE;

  // ─────────────────────────────────────────
  // Helpers de configuración unificados
  // ─────────────────────────────────────────

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

  get categoriasElementos(): string[] {
    return this.categories;
  }

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
    return { border: '#bababa', badgeBg: 'rgb(232, 242, 255)', badgeText: '#000000' };
  }

  // ─────────────────────────────────────────
  // Selección de región
  // ─────────────────────────────────────────

  selectRegion(regionName: string): void {
    this.selectedRegion = regionName;

    this.regionData = this.articlesDatabase[regionName] || null;
    this.categories = this.regionData
      ? Object.keys(this.regionData).filter((key) => key !== 'url' && key !== 'urlRegion')
      : [];

    // Solo el primero queda desplegado (false); el resto colapsado (true)
    this.categoriaColapsada = {};
    this.categories.forEach((cat, index) => {
      this.categoriaColapsada[cat] = index !== 0;
    });

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
    this.categoriaColapsada = {};
    this.construirTablas();
  }

  private unicos(valores: (string | undefined)[]): string[] {
    return Array.from(new Set(valores.filter((v): v is string => !!v))).sort((a, b) =>
      a.localeCompare(b, 'es')
    );
  }

  private construirTablas(): void {
    const elemCats = this.categoriasElementos;

    this.filasElementos = elemCats.flatMap((cat) =>
      this.getArticulos(cat).map((a) => ({ ...a, categoria: cat }))
    );

    this.temasElementos = this.unicos(this.filasElementos.map((f) => f.tematica));
    this.filtroElementos = { texto: '', tipo: '', tema: '', periodo: '', fuerzaCambio: '' };
  }

  getArticulosPorCategoria(categoria: string): FilaArticulo[] {
    return this.filasElementos.filter(f => f.categoria === categoria);
  }

  get hayFiltroElementos(): boolean {
    const f = this.filtroElementos;
    return !!(f.texto || f.tipo || f.tema || f.periodo || f.fuerzaCambio);
  }

  // ─────────────────────────────────────────
  // Exportar PDF
  // ─────────────────────────────────────────
  descargarLista(): void {
    if (!this.selectedRegion) return;

    const ventanaImpresion = window.open('', '_blank');
    if (!ventanaImpresion) {
      alert('Por favor, permita las ventanas emergentes para descargar el PDF.');
      return;
    }

    const filasBase: any[] = this.hayFiltroElementos
      ? this.filasElementosFiltradas
      : this.filasElementos;

    const escapeHtml = (valor: unknown): string =>
      String(valor ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

    const htmlFilas =
      filasBase.length > 0
        ? filasBase
          .map((item: any) => {
            const nombreMostrar =
              item.titulo || item.tituloCorto || item.nombre || 'Sin título';
            const descripcionMostrar =
              item.resumen || item.sumilla || 'Sin resumen disponible.';
            const categoriaMostrar = item.categoria || '';
            const tematicaLimpias = item.tematica?.trim() || item.tema?.trim() || '';
            const tematicaColor = this.getTematicaColorData
              ? this.getTematicaColorData(tematicaLimpias)
              : { border: '#64748b', badgeBg: '#f1f5f9', badgeText: '#334155' };

            const tematicaHtml = tematicaLimpias
              ? `<span class="tematica-pill" style="background-color: ${tematicaColor.badgeBg}; color: ${tematicaColor.badgeText};">
                     <span class="tematica-dot" style="background-color: ${tematicaColor.border};"></span>
                     ${escapeHtml(tematicaLimpias)}
                   </span>`
              : `<span class="muted">Sin temática</span>`;

            const rawUrl = (item.url || item.enlace || '').toString().trim();
            const tieneUrl = Boolean(rawUrl);
            const urlHref = tieneUrl ? escapeHtml(rawUrl) : '#';
            const enlaceHtml = tieneUrl
              ? `<a class="ficha-link" href="${urlHref}" target="_blank" rel="noopener noreferrer">↗ Abrir ficha</a>`
              : `<span class="muted">No disponible</span>`;

            return `
                <tr>
                  <td>
                    <div class="ficha-nombre">${escapeHtml(nombreMostrar)}</div>
                  </td>
                  <td>${escapeHtml(categoriaMostrar)}</td>
                  <td>${escapeHtml(descripcionMostrar)}</td>
                  <td>${tematicaHtml}</td>
                  <td>${enlaceHtml}</td>
                </tr>
              `;
          })
          .join('')
        : `
            <tr>
              <td colspan="4" class="empty">Sin elementos registrados para este territorio.</td>
            </tr>
          `;

    const tituloTerritorio = escapeHtml(this.selectedRegion);
    const totalVisible = filasBase.length;

    const contenidoHtml = `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8">
          <title>${tituloTerritorio}</title>
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
              color: #2A68A2;
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
              padding: 9px 10px;
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
            .tematica-pill {
              display: inline-flex;
              align-items: center;
              gap: 5px;
              font-size: 10.5px;
              font-weight: 600;
              padding: 2px 8px;
              border-radius: 999px;
              white-space: nowrap;
            }
            .tematica-dot {
              width: 7px;
              height: 7px;
              border-radius: 50%;
              display: inline-block;
              flex-shrink: 0;
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
          <h2>${tituloTerritorio}</h2>
          <div class="meta">
            Fecha de generación: ${new Date().toLocaleDateString('es-PE')} | Total de elementos: ${totalVisible}
          </div>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Descripción / Resumen</th>
                <th>Temática</th>
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

}