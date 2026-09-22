// ============================================================================
// guia-prospectiva.model.ts
// Interfaces + datos maestros del selector interactivo y la biblioteca de
// métodos. Portado 1:1 desde la lógica del mockup v1 (routeMatrix,
// genericPhaseMethods, buildInputs) a tipos TypeScript.
//
// En un proyecto real, esto normalmente vendría de un endpoint / API y no
// hardcodeado aquí. Se deja como constantes para mantener el mockup
// autocontenido y fácil de revisar.
// ============================================================================

export type InstrumentId = 'pei' | 'pdlc' | 'pdrc' | 'pesem' | 'pn';

export type PhaseId =
  | 'caracterizacion'
  | 'diagnostico'
  | 'escenarios'
  | 'opciones'
  | 'futuro';

export type Difficulty = 'Baja' | 'Intermedia' | 'Alta';

export type InputType = 'Evidencia' | 'Experticia' | 'Participación' | 'Creatividad';

export type RouteKey = 'route1' | 'route2';

export type ResourceKey = 'time' | 'information' | 'specialists' | 'participation';

export interface Instrument {
  short: string;
  name: string;
  pages: string;
}

export interface Phase {
  name: string;
  phase: string; // "Fase 1" | "Fase 2" | "Fase 3"
  description: string;
}

export interface ProductOption {
  id: string;
  title: string;
  desc: string;
}

export interface MethodItem {
  id: string;
  n: number | string;
  name: string;
  page: number;
  phases: PhaseId[];
  instruments: InstrumentId[];
  difficulty: Difficulty;
  time: string;
  participation: string;
  inputs: InputType[];
  purpose: string;
  output: string;
}

export interface RouteDefinition {
  label: string;
  methods: string[];
  optional: string[];
  time: string;
  complexity: string;
}

export interface Resources {
  time: number;
  information: number;
  specialists: number;
  participation: number;
}

export interface WizardResult {
  routeKey: RouteKey;
  route: RouteDefinition;
  selected: MethodItem[];
  product: ProductOption;
  inputs: string[];
}

export interface ResourceLevelOption {
  label: string;
  value: number;
}

// ----------------------------------------------------------------------------
// Datos maestros
// ----------------------------------------------------------------------------

export const INSTRUMENTS: Record<InstrumentId, Instrument> = {
  pei: { short: 'PEI', name: 'Plan Estratégico Institucional', pages: '47–56' },
  pdlc: { short: 'PDLC', name: 'Plan de Desarrollo Local Concertado', pages: '58–66' },
  pdrc: { short: 'PDRC', name: 'Plan de Desarrollo Regional Concertado', pages: '67–78' },
  pesem: { short: 'PESEM', name: 'Plan Estratégico Sectorial Multianual', pages: '79–87' },
  pn: { short: 'PN', name: 'Política Nacional', pages: '88–96' }, 
};

export const PHASES: Record<PhaseId, Phase> = {
  caracterizacion: {
    name: 'Caracterización',
    phase: 'Fase 1',
    description: 'Comprender y describir el objeto de estudio, territorio, sector, entidad o problema público.',
  },
  diagnostico: {
    name: 'Diagnóstico',
    phase: 'Fase 1',
    description: 'Identificar variables, relaciones, brechas, causas, actores o factores clave.',
  },
  escenarios: {
    name: 'Formulación de escenarios',
    phase: 'Fase 2',
    description: 'Explorar tendencias, riesgos, oportunidades, eventos y futuros alternativos.',
  },
  opciones: {
    name: 'Opciones estratégicas',
    phase: 'Fase 2',
    description: 'Generar, evaluar y priorizar respuestas o cursos de acción.',
  },
  futuro: {
    name: 'Definición del futuro deseado',
    phase: 'Fase 3',
    description: 'Precisar el futuro deseado y conectar el presente con acciones e hitos.',
  },
};

