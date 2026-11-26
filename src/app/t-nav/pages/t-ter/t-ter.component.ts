import { Component } from '@angular/core';
import { MAP_REGIONS, MapRegionPath } from './map-regions.data';
import { ARTICLES_DATABASE, Articulo, RegionArticulos } from './articles-database.data';
import { PaginatorState } from 'primeng/paginator';

export type SubtipoTendencia = 'caracterizan' | 'afectan';

export type CategoriaTipo =
  | 'Tendencias'
  | 'Riesgos'
  | 'Oportunidades'
  | 'Señal débil'
  | 'Carta salvaje'
  | 'Escenarios';

export interface FilaArticulo extends Articulo {
  categoria: string;
  subtipoTendencia?: SubtipoTendencia;
}

export interface FiltroElementos {
  texto: string;
  tipo: string;
  tema: string;
  periodo: string;
  fuerzaCambio: string;
}

// Definición de temáticas (hexágonos) — equivalente a `categorias` en global-nacional
export interface TematicaHex {
  id: string;
  nombre: string;
  color: string;
}

export const TEMATICAS_HEX: TematicaHex[] = [
  { id: 'social', nombre: 'Social', color: 'rgb(255, 85, 51)' },
  { id: 'ambiental', nombre: 'Ambiental', color: 'rgb(5, 145, 65)' },
  { id: 'economica', nombre: 'Económica', color: 'rgb(239, 197, 20)' },
  { id: 'tecnologica', nombre: 'Tecnológica', color: 'rgb(78, 135, 198)' },
  { id: 'politica', nombre: 'Política', color: 'rgb(154, 32, 226)' },
  { id: 'etica', nombre: 'Actitud, valores y ética', color: 'rgb(131, 183, 221)' },
];

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
  selector: 'app-t-ter',
  templateUrl: './t-ter.component.html',
  styleUrls: ['./t-ter.component.css']
})
export class TTerComponent {

  // ── Hexágonos de temática ─────────────────
  readonly tematicasHex: TematicaHex[] = TEMATICAS_HEX;

  /** Temática activa en el selector de hexágonos */
  tematicaSeleccionada: string = this.tematicasHex[0].id;

  get tematicaActual(): TematicaHex {
    return this.tematicasHex.find(t => t.id === this.tematicaSeleccionada)!;
  }

  seleccionarTematica(id: string): void {
    this.tematicaSeleccionada = id;
    this.first = 0;
    this.actualizarLista();
  }

  // ── Búsqueda y paginación ─────────────────
  busqueda: string = '';
  opcionesFilas: number[] = [24, 6, 9, 12]; first: number = 0;
  rows: number = 24;

  articulosFiltrados: FilaArticulo[] = [];
  articulosPagina: FilaArticulo[] = [];

  onBusquedaChange(): void {
    this.first = 0;
    this.actualizarLista();
  }

  onPageChange(event: PaginatorState): void {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? this.rows;
    this.actualizarLista();
  }

  /**
   * Filtra filasElementos por la temática seleccionada en el hexágono
   * y por el texto de búsqueda, luego pagina.
   * La coincidencia de temática se hace contra art.tematica (texto libre),
   * mapeando el id del hexágono al fragmento de texto esperado.
   */
  private actualizarLista(): void {
    const termino = this.busqueda.trim().toLowerCase();
    const nombreTematica = this.tematicaActual.nombre.toLowerCase();

    this.articulosFiltrados = this.filasElementos.filter(art => {
      const tematica = (art.tematica ?? '').toLowerCase();
      const coincideTematica = tematica.includes(nombreTematica) ||
        nombreTematica.includes(tematica.split(' ')[0] ?? '');
      const coincideTexto = termino === '' ||
        (art.titulo ?? '').toLowerCase().includes(termino) ||
        (art.tituloCorto ?? '').toLowerCase().includes(termino);
      return coincideTematica && coincideTexto;
    });

    this.articulosPagina = this.articulosFiltrados.slice(this.first, this.first + this.rows);
  }

  // ── Mapa ──────────────────────────────────
  readonly mapViewBox = '0 0 220 320';
  readonly regions: MapRegionPath[] = MAP_REGIONS;
  readonly heroSlides = HERO_SLIDES;

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

  // ── Región seleccionada ───────────────────
  selectedRegion: string | null = null;
  categories: string[] = [];
  regionData: RegionArticulos | null = null;

  get hasSelection(): boolean { return this.selectedRegion !== null; }

