export interface ArticuloRadar { 
  titulo: string;
  tituloCorto: string;
  resumen: string;
  url: string;
  imagen?: string;
  categoria?: string;
  tipo: 'caracterizan' | 'impactan';
  horizonte: 'PRESENTE-2030' | '2030-2040' | '2040-2050';
  cuadrante: 'Desarrollo de las personas' | 'Democracia y paz' | 'Competitividad e innovación' | 'Territorio sostenible';
  colorBadge: string;
  colorBgCategory: string;
  colorTextCategory: string;
}

export interface CategoriaSectorDetalle {
  descargaUrl?: string;
  articulos: ArticuloRadar[];
}

export interface ContenidoSector {
  url?: string;
  "Tendencias": CategoriaSectorDetalle;
  "Riesgos": CategoriaSectorDetalle;
  "Oportunidades": CategoriaSectorDetalle;
}

export interface DatabaseSectores {
  [sector: string]: ContenidoSector;
}

/* ==========================================================================
   AYUDANTES PARA ARMAR LOS DATOS
   Para agregar un artículo basta una línea dentro de la categoría:
     tendencia(titulo, tituloCorto, resumen, horizonte, cuadrante, tipo, url?)
   ========================================================================== */

const URL_BASE = 'https://observatorio.ceplan.gob.pe/';

// Horizontes
const P: ArticuloRadar['horizonte'] = 'PRESENTE-2030';
const M: ArticuloRadar['horizonte'] = '2030-2040';
const L: ArticuloRadar['horizonte'] = '2040-2050';

// Cuadrantes del radar
const PER: ArticuloRadar['cuadrante'] = 'Desarrollo de las personas';
const DEM: ArticuloRadar['cuadrante'] = 'Democracia y paz';
const COM: ArticuloRadar['cuadrante'] = 'Competitividad e innovación';
const TER: ArticuloRadar['cuadrante'] = 'Territorio sostenible';

// Tipo de fenómeno
const C: ArticuloRadar['tipo'] = 'caracterizan';
const I: ArticuloRadar['tipo'] = 'impactan';

// Colores por categoría (coinciden con la leyenda y con getCategoryColorData)
const COLORES = {
  Tendencia:   { colorBadge: '#3b82f6', colorBgCategory: '#dbeafe', colorTextCategory: '#1e40af' },
  Riesgo:      { colorBadge: '#ef4444', colorBgCategory: '#fee2e2', colorTextCategory: '#b91c1c' },
  Oportunidad: { colorBadge: '#10b981', colorBgCategory: '#d1fae5', colorTextCategory: '#047857' },
} as const;

type NombreCategoria = keyof typeof COLORES;

const crearArticulo = (categoria: NombreCategoria) => (
  titulo: string,
  tituloCorto: string,
  resumen: string,
  horizonte: ArticuloRadar['horizonte'],
  cuadrante: ArticuloRadar['cuadrante'],
  tipo: ArticuloRadar['tipo'],
  url: string = URL_BASE
): ArticuloRadar => ({
  titulo, tituloCorto, resumen, url, horizonte, cuadrante, tipo,
  categoria,
  ...COLORES[categoria],
});

const tendencia = crearArticulo('Tendencia');
const riesgo = crearArticulo('Riesgo');
const oportunidad = crearArticulo('Oportunidad');

const crearSector = (
  tendencias: ArticuloRadar[],
  riesgos: ArticuloRadar[],
  oportunidades: ArticuloRadar[]
): ContenidoSector => ({
  url: URL_BASE,
  "Tendencias": { descargaUrl: URL_BASE, articulos: tendencias },
  "Riesgos": { descargaUrl: URL_BASE, articulos: riesgos },
  "Oportunidades": { descargaUrl: URL_BASE, articulos: oportunidades },
});

/* ==========================================================================
   BASE DE DATOS POR SECTOR
   ========================================================================== */

