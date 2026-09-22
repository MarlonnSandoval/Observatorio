import { Component } from '@angular/core';

interface HeroSlide {
  image: string;
  title: string;
  subtitle?: string;
}

interface Categoria {
  id: string;
  nombre: string;
  color: string;
  icono: string;
}

interface Tendencia {
  id: string;
  titulo: string;
  categoriaId: string;
  ruta: string;
}

@Component({
  selector: 'app-global-nacional',
  templateUrl: './global-nacional.component.html',
  styleUrls: ['./global-nacional.component.css']
})
export class GlobalNacionalComponent {
  heroSlides: HeroSlide[] = [
    {
      image: 'https://observatorio.ceplan.gob.pe/uploads/A3IXVw9IKvScqsYSMQl-o0zv.png',
      title: 'Aumento del acceso seguro a agua y saneamiento en Amazonas',
      subtitle: 'Escenarios del Plan Estratégico de Desarrollo Nacional',
    },
    {
      image: 'https://observatorio.ceplan.gob.pe/uploads/tbiiZTH0aN88k81XDBQgKllY.png',
      title: 'Aumento de logros educativos en Cajamarca',
      subtitle: 'Escenarios del Perú al 2050',
    },
  ];

  // Colores tomados de los mismos hexágonos originales, para no perder la identidad visual.
  categorias: Categoria[] = [
    { id: 'social', nombre: 'Social', color: '#FF5533', icono: 'bi-people' },
    { id: 'ambiental', nombre: 'Ambiental', color: '#059141', icono: 'bi-tree' },
    { id: 'economica', nombre: 'Económica', color: '#EFC514', icono: 'bi-graph-up' },
    { id: 'tecnologica', nombre: 'Tecnológica', color: '#4E87C6', icono: 'bi-cpu' },
    { id: 'politica', nombre: 'Política', color: '#9A20E2', icono: 'bi-bank' },
    { id: 'etica', nombre: 'Actitud, valores y ética', color: '#83B7DD', icono: 'bi-heart' },
  ];

  // TODO: reemplazar por la data real (servicio/API de tendencias). Se deja de ejemplo
  // para mostrar la forma esperada: cada tendencia pertenece a una única categoriaId.
  tendencias: Tendencia[] = [
    { id: 't1', titulo: 'Aumento del activismo femenino', categoriaId: 'social', ruta: '/tendencia-global/t1' },
    { id: 't1', titulo: 'Aumento del activismo femenino', categoriaId: 'social', ruta: '/tendencia-global/t1' },
    { id: 't2', titulo: 'Desigualdad entre mujeres y hombres', categoriaId: 'social', ruta: '/tendencia-global/t2' },
    { id: 't3', titulo: 'Mayor liderazgo femenino', categoriaId: 'social', ruta: '/tendencia-global/t3' },
    { id: 't4', titulo: 'Creciente interés en el turismo sostenible', categoriaId: 'ambiental', ruta: '/tendencia-global/t4' },
    { id: 't5', titulo: 'Expansión de industrias creativas', categoriaId: 'economica', ruta: '/tendencia-global/t5' },
    { id: 't6', titulo: 'Inclusión digital para grupos vulnerables', categoriaId: 'tecnologica', ruta: '/tendencia-global/t6' },
  ];

  categoriaSeleccionada: string = this.categorias[0].id;
  busqueda: string = '';


  get categoriaActiva(): Categoria {
    return this.categorias.find(c => c.id === this.categoriaSeleccionada)!;
  }

  contarPorCategoria(categoriaId: string): number {
    return this.tendencias.filter(t => t.categoriaId === categoriaId).length;
  }

  get tendenciasFiltradas(): Tendencia[] {
    const termino = this.busqueda.trim().toLowerCase();
    return this.tendencias.filter(t =>
      t.categoriaId === this.categoriaSeleccionada &&
      (termino === '' || t.titulo.toLowerCase().includes(termino))
    );
  }

  seleccionarCategoria(categoriaId: string): void {
    this.categoriaSeleccionada = categoriaId;
  }
}