export const PRODUCT_OPTIONS: Record<PhaseId, ProductOption[]> = {
  caracterizacion: [
    { id: 'caracterizacion_integral', title: 'Caracterización integral', desc: 'Descripción estructurada del objeto de estudio y su entorno.' },
    { id: 'mapa_actores_territorio', title: 'Mapa de territorio o actores', desc: 'Representación gráfica de relaciones, capacidades o condiciones.' },
    { id: 'problema_publico', title: 'Delimitación del problema público', desc: 'Problema, causas, efectos y población afectada.' },
  ],
  diagnostico: [
    { id: 'variables_clave', title: 'Variables o factores clave', desc: 'Selección y clasificación de variables estratégicas.' },
    { id: 'brechas_causas', title: 'Brechas, causas y limitaciones', desc: 'Evidencia organizada para explicar la situación actual.' },
    { id: 'actores_influencia', title: 'Actores e influencias', desc: 'Roles, relaciones de poder, intereses y objetivos.' },
  ],
  escenarios: [
    { id: 'escenarios_alternativos', title: 'Escenarios alternativos', desc: 'Narrativas coherentes de futuros posibles.' },
    { id: 'eventos_futuro', title: 'Tendencias y eventos de futuro', desc: 'Radar de tendencias, riesgos, oportunidades y disrupciones.' },
    { id: 'impactos', title: 'Impactos y consecuencias', desc: 'Efectos de eventos o fuerzas de cambio en distintos horizontes.' },
  ],
  opciones: [
    { id: 'opciones_priorizadas', title: 'Opciones estratégicas priorizadas', desc: 'Acciones ordenadas por importancia, gobernabilidad o impacto.' },
    { id: 'consenso', title: 'Acuerdos y consensos', desc: 'Selección participativa de alternativas.' },
    { id: 'estrategias', title: 'Estrategias frente a escenarios', desc: 'Respuestas para aprovechar oportunidades o mitigar riesgos.' },
  ],
  futuro: [
    { id: 'futuro_deseado', title: 'Narrativa del futuro deseado', desc: 'Estado futuro esperado, deseable y factible.' },
    { id: 'hoja_ruta', title: 'Hoja de ruta', desc: 'Hitos, capacidades y acciones desde el presente al futuro.' },
    { id: 'valores_esperados', title: 'Valores esperados y factibles', desc: 'Metas o valores de variables articulados al horizonte temporal.' },
  ],
};