  get hasData(): boolean {
    return this.selectedRegion ? this.hasDataForRegion(this.selectedRegion) : false;
  }

  private readonly articlesDatabase = ARTICLES_DATABASE;

  // ── Tabla interna de artículos ────────────
  filasElementos: FilaArticulo[] = [];
  temasElementos: string[] = [];
  filtroElementos: FiltroElementos = { texto: '', tipo: '', tema: '', periodo: '', fuerzaCambio: '' };

  get categoriasElementos(): string[] { return this.categories; }

  // ── Colores ───────────────────────────────
  getCategoryColorData(categoriaName: string) {
    if (categoriaName.includes('Tendencias')) return { border: '#0369A1', badgeBg: '#0369A1', badgeText: '#ffffff' };
    if (categoriaName.includes('Riesgos')) return { border: '#B91C1C', badgeBg: '#B91C1C', badgeText: '#ffffff' };
    if (categoriaName.includes('Oportunidades')) return { border: '#047857', badgeBg: '#047857', badgeText: '#ffffff' };
    if (categoriaName.includes('Señal')) return { border: '#155E75', badgeBg: '#155E75', badgeText: '#ffffff' };
    if (categoriaName.includes('Carta')) return { border: '#5B3F86', badgeBg: '#5B3F86', badgeText: '#ffffff' };
    if (categoriaName.includes('Escenarios')) return { border: '#6D28D9', badgeBg: '#6D28D9', badgeText: '#ffffff' };
    return { border: '#0d6efd', badgeBg: '#e7f1ff', badgeText: '#0d6efd' };
  }

  getTematicaColorData(tematicaName?: string | null) {
    const nombre = tematicaName ?? '';
    if (nombre.includes('Social')) return { border: 'rgb(255, 85, 51)', badgeBg: 'rgb(255, 234, 230)', badgeText: 'rgb(255, 85, 51)' };
    if (nombre.includes('Ambiental')) return { border: 'rgb(5, 145, 65)', badgeBg: 'rgb(221, 255, 236)', badgeText: 'rgb(5, 145, 65)' };
    if (nombre.includes('Económica')) return { border: 'rgb(239, 197, 20)', badgeBg: 'rgb(255, 247, 216)', badgeText: 'rgb(239, 197, 20)' };
    if (nombre.includes('Tecnológica')) return { border: 'rgb(78, 135, 198)', badgeBg: 'rgb(225, 239, 255)', badgeText: 'rgb(78, 135, 198)' };
    if (nombre.includes('Política')) return { border: 'rgb(154, 32, 226)', badgeBg: 'rgb(243, 223, 255)', badgeText: 'rgb(154, 32, 226)' };
    if (nombre.includes('Actitud')) return { border: 'rgb(131, 183, 221)', badgeBg: 'rgb(227, 243, 255)', badgeText: 'rgb(131, 183, 221)' };
    return { border: '#bababa', badgeBg: 'rgb(232, 242, 255)', badgeText: '#000000' };
  }

  // ── Selección de región ───────────────────
  selectRegion(regionName: string): void {
    this.selectedRegion = regionName;
    this.regionData = this.articlesDatabase[regionName] || null;
    this.categories = this.regionData
      ? Object.keys(this.regionData).filter(k => k !== 'url' && k !== 'urlRegion')
      : [];
    this.construirTablas();
  }

  onRegionChange(regionName: string | null): void {
    regionName ? this.selectRegion(regionName) : this.resetearFiltroGlobal();
  }

  resetearFiltroGlobal(): void {
    this.selectedRegion = null;
    this.regionData = null;
    this.categories = [];
    this.construirTablas();
  }

  // ── Construcción de tablas internas ───────
  getArticulos(categoria: string): Articulo[] {
    if (!this.regionData) return [];
    const catData = (this.regionData as any)?.[categoria];
    return catData?.articulos ?? [];
  }

  hasDataForRegion(regionName: string): boolean {
    const data = this.articlesDatabase[regionName] as any;
    if (!data) return false;
    return Object.keys(data).some(key => {
      const cat = data[key];
      return typeof cat === 'object' && cat !== null && Array.isArray(cat.articulos) && cat.articulos.length > 0;
    });
  }

  private unicos(valores: (string | undefined)[]): string[] {
    return Array.from(new Set(valores.filter((v): v is string => !!v)))
      .sort((a, b) => a.localeCompare(b, 'es'));
  }

