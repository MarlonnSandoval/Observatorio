import { Component } from '@angular/core'; 
import { Actualidad, ACTUALIDAD_DATABASE } from './database.data';

interface HeroSlide {
  image: string;
  title: string;
  subtitle?: string;
}

@Component({
  selector: 'app-actualidad', 
  templateUrl: './actualidad.component.html',
  styleUrls: ['./actualidad.component.css']
})

export class ActualidadComponent {

  textoBusqueda: string = '';
  fuenteSelect: string = '';
  anioSelect: string = '';
  tipoSelect: string = '';
  regionData: Actualidad | null = null;
  private readonly articlesDatabase = ACTUALIDAD_DATABASE;

  // NUEVO GETTER: Obtiene los 3 artículos más recientes sin que los filtros afecten
  get publicacionesRecientes(): Actualidad[] {
    if (!this.articlesDatabase?.actualidad) return [];

    // Creamos una copia del array base para no alterar el original, 
    // ordenamos por año descendente y tomamos los 3 primeros.
    return [...this.articlesDatabase.actualidad]
      .sort((a, b) => Number(b.anio) - Number(a.anio))
      .slice(0, 3);
  }

  get actualidadFiltro(): Actualidad[] {
    // Normalizamos el texto de búsqueda por seguridad
    const busqueda = (this.textoBusqueda || '').trim().toLowerCase();
    const fuenteSelect = this.fuenteSelect;
    const anioSelect = this.anioSelect;
    const tipoSelect = this.tipoSelect;

    // Filtramos directamente sobre la lista de la base de datos
    return ACTUALIDAD_DATABASE.actualidad.filter((articulo: Actualidad) => {
      // 1. Filtro por Select: si hay select seleccionado, debe coincidir estrictamente con el tema del artículo
      const cumpleFuente = !fuenteSelect || articulo.institucion === fuenteSelect;
      const cumpleAnio = !anioSelect || articulo.anio === anioSelect;
      const cumpleTipo = !tipoSelect || articulo.tipo === tipoSelect;

      // 2. Filtro por Texto: evalúa título, institución, autor o tema (solo si el usuario escribió algo)
      const cumpleTexto = !busqueda ||
        articulo.titulo.toLowerCase().includes(busqueda);

      // Debe cumplir ambas condiciones
      return cumpleTexto && cumpleFuente && cumpleAnio && cumpleTipo;
    });
  }

  getcount(): number {
    return this.actualidadFiltro.length;
  }

  // Retorna un array con nombres de instituciones ÚNICAS
  // Método genérico para obtener valores únicos de cualquier campo
  getOpcionesUnicas(campo: keyof Actualidad): string[] {
    if (!this.articlesDatabase?.actualidad) return [];

    const lista = this.articlesDatabase.actualidad
      .map(articulo => articulo[campo])
      .filter((valor): valor is string => Boolean(valor));

    // Set elimina duplicados y sort() los ordena alfabéticamente
    return [...new Set(lista)].sort((a, b) => a.localeCompare(b));
  }

  Limpiar() {
    this.textoBusqueda = '';
    this.fuenteSelect = '';
    this.anioSelect = '';
    this.tipoSelect = '';
  }

  heroSlides: HeroSlide[] = [
    {
      image: '/assets/img/A3IXVw9IKvScqsYSMQl-o0zv.png',
      title: 'Aumento del acceso seguro a agua y saneamiento en Amazonas',
      subtitle: 'Escenarios del Plan Estratégico de Desarrollo Nacional',
    },
    {
      image: '/assets/img/tbiiZTH0aN88k81XDBQgKllY.png',
      title: 'Aumento de logros educativos en Cajamarca',
      subtitle: 'Escenarios del Perú al 2050',
    },
  ];

}