export const METHODS: MethodItem[] = [
  { id: 'competencias', n: 1, name: 'Árbol de competencias de Marc Giget', page: 100, phases: ['caracterizacion', 'escenarios'], instruments: ['pei', 'pdrc', 'pn'], difficulty: 'Intermedia', time: '2–4 sesiones', participation: 'Equipo técnico y expertos', inputs: ['Evidencia', 'Experticia', 'Creatividad'], purpose: 'Organiza capacidades, funciones y productos en el pasado, presente y futuro.', output: 'Caracterización del objeto de estudio e identificación de riesgos y oportunidades.' },
  { id: 'mapas', n: 2, name: 'Mapas parlantes', page: 115, phases: ['caracterizacion', 'escenarios', 'futuro'], instruments: ['pdlc', 'pdrc'], difficulty: 'Intermedia', time: '1–3 talleres', participation: 'Participación ciudadana', inputs: ['Participación', 'Evidencia', 'Creatividad'], purpose: 'Recoge y representa percepciones e información sobre un territorio.', output: 'Modelos cartográficos actuales, futuros o del futuro deseado.' },
  { id: 'problemas', n: 3, name: 'Árbol de problemas', page: 122, phases: ['caracterizacion', 'diagnostico'], instruments: ['pn', 'pdlc', 'pdrc', 'pei'], difficulty: 'Baja', time: '1–2 talleres', participation: 'Equipo y actores vinculados', inputs: ['Evidencia', 'Participación'], purpose: 'Identifica y visualiza un problema central, sus causas y efectos.', output: 'Árbol y modelo del problema público.' },
  { id: 'estructural', n: 4, name: 'Análisis estructural', page: 133, phases: ['diagnostico', 'opciones'], instruments: ['pdrc', 'pesem', 'pn'], difficulty: 'Alta', time: '3–6 sesiones', participation: 'Grupo de expertos', inputs: ['Evidencia', 'Experticia'], purpose: 'Analiza influencias y dependencias entre variables de un sistema.', output: 'Variables estratégicas clasificadas y propuestas estratégicas.' },
  { id: 'actores', n: 5, name: 'Análisis de juego de actores', page: 149, phases: ['diagnostico', 'opciones'], instruments: ['pei', 'pdlc', 'pdrc', 'pesem', 'pn'], difficulty: 'Alta', time: '3–5 sesiones', participation: 'Actores y expertos', inputs: ['Participación', 'Experticia', 'Evidencia'], purpose: 'Examina intereses, objetivos, relaciones de poder e influencia entre actores.', output: 'Matrices de actores, objetivos e influencias; selección de opciones.' },
  { id: 'sistemas', n: 6, name: 'Dinámica de sistemas', page: 163, phases: ['diagnostico', 'escenarios', 'opciones', 'futuro'], instruments: ['pesem', 'pn', 'pei'], difficulty: 'Alta', time: '4–8 semanas', participation: 'Especialistas y equipo técnico', inputs: ['Evidencia', 'Experticia'], purpose: 'Modela relaciones causales y el comportamiento de variables a lo largo del tiempo.', output: 'Modelo causal, proyecciones, escenarios y opciones.' },
  { id: 'regnier', n: 7, name: 'Ábaco de Regnier', page: 172, phases: ['diagnostico', 'escenarios', 'opciones', 'futuro'], instruments: ['pei', 'pdlc', 'pdrc', 'pesem', 'pn'], difficulty: 'Intermedia', time: '1–2 sesiones', participation: 'Grupo de participantes', inputs: ['Participación', 'Experticia'], purpose: 'Visualiza posiciones y facilita acuerdos mediante una escala de colores.', output: 'Selección de variables, tendencias, opciones o acuerdos.' },
  { id: 'cla', n: 8, name: 'Análisis causal estratificado (CLA)', page: 182, phases: ['diagnostico', 'futuro'], instruments: ['pdrc', 'pn'], difficulty: 'Intermedia', time: '1–2 talleres', participation: 'Actores diversos', inputs: ['Participación', 'Creatividad', 'Experticia'], purpose: 'Profundiza en causas visibles, sistémicas, discursivas y metafóricas.', output: 'Deconstrucción del objeto de estudio y consenso sobre el futuro.' },
  { id: 'foda', n: 9, name: 'FODA prospectivo', page: 189, phases: ['diagnostico', 'escenarios', 'opciones'], instruments: ['pei', 'pdlc', 'pdrc', 'pesem', 'pn'], difficulty: 'Intermedia', time: '1–2 talleres', participation: 'Equipo y actores', inputs: ['Evidencia', 'Creatividad', 'Participación'], purpose: 'Evalúa fortalezas, oportunidades, debilidades y amenazas con mirada de futuro.', output: 'Matriz FODA prospectiva y propuestas de opciones estratégicas.' },
  { id: 'igo', n: 10, name: 'Matriz de importancia y gobernabilidad (IGO)', page: 200, phases: ['diagnostico', 'opciones'], instruments: ['pei', 'pdlc', 'pdrc', 'pesem', 'pn'], difficulty: 'Baja', time: '1 taller', participation: 'Equipo de planeamiento', inputs: ['Experticia', 'Participación'], purpose: 'Prioriza variables u opciones según importancia y grado de gobernabilidad.', output: 'Variables u opciones categorizadas y priorizadas.' },
  { id: 'design', n: 11, name: 'Pensamiento de diseño', page: 210, phases: ['caracterizacion', 'diagnostico'], instruments: ['pei', 'pdlc', 'pn'], difficulty: 'Intermedia', time: '2–4 sesiones', participation: 'Usuarios, equipo y actores', inputs: ['Participación', 'Creatividad'], purpose: 'Coloca a las personas al centro para comprender necesidades y crear soluciones.', output: 'Necesidades, problemas, ideas y propuestas de mejora o innovación.' },
  { id: 'horizonte', n: 12, name: 'Escaneo del horizonte', page: 218, phases: ['escenarios'], instruments: ['pei', 'pdlc', 'pdrc', 'pesem', 'pn'], difficulty: 'Intermedia', time: '2–4 semanas', participation: 'Equipo técnico y expertos', inputs: ['Evidencia', 'Experticia'], purpose: 'Explora sistemáticamente señales, tendencias, riesgos, oportunidades y disrupciones.', output: 'Listado y evaluación de eventos de futuro.' },
  { id: 'rueda', n: 13, name: 'Rueda de futuros', page: 232, phases: ['escenarios', 'opciones'], instruments: ['pdlc', 'pdrc', 'pesem', 'pn'], difficulty: 'Baja', time: '1 taller', participation: 'Grupo participativo', inputs: ['Creatividad', 'Participación'], purpose: 'Explora consecuencias directas e indirectas de un evento o cambio.', output: 'Diagrama de impactos y propuestas de respuesta.' },
  { id: 'schwartz', n: 14, name: 'Ejes de Peter Schwartz', page: 240, phases: ['escenarios'], instruments: ['pei', 'pdrc', 'pn'], difficulty: 'Intermedia', time: '2–3 talleres', participation: 'Expertos y actores', inputs: ['Creatividad', 'Experticia', 'Participación'], purpose: 'Construye cuatro campos de escenarios a partir de incertidumbres críticas.', output: 'Narrativas de escenarios alternativos.' },
  { id: 'morfologico', n: 15, name: 'Análisis morfológico', page: 257, phases: ['escenarios'], instruments: ['pesem', 'pn', 'pdrc'], difficulty: 'Alta', time: '3–5 sesiones', participation: 'Grupo de expertos', inputs: ['Creatividad', 'Experticia'], purpose: 'Combina hipótesis de variables para explorar configuraciones de escenarios.', output: 'Espacio morfológico y escenarios posibles o preferidos.' },
  { id: 'impactos', n: 16, name: 'Impactos Cruzados Probabilísticos', page: 274, phases: ['escenarios', 'futuro'], instruments: ['pesem', 'pn', 'pdrc'], difficulty: 'Alta', time: '4–8 semanas', participation: 'Grupo de expertos', inputs: ['Evidencia', 'Experticia'], purpose: 'Estima probabilidades y relaciones condicionadas entre eventos o hipótesis.', output: 'Escenarios y estimación de probabilidades.' },
  { id: 'delphi', n: 17, name: 'Delphi', page: 283, phases: ['escenarios', 'opciones', 'futuro'], instruments: ['pesem', 'pn', 'pdrc'], difficulty: 'Alta', time: '3 rondas · 4–8 sem.', participation: 'Panel de expertos', inputs: ['Experticia'], purpose: 'Recoge y contrasta juicios expertos en rondas sucesivas hasta aproximar consensos.', output: 'Valoraciones, consensos y estimaciones sobre eventos o variables.' },
  { id: 'backcasting', n: 18, name: 'Backcasting', page: 294, phases: ['opciones', 'futuro'], instruments: ['pei', 'pdlc', 'pdrc', 'pesem', 'pn'], difficulty: 'Intermedia', time: '2–3 talleres', participation: 'Equipo y actores clave', inputs: ['Creatividad', 'Participación', 'Experticia'], purpose: 'Parte del futuro deseado y trabaja hacia atrás para identificar acciones necesarias.', output: 'Narrativa del futuro deseado y secuencia retrospectiva de acciones.' },
  { id: 'hoja', n: 19, name: 'Hoja de ruta', page: 306, phases: ['opciones', 'futuro'], instruments: ['pei', 'pdrc', 'pesem', 'pn'], difficulty: 'Intermedia', time: '2–4 talleres', participation: 'Equipo y especialistas', inputs: ['Experticia', 'Creatividad', 'Evidencia'], purpose: 'Articula situación actual, hitos, capacidades, acciones y escenario deseado.', output: 'Ruta central con hitos, decisiones y opciones estratégicas.' },
  { id: 'sig', n: 'HC1', name: 'Sistemas de Información Geográficos (SIG)', page: 313, phases: ['caracterizacion', 'escenarios', 'futuro'], instruments: ['pdlc', 'pdrc', 'pesem', 'pn'], difficulty: 'Alta', time: 'Variable', participation: 'Especialistas SIG y equipo', inputs: ['Evidencia'], purpose: 'Gestiona y representa datos geoespaciales para comprender el territorio.', output: 'Mapas temáticos y análisis espaciales.' },
  { id: 'talleres', n: 'HC2', name: 'Talleres de prospectiva', page: 322, phases: ['caracterizacion', 'diagnostico', 'escenarios', 'opciones', 'futuro'], instruments: ['pei', 'pdlc', 'pdrc', 'pesem', 'pn'], difficulty: 'Baja', time: '1 jornada por sesión', participation: 'Participación amplia', inputs: ['Participación', 'Creatividad'], purpose: 'Crea espacios de diálogo y reflexión para aplicar uno o más métodos.', output: 'Acuerdos, insumos y productos construidos colectivamente.' },
];

