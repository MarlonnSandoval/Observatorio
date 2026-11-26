export interface Tendencia {
  titulo: string;
  categoriaId: string;
  ruta: string;
}

export interface ArticuloRadar {
  titulo: string;
  tituloCorto?: string;
  resumen: string;
  url: string;
  imagenUrl?: string;
  fuerzaCambio?: string;
  tematica: string;
  horizonte?: 'PRESENTE-2030' | '2030-2040' | '2040-2050';
  clave?: string;
  cuadrante?: string;
  fechaActualizacion?: String;
}

export interface CategoriaTendenciasDetalle {
  descargaUrl?: string;
  caracterizan: ArticuloRadar[];
  afectan: ArticuloRadar[];
}

export interface ContenidoSector {
  "Tendencias"?: CategoriaTendenciasDetalle;
  'Ambiental'?: CategoriaTendenciasDetalle;
  'Social'?: CategoriaTendenciasDetalle;
  'Económica'?: CategoriaTendenciasDetalle;
  'Tecnológica'?: CategoriaTendenciasDetalle;
  'Política'?: CategoriaTendenciasDetalle;
  'Actitud, valores y ética'?: CategoriaTendenciasDetalle;
  url?: string;
}

export interface SectorDatabase {
  [sector: string]: ContenidoSector;
}

const IMG_BASE = "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg";

