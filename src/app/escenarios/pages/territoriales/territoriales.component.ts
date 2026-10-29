import { Component } from '@angular/core';
import { MAP_REGIONS, MapRegionPath } from './map-regions.data';
import { ARTICLES_DATABASE, RegionArticulos, Articulo, EscenarioDeseado } from './articles-database.data';

export type CategoriaTipo = 'Tendencias territoriales' | 'Riesgos territoriales' | 'Oportunidades territoriales' | 'Escenarios territoriales' | 'Escenario Deseado';

export interface ArticuloConRegion extends Articulo {
  regionOriginaria: string;
}

interface HeroSlide {
  image: string;
  title: string;
  subtitle?: string;
}

@Component({
  selector: 'app-territoriales',
  templateUrl: './territoriales.component.html',
  styleUrls: ['./territoriales.component.css']
})
export class TerritorialesComponent {

  readonly mapViewBox = '0 0 220 320';
  readonly regions: MapRegionPath[] = MAP_REGIONS;
  private readonly articlesDatabase = ARTICLES_DATABASE;

  // Estado de selección y datos
  selectedRegion: string | null = null;
  regionData: RegionArticulos | null = null;
  textoBusqueda: string = '';
  temaSeleccionadoSelect: string = '';

  private articulosAbiertos = new Set<string>();

  readonly categories: CategoriaTipo[] = [
    // 'Tendencias territoriales',
    // 'Riesgos territoriales',
    // 'Oportunidades territoriales',
    'Escenario Deseado'
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


  hasDataForRegion(regionName: string): boolean {
    const data = this.articlesDatabase[regionName] as any;
    if (!data) return false;

    return Object.keys(data).some((key) => {
      const cat = data[key];
      return typeof cat === 'object' && cat !== null && Array.isArray(cat.articulos) && cat.articulos.length > 0;
    });
  }

  selectRegion(regionName: string | null): void {
    if (!regionName) {
      this.resetearFiltroGlobal();
      return;
    }

    if (!this.hasDataForRegion(regionName)) {
      return;
    }

    this.selectedRegion = regionName;
    this.articulosAbiertos.clear();
    this.regionData = this.articlesDatabase[regionName] || null;
  }

  onRegionChange(regionName: string | null): void {
    this.selectRegion(regionName);
  }

  resetearFiltroGlobal(): void {
    this.selectedRegion = null;
    this.regionData = null;
    this.textoBusqueda = '';
    this.temaSeleccionadoSelect = '';
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

      const categoriasDeRegion = Object.keys(dataRegion).filter((key) => key !== 'urlRegion' && key !== 'urlPdrc');

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

  get hasData(): boolean {
    return this.selectedRegion ? this.hasDataForRegion(this.selectedRegion) : false;
  }

  get escenarioDeseadoRegion(): EscenarioDeseado | null {
    return (this.regionData as any)?.escenarioDeseado || null;
  }

  get urlReporteRegion(): string | null {
    if (!this.regionData) return null;
    return (this.regionData as any)?.url || null;
  }

  get urlPdrcRegion(): string | null {
    if (!this.regionData) return null;
    return (this.regionData as any)?.urlPdrc || null;
  }

  get hasSelection(): boolean {
    return this.selectedRegion !== null;
  }
  getArticulos(categoria: CategoriaTipo | string): Articulo[] {
    if (!this.regionData) return [];
    const catData = (this.regionData as any)?.[categoria];
    return catData?.articulos ?? [];
  }

  get urlPdrcDescargaRegion(): string | null {
    return (this.regionData as any)?.urlPdrcDescarga || null;
  }

  getDescargaUrl(categoria: CategoriaTipo | string): string | null {
    if (!this.regionData) return null;
    const catData = (this.regionData as any)?.[categoria];
    return catData?.descargaUrl || null;
  }
  getReporteUrl(categoria: CategoriaTipo | string): string | null {
    return this.urlPdrcDescargaRegion || this.getDescargaUrl(categoria);
  }

  get availableRegions(): MapRegionPath[] {
    return this.regions.filter(region => this.hasDataForRegion(region.name));
  }
}