export const ROUTE_MATRIX: Record<InstrumentId, Record<RouteKey, RouteDefinition>> = {
  pei: {
    route1: { label: 'Ruta metodológica 1', methods: ['competencias', 'regnier', 'schwartz', 'igo', 'backcasting'], optional: ['actores', 'horizonte'], time: '4–6 semanas', complexity: 'Intermedia' },
    route2: { label: 'Ruta metodológica 2', methods: ['design', 'foda', 'schwartz', 'hoja'], optional: ['actores', 'horizonte'], time: '3–5 semanas', complexity: 'Intermedia' },
  },
  pdlc: {
    route1: { label: 'Ruta metodológica 1', methods: ['mapas', 'regnier', 'foda', 'backcasting'], optional: ['sig'], time: '4–6 semanas', complexity: 'Baja a intermedia' },
    route2: { label: 'Ruta metodológica 2', methods: ['mapas', 'horizonte', 'rueda', 'regnier', 'backcasting'], optional: ['sig'], time: '5–8 semanas', complexity: 'Intermedia' },
  },
  pdrc: {
    route1: { label: 'Ruta metodológica 1', methods: ['estructural', 'schwartz', 'igo', 'backcasting'], optional: ['horizonte', 'sig', 'actores'], time: '6–10 semanas', complexity: 'Intermedia a alta' },
    route2: { label: 'Ruta metodológica 2', methods: ['mapas', 'cla', 'horizonte', 'rueda', 'hoja'], optional: ['sig', 'actores'], time: '8–12 semanas', complexity: 'Intermedia' },
  },
  pesem: {
    route1: { label: 'Ruta metodológica 1', methods: ['estructural', 'delphi', 'horizonte', 'igo'], optional: ['actores', 'sig', 'morfologico'], time: '8–12 semanas', complexity: 'Alta' },
    route2: { label: 'Ruta metodológica 2', methods: ['estructural', 'rueda', 'backcasting'], optional: ['sistemas', 'actores', 'horizonte', 'sig'], time: '6–10 semanas', complexity: 'Intermedia a alta' },
  },
  pn: {
    route1: { label: 'Ruta metodológica 1', methods: ['problemas', 'horizonte', 'igo', 'backcasting'], optional: ['actores', 'sistemas', 'cla', 'sig'], time: '8–14 semanas', complexity: 'Intermedia a alta' },
    route2: { label: 'Ruta metodológica 2', methods: ['problemas', 'horizonte', 'schwartz', 'backcasting'], optional: ['actores', 'sig'], time: '6–10 semanas', complexity: 'Intermedia' },
  },
};

