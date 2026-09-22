export type Tematica = 'Ambiental' | 'Tecnológica' | 'Política' | 'Social' | 'Económica' | 'General';
export type CategoriaProspectiva = 'Señal Débil' | 'Carta Salvaje' | 'Tecnología Emergente' | 'Ruptura o disrupción' | 'Evento catastrófico';
export type Categoria = '' | 'Carta Salvaje' | 'Tecnología Emergente' | 'Ruptura o disrupción' | 'Evento catastrófico';

export interface Evento {

  nombre: string;
  tematica: Tematica;
  fechaActualizacion: string; // ISO string, ej. '2025-07-17'
  urlFicha: string;
  categoria: CategoriaProspectiva;
}

// Mapea cada temática al "severity" de PrimeNG (p-tag) para que el color
// sea consistente con la leyenda del radar de eventos futuros.
export const TEMATICA_SEVERITY: Record<Tematica, 'success' | 'info' | 'warning' | 'danger' | 'contrast' | 'secondary'> = {
  Ambiental: 'success',   // verde
  Tecnológica: 'info',    // azul
  Política: 'contrast',   // morado -> se sobreescribe por CSS
  Social: 'danger',       // rojo
  Económica: 'warning',   // ámbar
  General: 'secondary'    // gris o neutro
};

export const DATABASE: Evento[] = [
  // --- SEÑALES DÉBILES / RUPTURAS ---
  {

    nombre: 'SD-Expansión de la ansiedad climática',
    tematica: 'Ambiental',
    fechaActualizacion: '2024-09-30',
    urlFicha: 'https://observatorio.ceplan.gob.pe/ficha/S28',
    categoria: 'Señal Débil'
  },
  {
    nombre: 'SD-Mayor uso de vehículos aéreos no tripulados',
    tematica: 'Tecnológica',
    fechaActualizacion: '2024-12-20',
    urlFicha: 'https://observatorio.ceplan.gob.pe/ficha/S33',
    categoria: 'Señal Débil'
  },
  {
    nombre: 'SD-Uso de la justicia a favor de la acción climática',
    tematica: 'Ambiental',
    fechaActualizacion: '2026-12-20',
    urlFicha: 'https://observatorio.ceplan.gob.pe/ficha/S34',
    categoria: 'Señal Débil'
  },
  {
    nombre: 'RD-Fin de la Internet abierta',
    tematica: 'Social',
    fechaActualizacion: '2026-09-01',
    urlFicha: 'https://observatorio.ceplan.gob.pe/ficha/rd1',
    categoria: 'Ruptura o disrupción'
  },
  {
    nombre: 'RD-Política del más fuerte vuelve a imperar en el mundo',
    tematica: 'Política',
    fechaActualizacion: '2026-11-03',
    urlFicha: 'https://observatorio.ceplan.gob.pe/ficha/rd12',
    categoria: 'Ruptura o disrupción'
  },

  // --- CARTAS SALVAJES / CATASTRÓFICOS ---
  {
    nombre: 'EC-Extraordinario Fenómeno de El Niño',
    tematica: 'Ambiental',
    fechaActualizacion: '2026-07-06',
    urlFicha: 'https://observatorio.ceplan.gob.pe/ficha/S24',
    categoria: 'Evento catastrófico'
  },
  {
    nombre: 'CS-Ataque a satélites',
    tematica: 'Tecnológica',
    fechaActualizacion: '2026-12-20',
    urlFicha: 'https://observatorio.ceplan.gob.pe/ficha/C9',
    categoria: 'Carta Salvaje'
  },
  {
    nombre: 'EC-Amenaza de bioterrorismo con patógenos modificados',
    tematica: 'Social',
    fechaActualizacion: '2026-07-16',
    urlFicha: 'https://observatorio.ceplan.gob.pe/ficha/C6',
    categoria: 'Evento catastrófico'
  },

  // --- TECNOLOGÍAS EMERGENTES ---
  {
    nombre: 'Aplicaciones inteligentes autónomas: el futuro móvil',
    tematica: 'Tecnológica',
    fechaActualizacion: '2026-08-14',
    urlFicha: '/fichas/apps-inteligentes',
    categoria: 'Tecnología Emergente'
  },
  {
    nombre: 'Plenaria e integración de Sistemas de Energías Limpias',
    tematica: 'General',
    fechaActualizacion: '2026-01-10',
    urlFicha: '/fichas/plenaria-anual',
    categoria: 'Tecnología Emergente'
  }
];