import { Component } from '@angular/core';

interface HeroSlide {
  image: string;
  title: string;
  subtitle?: string;
}

@Component({
  selector: 'app-largo-plazo',
  templateUrl: './largo-plazo.component.html',
  styleUrls: ['./largo-plazo.component.css']
})
export class LargoPlazoComponent {
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
}
