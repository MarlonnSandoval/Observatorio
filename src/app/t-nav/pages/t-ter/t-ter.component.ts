import { Component } from '@angular/core';
import { MAP_REGIONS, MapRegionPath } from './map-regions.data';
import { ARTICLES_DATABASE, Articulo, RegionArticulos } from './articles-database.data';

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
  selector: 'app-t-ter',
  templateUrl: './t-ter.component.html',
  styleUrls: ['./t-ter.component.css']
})
export class TTerComponent {

  readonly subcategoriasTendencia: { key: SubtipoTendencia; label: string }[] = [
    { key: 'caracterizan', label: 'Tendencias que caracterizan al territorio' },
    { key: 'afectan', label: 'Tendencias que afectan al territorio' },
  ];

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
    this.construirTablas();
  }

  private unicos(valores: (string | undefined)[]): string[] {
    return Array.from(new Set(valores.filter((v): v is string => !!v))).sort((a, b) =>
      a.localeCompare(b, 'es')
    );
  }

  private construirTablas(): void {
    const elemCats = this.categoriasElementos;

    this.filasElementos = elemCats.flatMap((cat) => {
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
      return articulos.map((a) => ({ ...a, categoria: cat }));
    });

    this.temasElementos = this.unicos(this.filasElementos.map((f) => f.tematica));
    this.filtroElementos = { texto: '', tipo: '', tema: '', periodo: '', fuerzaCambio: '' };
  }

  getArticulosPorCategoria(categoria: string): FilaArticulo[] {
    return this.filasElementos.filter(f => f.categoria === categoria);
  }

  getArticulosPorSubtipo(subtipo: SubtipoTendencia): FilaArticulo[] {
    return this.filasElementos.filter(f => f.subtipoTendencia === subtipo);
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
                const urlMostrar = art.url || 'Sin URL disponible.';
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
            : `<p class="empty">Sin elementos registrados para este territorio.</p>`;

        return `
        <section class="bloque">
          <div class="bloque-titulo" style="color: ${color};">${cat}</div>
          <div class="bloque-header" style="background-color: ${color};">${tituloBloque}</div>
          <div class="bloque-body" style="border-color: ${color};">${itemsHtml}</div>
        </section>
      `;
      })
      .join('');

    const tituloSector = this.selectedRegion;
    const totalVisible = filasBase.length;

    const contenidoHtml = `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Reporte del territorio - ${tituloSector}</title>
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
}