export const GENERIC_PHASE_METHODS: Record<PhaseId, string[]> = {
  caracterizacion: ['competencias', 'mapas', 'problemas', 'design', 'sig'],
  diagnostico: ['estructural', 'actores', 'regnier', 'cla', 'foda', 'igo', 'sistemas'],
  escenarios: ['horizonte', 'rueda', 'schwartz', 'morfologico', 'impactos', 'delphi', 'sistemas'],
  opciones: ['igo', 'actores', 'foda', 'rueda', 'backcasting', 'hoja'],
  futuro: ['backcasting', 'hoja', 'mapas', 'delphi', 'impactos'],
};

export const RESOURCE_LEVELS: ResourceLevelOption[] = [
  { label: 'Bajo', value: 1 },
  { label: 'Medio', value: 2 },
  { label: 'Alto', value: 3 },
];

export const RESOURCE_LABELS: { key: ResourceKey; title: string; desc: string }[] = [
  { key: 'time', title: 'Tiempo disponible', desc: 'Margen para revisar evidencia, convocar actores y aplicar pasos.' },
  { key: 'information', title: 'Información disponible', desc: 'Datos, documentos, estudios y registros relevantes.' },
  { key: 'specialists', title: 'Especialistas', desc: 'Disponibilidad de perfiles técnicos o expertos temáticos.' },
  { key: 'participation', title: 'Participación', desc: 'Capacidad de convocar actores, usuarios o ciudadanía.' },
];

export interface KitItem {
  id: string;
  title: string;
  format: 'XLSX' | 'DOCX' | 'PPTX' | 'PDF';
  description: string;
  phase: PhaseId;
}

export const KITS_DATA: KitItem[] = [
  { id: 'matriz-variables', title: 'Matriz de Análisis Estructural y Variables Clave', format: 'XLSX', description: 'Plantilla automatizada para calificación de influencias directas.', phase: 'diagnostico' },
  { id: 'guion-talleres', title: 'Guión para Talleres Participativos de Construcción de Escenarios', format: 'DOCX', description: 'Estructura paso a paso para la facilitación de mesas de trabajo.', phase: 'escenarios' },
  { id: 'hoja-ruta-plantilla', title: 'Plantilla de Hoja de Ruta e Hitos Estratégicos', format: 'PPTX', description: 'Lienzo visual para conectar el presente con el futuro deseado.', phase: 'futuro' }
];

