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

// ===== Catálogo del Observatorio =====
export type CategoriaVig = 'Escenarios' | 'Tendencias' | 'Riesgos' | 'Oportunidades';
export const CATEGORIAS_VIG: CategoriaVig[] = ['Escenarios', 'Tendencias', 'Riesgos', 'Oportunidades'];

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

// ===== PASO 1: Delimitación y diseño (Fase 1) =====
export type TipoHecho = 'OBSERVABLE' | 'POTENCIAL';
/** Criterios de umbral del documento: normativo/técnico, histórico/estadístico, tendencial, expertos, por evento. */
export type TipoUmbral = 'NORMATIVO' | 'HISTORICO' | 'TENDENCIAL' | 'EXPERTOS' | 'EVENTO';

/** Etapa 1: información recuperada del plan aprobado (tipo de insumo → información). */
export interface InsumoPlan {
  tipo: string;
  informacion: string;
}

/** Etapa 2: elemento de futuro (ficha de tendencia, riesgo u oportunidad) que configura el escenario. */
export interface ElementoEscenario {
  elementoId: string;
  justificacion: string;
}

/** Etapa 3: cómo se pasa del elemento de futuro al hecho precursor. */
export interface RazonamientoHecho {
  aspecto: string;         // aspecto relevante del elemento de futuro
  cambio: string;          // cambio relevante en su trayectoria
  manifestacion: string;   // manifestación anticipatoria
}

/** Hechos precursores + etapa 4: indicador, línea base, fuente, periodicidad y umbral. */
export interface HechoPrecursor {
  id: string;
  elementoId: string;      // id de la ficha de la que se deriva
  tipo: TipoHecho;
  descripcion: string;
  razonamiento: RazonamientoHecho;
  indicador: string;       // indicador o proxy
  lineaBase: string;
  fuente: string;
  periodicidad: string;
  tipoUmbral: TipoUmbral;
  umbral: string;          // umbral o condición de alerta (puede ser cualitativa)
}

export interface DisenoEscenario {
  instrumento: string;
  horizonte: string;
  insumos: InsumoPlan[];             // etapa 1
  elementos: ElementoEscenario[];    // etapa 2
}

/** Diseño de vigilancia de un territorio, enlazado a las fichas del catálogo por id. */
export interface DisenoTerritorio {
  escenarios: Record<string, DisenoEscenario>;   // id de ficha de escenario -> su diseño
  hechos: HechoPrecursor[];                      // etapas 3 y 4
}

// ===== PASO 2: Búsqueda y captación (Fase 2) =====
export type NivelFuente = 'OFICIAL' | 'CIENTIFICA' | 'SENAL_TEMPRANA' | 'ABIERTA';
export type MecanismoCaptacion = 'AUTOMATIZADA' | 'SEMIAUTOMATIZADA' | 'MANUAL';
export type DireccionSenal = 'CONSISTENTE' | 'CONTRARIA' | 'NEUTRA' | 'INCIERTA';
export type OrigenEvidencia = 'PRIMARIA' | 'REPRODUCCION';   // fuente primaria independiente o reproducción de otra

export interface FuenteBusqueda {
  nombre: string;
  nivel: NivelFuente;
  principal: boolean;       // false = complementaria
}

/** Asistente · paso 1: fuentes, bases y referencias ya documentadas en el plan aprobado. */
export interface ReferenciaPlan {
  id: string;
  tipo: 'Fuente' | 'Base de datos' | 'Referencia';
  descripcion: string;
  nivel: NivelFuente;
}

/** Asistente · paso 2: lo que el ONP ya tiene sobre el hecho y sus elementos prospectivos. */
export interface AntecedenteOnp {
  id: string;
  tipo: 'Ficha' | 'Indicador' | 'Análisis';
  titulo: string;
  detalle: string;
}

/** Asistente · paso 3: resultado de la búsqueda abierta en entornos externos. */
export interface ResultadoExterno {
  id: string;
  titulo: string;
  fuente: string;
  nivel: NivelFuente;
  fecha: string;            // ISO yyyy-MM-dd
  fragmento: string;
}

/** Material que el asistente ofrece para un hecho precursor. */
export interface MaterialBusqueda {
  hechoId: string;
  referenciasPlan: ReferenciaPlan[];
  antecedentesOnp: AntecedenteOnp[];
  resultadosExternos: ResultadoExterno[];
}

/** Perfil de búsqueda configurado en el ONP: resultado del asistente (paso 4). */
export interface PerfilBusqueda {
  hechoId: string;
  modalidad: 'DIRIGIDA' | 'EXPLORATORIA';
  informacionRequerida: string;
  planIds: string[];                // insumos del plan usados
  onpIds: string[];                 // antecedentes del ONP reutilizados
  externosIds: string[];            // resultados externos incorporados
  fuentes: FuenteBusqueda[];        // dónde se buscará
  acceso: string;                   // cómo se accederá a la información
  terminos: string[];
  ecuacion: string;                 // palabras clave con operadores
  filtros: string;                  // filtros temáticos, territoriales y temporales
  mecanismo: MecanismoCaptacion;
  frecuencia: string;
  pertinencia: string;              // criterio para aceptar o descartar un resultado
}

/** Registro de la matriz de captación. Es un insumo de trabajo, no una evidencia validada. */
export interface EvidenciaCaptada {
  id: string;
  hechoId: string;
  fechaCaptacion: string;      // ISO yyyy-MM-dd: cuándo se registró
  periodoReferencia: string;   // a qué periodo corresponde el dato (puede ser anterior)
  hallazgo: string;
  valorIndicador?: string;
  fuente: string;
  nivelFuente: NivelFuente;
  origen: OrigenEvidencia;
  enlace: string;
  mecanismo: MecanismoCaptacion;
  direccion: DireccionSenal;
}

export interface EvaluacionSenal {
  relevancia: 'ALTA' | 'MEDIA' | 'BAJA';
  persistencia: 'ALTA' | 'MEDIA' | 'BAJA';
  impacto: 'ALTA' | 'MEDIA' | 'BAJA';   // potencial de impacto
}

/** Señal detectada en el escaneo del horizonte, fuera del diseño inicial. */
export interface SenalHorizonte {
  id: string;
  fecha: string;
  titulo: string;
  descripcion?: string;
  fuente: string;
  estado: 'NUEVA' | 'EN_OBSERVACION' | 'PROPUESTA';   // PROPUESTA = enviada al Paso 1
  evaluacion?: EvaluacionSenal;
}

export interface CapturaTerritorio {
  material: MaterialBusqueda[];
  perfiles: PerfilBusqueda[];
  evidencias: EvidenciaCaptada[];
  senales: SenalHorizonte[];
}