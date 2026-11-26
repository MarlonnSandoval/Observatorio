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

  // ─── PRODUCCIÓN ───────────────────────────────────────────────────────────────
  "Producción": {
    url: "https://observatorio.ceplan.gob.pe/sector/produccion",
    "Económica": {
      caracterizan: [
        {
          titulo: "Sofisticación productiva y diversificación de manufactura de alto valor",
          tituloCorto: "Diversificación productiva",
          resumen: "Transición desde bienes primarios hacia insumos intermedios y manufactura especializada.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_pro_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "02/09/2026",
          fuerzaCambio: "Diversificación productiva"
        }
      ],
      afectan: [
        {
          titulo: "Acceso a financiamiento y escalamiento de mipymes formales",
          tituloCorto: "Escalamiento mipyme",
          resumen: "Disponibilidad de capital de trabajo, garantías y crédito productivo para pequeñas empresas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_pro_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "02/09/2026",
          fuerzaCambio: "Escalamiento mipyme"
        }
      ]
    },
    "Tecnológica": {
      caracterizan: [
        {
          titulo: "Adopción de manufactura inteligente, robótica y gemelos digitales",
          tituloCorto: "Industria 4.0",
          resumen: "Automatización de líneas de producción, control de calidad y mantenimiento predictivo.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_pro_tec",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "02/09/2026",
          fuerzaCambio: "Industria 4.0"
        }
      ],
      afectan: [
        {
          titulo: "Trazabilidad digital en cadenas de suministro y comercio electrónico",
          tituloCorto: "Trazabilidad productiva",
          resumen: "Registro de origen, estándares y cumplimiento en tiempo real a lo largo del ciclo productivo.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_pro_tec",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "02/09/2026",
          fuerzaCambio: "Trazabilidad productiva"
        }
      ]
    },
    "Ambiental": {
      caracterizan: [
        {
          titulo: "Eficiencia de recursos, simbiosis industrial y reducción de residuos",
          tituloCorto: "Producción limpia",
          resumen: "Menor intensidad energética y aprovechamiento de subproductos entre empresas cercanas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_pro_amb",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "03/09/2026",
          fuerzaCambio: "Producción limpia"
        }
      ],
      afectan: [
        {
          titulo: "Presión sobre recursos naturales y requisitos de descarbonización industrial",
          tituloCorto: "Descarbonización fabril",
          resumen: "Adaptación de procesos industriales frente a límites ambientales y metas climáticas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_pro_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "03/09/2026",
          fuerzaCambio: "Descarbonización fabril"
        }
      ]
    },
    "Social": {
      caracterizan: [
        {
          titulo: "Desarrollo de clusters productivos y empleo calificado en regiones",
          tituloCorto: "Clusters regionales",
          resumen: "Concentración territorial de capacidades técnicas y proveedores locales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t7_pro_soc",
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "03/09/2026",
          fuerzaCambio: "Clusters regionales"
        }
      ],
      afectan: [
        {
          titulo: "Competencia con importaciones de bajo costo y brechas de productividad",
          tituloCorto: "Competitividad laboral",
          resumen: "Impacto sobre unidades productivas de menor escala y necesidad de reconversión.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_pro_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "03/09/2026",
          fuerzaCambio: "Competitividad laboral"
        }
      ]
    },
    "Política": {
      caracterizan: [
        {
          titulo: "Políticas de desarrollo productivo, innovación y metrología",
          tituloCorto: "Política industrial",
          resumen: "Instrumentos públicos orientados a calidad, transferencia tecnológica y diversificación.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_pro_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Gobernanza y competitividad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "04/09/2026",
          fuerzaCambio: "Política industrial"
        }
      ],
      afectan: [
        {
          titulo: "Simplificación administrativa y formalización de actividades económicas",
          tituloCorto: "Formalización empresarial",
          resumen: "Reducción de costos de cumplimiento y mejora del entorno regulatorio para operar.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_pro_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Gobernanza y competitividad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "04/09/2026",
          fuerzaCambio: "Formalización empresarial"
        }
      ]
    },
    "Actitud, valores y ética": {
      caracterizan: [
        {
          titulo: "Cultura de calidad, innovación abierta y colaboración empresarial",
          tituloCorto: "Cultura innovadora",
          resumen: "Disposición a cooperar entre empresas, academia y centros de innovación.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_pro_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "04/09/2026",
          fuerzaCambio: "Cultura innovadora"
        }
      ],
      afectan: [
        {
          titulo: "Integridad comercial, competencia leal y respeto a propiedad intelectual",
          tituloCorto: "Ética empresarial",
          resumen: "Prevención de contrabando, piratería y prácticas desleales en los mercados.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t12_pro_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Gobernanza y competitividad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "04/09/2026",
          fuerzaCambio: "Ética empresarial"
        }
      ]
    }
  },

  // ─── INTERIOR ─────────────────────────────────────────────────────────────────
  "Interior": {
    url: "https://observatorio.ceplan.gob.pe/sector/interior",
    "Política": {
      caracterizan: [
        {
          titulo: "Gobernanza de la seguridad ciudadana y articulación intergubernamental",
          tituloCorto: "Gobernanza de seguridad",
          resumen: "Coordinación operativa entre Policía, gobiernos locales, fiscalía y justicia.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_int_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Seguridad y orden interno",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "07/09/2026",
          fuerzaCambio: "Gobernanza de seguridad"
        }
      ],
      afectan: [
        {
          titulo: "Control migratorio, orden público y gestión de fronteras internas y externas",
          tituloCorto: "Control y orden",
          resumen: "Capacidad de registro, fiscalización y respuesta ante flujos y conflictos territoriales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_int_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Seguridad y orden interno",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "07/09/2026",
          fuerzaCambio: "Control y orden"
        }
      ]
    },
    "Tecnológica": {
      caracterizan: [
        {
          titulo: "Videovigilancia inteligente, analítica delictiva y georreferenciación",
          tituloCorto: "Seguridad inteligente",
          resumen: "Integración de cámaras, bases de datos y mapas de calor para prevención y respuesta.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_int_tec",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Seguridad y orden interno",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "07/09/2026",
          fuerzaCambio: "Seguridad inteligente"
        }
      ],
      afectan: [
        {
          titulo: "Sofisticación del cibercrimen, extorsión digital y redes criminales transnacionales",
          tituloCorto: "Delito tecnológico",
          resumen: "Expansión de modalidades delictivas en entornos digitales y financieros.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_int_tec",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Seguridad y orden interno",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "07/09/2026",
          fuerzaCambio: "Delito tecnológico"
        }
      ]
    },
    "Social": {
      caracterizan: [
        {
          titulo: "Prevención comunitaria de la violencia y recuperación de espacios públicos",
          tituloCorto: "Prevención comunitaria",
          resumen: "Intervenciones focalizadas en barrios vulnerables, juventud y cohesión vecinal.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_int_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Seguridad y orden interno",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "08/09/2026",
          fuerzaCambio: "Prevención comunitaria"
        }
      ],
      afectan: [
        {
          titulo: "Percepción de inseguridad y movilidad urbana condicionada por el delito",
          tituloCorto: "Percepción de seguridad",
          resumen: "Cambios en rutinas cotidianas, horarios de desplazamiento y confianza social.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_int_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Seguridad y orden interno",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "08/09/2026",
          fuerzaCambio: "Percepción de seguridad"
        }
      ]
    },
    "Económica": {
      caracterizan: [
        {
          titulo: "Costo económico de la criminalidad y asignación de recursos a seguridad",
          tituloCorto: "Costo de inseguridad",
          resumen: "Impacto de robos, extorsión y seguridad privada sobre hogares y negocios.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t7_int_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Seguridad y orden interno",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "08/09/2026",
          fuerzaCambio: "Costo de inseguridad"
        }
      ],
      afectan: [
        {
          titulo: "Economías ilícitas, minería ilegal y lavado de activos en territorios vulnerables",
          tituloCorto: "Economías ilícitas",
          resumen: "Presión financiera y territorial de actividades ilegales sobre la economía formal.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_int_eco",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Seguridad y orden interno",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "08/09/2026",
          fuerzaCambio: "Economías ilícitas"
        }
      ]
    },
    "Ambiental": {
      caracterizan: [
        {
          titulo: "Delitos ambientales como tala, tráfico de fauna y minería aluvial ilícita",
          tituloCorto: "Delito ambiental",
          resumen: "Degradación de ecosistemas y cuencas vinculada a economías extractivas ilegales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_int_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "09/09/2026",
          fuerzaCambio: "Delito ambiental"
        }
      ],
      afectan: [
        {
          titulo: "Respuesta operativa policial ante emergencias y desastres naturales",
          tituloCorto: "Respuesta ante emergencias",
          resumen: "Apoyo en evacuación, rescate, resguardo de suministros y restablecimiento del orden.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_int_amb",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Seguridad y orden interno",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "09/09/2026",
          fuerzaCambio: "Respuesta ante emergencias"
        }
      ]
    },
    "Actitud, valores y ética": {
      caracterizan: [
        {
          titulo: "Profesionalización, integridad policial y respeto a derechos fundamentales",
          tituloCorto: "Integridad institucional",
          resumen: "Estándares de conducta, control interno y cercanía ética con la ciudadanía.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_int_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Seguridad y orden interno",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "09/09/2026",
          fuerzaCambio: "Integridad institucional"
        }
      ],
      afectan: [
        {
          titulo: "Cultura de legalidad, denuncia ciudadana y rechazo a la corrupción cotidiana",
          tituloCorto: "Cultura de legalidad",
          resumen: "Confianza pública para colaborar con autoridades y rechazar redes de impunidad.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t12_int_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "2030-2040",
          cuadrante: "Seguridad y orden interno",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "09/09/2026",
          fuerzaCambio: "Cultura de legalidad"
        }
      ]
    }
  },

  // ─── JUSTICIA ─────────────────────────────────────────────────────────────────
  "Justicia": {
    url: "https://observatorio.ceplan.gob.pe/sector/justicia",
    "Política": {
      caracterizan: [
        {
          titulo: "Independencia judicial, celeridad procesal y acceso oportuno a la justicia",
          tituloCorto: "Acceso a la justicia",
          resumen: "Reducción de carga procesal, predictibilidad de fallos y tutela efectiva de derechos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_jus_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Estado de derecho",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "11/09/2026",
          fuerzaCambio: "Acceso a la justicia"
        }
      ],
      afectan: [
        {
          titulo: "Reforma del sistema penitenciario, rehabilitación y lucha contra la corrupción",
          tituloCorto: "Reforma penal y anticorrupción",
          resumen: "Desafíos de hacinamiento, reinserción social y sanción efectiva de delitos públicos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_jus_pol",
          tematica: "Política",
          horizonte: "2030-2040",
          cuadrante: "Estado de derecho",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "11/09/2026",
          fuerzaCambio: "Reforma penal y anticorrupción"
        }
      ]
    },
    "Tecnológica": {
      caracterizan: [
        {
          titulo: "Expediente judicial electrónico, audiencias virtuales y gestión digital de casos",
          tituloCorto: "Justicia digital",
          resumen: "Digitalización de trámites, notificaciones electrónicas y seguimiento remoto de procesos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_jus_tec",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Estado de derecho",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "11/09/2026",
          fuerzaCambio: "Justicia digital"
        }
      ],
      afectan: [
        {
          titulo: "Validez de prueba digital, cadenas de custodia electrónicas y sesgos en IA legal",
          tituloCorto: "Prueba y algoritmos legales",
          resumen: "Garantías técnicas y jurídicas frente a evidencia electrónica y automatización.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_jus_tec",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Estado de derecho",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "11/09/2026",
          fuerzaCambio: "Prueba y algoritmos legales"
        }
      ]
    },
    "Social": {
      caracterizan: [
        {
          titulo: "Defensa pública, justicia intercultural y mecanismos pacíficos de resolución",
          tituloCorto: "Justicia inclusiva",
          resumen: "Atención en lenguas originarias, conciliación y asistencia legal para poblaciones vulnerables.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_jus_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Estado de derecho",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "12/09/2026",
          fuerzaCambio: "Justicia inclusiva"
        }
      ],
      afectan: [
        {
          titulo: "Conflictividad social territorial y demandas de reparación y derechos humanos",
          tituloCorto: "Conflictividad y derechos",
          resumen: "Presión sobre mecanismos de diálogo, prevención y resolución justa de disputas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_jus_soc",
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Estado de derecho",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "12/09/2026",
          fuerzaCambio: "Conflictividad y derechos"
        }
      ]
    },
    "Económica": {
      caracterizan: [
        {
          titulo: "Seguridad jurídica, ejecución contractual y protección de inversiones",
          tituloCorto: "Seguridad jurídica",
          resumen: "Predictibilidad normativa y resolución ágil de controversias comerciales y civiles.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t7_jus_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Gobernanza y competitividad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "12/09/2026",
          fuerzaCambio: "Seguridad jurídica"
        }
      ],
      afectan: [
        {
          titulo: "Recuperación de activos ilícitos y eficiencia presupuestaria del sistema de justicia",
          tituloCorto: "Recursos y recuperación",
          resumen: "Optimización de recursos públicos y persecución patrimonial del delito.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_jus_eco",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Estado de derecho",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "12/09/2026",
          fuerzaCambio: "Recursos y recuperación"
        }
      ]
    },
    "Actitud, valores y ética": {
      caracterizan: [
        {
          titulo: "Imparcialidad, transparencia y meritocracia en operadores de justicia",
          tituloCorto: "Ética judicial",
          resumen: "Publicidad de decisiones, rendición de cuentas y prevención de conflictos de interés.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_jus_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Estado de derecho",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "14/09/2026",
          fuerzaCambio: "Ética judicial"
        }
      ],
      afectan: [
        {
          titulo: "Confianza ciudadana en las instituciones de justicia y resolución pacífica",
          tituloCorto: "Confianza institucional",
          resumen: "Legitimidad social del sistema judicial frente a percepciones de lentitud o parcialidad.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_jus_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "2030-2040",
          cuadrante: "Estado de derecho",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "14/09/2026",
          fuerzaCambio: "Confianza institucional"
        }
      ]
    }
  },

  // ─── DEFENSA ──────────────────────────────────────────────────────────────────
  "Defensa": {
    url: "https://observatorio.ceplan.gob.pe/sector/defensa",
    "Política": {
      caracterizan: [
        {
          titulo: "Defensa de la soberanía nacional, integridad territorial y control de fronteras",
          tituloCorto: "Soberanía y fronteras",
          resumen: "Vigilancia y resguardo estratégico de espacios terrestres, marítimos, aéreos y amazónicos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_def_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Seguridad y defensa",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "15/09/2026",
          fuerzaCambio: "Soberanía y fronteras"
        }
      ],
      afectan: [
        {
          titulo: "Amenazas híbridas, tensiones geopolíticas y seguridad multidimensional",
          tituloCorto: "Amenazas multidimensionales",
          resumen: "Convergencia de riesgos estratégicos, ilícitos transfronterizos y crisis regionales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_def_pol",
          tematica: "Política",
          horizonte: "2030-2040",
          cuadrante: "Seguridad y defensa",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "15/09/2026",
          fuerzaCambio: "Amenazas multidimensionales"
        }
      ]
    },
    "Tecnológica": {
      caracterizan: [
        {
          titulo: "Ciberdefensa, vigilancia aeroespacial y modernización de capacidades operativas",
          tituloCorto: "Ciberdefensa y vigilancia",
          resumen: "Protección de redes estratégicas, sensores, radares y sistemas de mando y control.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_def_tec",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Seguridad y defensa",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "15/09/2026",
          fuerzaCambio: "Ciberdefensa y vigilancia"
        }
      ],
      afectan: [
        {
          titulo: "Sistemas no tripulados, inteligencia artificial táctica y obsolescencia de equipos",
          tituloCorto: "Modernización tecnológica",
          resumen: "Adaptación de plataformas y doctrinas frente a tecnologías militares emergentes.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_def_tec",
          tematica: "Tecnológica",
          horizonte: "2040-2050",
          cuadrante: "Seguridad y defensa",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "15/09/2026",
          fuerzaCambio: "Modernización tecnológica"
        }
      ]
    },
    "Ambiental": {
      caracterizan: [
        {
          titulo: "Gestión del riesgo de desastres y apoyo logístico ante emergencias climáticas",
          tituloCorto: "Defensa ante desastres",
          resumen: "Despliegue rápido de ingeniería, transporte y ayuda humanitaria en zonas afectadas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_def_amb",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "16/09/2026",
          fuerzaCambio: "Defensa ante desastres"
        }
      ],
      afectan: [
        {
          titulo: "Seguridad ambiental, biodefensa y presión sobre áreas naturales protegidas",
          tituloCorto: "Seguridad ambiental",
          resumen: "Riesgos asociados a eventos extremos, plagas o explotación ilegal de recursos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_def_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "16/09/2026",
          fuerzaCambio: "Seguridad ambiental"
        }
      ]
    },
    "Social": {
      caracterizan: [
        {
          titulo: "Participación en desarrollo social, inclusión en zonas de frontera y sanidad",
          tituloCorto: "Acción cívica y social",
          resumen: "Acercamiento de servicios básicos y conectividad a comunidades apartadas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t7_def_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Seguridad y defensa",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "16/09/2026",
          fuerzaCambio: "Acción cívica y social"
        }
      ],
      afectan: [
        {
          titulo: "Cambios demográficos y retos de atracción y retención de talento especializado",
          tituloCorto: "Talento en defensa",
          resumen: "Disponibilidad de perfiles técnicos, científicos y operativos en el largo plazo.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_def_soc",
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Seguridad y defensa",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "16/09/2026",
          fuerzaCambio: "Talento en defensa"
        }
      ]
    },
    "Económica": {
      caracterizan: [
        {
          titulo: "Sostenibilidad fiscal de la inversión en defensa y mantenimiento de capacidades",
          tituloCorto: "Presupuesto de defensa",
          resumen: "Balance entre gasto corriente, sostenimiento logístico y renovación estratégica.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_def_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Seguridad y defensa",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "17/09/2026",
          fuerzaCambio: "Presupuesto de defensa"
        }
      ],
      afectan: [
        {
          titulo: "Desarrollo de industria dual y compensaciones tecnológicas en adquisiciones",
          tituloCorto: "Industria y offset",
          resumen: "Aprovechamiento de compras estratégicas para transferencia tecnológica e industrial.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_def_eco",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "17/09/2026",
          fuerzaCambio: "Industria y offset"
        }
      ]
    },
    "Actitud, valores y ética": {
      caracterizan: [
        {
          titulo: "Subordinación al poder constitucional, ética militar y respeto al derecho internacional",
          tituloCorto: "Ética y constitucionalidad",
          resumen: "Principios rectores de actuación institucional en democracia y operaciones.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_def_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Seguridad y defensa",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "17/09/2026",
          fuerzaCambio: "Ética y constitucionalidad"
        }
      ],
      afectan: [
        {
          titulo: "Cultura de prevención y resiliencia ciudadana frente a riesgos y emergencias",
          tituloCorto: "Cultura de prevención",
          resumen: "Preparación comunitaria y corresponsabilidad ante amenazas y desastres.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t12_def_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "2030-2040",
          cuadrante: "Seguridad y defensa",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "17/09/2026",
          fuerzaCambio: "Cultura de prevención"
        }
      ]
    }
  },

  // ─── VIVIENDA, CONSTRUCCIÓN Y SANEAMIENTO ─────────────────────────────────────
  "Vivienda, construcción y saneamiento": {
    url: "https://observatorio.ceplan.gob.pe/sector/vivienda-construccion-saneamiento",
    "Social": {
      caracterizan: [
        {
          titulo: "Acceso universal a agua potable y saneamiento de calidad en zonas urbanas y rurales",
          tituloCorto: "Agua y saneamiento",
          resumen: "Cierre de brechas de cobertura, continuidad del servicio y tratamiento de aguas residuales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_viv_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "18/09/2026",
          fuerzaCambio: "Agua y saneamiento"
        }
      ],
      afectan: [
        {
          titulo: "Déficit habitacional, ocupación informal y seguridad de la tenencia",
          tituloCorto: "Acceso a vivienda",
          resumen: "Demanda de vivienda social adecuada y ordenamiento de asentamientos precarios.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_viv_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "18/09/2026",
          fuerzaCambio: "Acceso a vivienda"
        }
      ]
    },
    "Ambiental": {
      caracterizan: [
        {
          titulo: "Construcción sostenible, eficiencia hídrica y gestión de residuos de construcción",
          tituloCorto: "Edificación sostenible",
          resumen: "Uso de materiales de menor huella ambiental y reúso de agua en edificaciones.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_viv_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "18/09/2026",
          fuerzaCambio: "Edificación sostenible"
        }
      ],
      afectan: [
        {
          titulo: "Exposición de viviendas e infraestructura sanitaria a sismos, huaicos e inundaciones",
          tituloCorto: "Resiliencia urbana",
          resumen: "Vulnerabilidad física por emplazamiento en zonas de riesgo y baja calidad constructiva.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_viv_amb",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "18/09/2026",
          fuerzaCambio: "Resiliencia urbana"
        }
      ]
    },
    "Tecnológica": {
      caracterizan: [
        {
          titulo: "Metodología BIM, construcción modular y sistemas inteligentes de gestión hídrica",
          tituloCorto: "Construcción digital",
          resumen: "Modelado digital, prefabricación y control de pérdidas en redes de agua.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_viv_tec",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "21/09/2026",
          fuerzaCambio: "Construcción digital"
        }
      ],
      afectan: [
        {
          titulo: "Nuevos materiales de alto desempeño y automatización en plantas de tratamiento",
          tituloCorto: "Innovación en obras",
          resumen: "Mejora de durabilidad estructural y eficiencia operativa en saneamiento.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_viv_tec",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "21/09/2026",
          fuerzaCambio: "Innovación en obras"
        }
      ]
    },
    "Económica": {
      caracterizan: [
        {
          titulo: "Dinamismo de la inversión inmobiliaria, obra pública y crédito hipotecario",
          tituloCorto: "Inversión en vivienda",
          resumen: "Efecto multiplicador de la construcción sobre empleo y cadenas de suministro.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t7_viv_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "21/09/2026",
          fuerzaCambio: "Inversión en vivienda"
        }
      ],
      afectan: [
        {
          titulo: "Sostenibilidad tarifaria de empresas prestadoras de saneamiento y costos de suelo",
          tituloCorto: "Sostenibilidad sanitaria",
          resumen: "Equilibrio financiero para operar, mantener y ampliar redes de agua y desagüe.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_viv_eco",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "21/09/2026",
          fuerzaCambio: "Sostenibilidad sanitaria"
        }
      ]
    },
    "Política": {
      caracterizan: [
        {
          titulo: "Planificación urbana territorial, zonificación y normativa de edificación segura",
          tituloCorto: "Ordenamiento urbano",
          resumen: "Instrumentos de gestión del suelo y control de licencias para ciudades ordenadas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_viv_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "22/09/2026",
          fuerzaCambio: "Ordenamiento urbano"
        }
      ],
      afectan: [
        {
          titulo: "Articulación de subsidios habitacionales y gestión de proyectos de inversión",
          tituloCorto: "Gestión de programas",
          resumen: "Focalización de bonos de vivienda y destrabe de obras de agua y saneamiento.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_viv_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "22/09/2026",
          fuerzaCambio: "Gestión de programas"
        }
      ]
    },
    "Actitud, valores y ética": {
      caracterizan: [
        {
          titulo: "Valoración del agua como bien escaso y uso responsable del espacio público",
          tituloCorto: "Cultura del agua y barrio",
          resumen: "Hábitos de ahorro hídrico, cuidado de áreas comunes y convivencia vecinal.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_viv_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "22/09/2026",
          fuerzaCambio: "Cultura del agua y barrio"
        }
      ],
      afectan: [
        {
          titulo: "Prevención de corrupción en licitaciones y tráfico de terrenos",
          tituloCorto: "Integridad urbana",
          resumen: "Transparencia en procesos de adjudicación y defensa de la legalidad del suelo.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t12_viv_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "2030-2040",
          cuadrante: "Estado de derecho",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "22/09/2026",
          fuerzaCambio: "Integridad urbana"
        }
      ]
    }
  },

  // ─── AGRARIO Y DE RIESGO ──────────────────────────────────────────────────────
  "Agrario y de Riesgo": {
    url: "https://observatorio.ceplan.gob.pe/sector/agrario-riesgo",
    "Ambiental": {
      caracterizan: [
        {
          titulo: "Variabilidad climática, estrés hídrico y degradación de suelos agrícolas",
          tituloCorto: "Suelos y clima agrario",
          resumen: "Alteración de calendarios de siembra, disponibilidad de riego y fertilidad.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_agr_amb",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "24/09/2026",
          fuerzaCambio: "Suelos y clima agrario"
        }
      ],
      afectan: [
        {
          titulo: "Agroecología, conservación de agrobiodiversidad y manejo integrado de cuencas",
          tituloCorto: "Agricultura resiliente",
          resumen: "Prácticas de protección de cultivos nativos, cobertura vegetal y captación de agua.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_agr_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "24/09/2026",
          fuerzaCambio: "Agricultura resiliente"
        }
      ]
    },
    "Económica": {
      caracterizan: [
        {
          titulo: "Agroexportación, acceso a mercados internacionales y valor agregado agroindustrial",
          tituloCorto: "Agroexportación y valor",
          resumen: "Crecimiento de cultivos de alto valor y transformación primaria con estándares sanitarios.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_agr_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "24/09/2026",
          fuerzaCambio: "Agroexportación y valor"
        }
      ],
      afectan: [
        {
          titulo: "Volatilidad de precios de insumos agrícolas, fertilizantes y costos de transporte",
          tituloCorto: "Costos y mercados agrarios",
          resumen: "Sensibilidad de los márgenes del productor ante fluctuaciones globales y logísticas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_agr_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "24/09/2026",
          fuerzaCambio: "Costos y mercados agrarios"
        }
      ]
    },
    "Social": {
      caracterizan: [
        {
          titulo: "Agricultura familiar, seguridad alimentaria y arraigo rural",
          tituloCorto: "Agricultura familiar",
          resumen: "Rol de pequeños productores en el abasto de alimentos y sostenibilidad de medios de vida.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_agr_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "25/09/2026",
          fuerzaCambio: "Agricultura familiar"
        }
      ],
      afectan: [
        {
          titulo: "Envejecimiento de la población rural y fragmentación de parcelas agrícolas",
          tituloCorto: "Dinámica rural",
          resumen: "Retos de relevo generacional, asociatividad y tamaño económico de unidades productivas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_agr_soc",
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "25/09/2026",
          fuerzaCambio: "Dinámica rural"
        }
      ]
    },
    "Tecnológica": {
      caracterizan: [
        {
          titulo: "Riego tecnificado, agricultura de precisión y pronósticos agrometeorológicos",
          tituloCorto: "Tecnología agraria",
          resumen: "Uso eficiente del agua, sensores de humedad y alertas climáticas para cultivos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t7_agr_tec",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "25/09/2026",
          fuerzaCambio: "Tecnología agraria"
        }
      ],
      afectan: [
        {
          titulo: "Biotecnología vegetal, sanidad agraria digital y trazabilidad de origen",
          tituloCorto: "Sanidad y biotecnología",
          resumen: "Prevención de plagas y enfermedades, así como certificación de calidad exportable.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_agr_tec",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "25/09/2026",
          fuerzaCambio: "Sanidad y biotecnología"
        }
      ]
    },
    "Política": {
      caracterizan: [
        {
          titulo: "Seguros agrarios, extensión rural y gestión preventiva del riesgo agroclimático",
          tituloCorto: "Gestión del riesgo agrario",
          resumen: "Mecanismos de cobertura ante pérdidas climáticas y asistencia técnica continua.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_agr_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "28/09/2026",
          fuerzaCambio: "Gestión del riesgo agrario"
        }
      ],
      afectan: [
        {
          titulo: "Saneamiento físico-legal de predios y acceso a crédito agrario formal",
          tituloCorto: "Titulación y crédito",
          resumen: "Formalización de tierras y herramientas financieras adaptadas a ciclos productivos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_agr_pol",
          tematica: "Política",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "28/09/2026",
          fuerzaCambio: "Titulación y crédito"
        }
      ]
    },
    "Actitud, valores y ética": {
      caracterizan: [
        {
          titulo: "Asociatividad cooperativista y valoración de saberes campesinos tradicionales",
          tituloCorto: "Asociatividad rural",
          resumen: "Trabajo colectivo para ganar escala comercial y preservar conocimientos locales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_agr_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "28/09/2026",
          fuerzaCambio: "Asociatividad rural"
        }
      ],
      afectan: [
        {
          titulo: "Responsabilidad en el uso de agroquímicos y protección de ecosistemas",
          tituloCorto: "Ética agroambiental",
          resumen: "Equilibrio entre productividad agrícola, salud humana y conservación ecológica.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t12_agr_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "28/09/2026",
          fuerzaCambio: "Ética agroambiental"
        }
      ]
    }
  },

  // ─── RELACIONES EXTERIORES ────────────────────────────────────────────────────
  "Relaciones exteriores": {
    url: "https://observatorio.ceplan.gob.pe/sector/relaciones-exteriores",
    "Política": {
      caracterizan: [
        {
          titulo: "Inserción internacional, multilateralismo y diplomacia económica y científica",
          tituloCorto: "Inserción y diplomacia",
          resumen: "Participación en bloques regionales, cooperación internacional y acuerdos estratégicos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_rex_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Inserción global",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "30/09/2026",
          fuerzaCambio: "Inserción y diplomacia"
        }
      ],
      afectan: [
        {
          titulo: "Competencia estratégica global y reconfiguración de alianzas geopolíticas",
          tituloCorto: "Geopolítica global",
          resumen: "Cambios en el equilibrio de poder internacional que influyen en comercio y cooperación.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_rex_pol",
          tematica: "Política",
          horizonte: "2030-2040",
          cuadrante: "Inserción global",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "30/09/2026",
          fuerzaCambio: "Geopolítica global"
        }
      ]
    },
    "Social": {
      caracterizan: [
        {
          titulo: "Protección y vinculación de comunidades peruanas en el exterior",
          tituloCorto: "Comunidades en el exterior",
          resumen: "Servicios consulares digitales, asistencia legal y articulación de la diáspora.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_rex_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Inserción global",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "30/09/2026",
          fuerzaCambio: "Comunidades en el exterior"
        }
      ],
      afectan: [
        {
          titulo: "Movilidad humana transfronteriza, migración regional y retorno",
          tituloCorto: "Movilidad humana",
          resumen: "Desafíos de integración, regularización, derechos y cooperación entre países vecinos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_rex_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Inserción global",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "30/09/2026",
          fuerzaCambio: "Movilidad humana"
        }
      ]
    },
    "Económica": {
      caracterizan: [
        {
          titulo: "Integración logística regional y conectividad transoceánica",
          tituloCorto: "Conectividad internacional",
          resumen: "Corredores, puertos y acuerdos que facilitan el intercambio y la inversión.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_rex_eco",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Inserción global",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "01/10/2026",
          fuerzaCambio: "Conectividad internacional"
        }
      ],
      afectan: [
        {
          titulo: "Fragmentación comercial, medidas no arancelarias y transición energética global",
          tituloCorto: "Comercio y transición",
          resumen: "Nuevas exigencias externas sobre origen, sostenibilidad y cadenas de valor.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_rex_eco",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Inserción global",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "01/10/2026",
          fuerzaCambio: "Comercio y transición"
        }
      ]
    },
    "Ambiental": {
      caracterizan: [
        {
          titulo: "Diplomacia climática, cooperación amazónica y gobernanza transfronteriza",
          tituloCorto: "Diplomacia ambiental",
          resumen: "Coordinación internacional para conservación de ecosistemas compartidos y financiamiento.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t7_rex_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "01/10/2026",
          fuerzaCambio: "Diplomacia ambiental"
        }
      ],
      afectan: [
        {
          titulo: "Desplazamientos inducidos por el clima y escasez compartida de recursos",
          tituloCorto: "Riesgos climáticos externos",
          resumen: "Impactos ambientales regionales que demandan cooperación y alerta temprana.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_rex_amb",
          tematica: "Ambiental",
          horizonte: "2040-2050",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "01/10/2026",
          fuerzaCambio: "Riesgos climáticos externos"
        }
      ]
    },
    "Tecnológica": {
      caracterizan: [
        {
          titulo: "Diplomacia digital, gobernanza de datos y cooperación en tecnologías emergentes",
          tituloCorto: "Diplomacia tecnológica",
          resumen: "Acuerdos sobre ciberseguridad, inteligencia artificial, conectividad y ciencia.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_rex_tec",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Inserción global",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "02/10/2026",
          fuerzaCambio: "Diplomacia tecnológica"
        }
      ],
      afectan: [
        {
          titulo: "Desinformación transnacional y manipulación informativa en entornos digitales",
          tituloCorto: "Seguridad informativa",
          resumen: "Campañas externas que afectan procesos públicos, confianza y cohesión social.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_rex_tec",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Inserción global",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "02/10/2026",
          fuerzaCambio: "Seguridad informativa"
        }
      ]
    },
    "Actitud, valores y ética": {
      caracterizan: [
        {
          titulo: "Promoción de los derechos humanos, solución pacífica y solidaridad internacional",
          tituloCorto: "Principios de política exterior",
          resumen: "Tradición diplomática basada en el derecho internacional y cooperación constructiva.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_rex_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Inserción global",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "02/10/2026",
          fuerzaCambio: "Principios de política exterior"
        }
      ],
      afectan: [
        {
          titulo: "Tolerancia frente a la xenofobia y cohesión en sociedades diversas",
          tituloCorto: "Convivencia e inclusión",
          resumen: "Actitudes sociales hacia personas migrantes y visitantes en el territorio.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t12_rex_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Inserción global",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "02/10/2026",
          fuerzaCambio: "Convivencia e inclusión"
        }
      ]
    }
  },

  // ─── ENERGÍA Y MINAS ──────────────────────────────────────────────────────────
  "Energía y Minas": {
    url: "https://observatorio.ceplan.gob.pe/sector/energia-minas",
    "Económica": {
      caracterizan: [
        {
          titulo: "Aporte de la minería y la energía a exportaciones, inversión y recaudación",
          tituloCorto: "Aporte macroeconómico",
          resumen: "Generación de divisas, encadenamientos y recursos fiscales para el desarrollo.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_ene_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "05/10/2026",
          fuerzaCambio: "Aporte macroeconómico"
        }
      ],
      afectan: [
        {
          titulo: "Demanda global de minerales críticos para transición energética y electromovilidad",
          tituloCorto: "Minerales críticos",
          resumen: "Oportunidades y exigencias asociadas a cobre, litio y otros insumos estratégicos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_ene_eco",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "05/10/2026",
          fuerzaCambio: "Minerales críticos"
        }
      ]
    },
    "Ambiental": {
      caracterizan: [
        {
          titulo: "Transición energética hacia fuentes renovables y eficiencia en el uso de energía",
          tituloCorto: "Transición energética",
          resumen: "Incorporación de solar, eólica, hidroeléctrica y nuevas soluciones de almacenamiento.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_ene_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "05/10/2026",
          fuerzaCambio: "Transición energética"
        }
      ],
      afectan: [
        {
          titulo: "Gestión socioambiental de pasivos, agua, relaves y cierre responsable de operaciones",
          tituloCorto: "Gestión socioambiental",
          resumen: "Mitigación de impactos en cuencas, biodiversidad y suelos a lo largo del ciclo de vida.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_ene_amb",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "05/10/2026",
          fuerzaCambio: "Gestión socioambiental"
        }
      ]
    },
    "Social": {
      caracterizan: [
        {
          titulo: "Acceso universal a electricidad confiable y cocción limpia en hogares",
          tituloCorto: "Acceso energético",
          resumen: "Cierre de brechas de electrificación rural y reducción de combustibles contaminantes.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_ene_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "06/10/2026",
          fuerzaCambio: "Acceso energético"
        }
      ],
      afectan: [
        {
          titulo: "Conflictividad socioambiental y distribución territorial de rentas extractivas",
          tituloCorto: "Conflictividad y rentas",
          resumen: "Expectativas de bienestar local, diálogo preventivo y eficacia de transferencias.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_ene_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "06/10/2026",
          fuerzaCambio: "Conflictividad y rentas"
        }
      ]
    },
    "Tecnológica": {
      caracterizan: [
        {
          titulo: "Minería digital, operación remota, automatización y exploración geológica avanzada",
          tituloCorto: "Minería y energía digital",
          resumen: "Mayor seguridad operativa, menor consumo de agua y analítica en procesos extractivos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t7_ene_tec",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "06/10/2026",
          fuerzaCambio: "Minería y energía digital"
        }
      ],
      afectan: [
        {
          titulo: "Hidrógeno verde, redes distribuidas y nuevas tecnologías de transmisión",
          tituloCorto: "Nuevas tecnologías energéticas",
          resumen: "Opciones emergentes para descarbonizar industrias y ampliar capacidad del sistema.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_ene_tec",
          tematica: "Tecnológica",
          horizonte: "2040-2050",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "06/10/2026",
          fuerzaCambio: "Nuevas tecnologías energéticas"
        }
      ]
    },
    "Política": {
      caracterizan: [
        {
          titulo: "Seguridad energética, planificación de transmisión y formalización minera",
          tituloCorto: "Gobernanza energética y minera",
          resumen: "Capacidad del Estado para garantizar suministro estable y ordenar actividades extractivas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_ene_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Gobernanza y competitividad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "07/10/2026",
          fuerzaCambio: "Gobernanza energética y minera"
        }
      ],
      afectan: [
        {
          titulo: "Predictibilidad de permisos, consulta previa oportuna y estándares de transparencia",
          tituloCorto: "Regulación y consulta",
          resumen: "Procesos claros, participativos y trazables para inversión sostenible y confianza.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_ene_pol",
          tematica: "Política",
          horizonte: "2030-2040",
          cuadrante: "Gobernanza y competitividad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "07/10/2026",
          fuerzaCambio: "Regulación y consulta"
        }
      ]
    },
    "Actitud, valores y ética": {
      caracterizan: [
        {
          titulo: "Sostenibilidad compartida, diálogo intercultural y licencia social responsable",
          tituloCorto: "Diálogo y sostenibilidad",
          resumen: "Construcción de acuerdos duraderos basados en respeto mutuo y beneficios tangibles.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_ene_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "07/10/2026",
          fuerzaCambio: "Diálogo y sostenibilidad"
        }
      ],
      afectan: [
        {
          titulo: "Rechazo a la minería ilegal y defensa de la legalidad y vida humana",
          tituloCorto: "Legalidad extractiva",
          resumen: "Valoración del cumplimiento normativo frente a operaciones informales o ilícitas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t12_ene_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Estado de derecho",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "07/10/2026",
          fuerzaCambio: "Legalidad extractiva"
        }
      ]
    }
  },

  // ─── TRABAJO Y PROMOCIÓN DE EMPLEO ────────────────────────────────────────────
  "Trabajo y Promoción de Empleo": {
    url: "https://observatorio.ceplan.gob.pe/sector/trabajo-promocion-empleo",
    "Económica": {
      caracterizan: [
        {
          titulo: "Dinámica del empleo formal, productividad laboral y creación de puestos",
          tituloCorto: "Empleo y productividad",
          resumen: "Relación entre crecimiento económico, inversión y expansión del empleo decente.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_emp_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "09/10/2026",
          fuerzaCambio: "Empleo y productividad"
        }
      ],
      afectan: [
        {
          titulo: "Expansión del trabajo en plataformas digitales y modalidades flexibles",
          tituloCorto: "Nuevas formas de trabajo",
          resumen: "Transformación de vínculos laborales, ingresos variables y cobertura previsional.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_emp_eco",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "09/10/2026",
          fuerzaCambio: "Nuevas formas de trabajo"
        }
      ]
    },
    "Tecnológica": {
      caracterizan: [
        {
          titulo: "Automatización, inteligencia artificial y demanda de competencias digitales",
          tituloCorto: "IA y competencias laborales",
          resumen: "Rediseño de tareas, nuevas ocupaciones y necesidad de actualización continua.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_emp_tec",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Capital humano",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "09/10/2026",
          fuerzaCambio: "IA y competencias laborales"
        }
      ],
      afectan: [
        {
          titulo: "Trabajo remoto, capacitación virtual y desplazamientos ocupacionales",
          tituloCorto: "Transformación ocupacional",
          resumen: "Cambios en perfiles requeridos y riesgo de obsolescencia en tareas rutinarias.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_emp_tec",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Capital humano",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "09/10/2026",
          fuerzaCambio: "Transformación ocupacional"
        }
      ]
    },
    "Social": {
      caracterizan: [
        {
          titulo: "Inserción laboral juvenil y reducción de brechas de participación por género",
          tituloCorto: "Inserción y equidad laboral",
          resumen: "Acceso a primer empleo formal, conciliación corresponsable y salarios justos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_emp_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "12/10/2026",
          fuerzaCambio: "Inserción y equidad laboral"
        }
      ],
      afectan: [
        {
          titulo: "Seguridad y salud en el trabajo y protección social de trabajadores independientes",
          tituloCorto: "Protección laboral",
          resumen: "Prevención de accidentes laborales y cobertura ante contingencias y vejez.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_emp_soc",
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Bienestar y salud",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "12/10/2026",
          fuerzaCambio: "Protección laboral"
        }
      ]
    },
    "Ambiental": {
      caracterizan: [
        {
          titulo: "Creación de empleos verdes vinculados a sostenibilidad y economía circular",
          tituloCorto: "Empleos verdes",
          resumen: "Ocupaciones en energías limpias, gestión de residuos, restauración y eficiencia.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t7_emp_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "12/10/2026",
          fuerzaCambio: "Empleos verdes"
        }
      ],
      afectan: [
        {
          titulo: "Exposición laboral al estrés térmico y eventos climáticos extremos",
          tituloCorto: "Riesgo climático laboral",
          resumen: "Afectación de jornadas y salud en actividades al aire libre, construcción y campo.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_emp_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Bienestar y salud",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "12/10/2026",
          fuerzaCambio: "Riesgo climático laboral"
        }
      ]
    },
    "Política": {
      caracterizan: [
        {
          titulo: "Fiscalización laboral, intermediación de empleo y diálogo social",
          tituloCorto: "Política y diálogo laboral",
          resumen: "Cumplimiento de derechos laborales, servicios de empleo y acuerdos tripartitos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_emp_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Gobernanza y competitividad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "13/10/2026",
          fuerzaCambio: "Política y diálogo laboral"
        }
      ],
      afectan: [
        {
          titulo: "Adaptación normativa a la economía digital y transición hacia la formalidad",
          tituloCorto: "Modernización laboral",
          resumen: "Regulación equilibrada que promueva formalización, empleo y protección.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_emp_pol",
          tematica: "Política",
          horizonte: "2030-2040",
          cuadrante: "Gobernanza y competitividad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "13/10/2026",
          fuerzaCambio: "Modernización laboral"
        }
      ]
    },
    "Actitud, valores y ética": {
      caracterizan: [
        {
          titulo: "Aprendizaje a lo largo de la vida y cultura de prevención laboral",
          tituloCorto: "Cultura de aprendizaje",
          resumen: "Disposición a adquirir nuevas habilidades y cuidar la integridad en el trabajo.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_emp_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Capital humano",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "13/10/2026",
          fuerzaCambio: "Cultura de aprendizaje"
        }
      ],
      afectan: [
        {
          titulo: "Erradicación del trabajo infantil, trabajo forzoso y discriminación laboral",
          tituloCorto: "Ética del trabajo",
          resumen: "Defensa de la dignidad humana y condiciones justas en todas las cadenas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t12_emp_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Estado de derecho",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "13/10/2026",
          fuerzaCambio: "Ética del trabajo"
        }
      ]
    }
  },

  // ─── MUJER Y POBLACIONES VULNERABLES ──────────────────────────────────────────
  "Mujer y poblaciones vulnerables": {
    url: "https://observatorio.ceplan.gob.pe/sector/mujer-poblaciones-vulnerables",
    "Social": {
      caracterizan: [
        {
          titulo: "Autonomía económica de las mujeres y corresponsabilidad en el cuidado",
          tituloCorto: "Autonomía y cuidados",
          resumen: "Reducción de la carga desigual de trabajo no remunerado y mayor participación.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_mpv_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Cohesión e identidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "14/10/2026",
          fuerzaCambio: "Autonomía y cuidados"
        }
      ],
      afectan: [
        {
          titulo: "Protección integral de niñas, niños, adolescentes, adultos mayores y personas con discapacidad",
          tituloCorto: "Protección de poblaciones",
          resumen: "Atención oportuna ante desprotección familiar, dependencia y barreras de accesibilidad.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_mpv_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Bienestar y salud",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "14/10/2026",
          fuerzaCambio: "Protección de poblaciones"
        }
      ]
    },
    "Política": {
      caracterizan: [
        {
          titulo: "Políticas de igualdad de género, prevención de violencia y sistemas de cuidados",
          tituloCorto: "Políticas de igualdad",
          resumen: "Servicios de protección, rutas de atención y marcos normativos con enfoque de derechos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_mpv_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Estado de derecho",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "14/10/2026",
          fuerzaCambio: "Políticas de igualdad"
        }
      ],
      afectan: [
        {
          titulo: "Representación paritaria y liderazgo de mujeres en espacios de decisión",
          tituloCorto: "Liderazgo y representación",
          resumen: "Participación efectiva en cargos públicos, gremios, dirigencia y directorios.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_mpv_pol",
          tematica: "Política",
          horizonte: "2030-2040",
          cuadrante: "Gobernanza y competitividad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "14/10/2026",
          fuerzaCambio: "Liderazgo y representación"
        }
      ]
    },
    "Económica": {
      caracterizan: [
        {
          titulo: "Emprendimiento femenino, acceso a crédito y valoración económica del cuidado",
          tituloCorto: "Inclusión económica de la mujer",
          resumen: "Impulso a negocios liderados por mujeres y reconocimiento del aporte del cuidado.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_mpv_eco",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "15/10/2026",
          fuerzaCambio: "Inclusión económica de la mujer"
        }
      ],
      afectan: [
        {
          titulo: "Mayor vulnerabilidad económica en hogares monoparentales y adultos mayores sin pensión",
          tituloCorto: "Riesgo de pobreza y vejez",
          resumen: "Exposición a precariedad de ingresos en etapas de cuidado o retiro.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_mpv_eco",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Bienestar y salud",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "15/10/2026",
          fuerzaCambio: "Riesgo de pobreza y vejez"
        }
      ]
    },
    "Tecnológica": {
      caracterizan: [
        {
          titulo: "Diseño accesible, tecnologías asistivas y alfabetización digital inclusiva",
          tituloCorto: "Tecnología inclusiva",
          resumen: "Herramientas digitales adaptadas a personas con discapacidad y adultos mayores.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t7_mpv_tec",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Capital humano",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "15/10/2026",
          fuerzaCambio: "Tecnología inclusiva"
        }
      ],
      afectan: [
        {
          titulo: "Violencia digital de género, acoso en línea y brechas de acceso tecnológico",
          tituloCorto: "Riesgos digitales de género",
          resumen: "Difusión no consentida de imágenes, hostigamiento y exclusión en entornos digitales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_mpv_tec",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Estado de derecho",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "15/10/2026",
          fuerzaCambio: "Riesgos digitales de género"
        }
      ]
    },
    "Ambiental": {
      caracterizan: [
        {
          titulo: "Enfoque de género y vulnerabilidad en planes de adaptación climática y emergencias",
          tituloCorto: "Adaptación inclusiva",
          resumen: "Consideración de necesidades específicas de mujeres, niñez y discapacidad ante crisis.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_mpv_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "16/10/2026",
          fuerzaCambio: "Adaptación inclusiva"
        }
      ],
      afectan: [
        {
          titulo: "Sobrecarga de cuidado y desplazamiento de poblaciones vulnerables tras desastres",
          tituloCorto: "Impacto climático diferencial",
          resumen: "Aumento de tareas de cuidado y pérdida de medios de subsistencia ante emergencias.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_mpv_amb",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "16/10/2026",
          fuerzaCambio: "Impacto climático diferencial"
        }
      ]
    },
    "Actitud, valores y ética": {
      caracterizan: [
        {
          titulo: "Cultura de igualdad, buen trato y rechazo a toda forma de violencia",
          tituloCorto: "Igualdad y buen trato",
          resumen: "Transformación de normas sociales que naturalizan la discriminación o el maltrato.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_mpv_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Cohesión e identidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "16/10/2026",
          fuerzaCambio: "Igualdad y buen trato"
        }
      ],
      afectan: [
        {
          titulo: "Corresponsabilidad familiar y comunitaria en el cuidado y la crianza",
          tituloCorto: "Corresponsabilidad ética",
          resumen: "Distribución equitativa de responsabilidades domésticas y de cuidado.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t12_mpv_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "2030-2040",
          cuadrante: "Cohesión e identidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "16/10/2026",
          fuerzaCambio: "Corresponsabilidad ética"
        }
      ]
    }
  },

  // ─── COMPETITIVIDAD INSTITUCIONAL ─────────────────────────────────────────────
  "Competitividad Institucional": {
    url: "https://observatorio.ceplan.gob.pe/sector/competitividad-institucional",
    "Política": {
      caracterizan: [
        {
          titulo: "Modernización del Estado, servicio civil meritocrático y coordinación multinivel",
          tituloCorto: "Modernización estatal",
          resumen: "Gestión pública orientada a resultados, articulación efectiva y capacidad institucional.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_com_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Gobernanza y competitividad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "19/10/2026",
          fuerzaCambio: "Modernización estatal"
        }
      ],
      afectan: [
        {
          titulo: "Rotación de directivos, fragmentación de políticas y calidad regulatoria",
          tituloCorto: "Estabilidad y regulación",
          resumen: "Continuidad de equipos técnicos y análisis de impacto regulatorio en normas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_com_pol",
          tematica: "Política",
          horizonte: "2030-2040",
          cuadrante: "Gobernanza y competitividad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "19/10/2026",
          fuerzaCambio: "Estabilidad y regulación"
        }
      ]
    },
    "Tecnológica": {
      caracterizan: [
        {
          titulo: "Gobierno digital, interoperabilidad de datos y servicios públicos en línea",
          tituloCorto: "Gobierno digital",
          resumen: "Simplificación de trámites, identidad digital y uso de datos abiertos para decisiones.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_com_tec",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Gobernanza y competitividad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "19/10/2026",
          fuerzaCambio: "Gobierno digital"
        }
      ],
      afectan: [
        {
          titulo: "Ciberseguridad institucional, soberanía de datos y adopción de IA en gestión",
          tituloCorto: "IA y ciberseguridad pública",
          resumen: "Protección de información del Estado y automatización responsable de procesos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_com_tec",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Gobernanza y competitividad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "19/10/2026",
          fuerzaCambio: "IA y ciberseguridad pública"
        }
      ]
    },
    "Económica": {
      caracterizan: [
        {
          titulo: "Eficiencia del gasto público, compras estatales estratégicas y gestión de inversiones",
          tituloCorto: "Eficiencia del gasto",
          resumen: "Calidad de proyectos, reducción de sobrecostos y mayor retorno social por sol invertido.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_com_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Gobernanza y competitividad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "20/10/2026",
          fuerzaCambio: "Eficiencia del gasto"
        }
      ],
      afectan: [
        {
          titulo: "Capacidad recaudatoria y productividad institucional en territorios rezagados",
          tituloCorto: "Capacidad fiscal y territorial",
          resumen: "Brechas de gestión entre gobiernos subnacionales y sostenibilidad de servicios.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_com_eco",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Gobernanza y competitividad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "20/10/2026",
          fuerzaCambio: "Capacidad fiscal y territorial"
        }
      ]
    },
    "Social": {
      caracterizan: [
        {
          titulo: "Participación ciudadana, gobierno abierto y atención centrada en las personas",
          tituloCorto: "Gobierno abierto",
          resumen: "Canales accesibles de consulta, veeduría y respuesta ágil a demandas sociales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t7_com_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Gobernanza y competitividad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "20/10/2026",
          fuerzaCambio: "Gobierno abierto"
        }
      ],
      afectan: [
        {
          titulo: "Exigencias de inclusión y pertinencia territorial en políticas públicas",
          tituloCorto: "Pertinencia territorial",
          resumen: "Adaptación de intervenciones públicas a realidades locales, lingüísticas y culturales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_com_soc",
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Cohesión e identidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "20/10/2026",
          fuerzaCambio: "Pertinencia territorial"
        }
      ]
    },
    "Ambiental": {
      caracterizan: [
        {
          titulo: "Incorporación de sostenibilidad y gestión de riesgos en la planificación pública",
          tituloCorto: "Planificación sostenible",
          resumen: "Integración de variables climáticas y ambientales en políticas y presupuestos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_com_amb",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "21/10/2026",
          fuerzaCambio: "Planificación sostenible"
        }
      ],
      afectan: [
        {
          titulo: "Continuidad operativa de entidades públicas ante emergencias ambientales",
          tituloCorto: "Continuidad institucional",
          resumen: "Planes de contingencia para mantener servicios esenciales durante crisis.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_com_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "21/10/2026",
          fuerzaCambio: "Continuidad institucional"
        }
      ]
    },
    "Actitud, valores y ética": {
      caracterizan: [
        {
          titulo: "Integridad pública, lucha contra la corrupción y rendición de cuentas",
          tituloCorto: "Integridad pública",
          resumen: "Controles preventivos, transparencia de información y sanción de conductas indebidas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_com_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Estado de derecho",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "21/10/2026",
          fuerzaCambio: "Integridad pública"
        }
      ],
      afectan: [
        {
          titulo: "Vocación de servicio público, innovación y confianza en las instituciones",
          tituloCorto: "Vocación y confianza",
          resumen: "Compromiso ético de servidores y fortalecimiento del vínculo con la ciudadanía.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t12_com_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "2030-2040",
          cuadrante: "Gobernanza y competitividad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "21/10/2026",
          fuerzaCambio: "Vocación y confianza"
        }
      ]
    }
  },

  // ─── DESARROLLO E INCLUSIÓN SOCIAL ────────────────────────────────────────────
  "Desarrollo e Inclusión Social": {
    url: "https://observatorio.ceplan.gob.pe/sector/desarrollo-inclusion-social",
    "Social": {
      caracterizan: [
        {
          titulo: "Reducción de pobreza monetaria y multidimensional e inclusión social",
          tituloCorto: "Reducción de pobreza",
          resumen: "Mejora de condiciones de vida, nutrición infantil y acceso a servicios básicos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_dis_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Bienestar y salud",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "22/10/2026",
          fuerzaCambio: "Reducción de pobreza"
        }
      ],
      afectan: [
        {
          titulo: "Dinámicas demográficas, urbanización y brechas territoriales de bienestar",
          tituloCorto: "Brechas territoriales",
          resumen: "Desigualdades entre zonas urbanas, rurales y amazónicas en oportunidades sociales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_dis_soc",
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Bienestar y salud",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "22/10/2026",
          fuerzaCambio: "Brechas territoriales"
        }
      ]
    },
    "Económica": {
      caracterizan: [
        {
          titulo: "Programas sociales con enfoque productivo y generación de ingresos autónomos",
          tituloCorto: "Inclusión económica",
          resumen: "Articulación entre protección social, capacitación laboral y emprendimiento local.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_dis_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "22/10/2026",
          fuerzaCambio: "Inclusión económica"
        }
      ],
      afectan: [
        {
          titulo: "Sostenibilidad fiscal de transferencias y choques de precios en canasta básica",
          tituloCorto: "Sostenibilidad y canasta",
          resumen: "Impacto de la inflación de alimentos y restricciones fiscales sobre hogares vulnerables.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_dis_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Bienestar y salud",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "22/10/2026",
          fuerzaCambio: "Sostenibilidad y canasta"
        }
      ]
    },
    "Tecnológica": {
      caracterizan: [
        {
          titulo: "Padrón social interoperable, focalización digital y pagos electrónicos de apoyos",
          tituloCorto: "Focalización digital",
          resumen: "Mayor precisión, transparencia y oportunidad en la entrega de prestaciones sociales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_dis_tec",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Gobernanza y competitividad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "23/10/2026",
          fuerzaCambio: "Focalización digital"
        }
      ],
      afectan: [
        {
          titulo: "Alfabetización y acceso digital para evitar exclusión en trámites sociales",
          tituloCorto: "Inclusión digital social",
          resumen: "Acompañamiento presencial y canales simples para poblaciones con menor conectividad.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_dis_tec",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Capital humano",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "23/10/2026",
          fuerzaCambio: "Inclusión digital social"
        }
      ]
    },
    "Política": {
      caracterizan: [
        {
          titulo: "Articulación intersectorial para el desarrollo infantil temprano y protección social",
          tituloCorto: "Articulación social",
          resumen: "Coordinación entre salud, educación, vivienda y gobiernos locales en el territorio.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t7_dis_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Bienestar y salud",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "23/10/2026",
          fuerzaCambio: "Articulación social"
        }
      ],
      afectan: [
        {
          titulo: "Graduación responsable de hogares y prevención de dependencia de subsidios",
          tituloCorto: "Graduación y autonomía",
          resumen: "Transición gradual hacia autonomía económica sin desproteger ante nuevas crisis.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_dis_pol",
          tematica: "Política",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "23/10/2026",
          fuerzaCambio: "Graduación y autonomía"
        }
      ]
    },
    "Ambiental": {
      caracterizan: [
        {
          titulo: "Resiliencia de hogares vulnerables frente a eventos climáticos y seguridad alimentaria",
          tituloCorto: "Resiliencia de hogares",
          resumen: "Protección de medios de vida y acceso a alimentos ante sequías, heladas o lluvias.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_dis_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "26/10/2026",
          fuerzaCambio: "Resiliencia de hogares"
        }
      ],
      afectan: [
        {
          titulo: "Degradación ambiental local y su impacto sobre la salud y nutrición familiar",
          tituloCorto: "Entorno y nutrición",
          resumen: "Relación entre calidad del agua, entorno doméstico y desarrollo infantil.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_dis_amb",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Bienestar y salud",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "26/10/2026",
          fuerzaCambio: "Entorno y nutrición"
        }
      ]
    },
    "Actitud, valores y ética": {
      caracterizan: [
        {
          titulo: "Solidaridad comunitaria, no discriminación y dignidad en la atención social",
          tituloCorto: "Dignidad y solidaridad",
          resumen: "Trato respetuoso, redes vecinales de apoyo y valoración de la diversidad.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_dis_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Cohesión e identidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "26/10/2026",
          fuerzaCambio: "Dignidad y solidaridad"
        }
      ],
      afectan: [
        {
          titulo: "Transparencia en padrones y uso ético de recursos destinados a la inclusión",
          tituloCorto: "Ética en inclusión social",
          resumen: "Garantía de que las ayudas lleguen a quienes realmente las requieren.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t12_dis_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Estado de derecho",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "26/10/2026",
          fuerzaCambio: "Ética en inclusión social"
        }
      ]
    }
  },

  // ─── COMERCIO EXTERIOR Y TURISMO ─────────────────────────────────────────────
  "Comercio Exterior y Turismo": {
    url: "https://observatorio.ceplan.gob.pe/sector/comercio-exterior-turismo",
    "Económica": {
      caracterizan: [
        {
          titulo: "Diversificación de mercados y productos de exportación y dinamismo turístico",
          tituloCorto: "Exportación y turismo",
          resumen: "Crecimiento de envíos no tradicionales, servicios y llegadas de visitantes.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_comex_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Inserción global",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "27/10/2026",
          fuerzaCambio: "Exportación y turismo"
        }
      ],
      afectan: [
        {
          titulo: "Estacionalidad turística, conectividad aérea y costos de comercio internacional",
          tituloCorto: "Conectividad y costos",
          resumen: "Sensibilidad de flujos comerciales y turísticos a tarifas, rutas y ciclos globales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_comex_eco",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Inserción global",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "27/10/2026",
          fuerzaCambio: "Conectividad y costos"
        }
      ]
    },
    "Ambiental": {
      caracterizan: [
        {
          titulo: "Turismo sostenible, ecoturismo y cumplimiento de estándares verdes en exportaciones",
          tituloCorto: "Turismo y comercio verde",
          resumen: "Conservación de destinos naturales y trazabilidad ambiental en bienes exportados.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_comex_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "27/10/2026",
          fuerzaCambio: "Turismo y comercio verde"
        }
      ],
      afectan: [
        {
          titulo: "Capacidad de carga en destinos turísticos y riesgos climáticos en rutas y sitios",
          tituloCorto: "Carga y riesgo climático",
          resumen: "Presión sobre ecosistemas frágiles y vulnerabilidad de infraestructura turística.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_comex_amb",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "27/10/2026",
          fuerzaCambio: "Carga y riesgo climático"
        }
      ]
    },
    "Tecnológica": {
      caracterizan: [
        {
          titulo: "Facilitación digital del comercio, ventanilla única y promoción turística inteligente",
          tituloCorto: "Comercio y turismo digital",
          resumen: "Agilización aduanera, reservas en línea, analítica de visitantes y experiencias digitales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_comex_tec",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Inserción global",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "28/10/2026",
          fuerzaCambio: "Comercio y turismo digital"
        }
      ],
      afectan: [
        {
          titulo: "Comercio electrónico transfronterizo y nuevas preferencias digitales del viajero",
          tituloCorto: "E-commerce y viajeros",
          resumen: "Adaptación de pymes exportadoras y prestadores turísticos a plataformas globales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_comex_tec",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "28/10/2026",
          fuerzaCambio: "E-commerce y viajeros"
        }
      ]
    },
    "Social": {
      caracterizan: [
        {
          titulo: "Generación de empleo local en turismo, gastronomía y cadenas exportadoras regionales",
          tituloCorto: "Empleo en turismo y export",
          resumen: "Oportunidades de ingreso para jóvenes, comunidades locales y pequeños productores.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t7_comex_soc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo económico",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "28/10/2026",
          fuerzaCambio: "Empleo en turismo y export"
        }
      ],
      afectan: [
        {
          titulo: "Seguridad del visitante, calidad de servicios y distribución de beneficios locales",
          tituloCorto: "Bienestar y seguridad turística",
          resumen: "Condiciones de acogida, protección al turista y reparto equitativo de ingresos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_comex_soc",
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Cohesión e identidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "28/10/2026",
          fuerzaCambio: "Bienestar y seguridad turística"
        }
      ]
    },
    "Política": {
      caracterizan: [
        {
          titulo: "Acuerdos comerciales, facilitación aduanera y puesta en valor de destinos",
          tituloCorto: "Política comercial y turística",
          resumen: "Gestión de acceso a mercados, estándares sanitarios y desarrollo de corredores turísticos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_comex_pol",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Inserción global",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "29/10/2026",
          fuerzaCambio: "Política comercial y turística"
        }
      ],
      afectan: [
        {
          titulo: "Defensa comercial, barreras técnicas y gobernanza de destinos turísticos",
          tituloCorto: "Gobernanza de destinos",
          resumen: "Coordinación entre sectores y niveles de gobierno para sostener competitividad.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_comex_pol",
          tematica: "Política",
          horizonte: "2030-2040",
          cuadrante: "Gobernanza y competitividad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "29/10/2026",
          fuerzaCambio: "Gobernanza de destinos"
        }
      ]
    },
    "Actitud, valores y ética": {
      caracterizan: [
        {
          titulo: "Hospitalidad, identidad local y comercio justo con productores y artesanos",
          tituloCorto: "Hospitalidad y comercio justo",
          resumen: "Trato cálido, autenticidad cultural y retribución justa en la cadena de valor.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_comex_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Cohesión e identidad",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "29/10/2026",
          fuerzaCambio: "Hospitalidad y comercio justo"
        }
      ],
      afectan: [
        {
          titulo: "Prevención de explotación turística y cumplimiento ético en operaciones",
          tituloCorto: "Turismo ético y seguro",
          resumen: "Protección de derechos humanos y prácticas responsables en servicios turísticos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t12_comex_eti",
          tematica: "Actitud, valores y ética",
          horizonte: "2030-2040",
          cuadrante: "Estado de derecho",
          imagenUrl: IMG_BASE,
          fechaActualizacion: "29/10/2026",
          fuerzaCambio: "Turismo ético y seguro"
        }
      ]
    }
  }
};