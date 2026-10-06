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

// ===== PASO 1: Diseño de vigilancia (Fase 1) =====
export type CategoriaVig = 'Escenarios' | 'Tendencias' | 'Riesgos' | 'Oportunidades';
export const CATEGORIAS_VIG: CategoriaVig[] = ['Escenarios', 'Tendencias', 'Riesgos', 'Oportunidades'];

export type TipoHecho = 'OBSERVABLE' | 'POTENCIAL';

/** Caso ya existente en el Observatorio (ficha de tendencia, riesgo, oportunidad o escenario). */
export interface FichaCatalogo {
  id: string;              // identificador de la ficha (último tramo de la URL)
  categoria: CategoriaVig;
  titulo: string;
  tema?: string;
  resumen: string;
  url: string;
  periodo?: string;
}

/** Hecho precursor: lo diseña el Ceplan sobre una ficha de tendencia, riesgo u oportunidad. */
export interface HechoPrecursor {
  id: string;
  elementoId: string;      // id de la ficha de la que se deriva
  tipo: TipoHecho;
  descripcion: string;
  indicador: string;       // indicador o proxy
  fuente: string;
  periodicidad: string;
  umbral: string;          // umbral o condición de alerta
}

/** Diseño de vigilancia de un territorio, enlazado a las fichas del catálogo por id. */
export interface DisenoTerritorio {
  /** id de ficha de escenario -> elementos de futuro que lo configuran */
  escenarios: Record<string, { elementoId: string; justificacion: string }[]>;
  hechos: HechoPrecursor[];
}


// ===== PASO 2: Búsqueda y captación (Fase 2) =====
export type NivelFuente = 'OFICIAL' | 'CIENTIFICA' | 'SENAL_TEMPRANA' | 'ABIERTA';
export type MecanismoCaptacion = 'AUTOMATIZADA' | 'SEMIAUTOMATIZADA' | 'MANUAL';
export type DireccionSenal = 'CONSISTENTE' | 'CONTRARIA' | 'NEUTRA' | 'INCIERTA';

export interface FuenteBusqueda {
  nombre: string;
  nivel: NivelFuente;
  principal: boolean;       // false = complementaria
}

/** Perfil de búsqueda (ficha de vigilancia) configurado en el ONP para un hecho precursor. */
export interface PerfilBusqueda {
  hechoId: string;
  modalidad: 'DIRIGIDA' | 'EXPLORATORIA';
  informacionRequerida: string;
  fuentes: FuenteBusqueda[];
  mecanismo: MecanismoCaptacion;
  terminos: string[];
  frecuencia: string;
  pertinencia: string;      // criterio para aceptar o descartar un resultado
}

/** Registro de la matriz de búsqueda y captación. Es un insumo de trabajo, no una evidencia validada. */
export interface EvidenciaCaptada {
  id: string;
  hechoId: string;
  fechaCaptacion: string;      // ISO yyyy-MM-dd: cuándo se registró
  periodoReferencia: string;   // a qué periodo corresponde el dato (puede ser anterior)
  hallazgo: string;
  valorIndicador?: string;
  fuente: string;
  enlace: string;
  mecanismo: MecanismoCaptacion;
  direccion: DireccionSenal;
}

/** Señal detectada en el escaneo del horizonte, fuera del diseño inicial. */
export interface SenalHorizonte {
  id: string;
  fecha: string;               // ISO yyyy-MM-dd
  titulo: string;
  descripcion?: string;
  fuente: string;
  enlace?: string;
  estado: 'NUEVA' | 'PROPUESTA';   // PROPUESTA = enviada al Paso 1 para análisis
}

export interface CapturaTerritorio {
  perfiles: PerfilBusqueda[];
  evidencias: EvidenciaCaptada[];
  senales: SenalHorizonte[];
}