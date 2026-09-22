import { Component } from '@angular/core';
import { MAP_REGIONS, MapRegionPath } from './map-regions.data';
import { ARTICLES_DATABASE, RegionArticulos, Articulo } from './articles-database.data';

export type CategoriaTipo = 'Tendencias territoriales' | 'Riesgos territoriales' | 'Oportunidades territoriales';

interface HeroSlide {
  image: string;
  title: string;
  subtitle?: string;
}

interface Scenario {
  slug: string;
  image: string;
  title: string;
  description: string;
  updatedAt?: string;
}

interface CategorySection {
  title: string;
  description: string;
  scenarios: Scenario[];
}

export interface ArticuloConRegion extends Articulo {
  regionOriginaria: string;
}

type CategoryKey = 'pedn' | 'largo-plazo' | 'territorial';

@Component({
  selector: 'app-escenarios',
  templateUrl: './escenarios.component.html',
  styleUrls: ['./escenarios.component.css'],
})
export class EscenariosComponent {
  readonly mapViewBox = '0 0 220 320';
  readonly regions: MapRegionPath[] = MAP_REGIONS;
  private readonly articlesDatabase = ARTICLES_DATABASE;

  // Estado de selección y datos
  selectedRegion: string | null = null;
  regionData: RegionArticulos | null = null;

  // Filtros de búsqueda global
  textoBusqueda: string = '';
  temaSeleccionadoSelect: string = '';

  // Control de acordeón y categorías
  activeIndex: number | number[] = 0;
  readonly categories: CategoriaTipo[] = [
    'Tendencias territoriales',
    'Riesgos territoriales',
    'Oportunidades territoriales',
  ];

  // Configuración de Categoría Principal (PEDN / Largo plazo / Territorial)
  selectedCategory: CategoryKey = 'territorial';

  heroSlides: HeroSlide[] = [
    {
      image: 'https://observatorio.ceplan.gob.pe/uploads/A3IXVw9IKvScqsYSMQl-o0zv.png',
      title: 'Escenario de disrupción ambiental',
      subtitle: 'Escenarios del Plan Estratégico de Desarrollo Nacional',
    },
    {
      image: 'https://observatorio.ceplan.gob.pe/uploads/tbiiZTH0aN88k81XDBQgKllY.png',
      title: 'Horizonte Brillante: transformación tecnológica e innovación sostenible en el futuro deseable del Perú',
      subtitle: 'Escenarios del Perú al 2050',
    },
  ];

  get urlReporteRegion(): string | null {
    if (!this.regionData) return null;
    // Devuelve la propiedad 'url' del objeto RegionArticulos de la región seleccionada
    return (this.regionData as any)?.url || null;
  }

  sections: Record<Exclude<CategoryKey, 'territorial'>, CategorySection> = {
    pedn: {
      title: 'Escenarios del Plan Estratégico de Desarrollo Nacional',
      description: 'La incertidumbre en el corto y mediano plazo hace compleja la tarea de proyectarse a futuro...',
      scenarios: [
        {
          slug: 'crisis-social',
          image: 'https://observatorio.ceplan.gob.pe/uploads/nlc7w_v7yoj4U7WYhktI8ehW.png',
          title: 'Escenario de crisis social',
          description: 'Para el año 2050, el Perú enfrenta las profundas y persistentes secuelas de una crisis social...',
        },
      ],
    },
    'largo-plazo': {
      title: 'Escenarios del Perú al 2050',
      description: 'Los escenarios de mediano y largo plazo se fundamentan en narrativas construidas...',
      scenarios: [
        {
          slug: 'horizonte-radiante',
          image: 'https://observatorio.ceplan.gob.pe/uploads/tI3mtpWdF9KQ-vp-JGW3Eizx.jpg',
          title: 'Escenario "Un horizonte radiante"',
          description: 'En 2050, como resultado de la cooperación público-privada...',
          updatedAt: 'noviembre 2024',
        },
      ],
    },
  };

  // --- MÉTODOS DE SELECCIÓN Y VALIDACIÓN ---

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

    // Si la región no tiene datos registrados, ignora la interacción
    if (!this.hasDataForRegion(regionName)) {
      return;
    }

    this.selectedRegion = regionName;
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

  selectCategory(category: CategoryKey): void {
    this.selectedCategory = category;
  }

  // --- GETTERS DE DATOS ---

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
  
        // Extraemos dinámicamente las categorías disponibles de CADA región sin tocar this.categories
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

  get hasSelection(): boolean {
    return this.selectedRegion !== null;
  }

  get hasData(): boolean {
    return this.selectedRegion ? this.hasDataForRegion(this.selectedRegion) : false;
  }

  get currentSection(): CategorySection | null {
    if (this.selectedCategory === 'territorial') {
      return null;
    }
    return this.sections[this.selectedCategory];
  }

  // Devuelve únicamente las regiones que tienen información registrada
  get availableRegions(): MapRegionPath[] {
    return this.regions.filter(region => this.hasDataForRegion(region.name));
  }
}