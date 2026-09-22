import { Component, OnInit } from '@angular/core';
import { Evento, Tematica, TEMATICA_SEVERITY, DATABASE } from './evento.model';

export type CategoriaPestana = 'senales' | 'cartas' | 'tecnologias';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  // --- Bases de datos originales por categoría ---
  eventosSenales: Evento[] = [];
  eventosCartas: Evento[] = [];
  eventosTecnologias: Evento[] = [];

  // --- Listas filtradas que se renderizan en cada p-table ---
  filtradosSenales: Evento[] = [];
  filtradosCartas: Evento[] = [];
  filtradosTecnologias: Evento[] = [];

  // --- Estado de filtros independiente por cada pestaña ---
  filtros = {
    senales: { texto: '', tema: null as Tematica | null },
    cartas: { texto: '', tema: null as Tematica | null },
    tecnologias: { texto: '', tema: null as Tematica | null }
  };

  // --- Opciones de Temáticas para los p-dropdown ---
  opcionesTematica = [
    { label: 'Ambiental', value: 'Ambiental' },
    { label: 'Tecnológica', value: 'Tecnológica' },
    { label: 'Política', value: 'Política' },
    { label: 'Social', value: 'Social' },
    { label: 'Económica', value: 'Económica' },
    { label: 'General', value: 'General' }
  ];

  ngOnInit(): void {
    this.inicializarDatos();
  }

  /**
   * Clasifica la base de datos ficticia en listas independientes
   * según la nomenclatura/prefijo de cada evento.
   */
  private inicializarDatos(): void {
    // Clasificación por prefijo (SD/RD, CS/EC o Tecnologías Emergentes)
    this.eventosSenales = DATABASE.filter(e => 
      e.nombre.startsWith('SD-') || e.nombre.startsWith('RD-')
    );
    
    this.eventosCartas = DATABASE.filter(e => 
      e.nombre.startsWith('CS-') || e.nombre.startsWith('EC-')
    );

    this.eventosTecnologias = DATABASE.filter(e => 
      !e.nombre.startsWith('SD-') && 
      !e.nombre.startsWith('RD-') && 
      !e.nombre.startsWith('CS-') && 
      !e.nombre.startsWith('EC-')
    );

    // Inicializa el renderizado de las tres tablas con sus filtros vacíos
    this.aplicarFiltros('senales');
    this.aplicarFiltros('cartas');
    this.aplicarFiltros('tecnologias');
  }

  /**
   * Aplica filtros de texto y temática de manera reactiva e independiente
   * según la pestaña activa.
   */
  aplicarFiltros(pestana: CategoriaPestana): void {
    const filtro = this.filtros[pestana];
    const texto = filtro.texto.trim().toLowerCase();

    switch (pestana) {
      case 'senales':
        this.filtradosSenales = this.eventosSenales.filter(e => {
          const coincideTexto = !texto || e.nombre.toLowerCase().includes(texto);
          const coincideTema = !filtro.tema || e.tematica === filtro.tema;
          return coincideTexto && coincideTema;
        });
        break;

      case 'cartas':
        this.filtradosCartas = this.eventosCartas.filter(e => {
          const coincideTexto = !texto || e.nombre.toLowerCase().includes(texto);
          const coincideTema = !filtro.tema || e.tematica === filtro.tema;
          return coincideTexto && coincideTema;
        });
        break;

      case 'tecnologias':
        this.filtradosTecnologias = this.eventosTecnologias.filter(e => {
          const coincideTexto = !texto || e.nombre.toLowerCase().includes(texto);
          const coincideTema = !filtro.tema || e.tematica === filtro.tema;
          return coincideTexto && coincideTema;
        });
        break;
    }
  }

  /**
   * Retorna el severity correspondiente a PrimeNG para la temática.
   */
  severityDe(tematica: Tematica) {
    return TEMATICA_SEVERITY[tematica];
  }

  /**
   * Limpia los inputs/selects de la pestaña indicada y restablece la tabla.
   */
  limpiarFiltros(pestana: CategoriaPestana): void {
    this.filtros[pestana].texto = '';
    this.filtros[pestana].tema = null;
    this.aplicarFiltros(pestana);
  }

  /**
   * Abre la ficha metodológica en una pestaña nueva de forma segura.
   */
  abrirFicha(url: string): void {
    window.open(url, '_blank', 'noopener');
  }
}