export const SECTOR_DATABASE: DatabaseSectores = {
  "Producción": crearSector(
    [
      tendencia("Recuperación de la clase media", "Clase media", "Ampliación de los hogares con ingresos medios que sostienen el consumo y la demanda interna.", P, PER, C, URL_BASE + "ficha/t33"),
      tendencia("Incremento de la cobertura de electrificación", "Cobertura de electrificación", "Mayor acceso a energía eléctrica en zonas productivas urbanas y rurales.", P, TER, C, URL_BASE + "ficha/t39"),
      tendencia("Incremento de la cobertura de los sistemas previsionales contributivos", "Cobertura de pensiones", "Más trabajadores afiliados a sistemas de pensiones contributivos.", P, PER, C, URL_BASE + "ficha/t28"),
      tendencia("Aumento del comercio electrónico", "Comercio electrónico", "Crecimiento de las ventas en línea y de los canales digitales de distribución.", P, COM, C, URL_BASE + "ficha/t68"),
      tendencia("Mayor concentración de la población en centros urbanos", "Concentración urbana", "Migración hacia ciudades que modifica la demanda de bienes y servicios.", P, TER, C, URL_BASE + "ficha/t18"),
      tendencia("Mayores conflictos sociales", "Conflictos sociales", "Aumento de conflictos que pueden afectar la operación de proyectos productivos.", P, DEM, C, URL_BASE + "ficha/t27"),
      tendencia("Aumento de la adopción de biomateriales para la industria", "Biomateriales en la industria", "Uso creciente de materiales de origen biológico como alternativa a los insumos convencionales.", M, COM, I, URL_BASE + "ficha/ts_6_mp"),
      tendencia("Mayor consumo de productos hidrobiológicos", "Consumo de productos hidrobiológicos", "Mayor demanda interna y externa de productos del mar y de acuicultura.", M, COM, I, URL_BASE + "ficha/ts_4_mp"),
      tendencia("Crecimiento de oportunidades sostenibles en la industria textil", "Oportunidades sostenibles en la industria textil", "Demanda de fibras y procesos textiles con menor huella ambiental.", M, COM, I, URL_BASE + "ficha/ts_10_mp"),
      tendencia("Incremento de la sostenibilidad empresarial en la industria", "Sostenibilidad empresarial", "Mayor adopción de prácticas ambientales, sociales y de gobernanza en las empresas industriales.", M, COM, I, URL_BASE + "ficha/ts_7_mp"),
    ],
    [
      riesgo("Persistencia de la informalidad empresarial", "Informalidad empresarial", "Unidades productivas informales con baja productividad y poco acceso a financiamiento.", P, COM, C),
      riesgo("Interrupción de las cadenas de suministro globales", "Cadenas de suministro", "Choques logísticos y geopolíticos que encarecen insumos y retrasan la producción.", M, COM, I),
      riesgo("Aumento de los costos energéticos industriales", "Costos energéticos", "Presión sobre los márgenes de las plantas por tarifas de energía más altas.", P, COM, I),
    ],
    [
      oportunidad("Expansión de la manufactura avanzada e industria 4.0", "Industria 4.0", "Automatización, sensores y analítica de datos que elevan la productividad de las plantas.", M, COM, C),
      oportunidad("Mayor demanda de productos con valor agregado", "Productos con valor agregado", "Apertura de mercados para bienes transformados con certificaciones de calidad.", M, COM, C),
      oportunidad("Desarrollo de la economía circular en la industria", "Economía circular", "Reaprovechamiento de residuos y materiales como nueva fuente de ingresos.", L, TER, I),
    ]
  ),

  "Comercio Exterior y Turismo": crearSector(
    [
      tendencia("Expansión del ecoturismo digital", "Ecoturismo digital", "Integración de plataformas digitales para reservas comunitarias sostenibles.", P, PER, C),
      tendencia("Diversificación de la oferta agroexportadora", "Diversificación agroexportadora", "Mayor número de productos y destinos en la canasta de exportación no tradicional.", P, COM, C),
      tendencia("Recuperación de la llegada de turistas internacionales", "Llegada de turistas", "Crecimiento sostenido del flujo de visitantes extranjeros hacia destinos nacionales.", P, COM, C),
    ],
    [
      riesgo("Barreras no arancelarias en mercados de destino", "Barreras no arancelarias", "Exigencias sanitarias y ambientales que pueden restringir el acceso de las exportaciones.", M, COM, C),
      riesgo("Efectos del cambio climático sobre destinos turísticos", "Clima y destinos turísticos", "Deterioro de atractivos naturales y mayor riesgo para la infraestructura turística.", M, TER, I),
      riesgo("Sobredependencia de pocos mercados de exportación", "Concentración de mercados", "Vulnerabilidad ante caídas de demanda en uno o dos socios comerciales principales.", P, COM, C),
    ],
    [
      oportunidad("Acuerdos comerciales con economías de Asia-Pacífico", "Acuerdos Asia-Pacífico", "Nuevos mercados con preferencias arancelarias para productos peruanos.", M, COM, C),
      oportunidad("Crecimiento del turismo vivencial y comunitario", "Turismo comunitario", "Experiencias gestionadas por comunidades que distribuyen mejor los ingresos turísticos.", P, PER, C),
      oportunidad("Consolidación de un hub logístico en el Pacífico sur", "Hub logístico del Pacífico", "Puertos y corredores que posicionan al país como puerta de entrada de la región.", L, COM, I),
    ]
  ),

  "Desarrollo e Inclusión Social": crearSector(
    [
      tendencia("Digitalización de programas sociales", "Programas sociales digitales", "Implementación de identidades digitales para la entrega eficiente de subsidios.", P, PER, C),
      tendencia("Envejecimiento de la población", "Envejecimiento poblacional", "Aumento de la proporción de adultos mayores y de la demanda de servicios de cuidado.", M, PER, I),
      tendencia("Mayor focalización de la protección social", "Focalización social", "Uso de padrones y datos administrativos para llegar a los hogares más vulnerables.", P, PER, C),
    ],
    [
      riesgo("Persistencia de brechas de pobreza en zonas rurales", "Brechas rurales", "Diferencias de ingresos y servicios básicos entre el ámbito urbano y el rural.", P, PER, C),
      riesgo("Mayor vulnerabilidad de los hogares ante shocks climáticos", "Vulnerabilidad climática", "Pérdida de ingresos y activos de hogares pobres por eventos extremos.", M, TER, I),
      riesgo("Sobrecarga del sistema de cuidados", "Sistema de cuidados", "Demanda creciente de cuidado de niños y adultos mayores sin oferta suficiente.", M, PER, I),
    ],
    [
      oportunidad("Uso de datos masivos para mejorar la entrega de subsidios", "Datos para subsidios", "Cruce de registros que reduce filtraciones y subcobertura en programas sociales.", P, DEM, C),
      oportunidad("Inclusión financiera de hogares vulnerables", "Inclusión financiera", "Billeteras digitales y cuentas básicas que acercan servicios financieros a los hogares pobres.", M, COM, I),
      oportunidad("Desarrollo de la economía plateada", "Economía plateada", "Nuevos bienes y servicios orientados a la población adulta mayor.", L, COM, I),
    ]
  ),

  "Competitividad Institucional": crearSector(
    [
      tendencia("Interoperabilidad del Estado peruano", "Interoperabilidad estatal", "Modernización de trámites mediante APIs públicas y firma digital.", M, DEM, C),
      tendencia("Expansión del gobierno digital", "Gobierno digital", "Mayor oferta de servicios públicos en línea para ciudadanos y empresas.", P, DEM, C),
      tendencia("Mayor exigencia ciudadana de transparencia", "Exigencia de transparencia", "Ciudadanía más atenta al uso de recursos y a los resultados de la gestión pública.", P, DEM, I),
    ],
    [
      riesgo("Desconfianza ciudadana en las instituciones", "Desconfianza institucional", "Bajo nivel de confianza que debilita la legitimidad y el cumplimiento de políticas.", P, DEM, C),
      riesgo("Ciberataques a servicios públicos digitales", "Ciberataques al Estado", "Exposición de datos y suspensión de servicios por incidentes de seguridad digital.", M, DEM, I),
      riesgo("Alta rotación de funcionarios públicos", "Rotación de funcionarios", "Pérdida de capacidades y de continuidad en la gestión de entidades.", P, DEM, C),
    ],
    [
      oportunidad("Consolidación del servicio civil meritocrático", "Servicio civil", "Selección y evaluación por mérito que mejora la capacidad técnica del Estado.", M, DEM, C),
      oportunidad("Uso de inteligencia artificial en la gestión pública", "IA en la gestión pública", "Automatización de procesos y atención ciudadana con asistentes inteligentes.", M, COM, I),
      oportunidad("Apertura de datos y control ciudadano", "Datos abiertos", "Información pública reutilizable que facilita la vigilancia y la innovación cívica.", P, DEM, C),
    ]
  ),

  "Educación": crearSector(
    [
      tendencia("Modelos híbridos de educación superior", "Educación híbrida", "Combinación de laboratorios virtuales y clases presenciales adaptativas.", P, PER, C),
      tendencia("Mayor acceso a conectividad en instituciones educativas", "Conectividad escolar", "Ampliación de internet y dispositivos en escuelas públicas.", P, PER, C),
      tendencia("Expansión de la educación técnico-productiva", "Formación técnica", "Más oferta de carreras técnicas alineadas con la demanda del mercado laboral.", M, COM, C),
    ],
    [
      riesgo("Brechas de aprendizaje en comprensión lectora y matemática", "Brechas de aprendizaje", "Rezago de los estudiantes respecto a los logros esperados para su grado.", P, PER, C),
      riesgo("Deserción escolar en zonas rurales", "Deserción escolar", "Abandono de estudios por distancia, trabajo infantil o falta de recursos.", P, PER, C),
      riesgo("Déficit de docentes especializados", "Déficit docente", "Insuficiente número de maestros formados para áreas clave y zonas alejadas.", M, PER, I),
    ],
    [
      oportunidad("Tutores con inteligencia artificial y aprendizaje personalizado", "Tutores con IA", "Herramientas que adaptan contenidos y ritmo a cada estudiante.", M, COM, C),
      oportunidad("Alianzas entre universidades y empresas", "Alianzas universidad-empresa", "Proyectos conjuntos que mejoran la empleabilidad y la investigación aplicada.", M, COM, I),
      oportunidad("Educación intercultural bilingüe con recursos digitales", "EIB digital", "Materiales en lenguas originarias disponibles en plataformas en línea.", M, PER, I),
    ]
  ),

  "Ambiental": crearSector(
    [
      tendencia("Monitoreo satelital de la Amazonía", "Monitoreo satelital", "Detección temprana de la deforestación usando aprendizaje automático.", P, TER, C),
      tendencia("Aumento de la frecuencia de eventos climáticos extremos", "Eventos climáticos extremos", "Mayor ocurrencia de lluvias intensas, sequías y heladas.", P, TER, C),
      tendencia("Mayor demanda mundial de bonos de carbono", "Demanda de bonos de carbono", "Crecimiento de mercados que pagan por conservar y restaurar bosques.", M, COM, I),
    ],
    [
      riesgo("Deforestación y pérdida de biodiversidad", "Deforestación", "Avance de la frontera agrícola y de actividades ilegales sobre bosques primarios.", P, TER, C),
      riesgo("Contaminación de fuentes de agua por minería ilegal", "Contaminación hídrica", "Metales pesados y sedimentos que afectan cuencas y poblaciones aguas abajo.", P, TER, C),
      riesgo("Retroceso acelerado de los glaciares tropicales", "Retroceso glaciar", "Reducción de la disponibilidad de agua en cuencas altoandinas.", M, TER, I),
    ],
    [
      oportunidad("Desarrollo de mercados de carbono y pagos por servicios ecosistémicos", "Mercados de carbono", "Ingresos para comunidades que conservan bosques y fuentes de agua.", M, TER, C),
      oportunidad("Impulso a la bioeconomía amazónica", "Bioeconomía amazónica", "Cadenas de valor sostenibles basadas en la biodiversidad.", L, COM, I),
      oportunidad("Restauración de ecosistemas con tecnologías de bajo costo", "Restauración ecológica", "Uso de drones y viveros comunitarios para recuperar áreas degradadas.", M, TER, C),
    ]
  ),

  "Mujer y poblaciones vulnerables": crearSector(
    [
      tendencia("Sistemas integrados de protección infantil", "Protección infantil", "Plataformas de alerta temprana contra la violencia intrafamiliar.", P, PER, C),
      tendencia("Mayor participación de las mujeres en el mercado laboral", "Participación laboral femenina", "Aumento de la presencia de mujeres en el empleo remunerado.", P, PER, C),
      tendencia("Mayor visibilización de la violencia de género", "Visibilización de violencia", "Más denuncias y presión social para atender los casos de violencia.", P, DEM, I),
    ],
    [
      riesgo("Persistencia de la violencia contra la mujer", "Violencia contra la mujer", "Casos de violencia física, psicológica y sexual que continúan siendo elevados.", P, DEM, C),
      riesgo("Carga desigual del trabajo de cuidado no remunerado", "Trabajo de cuidado", "Tiempo que las mujeres dedican al cuidado y que limita su desarrollo económico.", M, PER, C),
      riesgo("Ampliación de la brecha digital de género", "Brecha digital de género", "Menor acceso y uso de tecnologías digitales entre mujeres de zonas rurales.", M, PER, I),
    ],
    [
      oportunidad("Crecimiento del emprendimiento femenino digital", "Emprendimiento femenino", "Negocios liderados por mujeres que usan plataformas y pagos digitales.", M, COM, C),
      oportunidad("Mayor liderazgo de mujeres en cargos públicos", "Liderazgo de mujeres", "Presencia creciente de mujeres en espacios de decisión política y técnica.", M, DEM, I),
      oportunidad("Fortalecimiento de redes comunitarias de protección", "Redes comunitarias", "Organizaciones locales que acompañan a poblaciones en situación de vulnerabilidad.", P, PER, C),
    ]
  ),

  "Cultura": crearSector(
    [
      tendencia("Preservación digital del patrimonio inmaterial", "Patrimonio digital", "Digitalización 3D y archivo audiovisual de manifestaciones culturales ancestrales.", M, PER, C),
      tendencia("Crecimiento de las industrias culturales y creativas", "Industrias creativas", "Mayor peso de la música, el cine, el diseño y los videojuegos en la economía.", M, COM, C),
      tendencia("Mayor consumo cultural en plataformas digitales", "Consumo cultural digital", "Cambio de hábitos hacia contenidos culturales bajo demanda.", P, PER, I),
    ],
    [
      riesgo("Pérdida de lenguas originarias", "Pérdida de lenguas", "Disminución de hablantes por falta de transmisión intergeneracional.", M, PER, C),
      riesgo("Tráfico ilícito de bienes culturales", "Tráfico de patrimonio", "Saqueo y comercio ilegal de piezas arqueológicas e históricas.", P, DEM, C),
      riesgo("Deterioro del patrimonio por clima y urbanización", "Deterioro patrimonial", "Daños en sitios históricos por lluvias, humedad y expansión urbana.", M, TER, I),
    ],
    [
      oportunidad("Desarrollo del turismo cultural basado en el patrimonio", "Turismo cultural", "Mayores ingresos locales a partir de rutas y experiencias culturales.", M, COM, C),
      oportunidad("Museos virtuales con realidad aumentada", "Museos virtuales", "Acceso remoto a colecciones y reconstrucciones de sitios históricos.", M, PER, I),
      oportunidad("Exportación de contenidos creativos peruanos", "Exportación creativa", "Presencia de la música, la gastronomía y el audiovisual en mercados globales.", L, COM, I),
    ]
  ),

  "Salud": crearSector(
    [
      tendencia("Telemedicina descentralizada", "Telemedicina", "Acceso a diagnóstico médico remoto en zonas rurales de difícil acceso.", P, PER, C),
      tendencia("Envejecimiento poblacional y aumento de enfermedades crónicas", "Enfermedades crónicas", "Mayor demanda de servicios para diabetes, hipertensión y cáncer.", M, PER, C),
      tendencia("Mayor demanda de atención en salud mental", "Salud mental", "Crecimiento de la necesidad de servicios psicológicos y psiquiátricos.", P, PER, I),
    ],
    [
      riesgo("Aparición de pandemias y enfermedades emergentes", "Pandemias y emergentes", "Riesgo de nuevos brotes que saturen el sistema de salud.", M, PER, C),
      riesgo("Aumento de la resistencia antimicrobiana", "Resistencia antimicrobiana", "Pérdida de eficacia de antibióticos por su uso inadecuado.", M, PER, I),
      riesgo("Brechas de infraestructura y equipamiento sanitario", "Brechas sanitarias", "Establecimientos con capacidad resolutiva insuficiente fuera de las ciudades.", P, PER, C),
    ],
    [
      oportunidad("Historia clínica electrónica interoperable", "Historia clínica digital", "Información del paciente disponible en toda la red de atención.", P, COM, C),
      oportunidad("Diagnóstico asistido por inteligencia artificial", "Diagnóstico con IA", "Análisis de imágenes y datos clínicos para detectar enfermedades antes.", M, COM, I),
      oportunidad("Avance de la medicina personalizada y la genómica", "Medicina personalizada", "Tratamientos adaptados al perfil genético de cada paciente.", L, PER, I),
    ]
  ),

  "Agrario y de Riesgo": crearSector(
    [
      tendencia("Agricultura de precisión e irrigación inteligente", "Agricultura de precisión", "Tecnología IoT para la gestión óptima del agua en cultivos de exportación.", P, TER, C),
      tendencia("Crecimiento sostenido de las agroexportaciones", "Agroexportaciones", "Expansión de cultivos como arándanos, palta y uva hacia nuevos mercados.", P, COM, C),
      tendencia("Cambios en los patrones de lluvia y temperatura", "Cambio de patrones climáticos", "Alteración de los calendarios agrícolas y de las zonas aptas para cultivo.", M, TER, I),
    ],
    [
      riesgo("Pérdida de cosechas por heladas y sequías", "Pérdida de cosechas", "Eventos climáticos que reducen la producción de pequeños agricultores.", P, TER, C),
      riesgo("Escasez de agua para riego", "Escasez de agua", "Competencia por el recurso hídrico entre agro, minería y consumo urbano.", M, TER, C),
      riesgo("Fragmentación de la tierra agrícola", "Fragmentación de tierras", "Parcelas cada vez más pequeñas que limitan la productividad.", M, COM, I),
    ],
    [
      oportunidad("Expansión de los seguros agrarios paramétricos", "Seguros agrarios", "Cobertura automática ante eventos climáticos que protege a los productores.", M, COM, C),
      oportunidad("Desarrollo de cultivos resilientes al clima", "Cultivos resilientes", "Variedades adaptadas a sequías, heladas y plagas.", M, TER, C),
      oportunidad("Mayor demanda de productos orgánicos y superalimentos", "Productos orgánicos", "Mercados que pagan primas por alimentos andinos y amazónicos.", M, COM, I),
    ]
  ),

  "Relaciones exteriores": crearSector(
    [
      tendencia("Cooperación bilateral en ciencia y tecnología", "Cooperación científica", "Convenios para la transferencia tecnológica en energías limpias.", M, COM, C),
      tendencia("Reconfiguración geopolítica hacia un mundo multipolar", "Multipolaridad", "Nuevos bloques de poder que cambian alianzas y flujos de comercio.", P, DEM, I),
      tendencia("Mayor integración regional en el Pacífico", "Integración del Pacífico", "Profundización de los acuerdos entre economías de la Alianza del Pacífico y Asia.", M, COM, C),
    ],
    [
      riesgo("Aumento de las tensiones geopolíticas entre potencias", "Tensiones geopolíticas", "Conflictos que afectan el comercio, la inversión y la seguridad.", P, DEM, C),
      riesgo("Mayor migración regional", "Migración regional", "Flujos de personas que presionan servicios y generan tensión diplomática.", P, PER, C),
      riesgo("Fragmentación del comercio mundial", "Fragmentación comercial", "Medidas proteccionistas que reducen el acceso a mercados.", M, COM, I),
    ],
    [
      oportunidad("Liderazgo del país en la agenda climática global", "Liderazgo climático", "Posicionamiento como voz de países megadiversos en foros internacionales.", M, TER, C),
      oportunidad("Diplomacia económica con Asia", "Diplomacia económica", "Promoción de exportaciones e inversiones en mercados asiáticos.", M, COM, C),
      oportunidad("Fortalecimiento de la cooperación sur-sur", "Cooperación sur-sur", "Intercambio de buenas prácticas y proyectos con países en desarrollo.", L, DEM, I),
    ]
  ),

  "Defensa": crearSector(
    [
      tendencia("Ciberdefensa e infraestructura crítica", "Ciberdefensa", "Protección de los sistemas informáticos nacionales ante ciberataques.", M, DEM, C),
      tendencia("Mayor uso de drones en vigilancia y defensa", "Drones de vigilancia", "Vehículos no tripulados para control de fronteras y monitoreo de territorio.", M, TER, C),
      tendencia("Mayor participación de las Fuerzas Armadas en la gestión de desastres", "Apoyo en desastres", "Despliegue de capacidades logísticas ante emergencias.", P, TER, I),
    ],
    [
      riesgo("Amenazas híbridas y desinformación", "Amenazas híbridas", "Campañas de manipulación de información que afectan la estabilidad democrática.", M, DEM, C),
      riesgo("Crimen transnacional en zonas de frontera", "Crimen transnacional", "Tráfico ilícito y economías ilegales con presencia en áreas fronterizas.", P, DEM, C),
      riesgo("Dependencia tecnológica en equipamiento militar", "Dependencia tecnológica", "Limitaciones de mantenimiento y actualización por proveedores externos.", L, COM, I),
    ],
    [
      oportunidad("Desarrollo de industria nacional de defensa y transferencia tecnológica", "Industria de defensa", "Capacidades locales de producción y mantenimiento de equipos.", L, COM, C),
      oportunidad("Vigilancia satelital soberana", "Vigilancia satelital", "Imágenes propias para monitorear el territorio y los recursos.", M, TER, C),
      oportunidad("Mayor cooperación internacional en seguridad", "Cooperación en seguridad", "Intercambio de información y entrenamiento conjunto con otros países.", M, DEM, I),
    ]
  ),

  "Economía y Finanzas": crearSector(
    [
      tendencia("Adopción masiva de pagos digitales", "Pagos digitales", "Disminución del uso de efectivo mediante interoperabilidad bancaria.", P, COM, C),
      tendencia("Mayor inclusión financiera", "Inclusión financiera", "Más personas y empresas con acceso a cuentas, crédito y seguros.", P, PER, C),
      tendencia("Digitalización de la administración tributaria", "Tributación digital", "Facturación y declaración electrónicas que amplían la base tributaria.", P, COM, I),
    ],
    [
      riesgo("Volatilidad en los precios de las materias primas", "Volatilidad de precios", "Variaciones fuertes en los ingresos por exportaciones y recaudación.", P, COM, C),
      riesgo("Presión fiscal por el envejecimiento poblacional", "Presión fiscal", "Mayor gasto en pensiones y salud con menor población activa.", L, COM, I),
      riesgo("Riesgos de fraude en fintech y activos virtuales", "Riesgos fintech", "Falta de regulación y de cultura financiera frente a nuevos productos.", M, DEM, I),
    ],
    [
      oportunidad("Crecimiento de las finanzas verdes y los bonos sostenibles", "Finanzas verdes", "Financiamiento para proyectos con impacto ambiental positivo.", M, TER, C),
      oportunidad("Profundización del mercado de capitales", "Mercado de capitales", "Más emisores e inversionistas que diversifican las fuentes de financiamiento.", M, COM, C),
      oportunidad("Formalización de empresas mediante facturación electrónica", "Facturación electrónica", "Trazabilidad de operaciones que incentiva la formalización.", P, COM, I),
    ]
  ),

  "Energía y Minas": crearSector(
    [
      tendencia("Transición hacia el hidrógeno verde", "Hidrógeno verde", "Proyectos piloto para la descarbonización de la minería de gran escala.", L, TER, C),
      tendencia("Crecimiento de las energías renovables no convencionales", "Energías renovables", "Mayor participación de la energía solar y eólica en la matriz eléctrica.", M, TER, C),
      tendencia("Mayor demanda mundial de minerales críticos", "Minerales críticos", "Aumento de la demanda de cobre, litio y otros minerales para la transición energética.", M, COM, I),
    ],
    [
      riesgo("Conflictos socioambientales en torno a proyectos extractivos", "Conflictos socioambientales", "Disputas por agua, tierra y beneficios que paralizan inversiones.", P, DEM, C),
      riesgo("Expansión de la minería ilegal", "Minería ilegal", "Actividad extractiva informal con impactos ambientales y de seguridad.", P, TER, C),
      riesgo("Vulnerabilidad del suministro de gas y combustibles", "Suministro de gas", "Riesgo de interrupciones en ductos y cadenas de abastecimiento.", M, COM, I),
    ],
    [
      oportunidad("Aprovechamiento del cobre y el litio para la transición energética", "Cobre y litio", "Nuevas inversiones asociadas a baterías y electrificación.", M, COM, C),
      oportunidad("Desarrollo de redes inteligentes y electromovilidad", "Redes inteligentes", "Infraestructura que integra generación distribuida y vehículos eléctricos.", M, COM, I),
      oportunidad("Comunidades energéticas rurales", "Energía rural", "Sistemas solares locales que llevan electricidad a poblaciones aisladas.", P, TER, C),
    ]
  ),

  "Justicia": crearSector(
    [
      tendencia("Expediente Judicial Electrónico (EJE)", "Expediente electrónico", "Reducción de tiempos procesales mediante tramitación 100% digital.", P, DEM, C),
      tendencia("Mayor uso de mecanismos alternativos de solución de conflictos", "Solución alternativa", "Conciliación y arbitraje que descongestionan el sistema judicial.", M, DEM, C),
      tendencia("Sobrepoblación penitenciaria", "Sobrepoblación penal", "Aumento de internos por encima de la capacidad de los penales.", P, DEM, I),
    ],
    [
      riesgo("Congestión y retraso procesal", "Retraso procesal", "Acumulación de casos que prolonga los procesos y erosiona la confianza.", P, DEM, C),
      riesgo("Infiltración del crimen organizado en instituciones", "Crimen organizado", "Presión e intentos de captura de operadores de justicia.", M, DEM, C),
      riesgo("Corrupción en el sistema de justicia", "Corrupción judicial", "Prácticas indebidas que debilitan la independencia y la imparcialidad.", P, DEM, I),
    ],
    [
      oportunidad("Analítica judicial y justicia predictiva", "Analítica judicial", "Uso de datos para priorizar casos y anticipar cargas de trabajo.", M, COM, C),
      oportunidad("Justicia de paz digital", "Justicia de paz digital", "Resolución de conflictos menores a distancia en zonas alejadas.", M, PER, I),
      oportunidad("Programas de reinserción laboral para población penitenciaria", "Reinserción laboral", "Capacitación y empleo que reducen la reincidencia.", M, PER, C),
    ]
  ),

  "Transporte y Comunicaciones": crearSector(
    [
      tendencia("Despliegue de red 5G y conectividad rural", "5G y conectividad rural", "Ampliación de la banda ancha para reducir la brecha de conectividad.", P, COM, C),
      tendencia("Expansión de la infraestructura vial, portuaria y ferroviaria", "Infraestructura de transporte", "Obras que mejoran la conexión entre regiones y mercados.", M, TER, C),
      tendencia("Mayor congestión vehicular en las ciudades", "Congestión urbana", "Aumento del parque automotor y de los tiempos de viaje.", P, TER, I),
    ],
    [
      riesgo("Vulnerabilidad de la red vial ante desastres naturales", "Red vial vulnerable", "Interrupciones por huaicos, deslizamientos e inundaciones.", P, TER, C),
      riesgo("Persistencia de la brecha digital rural", "Brecha digital rural", "Zonas sin cobertura de internet que quedan fuera de servicios digitales.", P, PER, C),
      riesgo("Alta siniestralidad vial", "Accidentes de tránsito", "Pérdida de vidas y costos económicos por accidentes.", P, PER, I),
    ],
    [
      oportunidad("Electromovilidad en el transporte público", "Electromovilidad", "Buses y taxis eléctricos que reducen emisiones y costos operativos.", M, TER, C),
      oportunidad("Conectividad con satélites de órbita baja", "Internet satelital", "Acceso a internet en comunidades aisladas sin infraestructura terrestre.", M, PER, C),
      oportunidad("Puertos inteligentes y corredores logísticos", "Puertos inteligentes", "Automatización y trazabilidad que reducen tiempos y costos del comercio.", M, COM, I),
    ]
  ),

  "Interior": crearSector(
    [
      tendencia("Patrullaje inteligente asistido por IA", "Patrullaje con IA", "Análisis predictivo de delitos para el despliegue policial eficiente.", M, DEM, C),
      tendencia("Mayor percepción de inseguridad ciudadana", "Percepción de inseguridad", "Preocupación creciente de la población por el delito en las ciudades.", P, DEM, C),
      tendencia("Mayor uso de videovigilancia y cámaras urbanas", "Videovigilancia", "Expansión de sistemas de monitoreo en espacios públicos.", P, DEM, I),
    ],
    [
      riesgo("Crecimiento de la extorsión y el sicariato", "Extorsión y sicariato", "Delitos violentos ligados a economías ilegales y bandas criminales.", P, DEM, C),
      riesgo("Aumento de los ciberdelitos y el fraude digital", "Ciberdelitos", "Estafas y robo de datos que crecen con la digitalización.", M, COM, C),
      riesgo("Expansión de la trata y el tráfico de personas", "Trata de personas", "Redes criminales que aprovechan la migración y la informalidad.", M, PER, I),
    ],
    [
      oportunidad("Fortalecimiento de la policía comunitaria", "Policía comunitaria", "Trabajo conjunto entre vecinos y policía para prevenir el delito.", P, DEM, C),
      oportunidad("Analítica de datos para la prevención del delito", "Analítica del delito", "Mapas de calor y modelos que orientan la inversión en seguridad.", M, COM, C),
      oportunidad("Interoperabilidad de bases de datos de seguridad", "Datos de seguridad", "Intercambio de información entre policía, fiscalía y justicia.", M, DEM, I),
    ]
  ),

  "Trabajo y Promoción de Empleo": crearSector(
    [
      tendencia("Regulación de plataformas de trabajo digital", "Plataformas de trabajo", "Marcos normativos para la protección social de trabajadores independientes.", P, PER, C),
      tendencia("Crecimiento del trabajo remoto e híbrido", "Trabajo remoto", "Mayor adopción de modalidades a distancia en empresas de distintos tamaños.", P, COM, C),
      tendencia("Persistencia de la informalidad laboral", "Informalidad laboral", "Gran parte de los trabajadores sin contrato ni seguridad social.", P, PER, I),
    ],
    [
      riesgo("Automatización de empleos rutinarios", "Automatización laboral", "Reemplazo de tareas repetitivas por robots y sistemas inteligentes.", M, COM, C),
      riesgo("Desajuste entre las habilidades y la demanda laboral", "Brecha de habilidades", "Dificultad de las empresas para encontrar el talento que necesitan.", P, PER, C),
      riesgo("Precarización del empleo juvenil", "Empleo juvenil", "Jóvenes con trabajos inestables, de baja remuneración y sin protección.", P, PER, I),
    ],
    [
      oportunidad("Creación de empleos verdes", "Empleos verdes", "Nuevos puestos asociados a energías limpias, reciclaje y restauración.", M, TER, C),
      oportunidad("Programas de reconversión laboral en competencias digitales", "Reconversión digital", "Capacitación masiva para trabajadores en riesgo de desplazamiento.", M, PER, C),
      oportunidad("Teletrabajo como herramienta para cerrar brechas territoriales", "Teletrabajo territorial", "Empleo para personas de regiones sin necesidad de migrar.", M, TER, I),
    ]
  ),

  "Vivienda, construcción y saneamiento": crearSector(
    [
      tendencia("Ciudades resilientes e infraestructura ecoeficiente", "Ciudades resilientes", "Construcción sostenible orientada a la mitigación de riesgos sísmicos.", M, TER, C),
      tendencia("Aumento sostenido de la demanda de vivienda", "Demanda de vivienda", "Formación de nuevos hogares que presiona la oferta habitacional.", P, PER, C),
      tendencia("Ampliación de la cobertura de agua potable y saneamiento", "Agua y saneamiento", "Más hogares conectados a servicios básicos de calidad.", P, PER, I),
    ],
    [
      riesgo("Persistencia del déficit habitacional", "Déficit habitacional", "Hogares en viviendas precarias o en condiciones de hacinamiento.", P, PER, C),
      riesgo("Escasez hídrica en las ciudades", "Escasez hídrica urbana", "Menor disponibilidad de agua para el abastecimiento de grandes ciudades.", M, TER, C),
      riesgo("Expansión urbana en zonas de riesgo", "Urbanización en riesgo", "Ocupación de laderas y cauces expuestos a huaicos e inundaciones.", P, TER, I),
    ],
    [
      oportunidad("Desarrollo de la construcción industrializada y modular", "Construcción modular", "Procesos más rápidos y económicos para producir vivienda.", M, COM, C),
      oportunidad("Reúso de aguas residuales tratadas", "Reúso de aguas", "Aprovechamiento de agua tratada para riego y uso industrial.", M, TER, C),
      oportunidad("Uso de gemelos digitales para la planificación urbana", "Gemelos digitales", "Modelos virtuales de ciudades para anticipar riesgos y optimizar inversiones.", L, COM, I),
    ]
  ),
};