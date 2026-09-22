export type ElementoTipo = 'TENDENCIA' | 'RIESGO' | 'OPORTUNIDAD' | 'EVENTO';
export type NivelAlerta = 'ROJO' | 'AMBAR' | 'VERDE';

export interface ElementoFuturo {
  id: string;
  titulo: string;
  descripcion: string;
  tipo: ElementoTipo;
  territorio: string;
  sector: string;
  alerta: NivelAlerta;
  distanciaCentro: number; // 0 a 100
  anguloGrados: number;    // 0 a 360
}

export interface EncuestaValidacion {
  pertinencia: 'SI' | 'NO';
  nivelAlertaSugerido: NivelAlerta;
  comentarios: string;
}