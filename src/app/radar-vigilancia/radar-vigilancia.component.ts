import { Component, OnInit } from '@angular/core';
import { ElementoFuturo, EncuestaValidacion, NivelAlerta } from './radar-item.model';

interface HeroSlide {
  image: string;
  title: string;
  subtitle?: string;
}

@Component({
  selector: 'app-radar-vigilancia',
  templateUrl: './radar-vigilancia.component.html',
  styleUrls: ['./radar-vigilancia.component.css']
})
export class RadarVigilanciaComponent implements OnInit {

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

  // En tu radar-vigilancia.component.ts
  getEtiquetaCuadrante(posicion: 'TOP' | 'RIGHT' | 'BOTTOM' | 'LEFT'): string {
    if (this.enfoqueSeleccionado === 'SECTORIAL') {
      switch (posicion) {
        case 'TOP': return 'AGRICULTURA / AGRO';
        case 'RIGHT': return 'MINERÍA / ENERGÍA';
        case 'BOTTOM': return 'SALUD / EDUCACIÓN';
        case 'LEFT': return 'TECNOLOGÍA / COMERCIO';
      }
    } else {
      // Por defecto vista Territorial
      switch (posicion) {
        case 'TOP': return 'MACRO REGIÓN NORTE';
        case 'RIGHT': return 'MACRO REGIÓN ESTE';
        case 'BOTTOM': return 'MACRO REGIÓN SUR';
        case 'LEFT': return 'MACRO REGIÓN CENTRO';
      }
    }
  }

  // Filtros
  enfoqueSeleccionado: string = 'TODOS';
  territorioFiltro: string = 'TODOS';

  // Modal y Encuesta
  mostrarModalEncuesta: boolean = false;
  encuesta: EncuestaValidacion = {
    pertinencia: 'SI',
    nivelAlertaSugerido: 'ROJO',
    comentarios: ''
  };

  elementoSeleccionado: ElementoFuturo | null = null;

  // Datos de ejemplo adaptados al Observatorio
  elementos: ElementoFuturo[] = [
    {
      id: '1',
      titulo: 'Crisis de Escasez Hídrica en Cuencas Sur',
      descripcion: 'Déficit hídrico severo con impacto alto en la producción agropecuaria regional.',
      tipo: 'RIESGO',
      sector: 'Agricultura',
      territorio: 'Sur',
      alerta: 'ROJO',
      distanciaCentro: 22,
      anguloGrados: 45
    },
    {
      id: '2',
      titulo: 'Automatización y Digitalización Agrícola',
      descripcion: 'Adopción acelerada de agrotech e IA en la gestión de cultivos.',
      tipo: 'TENDENCIA',
      sector: 'Tecnología',
      territorio: 'Nacional',
      alerta: 'AMBAR',
      distanciaCentro: 55,
      anguloGrados: 135
    },
    {
      id: '3',
      titulo: 'Apertura de Mercados Agroexportadores',
      descripcion: 'Oportunidades de comercio exterior en el sudeste asiático.',
      tipo: 'OPORTUNIDAD',
      sector: 'Comercio',
      territorio: 'Norte',
      alerta: 'VERDE',
      distanciaCentro: 82,
      anguloGrados: 250
    }
  ];

  ngOnInit(): void { }

  // Cálculo de coordenadas cartesianas desde polares
  getPosicionX(item: ElementoFuturo): number {
    const radioNormalizado = (item.distanciaCentro / 100) * 44;
    const anguloRadianes = (item.anguloGrados * Math.PI) / 180;
    return 50 + radioNormalizado * Math.cos(anguloRadianes);
  }

  getPosicionY(item: ElementoFuturo): number {
    const radioNormalizado = (item.distanciaCentro / 100) * 44;
    const anguloRadianes = (item.anguloGrados * Math.PI) / 180;
    return 50 + radioNormalizado * Math.sin(anguloRadianes);
  }

  getClaseAlerta(alerta: NivelAlerta): string {
    switch (alerta) {
      case 'ROJO': return 'alerta-roja';
      case 'AMBAR': return 'alerta-ambar';
      case 'VERDE': return 'alerta-verde';
      default: return '';
    }
  }

  seleccionarElemento(item: ElementoFuturo): void {
    this.elementoSeleccionado = item;
  }

  // Descarga de reporte
  exportarReporte(): void {
    const datos = JSON.stringify(this.elementos, null, 2);
    const blob = new Blob([datos], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'reporte-radar-vigilancia.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  // Métodos del Modal de Encuesta
  abrirEncuesta(): void {
    if (this.elementoSeleccionado) {
      this.encuesta.nivelAlertaSugerido = this.elementoSeleccionado.alerta;
    }
    this.mostrarModalEncuesta = true;
  }

  cerrarEncuesta(): void {
    this.mostrarModalEncuesta = false;
  }

  enviarEncuesta(): void {
    console.log('Encuesta registrada:', {
      elemento: this.elementoSeleccionado?.titulo || 'General',
      ...this.encuesta
    });
    alert('¡Validación guardada con éxito!');
    this.cerrarEncuesta();
  }
}