  private construirTablas(): void {
    this.filasElementos = this.categoriasElementos.flatMap(cat => {
      const articulos = this.getArticulos(cat);
      if (cat === 'Tendencias') {
        const caracterizan = articulos
          .filter((a: any) => a.subtipoTendencia === 'caracterizan' || !a.subtipoTendencia)
          .map((a: any) => ({ ...a, categoria: cat, subtipoTendencia: a.subtipoTendencia ?? 'caracterizan' as SubtipoTendencia }));
        const afectan = articulos
          .filter((a: any) => a.subtipoTendencia === 'afectan')
          .map((a: any) => ({ ...a, categoria: cat, subtipoTendencia: 'afectan' as SubtipoTendencia }));
        return [...caracterizan, ...afectan];
      }
      return articulos.map(a => ({ ...a, categoria: cat }));
    });

    this.temasElementos = this.unicos(this.filasElementos.map(f => f.tematica));
    this.filtroElementos = { texto: '', tipo: '', tema: '', periodo: '', fuerzaCambio: '' };
    this.first = 0;
    this.busqueda = '';
    this.actualizarLista();
  }

  // ── Exportar PDF ──────────────────────────
  descargarLista(): void {
    if (!this.selectedRegion) return;

    const ventanaImpresion = window.open('', '_blank');
    if (!ventanaImpresion) {
      alert('Por favor, permita las ventanas emergentes para descargar el PDF.');
      return;
    }

    const escapeHtml = (valor: unknown): string =>
      String(valor ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

    const tematicaNombre = this.tematicaActual?.nombre || 'Todas las temáticas';
    const tematicaColor = this.getTematicaColorData(tematicaNombre);
    const filasBase = this.articulosFiltrados;

    const htmlFilas =
      filasBase.length > 0
        ? filasBase
          .map((art) => {
            const nombreMostrar =
              art.tituloCorto || art.titulo || 'Sin título';
            const categoriaMostrar = art.categoria || 'Sin categoría';
            const resumenMostrar =
              art.resumen || 'Sin resumen disponible.';
            const artTematica =
              (art.tematica || '').trim() || tematicaNombre;
            const artTematicaColor = this.getTematicaColorData(artTematica);

            const tematicaHtml = `
              <span class="pill" style="background-color: ${artTematicaColor.badgeBg}; color: ${artTematicaColor.badgeText};">
                <span class="dot" style="background-color: ${artTematicaColor.border};"></span>
                ${escapeHtml(artTematica)}
              </span>
            `;

            const rawUrl = (art.url || '').toString().trim();
            const enlaceHtml = rawUrl
              ? `<a class="ficha-link" href="${escapeHtml(rawUrl)}" target="_blank" rel="noopener noreferrer">↗ Abrir ficha</a>`
              : `<span class="muted">No disponible</span>`;

            return `
              <tr>
                <td><div class="ficha-nombre">${escapeHtml(nombreMostrar)}</div></td>
                <td>${escapeHtml(categoriaMostrar)}</td>
                <td>${tematicaHtml}</td>
                <td>${escapeHtml(resumenMostrar)}</td>
                <td>${enlaceHtml}</td>
              </tr>
            `;
          })
          .join('')
        : `
          <tr>
            <td colspan="5" class="empty">
              Sin elementos registrados para el territorio ${escapeHtml(this.selectedRegion)} en la temática ${escapeHtml(tematicaNombre)}.
            </td>
          </tr>
        `;

    const tituloRegion = escapeHtml(this.selectedRegion);
    const tituloTematica = escapeHtml(tematicaNombre);
    const filtroTextoInfo = this.busqueda.trim()
      ? ` | Búsqueda: "${escapeHtml(this.busqueda.trim())}"`
      : '';

    const contenidoHtml = `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>${tituloRegion} - ${tituloTematica}</title>
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
            margin: 0 0 6px;
            font-size: 22px;
            page-break-after: avoid;
            break-after: avoid;
          }
          .subtitulo-tematica {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            font-weight: 700;
            padding: 3px 10px;
            border-radius: 999px;
            margin-bottom: 8px;
            background-color: ${tematicaColor.badgeBg};
            color: ${tematicaColor.badgeText};
            border: 1px solid ${tematicaColor.border};
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
        <h2>${tituloRegion}</h2>
        <div class="subtitulo-tematica">
          <span class="dot" style="background-color: ${tematicaColor.border};"></span>
          ${tituloTematica}
        </div>
        <div class="meta">
          Fecha de generación: ${new Date().toLocaleDateString('es-PE')} | Total de elementos: ${filasBase.length}${filtroTextoInfo}
        </div>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Temática</th>
              <th>Descripción / Resumen</th>
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