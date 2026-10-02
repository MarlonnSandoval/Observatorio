import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { Tendencia, Categoria, categorias, tendencias } from './tendencias.data';

interface HeroSlide {
  image: string;
  title: string;
  subtitle?: string;
}


@Component({
  selector: 'app-global-nacional',
  templateUrl: './global-nacional.component.html',
  styleUrls: ['./global-nacional.component.css']
})
export class GlobalNacionalComponent {
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

  categorias: Categoria[] = categorias;

  // Asignamos las tendencias importadas directamente desde el archivo tendencias.data.ts
  tendencias: Tendencia[] = tendencias;

  categoriaSeleccionada: string = this.categorias[0].id;
  busqueda: string = '';

  // Paginación
  opcionesFilas: number[] = [6, 9, 12, 24];
  first: number = 0;
  rows: number = 12;

  // Listas calculadas
  tendenciasFiltradas: Tendencia[] = [];
  tendenciasPagina: Tendencia[] = [];

  constructor() {
    this.actualizarLista();
  }

  get categoriaActiva(): Categoria {
    return this.categorias.find(c => c.id === this.categoriaSeleccionada)!;
  }

  contarPorCategoria(categoriaId: string): number {
    return this.tendencias.filter(t => t.categoriaId === categoriaId).length;
  }

  seleccionarCategoria(categoriaId: string): void {
    this.categoriaSeleccionada = categoriaId;
    this.first = 0;
    this.actualizarLista();
  }

  onBusquedaChange(): void {
    this.first = 0;
    this.actualizarLista();
  }

  onPageChange(event: PaginatorState): void {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? this.rows;
    this.actualizarLista();
  }

  // trackById(_: number, t: Tendencia): string {
  //   return t.id;
  // }

  private actualizarLista(): void {
    const termino = this.busqueda.trim().toLowerCase();
    this.tendenciasFiltradas = this.tendencias.filter(t =>
      t.categoriaId === this.categoriaSeleccionada &&
      (termino === '' || t.titulo.toLowerCase().includes(termino))
    );
    this.tendenciasPagina = this.tendenciasFiltradas.slice(this.first, this.first + this.rows);
  }
}