export const SECTOR_DATABASE: SectorDatabase = {

  // ─── AMBIENTAL ────────────────────────────────────────────────────────────────
  "Ambiental": {
    url: "https://observatorio.ceplan.gob.pe/sector/ambiental",
    "Ambiental": {
      caracterizan: [
        {
          titulo: "Disponibilidad y acceso sostenido al recurso hídrico",
          tituloCorto: "Acceso agua",
          resumen: "Evolución de la disponibilidad de agua segura y presión sobre fuentes hídricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Acceso agua"
        },
        {
          titulo: "Reducción de la superficie glaciar y regulación hídrica de altura",
          tituloCorto: "Superficie glaciar",
          resumen: "Retroceso de masas glaciares y alteración de caudales en cuencas altoandinas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Superficie glaciar"
        }
      ],
      afectan: [
        {
          titulo: "Expansión de energías renovables en la matriz energética",
          tituloCorto: "Energías renovables",
          resumen: "Sustitución progresiva de combustibles fósiles por fuentes limpias.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_amb",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Energías renovables"
        },
        {
          titulo: "Transformación y cambio en el uso del suelo",
          tituloCorto: "Uso del suelo",
          resumen: "Reconversión de áreas naturales hacia usos urbanos, agrícolas o extractivos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t12_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del suelo"
        }
      ]
    },
    "Social": {
      caracterizan: [
        {
          titulo: "Vulnerabilidad de comunidades frente a eventos hidrometeorológicos",
          tituloCorto: "Vulnerabilidad climática",
          resumen: "Exposición diferenciada de poblaciones costeras y altoandinas ante lluvias y sequías.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t13_amb_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "15/06/2026",
          fuerzaCambio: "Vulnerabilidad climática"
        }
      ],
      afectan: [
        {
          titulo: "Crecimiento y concentración de la población en zonas urbanas",
          tituloCorto: "Concentración urbana",
          resumen: "Presión sobre recursos naturales, residuos y expansión sobre áreas periféricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t7_amb",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Concentración urbana"
        }
      ]
    },
    "Económica": {
      caracterizan: [
        {
          titulo: "Adopción de modelos de economía circular en cadenas productivas",
          tituloCorto: "Economía circular",
          resumen: "Valorización de residuos industriales, reutilización de insumos y reducción de pasivos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t14_amb_eco",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "18/06/2026",
          fuerzaCambio: "Economía circular"
        }
      ],
      afectan: [
        {
          titulo: "Financiamiento verde y bonos temáticos para adaptación climática",
          tituloCorto: "Finanzas verdes",
          resumen: "Canalización de capital hacia infraestructura resiliente y proyectos de bajo carbono.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t15_amb_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "18/06/2026",
          fuerzaCambio: "Finanzas verdes"
        }
      ]
    },
    "Tecnológica": {
      caracterizan: [
        {
          titulo: "Monitoreo satelital y sensores remotos para alerta ambiental temprana",
          tituloCorto: "Monitoreo satelital",
          resumen: "Uso de teledetección y analítica espacial para vigilar deforestación y glaciares.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t16_amb_tec",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "22/06/2026",
          fuerzaCambio: "Monitoreo satelital"
        }
      ],
      afectan: [
        {
          titulo: "Redes eléctricas inteligentes y almacenamiento energético a gran escala",
          tituloCorto: "Redes inteligentes",
          resumen: "Integración de generación distribuida y baterías para estabilizar oferta renovable.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t17_amb_tec",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "22/06/2026",
          fuerzaCambio: "Redes inteligentes"
        }
      ]
    },
    "Política": {
      caracterizan: [
        {
          titulo: "Implementación de compromisos climáticos y presupuestos por resultados",
          tituloCorto: "Gobernanza climática",
          resumen: "Articulación de metas nacionales de mitigación y adaptación en planes territoriales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t18_amb_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "25/06/2026",
          fuerzaCambio: "Gobernanza climática"
        }
      ],
      afectan: [
        {
          titulo: "Estándares ambientales transfronterizos en mercados internacionales",
          tituloCorto: "Normativa ambiental",
          resumen: "Exigencias de trazabilidad ecológica y baja huella de carbono en exportaciones.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t19_amb_pol",
          tematica: "Política",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "25/06/2026",
          fuerzaCambio: "Normativa ambiental"
        }
      ]
    },
    "Actitud, valores y ética": {
      caracterizan: [
        {
          titulo: "Mayor conciencia ambiental en ciudadanía y organizaciones",
          tituloCorto: "Conciencia ambiental",
          resumen: "Demanda creciente de prácticas sostenibles y control de impactos ecológicos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_amb",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Conciencia ambiental"
        }
      ],
      afectan: [
        {
          titulo: "Corresponsabilidad intergeneracional frente al agotamiento de recursos",
          tituloCorto: "Ética intergeneracional",
          resumen: "Incorporación del bienestar de futuras generaciones en decisiones de inversión.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t20_amb_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "2040-2050",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "26/06/2026",
          fuerzaCambio: "Ética intergeneracional"
        }
      ]
    }
  },

  // ─── CULTURA ──────────────────────────────────────────────────────────────────
  "Cultura": {
    url: "https://observatorio.ceplan.gob.pe/sector/cultura",
    "Social": {
      caracterizan: [
        {
          titulo: "Salvaguardia y transmisión intergeneracional de lenguas y saberes",
          tituloCorto: "Saberes y lenguas",
          resumen: "Dinámica de revitalización lingüística y prácticas comunitarias tradicionales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_cul_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Cohesión e identidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "10/07/2026",
          fuerzaCambio: "Saberes y lenguas"
        }
      ],
      afectan: [
        {
          titulo: "Migración interna y reconfiguración de identidades culturales urbanas",
          tituloCorto: "Identidades urbanas",
          resumen: "Intercambio y sincretismo cultural en ciudades intermedias y grandes metrópolis.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_cul_soc",
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Cohesión e identidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "10/07/2026",
          fuerzaCambio: "Identidades urbanas"
        }
      ]
    },
    "Económica": {
      caracterizan: [
        {
          titulo: "Expansión de industrias creativas y economía naranja local",
          tituloCorto: "Economía creativa",
          resumen: "Crecimiento del empleo y valor agregado en diseño, gastronomía, música y artesanía.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_cul_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Cohesión e identidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "10/07/2026",
          fuerzaCambio: "Economía creativa"
        }
      ],
      afectan: [
        {
          titulo: "Mercantilización del patrimonio y presión turística sobre sitios históricos",
          tituloCorto: "Presión patrimonial",
          resumen: "Equilibrio entre ingresos por turismo cultural y conservación física y social.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_cul_eco",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Cohesión e identidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "10/07/2026",
          fuerzaCambio: "Presión patrimonial"
        }
      ]
    },
    "Tecnológica": {
      caracterizan: [
        {
          titulo: "Digitalización de archivos patrimoniales y museos inmersivos",
          tituloCorto: "Patrimonio digital",
          resumen: "Acceso abierto a colecciones históricas mediante repositorios y realidad virtual.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_cul_tec",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Cohesión e identidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "12/07/2026",
          fuerzaCambio: "Patrimonio digital"
        }
      ],
      afectan: [
        {
          titulo: "Algoritmos de recomendación y homogeneización de consumos culturales",
          tituloCorto: "Consumo algorítmico",
          resumen: "Influencia de plataformas globales en la visibilidad de creadores locales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_cul_tec",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Cohesión e identidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "12/07/2026",
          fuerzaCambio: "Consumo algorítmico"
        }
      ]
    },
    "Política": {
      caracterizan: [
        {
          titulo: "Descentralización de infraestructura cultural y centros comunitarios",
          tituloCorto: "Cultura descentralizada",
          resumen: "Ampliación de espacios públicos para creación y participación fuera de la capital.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t7_cul_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Cohesión e identidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "12/07/2026",
          fuerzaCambio: "Cultura descentralizada"
        }
      ],
      afectan: [
        {
          titulo: "Reconocimiento legal de derechos culturales y consentimiento previo",
          tituloCorto: "Derechos culturales",
          resumen: "Consolidación de marcos normativos sobre propiedad intelectual colectiva.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_cul_pol",
          tematica: "Política",
          horizonte: "2030-2040",
          cuadrante: "Cohesión e identidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "12/07/2026",
          fuerzaCambio: "Derechos culturales"
        }
      ]
    },
    "Actitud, valores y ética": {
      caracterizan: [
        {
          titulo: "Valoración de la interculturalidad y el respeto a la diversidad",
          tituloCorto: "Interculturalidad",
          resumen: "Promoción del diálogo entre tradiciones diversas como base de convivencia.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_cul_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Cohesión e identidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "14/07/2026",
          fuerzaCambio: "Interculturalidad"
        }
      ],
      afectan: [
        {
          titulo: "Apropiación cultural indebida y debates sobre autoría comunitaria",
          tituloCorto: "Ética patrimonial",
          resumen: "Tensión entre uso comercial de símbolos tradicionales y respeto a sus creadores.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_cul_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "2030-2040",
          cuadrante: "Cohesión e identidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "14/07/2026",
          fuerzaCambio: "Ética patrimonial"
        }
      ]
    }
  },

  // ─── EDUCACIÓN ────────────────────────────────────────────────────────────────
  "Educación": {
    url: "https://observatorio.ceplan.gob.pe/sector/educacion",
    "Social": {
      caracterizan: [
        {
          titulo: "Transición demográfica y cambios en la demanda por niveles educativos",
          tituloCorto: "Demografía escolar",
          resumen: "Menor crecimiento de matrícula inicial y mayor énfasis en educación continua.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_edu_soc",
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Capital humano",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "20/07/2026",
          fuerzaCambio: "Demografía escolar"
        }
      ],
      afectan: [
        {
          titulo: "Brechas de aprendizaje asociadas a condiciones socioeconómicas y rurales",
          tituloCorto: "Equidad educativa",
          resumen: "Diferencias en logro de competencias básicas según territorio y nivel de ingreso.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_edu_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Capital humano",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "20/07/2026",
          fuerzaCambio: "Equidad educativa"
        }
      ]
    },
    "Económica": {
      caracterizan: [
        {
          titulo: "Reconversión laboral y demanda de microcredenciales técnicas",
          tituloCorto: "Educación y empleo",
          resumen: "Articulación entre formación técnico-productiva y ocupaciones emergentes.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_edu_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Capital humano",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "20/07/2026",
          fuerzaCambio: "Educación y empleo"
        }
      ],
      afectan: [
        {
          titulo: "Sostenibilidad fiscal del gasto educativo y eficiencia en inversión",
          tituloCorto: "Inversión educativa",
          resumen: "Priorización de infraestructura, conectividad y carrera docente en el presupuesto.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_edu_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Capital humano",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "20/07/2026",
          fuerzaCambio: "Inversión educativa"
        }
      ]
    },
    "Tecnológica": {
      caracterizan: [
        {
          titulo: "Adopción de inteligencia artificial generativa y tutores adaptativos",
          tituloCorto: "IA en el aula",
          resumen: "Personalización del aprendizaje y apoyo docente mediante sistemas inteligentes.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_edu_tec",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Capital humano",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "22/07/2026",
          fuerzaCambio: "IA en el aula"
        }
      ],
      afectan: [
        {
          titulo: "Conectividad efectiva y disponibilidad de dispositivos en zonas apartadas",
          tituloCorto: "Brecha digital",
          resumen: "Condiciones técnicas necesarias para evitar exclusión en modalidades híbridas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_edu_tec",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Capital humano",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "22/07/2026",
          fuerzaCambio: "Brecha digital"
        }
      ]
    },
    "Política": {
      caracterizan: [
        {
          titulo: "Aseguramiento de la calidad y evaluación basada en evidencias",
          tituloCorto: "Calidad y evaluación",
          resumen: "Uso de sistemas de información y estándares para orientar políticas pedagógicas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t7_edu_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Capital humano",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "22/07/2026",
          fuerzaCambio: "Calidad y evaluación"
        }
      ],
      afectan: [
        {
          titulo: "Continuidad de políticas educativas frente a cambios de gestión",
          tituloCorto: "Continuidad de políticas",
          resumen: "Institucionalización de planes de mediano y largo plazo en el sector.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_edu_pol",
          tematica: "Política",
          horizonte: "2030-2040",
          cuadrante: "Capital humano",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "22/07/2026",
          fuerzaCambio: "Continuidad de políticas"
        }
      ]
    },
    "Actitud, valores y ética": {
      caracterizan: [
        {
          titulo: "Formación en ciudadanía digital, pensamiento crítico e integridad",
          tituloCorto: "Ciudadanía digital",
          resumen: "Desarrollo de criterios éticos frente a desinformación y uso responsable de datos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_edu_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Capital humano",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "24/07/2026",
          fuerzaCambio: "Ciudadanía digital"
        }
      ],
      afectan: [
        {
          titulo: "Bienestar socioemocional y prevención del acoso en comunidades escolares",
          tituloCorto: "Convivencia escolar",
          resumen: "Promoción de entornos seguros, inclusivos y de apoyo a la salud mental estudiantil.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_edu_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Capital humano",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "24/07/2026",
          fuerzaCambio: "Convivencia escolar"
        }
      ]
    }
  },

  // ─── SALUD ────────────────────────────────────────────────────────────────────
  "Salud": {
    url: "https://observatorio.ceplan.gob.pe/sector/salud",
    "Social": {
      caracterizan: [
        {
          titulo: "Envejecimiento poblacional y mayor carga de enfermedades crónicas",
          tituloCorto: "Transición epidemiológica",
          resumen: "Incremento de atenciones por condiciones no transmisibles y cuidados de largo plazo.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_sal_soc",
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Bienestar y salud",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "03/08/2026",
          fuerzaCambio: "Transición epidemiológica"
        }
      ],
      afectan: [
        {
          titulo: "Urbanización acelerada y exposición a riesgos sanitarios y ambientales",
          tituloCorto: "Salud urbana",
          resumen: "Impacto de la densidad poblacional, calidad del aire y saneamiento en la salud.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_sal_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Bienestar y salud",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "03/08/2026",
          fuerzaCambio: "Salud urbana"
        }
      ]
    },
    "Económica": {
      caracterizan: [
        {
          titulo: "Expansión del aseguramiento y protección financiera frente al gasto de bolsillo",
          tituloCorto: "Protección financiera",
          resumen: "Esfuerzos por reducir el impacto económico directo de las enfermedades en hogares.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_sal_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Bienestar y salud",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "03/08/2026",
          fuerzaCambio: "Protección financiera"
        }
      ],
      afectan: [
        {
          titulo: "Creciente costo de tecnologías médicas, fármacos y tratamientos especializados",
          tituloCorto: "Costos sanitarios",
          resumen: "Presión sobre los presupuestos públicos y aseguradores ante innovaciones clínicas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_sal_eco",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Bienestar y salud",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "03/08/2026",
          fuerzaCambio: "Costos sanitarios"
        }
      ]
    },
    "Tecnológica": {
      caracterizan: [
        {
          titulo: "Consolidación de telesalud, historia clínica digital y diagnósticos asistidos",
          tituloCorto: "Salud digital",
          resumen: "Acercamiento de especialistas a zonas remotas y mayor interoperabilidad clínica.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_sal_tec",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Bienestar y salud",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "05/08/2026",
          fuerzaCambio: "Salud digital"
        }
      ],
      afectan: [
        {
          titulo: "Biotecnología, medicina de precisión y vigilancia genómica de patógenos",
          tituloCorto: "Biotecnología sanitaria",
          resumen: "Nuevas capacidades para prevenir brotes y diseñar terapias dirigidas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_sal_tec",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Bienestar y salud",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "05/08/2026",
          fuerzaCambio: "Biotecnología sanitaria"
        }
      ]
    },
    "Política": {
      caracterizan: [
        {
          titulo: "Fortalecimiento del primer nivel de atención y redes integradas de salud",
          tituloCorto: "Redes de salud",
          resumen: "Enfoque preventivo y resolutivo cercano al ciudadano para descongestionar hospitales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t7_sal_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Bienestar y salud",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "05/08/2026",
          fuerzaCambio: "Redes de salud"
        }
      ],
      afectan: [
        {
          titulo: "Preparación y respuesta coordinada ante emergencias sanitarias",
          tituloCorto: "Resiliencia sanitaria",
          resumen: "Mecanismos de vigilancia epidemiológica y abastecimiento crítico ante crisis.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_sal_pol",
          tematica: "Política",
          horizonte: "2030-2040",
          cuadrante: "Bienestar y salud",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "05/08/2026",
          fuerzaCambio: "Resiliencia sanitaria"
        }
      ]
    },
    "Actitud, valores y ética": {
      caracterizan: [
        {
          titulo: "Mayor atención a la salud mental y al autocuidado preventivo",
          tituloCorto: "Salud mental",
          resumen: "Reducción del estigma en torno al bienestar psicológico y hábitos saludables.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_sal_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Bienestar y salud",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "07/08/2026",
          fuerzaCambio: "Salud mental"
        }
      ],
      afectan: [
        {
          titulo: "Bioética, privacidad de datos médicos y equidad en acceso a innovaciones",
          tituloCorto: "Bioética y datos",
          resumen: "Protección de información sensible de pacientes y acceso justo a tratamientos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_sal_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "2030-2040",
          cuadrante: "Bienestar y salud",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "07/08/2026",
          fuerzaCambio: "Bioética y datos"
        }
      ]
    }
  },

  // ─── ECONOMÍA Y FINANZAS ──────────────────────────────────────────────────────
  "Economía y Finanzas": {
    url: "https://observatorio.ceplan.gob.pe/sector/economia-finanzas",
    "Económica": {
      caracterizan: [
        {
          titulo: "Reconfiguración de cadenas de suministro y diversificación comercial",
          tituloCorto: "Cadenas de valor",
          resumen: "Búsqueda de mayor resiliencia logística y apertura hacia mercados estratégicos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_eco_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "15/08/2026",
          fuerzaCambio: "Cadenas de valor"
        }
      ],
      afectan: [
        {
          titulo: "Volatilidad financiera global, tasas de interés y transición digital de pagos",
          tituloCorto: "Dinámica financiera",
          resumen: "Adopción de billeteras digitales, banca abierta y gestión prudente de deuda.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_eco_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "15/08/2026",
          fuerzaCambio: "Dinámica financiera"
        }
      ]
    },
    "Social": {
      caracterizan: [
        {
          titulo: "Inclusión financiera de hogares y microempresas en zonas no bancarizadas",
          tituloCorto: "Inclusión financiera",
          resumen: "Acceso a crédito formal, ahorro y seguros para fortalecer la resiliencia familiar.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_eco_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "15/08/2026",
          fuerzaCambio: "Inclusión financiera"
        }
      ],
      afectan: [
        {
          titulo: "Informalidad laboral y desigualdad en la distribución del ingreso",
          tituloCorto: "Formalidad e ingreso",
          resumen: "Retos estructurales de productividad y acceso a protección social contributiva.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_eco_soc",
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "15/08/2026",
          fuerzaCambio: "Formalidad e ingreso"
        }
      ]
    },
    "Tecnológica": {
      caracterizan: [
        {
          titulo: "Automatización de procesos financieros y analítica de datos en tiempo real",
          tituloCorto: "Analítica y automatización",
          resumen: "Uso de modelos predictivos y automatización para evaluación de riesgos y costos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_eco_tec",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "17/08/2026",
          fuerzaCambio: "Analítica y automatización"
        }
      ],
      afectan: [
        {
          titulo: "Ciberseguridad en infraestructuras críticas y activos digitales",
          tituloCorto: "Ciberseguridad financiera",
          resumen: "Protección frente a fraudes electrónicos y amenazas sobre sistemas transaccionales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_eco_tec",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "17/08/2026",
          fuerzaCambio: "Ciberseguridad financiera"
        }
      ]
    },
    "Política": {
      caracterizan: [
        {
          titulo: "Regla fiscal, transparencia presupuestaria y modernización tributaria",
          tituloCorto: "Sostenibilidad fiscal",
          resumen: "Capacidad del Estado para sostener inversión pública y estabilidad macroeconómica.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t7_eco_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "17/08/2026",
          fuerzaCambio: "Sostenibilidad fiscal"
        }
      ],
      afectan: [
        {
          titulo: "Regulación de fintech, tributación de economía digital y compras públicas",
          tituloCorto: "Regulación económica",
          resumen: "Adaptación de normas a nuevos modelos de negocio y contratación eficiente.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_eco_pol",
          tematica: "Política",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "17/08/2026",
          fuerzaCambio: "Regulación económica"
        }
      ]
    },
    "Actitud, valores y ética": {
      caracterizan: [
        {
          titulo: "Criterios ASG (ambientales, sociales y de gobernanza) en decisiones empresariales",
          tituloCorto: "Criterios ASG",
          resumen: "Mayor escrutinio sobre impacto social, conducta corporativa y gobierno transparente.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_eco_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "19/08/2026",
          fuerzaCambio: "Criterios ASG"
        }
      ],
      afectan: [
        {
          titulo: "Confianza ciudadana en instituciones financieras y consumo responsable",
          tituloCorto: "Confianza y consumo",
          resumen: "Preferencia por marcas transparentes y prevención de prácticas abusivas o especulativas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_eco_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "19/08/2026",
          fuerzaCambio: "Confianza y consumo"
        }
      ]
    }
  },

  // ─── TRANSPORTE Y COMUNICACIONES ──────────────────────────────────────────────
  "Transporte y Comunicaciones": {
    url: "https://observatorio.ceplan.gob.pe/sector/transportes-comunicaciones",
    "Tecnológica": {
      caracterizan: [
        {
          titulo: "Despliegue de redes de alta velocidad, fibra óptica y conectividad satelital",
          tituloCorto: "Conectividad avanzada",
          resumen: "Ampliación de cobertura de banda ancha y servicios digitales en corredores y zonas rurales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_tra_tec",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Conectividad y movilidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "25/08/2026",
          fuerzaCambio: "Conectividad avanzada"
        }
      ],
      afectan: [
        {
          titulo: "Electromovilidad, sistemas inteligentes de tránsito y logística multimodal",
          tituloCorto: "Movilidad inteligente",
          resumen: "Transición hacia vehículos eléctricos, gestión de flujo vial y hubs logísticos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_tra_tec",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Conectividad y movilidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "25/08/2026",
          fuerzaCambio: "Movilidad inteligente"
        }
      ]
    },
    "Económica": {
      caracterizan: [
        {
          titulo: "Reducción de tiempos y costos logísticos para la competitividad territorial",
          tituloCorto: "Logística y costos",
          resumen: "Mejora en conectividad vial, portuaria y aeroportuaria para el comercio.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_tra_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Conectividad y movilidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "25/08/2026",
          fuerzaCambio: "Logística y costos"
        }
      ],
      afectan: [
        {
          titulo: "Nuevos modelos de movilidad compartida y economía de plataformas",
          tituloCorto: "Plataformas de movilidad",
          resumen: "Transformación de hábitos de desplazamiento urbano y reparto de última milla.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_tra_eco",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Conectividad y movilidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "25/08/2026",
          fuerzaCambio: "Plataformas de movilidad"
        }
      ]
    },
    "Social": {
      caracterizan: [
        {
          titulo: "Accesibilidad de transporte público masivo y seguridad vial urbana",
          tituloCorto: "Seguridad y acceso vial",
          resumen: "Reducción de siniestros y tiempos de viaje para trabajadores y estudiantes.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_tra_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Conectividad y movilidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "27/08/2026",
          fuerzaCambio: "Seguridad y acceso vial"
        }
      ],
      afectan: [
        {
          titulo: "Integración territorial de poblaciones aisladas mediante telecomunicaciones",
          tituloCorto: "Inclusión territorial",
          resumen: "Acceso a servicios públicos, educación y comercio electrónico desde localidades alejadas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_tra_soc",
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Conectividad y movilidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "27/08/2026",
          fuerzaCambio: "Inclusión territorial"
        }
      ]
    },
    "Ambiental": {
      caracterizan: [
        {
          titulo: "Emisiones contaminantes del parque automotor y ruido urbano",
          tituloCorto: "Emisiones del transporte",
          resumen: "Aporte de combustibles y antigüedad vehicular a la contaminación atmosférica.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t7_tra_amb",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Conectividad y movilidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "27/08/2026",
          fuerzaCambio: "Emisiones del transporte"
        }
      ],
      afectan: [
        {
          titulo: "Resiliencia de infraestructura vial y de comunicaciones ante eventos extremos",
          tituloCorto: "Infraestructura resiliente",
          resumen: "Riesgo de interrupciones por deslizamientos, inundaciones o lluvias intensas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_tra_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Conectividad y movilidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "27/08/2026",
          fuerzaCambio: "Infraestructura resiliente"
        }
      ]
    },
    "Política": {
      caracterizan: [
        {
          titulo: "Rectoría, fiscalización y planificación integrada de infraestructura",
          tituloCorto: "Planificación vial",
          resumen: "Coordinación entre niveles de gobierno para evitar superposición y cuellos de botella.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_tra_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Conectividad y movilidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "28/08/2026",
          fuerzaCambio: "Planificación vial"
        }
      ],
      afectan: [
        {
          titulo: "Gestión del espectro radioeléctrico, neutralidad de red y protección de usuarios",
          tituloCorto: "Gobernanza digital",
          resumen: "Marco regulatorio para competencia sana y calidad de servicios de telecomunicaciones.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_tra_pol",
          tematica: "Política",
          horizonte: "2030-2040",
          cuadrante: "Conectividad y movilidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "28/08/2026",
          fuerzaCambio: "Gobernanza digital"
        }
      ]
    },
    "Actitud, valores y ética": {
      caracterizan: [
        {
          titulo: "Cultura de respeto a las normas de tránsito y convivencia en el espacio público",
          tituloCorto: "Cultura vial",
          resumen: "Adopción de conductas responsables entre conductores, ciclistas y peatones.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_tra_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Conectividad y movilidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "28/08/2026",
          fuerzaCambio: "Cultura vial"
        }
      ],
      afectan: [
        {
          titulo: "Uso responsable de información y combate a cadenas falsas en redes",
          tituloCorto: "Ética informativa",
          resumen: "Prácticas de verificación y responsabilidad comunicacional en entornos conectados.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t12_tra_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "2030-2040",
          cuadrante: "Conectividad y movilidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "28/08/2026",
          fuerzaCambio: "Ética informativa"
        }
      ]
    }
  }

};