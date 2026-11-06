export interface ArticuloRadar {
  titulo: string;
  tituloCorto?: string;
  resumen: string;
  url: string;
  imagenUrl?: string;
  tema?: string;
  tematica: string;
  horizonte?: 'PRESENTE-2030' | '2030-2040' | '2040-2050';
  clave?: string;
  cuadrante?: string;
}

export interface CategoriaSectorDetalle {
  descargaUrl?: string;
  articulos: ArticuloRadar[];
}

export interface ContenidoSector {
  "Tendencias": CategoriaSectorDetalle;
  "Riesgos": CategoriaSectorDetalle;
  "Oportunidades": CategoriaSectorDetalle;
  "Señal débil": CategoriaSectorDetalle;
  "Carta salvaje": CategoriaSectorDetalle;
  "Escenarios": CategoriaSectorDetalle;
  url?: string;
}

export interface SectorDatabase {
  [sector: string]: ContenidoSector;
}

export const SECTOR_DATABASE: SectorDatabase = {

  // ─── PRODUCCIÓN (25 artículos) ────────────────────────────────────────────────
  "Producción": {
    url: "",
    "Tendencias": {
      articulos: [
        {
          titulo: "Adopción masiva de manufactura avanzada e impresión 3D industrial",
          tituloCorto: "Manufactura 3D",
          resumen: "Implementación de tecnologías de fabricación aditiva en plantas de ensamblaje y componentes.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_prod",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          clave: "manufactura avanzada",
          cuadrante: "Competitividad e innovación"
        },
        {
          titulo: "Transición hacia fábricas inteligentes conectadas mediante redes 5G",
          tituloCorto: "Fábricas inteligentes 5G",
          resumen: "Automatización y control de procesos productivos en tiempo real mediante IoT industrial.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_prod",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          clave: "iot industrial",
          cuadrante: "Competitividad e innovación"
        },
        {
          titulo: "Implementación generalizada de la economía circular en cadenas de valor",
          tituloCorto: "Economía circular",
          resumen: "Reutilización de subproductos industriales y reducción drástica de residuos sólidos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_prod",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          clave: "circularidad",
          cuadrante: "Territorio sostenible"
        },
        {
          titulo: "Automatización robótica colaborativa (cobots) en líneas de empaque",
          tituloCorto: "Robótica colaborativa",
          resumen: "Uso seguro de robots que interactúan directamente con operarios humanos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_prod",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas"
        },
        {
          titulo: "Descarbonización profunda de procesos térmicos en la industria pesada",
          tituloCorto: "Descarbonización industrial",
          resumen: "Sustitución de combustibles fósiles por hidrógeno verde en calderos y hornos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_prod",
          tematica: "Ambiental",
          horizonte: "2040-2050",
          clave: "hidrógeno verde",
          cuadrante: "Territorio sostenible"
        },
        {
          titulo: "Trazabilidad de la cadena de suministro basada en gemelos digitales",
          tituloCorto: "Gemelos digitales",
          resumen: "Simulación virtual exacta de plantas de producción para optimizar flujos logísticos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_prod",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Competitividad e innovación"
        }
      ]
    },
    "Riesgos": {
      articulos: [
        {
          titulo: "Vulnerabilidad de cadenas de suministro globales ante crisis geopolíticas",
          tituloCorto: "Riesgo logístico global",
          resumen: "Escasez súbita de insumos críticos y componentes electrónicos importados.",
          url: "https://observatorio.ceplan.gob.pe/ficha/r1_prod",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Competitividad e innovación"
        },
        {
          titulo: "Obsolescencia acelerada del parque industrial frente a la automatización global",
          tituloCorto: "Obsolescencia industrial",
          resumen: "Baja competitividad por retraso en la modernización tecnológica de las MIPYMES.",
          url: "https://observatorio.ceplan.gob.pe/ficha/r2_prod",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Competitividad e innovación"
        },
        {
          titulo: "Escasez de talento humano especializado en mecatrónica y analítica de datos",
          tituloCorto: "Brecha de talento técnico",
          resumen: "Déficit de profesionales capacitados para operar entornos industriales hiperautomatizados.",
          url: "https://observatorio.ceplan.gob.pe/ficha/r3_prod",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas"
        },
        {
          titulo: "Incremento de restricciones arancelarias por normativas ambientales estrictas",
          tituloCorto: "Aranceles verdes",
          resumen: "Sanciones comerciales a productos industriales con alta huella de carbono.",
          url: "https://observatorio.ceplan.gob.pe/ficha/r4_prod",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible"
        }
      ]
    },
    "Oportunidades": {
      articulos: [
        {
          titulo: "Consolidación de hubs logísticos y parques eco-industriales descentralizados",
          tituloCorto: "Parques eco-industriales",
          resumen: "Sinergias entre empresas vecinas para compartir energía, agua y gestión de residuos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/o1_prod",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible"
        },
        {
          titulo: "Desarrollo de proveedores locales para industrias tecnológicas avanzadas",
          tituloCorto: "Proveedores locales tech",
          resumen: "Encadenamientos productivos orientados a proveer partes de alta precisión.",
          url: "https://observatorio.ceplan.gob.pe/ficha/o2_prod",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Competitividad e innovación"
        },
        {
          titulo: "Exportación de bienes industriales con certificación de huella hídrica cero",
          tituloCorto: "Industria hídrica neutra",
          resumen: "Diferenciación de productos nacionales en mercados internacionales exigentes.",
          url: "https://observatorio.ceplan.gob.pe/ficha/o3_prod",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible"
        },
        {
          titulo: "Digitalización de trámites de habilitación industrial mediante ventanilla única",
          tituloCorto: "Ventanilla industrial",
          resumen: "Reducción de tiempos y costos burocráticos para la instalación de nuevas plantas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/o4_prod",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Democracia y paz"
        }
      ]
    },
    "Señal débil": {
      articulos: [
        {
          titulo: "Producción molecular descentralizada mediante bio-facturas celulares",
          tituloCorto: "Bio-facturas celulares",
          resumen: "Creación de materiales y componentes mediante impresión biológica a escala comercial.",
          url: "https://observatorio.ceplan.gob.pe/ficha/s1_prod",
          tematica: "Tecnológica",
          horizonte: "2040-2050",
          cuadrante: "Competitividad e innovación"
        },
        {
          titulo: "Fábricas totalmente autónomas operadas por inteligencia artificial general",
          tituloCorto: "Fábricas autónomas IAG",
          resumen: "Plantas industriales sin intervención humana directa en diseño, producción y mantenimiento.",
          url: "https://observatorio.ceplan.gob.pe/ficha/s2_prod",
          tematica: "Tecnológica",
          horizonte: "2040-2050",
          cuadrante: "Competitividad e innovación"
        },
        {
          titulo: "Surgimiento de sindicatos y gobernanza algorítmica para trabajadores de cobots",
          tituloCorto: "Sindicatos algorítmicos",
          resumen: "Nuevas formas de representación laboral frente a la gestión automatizada de turnos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/s3_prod",
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Democracia y paz"
        }
      ]
    },
    "Carta salvaje": {
      articulos: [
        {
          titulo: "Colapso energético masivo por ataque informático a redes de alta tensión",
          tituloCorto: "Apagón industrial total",
          resumen: "Paralización imprevista de centros de manufactura pesada a nivel nacional.",
          url: "https://observatorio.ceplan.gob.pe/ficha/c1_prod",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible"
        },
        {
          titulo: "Descubrimiento imprevisto de yacimientos masivos de tierras raras nacionales",
          tituloCorto: "Bum de tierras raras",
          resumen: "Reorientación radical de la industria manufacturera hacia componentes tecnológicos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/c2_prod",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Competitividad e innovación"
        }
      ]
    },
    "Escenarios": {
      articulos: [
        {
          titulo: "Escenario 1: Perú como potencia exportadora de manufactura verde avanzada al 2050",
          tituloCorto: "Manuf. Verde 2050",
          resumen: "Crecimiento industrial impulsado por energías limpias y automatización sostenible.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e1_prod",
          tematica: "Económica",
          horizonte: "2040-2050",
          cuadrante: "Territorio sostenible"
        },
        {
          titulo: "Escenario 2: Estancamiento industrial por dependencia de materias primas",
          tituloCorto: "Estancamiento industrial",
          resumen: "Falta de diversificación productiva y rezago tecnológico frente al bloque regional.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e2_prod",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Competitividad e innovación"
        },
        {
          titulo: "Escenario 3: Descentralización industrial basada en microrredes de manufactura local",
          tituloCorto: "Microrredes industriales",
          resumen: "Redes autónomas de producción regional orientadas al autoconsumo y soberanía.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e3_prod",
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo de las personas"
        },
        {
          titulo: "Escenario 4: Industria circular automatizada y resiliente al cambio climático",
          tituloCorto: "Industria Resiliente",
          resumen: "Modelo productivo totalmente adaptado a eventos climáticos extremos y escasez hídrica.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e4_prod",
          tematica: "Ambiental",
          horizonte: "2040-2050",
          cuadrante: "Territorio sostenible"
        },
        {
          titulo: "Escenario 5: Alianza estratégica regional para cadenas de valor bio-tecnológicas",
          tituloCorto: "Bio-industria regional",
          resumen: "Integración productiva andina enfocada en la transformación de recursos amazónicos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e5_prod",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Democracia y paz"
        }
      ]
    }
  },

  // ─── EDUCACIÓN (3 artículos) ──────────────────────────────────────────────────
  "Educación": {
    url: "",
    "Tendencias": {
      articulos: [
        {
          titulo: "Expansión de plataformas virtuales y educación híbrida",
          tituloCorto: "Educación digital",
          resumen: "Incremento del uso de plataformas virtuales en colegios públicos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_edu",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas"
        }
      ]
    },
    "Riesgos": {
      articulos: [
        {
          titulo: "Aumento de la brecha digital en zonas rurales",
          tituloCorto: "Brecha digital",
          resumen: "Riesgo de exclusión escolar por falta de conectividad.",
          url: "https://observatorio.ceplan.gob.pe/ficha/r1_edu",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible"
        }
      ]
    },
    "Oportunidades": {
      articulos: [
        {
          titulo: "Desarrollo de competencias STEM descentralizadas",
          tituloCorto: "Competencias STEM",
          resumen: "Fomento de ciencia y tecnología regional.",
          url: "https://observatorio.ceplan.gob.pe/ficha/o1_edu",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Competitividad e innovación"
        }
      ]
    },
    "Señal débil": { articulos: [] },
    "Carta salvaje": { articulos: [] },
    "Escenarios": { articulos: [] }
  },

  // ─── SALUD (3 artículos) ─────────────────────────────────────────────────────
  "Salud": {
    url: "",
    "Tendencias": {
      articulos: [
        {
          titulo: "Digitalización de historias clínicas y telemedicina",
          tituloCorto: "Telemedicina",
          resumen: "Adopción de sistemas de salud digitales en atención primaria.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_sal",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas"
        }
      ]
    },
    "Riesgos": {
      articulos: [
        {
          titulo: "Saturación por enfermedades crónicas asociadas al envejecimiento",
          tituloCorto: "Carga demográfica",
          resumen: "Presión sobre el sistema de salud por mayor expectativa de vida.",
          url: "https://observatorio.ceplan.gob.pe/ficha/r1_sal",
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo de las personas"
        }
      ]
    },
    "Oportunidades": {
      articulos: [
        {
          titulo: "Medicina preventiva guiada por análisis genómicos locales",
          tituloCorto: "Genómica preventiva",
          resumen: "Tratamientos personalizados según epidemiología local.",
          url: "https://observatorio.ceplan.gob.pe/ficha/o1_sal",
          tematica: "Tecnológica",
          horizonte: "2040-2050",
          cuadrante: "Competitividad e innovación"
        }
      ]
    },
    "Señal débil": { articulos: [] },
    "Carta salvaje": { articulos: [] },
    "Escenarios": { articulos: [] }
  },

  // ─── AMBIENTAL (3 artículos) ─────────────────────────────────────────────────
  "Ambiental": {
    url: "",
    "Tendencias": {
      articulos: [
        {
          titulo: "Incremento de áreas naturales protegidas",
          tituloCorto: "Áreas protegidas",
          resumen: "Expansión de la cobertura de ecosistemas bajo protección formal.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible"
        }
      ]
    },
    "Riesgos": {
      articulos: [
        {
          titulo: "Impacto del estrés hídrico extremo en cuencas del Pacífico",
          tituloCorto: "Estrés hídrico",
          resumen: "Reducción severa de la disponibilidad de agua dulce.",
          url: "https://observatorio.ceplan.gob.pe/ficha/r1_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible"
        }
      ]
    },
    "Oportunidades": {
      articulos: [
        {
          titulo: "Mercados globales de créditos de carbono forestal",
          tituloCorto: "Créditos de carbono",
          resumen: "Financiamiento verde para la conservación amazónica.",
          url: "https://observatorio.ceplan.gob.pe/ficha/o1_amb",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible"
        }
      ]
    },
    "Señal débil": { articulos: [] },
    "Carta salvaje": { articulos: [] },
    "Escenarios": { articulos: [] }
  },

  // ─── CULTURA (3 artículos) ───────────────────────────────────────────────────
  "Cultura": {
    url: "",
    "Tendencias": {
      articulos: [
        {
          titulo: "Digitalización de archivos históricos y museos virtuales",
          tituloCorto: "Museos virtuales",
          resumen: "Acceso remoto al patrimonio cultural mediante tecnologías inmersivas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_cul",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas"
        }
      ]
    },
    "Riesgos": {
      articulos: [
        {
          titulo: "Pérdida de lenguas originarias por presión de la globalización",
          tituloCorto: "Pérdida lingüística",
          resumen: "Riesgo de extinción de expresiones idiomáticas ancestrales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/r1_cul",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Democracia y paz"
        }
      ]
    },
    "Oportunidades": {
      articulos: [
        {
          titulo: "Industrias culturales y creativas como motor de economía regional",
          tituloCorto: "Economía naranja",
          resumen: "Promoción del arte y diseño local en mercados internacionales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/o1_cul",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Competitividad e innovación"
        }
      ]
    },
    "Señal débil": { articulos: [] },
    "Carta salvaje": { articulos: [] },
    "Escenarios": { articulos: [] }
  },

  // ─── INTERIOR (3 artículos) ──────────────────────────────────────────────────
  "Interior": {
    url: "",
    "Tendencias": {
      articulos: [
        {
          titulo: "Implementación de sistemas de videovigilancia con reconocimiento facial",
          tituloCorto: "Videovigilancia IA",
          resumen: "Uso de inteligencia artificial para prevención del delito urbano.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_int",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Democracia y paz"
        }
      ]
    },
    "Riesgos": {
      articulos: [
        {
          titulo: "Evolución de la criminalidad organizada transnacional",
          tituloCorto: "Crimen organizado",
          resumen: "Nuevas modalidades delictivas apalancadas en anonimato digital.",
          url: "https://observatorio.ceplan.gob.pe/ficha/r1_int",
          tematica: "Política",
          horizonte: "2030-2040",
          cuadrante: "Democracia y paz"
        }
      ]
    },
    "Oportunidades": {
      articulos: [
        {
          titulo: "Comisarías inteligentes con interoperabilidad de datos ciudadanos",
          tituloCorto: "Comisarías inteligentes",
          resumen: "Optimización de tiempos de respuesta policial ante emergencias.",
          url: "https://observatorio.ceplan.gob.pe/ficha/o1_int",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Democracia y paz"
        }
      ]
    },
    "Señal débil": { articulos: [] },
    "Carta salvaje": { articulos: [] },
    "Escenarios": { articulos: [] }
  },

  // ─── JUSTICIA (3 artículos) ──────────────────────────────────────────────────
  "Justicia": {
    url: "",
    "Tendencias": {
      articulos: [
        {
          titulo: "Expediente judicial electrónico y oralidad en procesos civiles",
          tituloCorto: "Expediente electrónico",
          resumen: "Reducción de plazos procesales mediante digitalización de causas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_jus",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Democracia y paz"
        }
      ]
    },
    "Riesgos": {
      articulos: [
        {
          titulo: "Saturación crónica del sistema de administración de justicia",
          tituloCorto: "Saturación judicial",
          resumen: "Acumulación de litigios pendientes y retraso en sentencias.",
          url: "https://observatorio.ceplan.gob.pe/ficha/r1_jus",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Democracia y paz"
        }
      ]
    },
    "Oportunidades": {
      articulos: [
        {
          titulo: "Uso de analítica predictiva para descongestionar carga procesal",
          tituloCorto: "Predictiva judicial",
          resumen: "Clasificación automatizada de expedientes mediante algoritmos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/o1_jus",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Competitividad e innovación"
        }
      ]
    },
    "Señal débil": { articulos: [] },
    "Carta salvaje": { articulos: [] },
    "Escenarios": { articulos: [] }
  },

  // ─── DEFENSA (3 artículos) ───────────────────────────────────────────────────
  "Defensa": {
    url: "",
    "Tendencias": {
      articulos: [
        {
          titulo: "Modernización de sistemas de vigilancia satelital y geoespacial",
          tituloCorto: "Vigilancia satelital",
          resumen: "Monitoreo soberano de fronteras y zonas de difícil acceso.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_def",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Democracia y paz"
        }
      ]
    },
    "Riesgos": {
      articulos: [
        {
          titulo: "Nuevas amenazas híbridas y ciberespionaje a infraestructura estatal",
          tituloCorto: "Amenazas híbridas",
          resumen: "Riesgos de sabotaje digital en redes críticas de defensa nacional.",
          url: "https://observatorio.ceplan.gob.pe/ficha/r1_def",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Democracia y paz"
        }
      ]
    },
    "Oportunidades": {
      articulos: [
        {
          titulo: "Desarrollo tecnológico conjunto con la industria nacional de defensa",
          tituloCorto: "I+D militar nacional",
          resumen: "Creación de capacidades locales para mantenimiento y ensamblaje táctico.",
          url: "https://observatorio.ceplan.gob.pe/ficha/o1_def",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Competitividad e innovación"
        }
      ]
    },
    "Señal débil": { articulos: [] },
    "Carta salvaje": { articulos: [] },
    "Escenarios": { articulos: [] }
  },

  // ─── ECONOMÍA Y FINANZAS (3 artículos) ───────────────────────────────────────
  "Economía y Finanzas": {
    url: "",
    "Tendencias": {
      articulos: [
        {
          titulo: "Masificación de pagos digitales y adopción de moneda digital soberana",
          tituloCorto: "Pagos digitales",
          resumen: "Reducción del uso de efectivo y avance de la inclusión financiera.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Competitividad e innovación"
        }
      ]
    },
    "Riesgos": {
      articulos: [
        {
          titulo: "Volatilidad financiera internacional por tensiones geopolíticas",
          tituloCorto: "Volatilidad externa",
          resumen: "Riesgo de fuga de capitales y encarecimiento del crédito externo.",
          url: "https://observatorio.ceplan.gob.pe/ficha/r1_eco",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Competitividad e innovación"
        }
      ]
    },
    "Oportunidades": {
      articulos: [
        {
          titulo: "Expansión del mercado de bonos verdes y financiamiento sostenible",
          tituloCorto: "Bonos verdes",
          resumen: "Atracción de capitales internacionales para proyectos ecológicos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/o1_eco",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible"
        }
      ]
    },
    "Señal débil": { articulos: [] },
    "Carta salvaje": { articulos: [] },
    "Escenarios": { articulos: [] }
  },

  // ─── RELACIONES EXTERIORES (3 artículos) ─────────────────────────────────────
  "Relaciones exteriores": {
    url: "",
    "Tendencias": {
      articulos: [
        {
          titulo: "Fortalecimiento de bloques comerciales transpacíficos",
          tituloCorto: "Comercio transpacífico",
          resumen: "Integración económica hacia mercados asiáticos y de la Cuenca del Pacífico.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_rel",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Democracia y paz"
        }
      ]
    },
    "Riesgos": {
      articulos: [
        {
          titulo: "Fragmentación comercial global por medidas proteccionistas",
          tituloCorto: "Proteccionismo global",
          resumen: "Imposición de barreras arancelarias que afectan exportaciones tradicionales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/r1_rel",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Competitividad e innovación"
        }
      ]
    },
    "Oportunidades": {
      articulos: [
        {
          titulo: "Posicionamiento del país como nodo logístico y diplomático regional",
          tituloCorto: "Hub diplomático",
          resumen: "Atracción de cumbres internacionales y foros de cooperación birregional.",
          url: "https://observatorio.ceplan.gob.pe/ficha/o1_rel",
          tematica: "Política",
          horizonte: "2030-2040",
          cuadrante: "Democracia y paz"
        }
      ]
    },
    "Señal débil": { articulos: [] },
    "Carta salvaje": { articulos: [] },
    "Escenarios": { articulos: [] }
  },

  // ─── ENERGÍA Y MINAS (3 artículos) ───────────────────────────────────────────
  "Energía y Minas": {
    url: "",
    "Tendencias": {
      articulos: [
        {
          titulo: "Transición energética hacia fuentes solares y eólicas descentralizadas",
          tituloCorto: "Energías renovables",
          resumen: "Incremento de la matriz energética limpia en proyectos mineros e industriales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_ene",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible"
        }
      ]
    },
    "Riesgos": {
      articulos: [
        {
          titulo: "Conflictividad social por uso de recursos hídricos en zonas de extracción",
          tituloCorto: "Conflictividad hídrica",
          resumen: "Tensión entre operaciones extractivas y comunidades locales por el agua.",
          url: "https://observatorio.ceplan.gob.pe/ficha/r1_ene",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible"
        }
      ]
    },
    "Oportunidades": {
      articulos: [
        {
          titulo: "Minería verde y extracción sostenible de minerales críticos para la transición",
          tituloCorto: "Minería verde",
          resumen: "Provisión de cobre y litio con altos estándares ambientales y trazabilidad.",
          url: "https://observatorio.ceplan.gob.pe/ficha/o1_ene",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible"
        }
      ]
    },
    "Señal débil": { articulos: [] },
    "Carta salvaje": { articulos: [] },
    "Escenarios": { articulos: [] }
  },

  // ─── TRABAJO Y PROMOCIÓN DE EMPLEO (3 artículos) ─────────────────────────────
  "Trabajo y Promoción de Empleo": {
    url: "",
    "Tendencias": {
      articulos: [
        {
          titulo: "Auge del teletrabajo y modalidades de empleo híbridas formales",
          tituloCorto: "Teletrabajo formal",
          resumen: "Regulación y adopción de esquemas laborales flexibles a distancia.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_tra",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas"
        }
      ]
    },
    "Riesgos": {
      articulos: [
        {
          titulo: "Informalidad laboral persistente ante la falta de incentivos de formalización",
          tituloCorto: "Informalidad laboral",
          resumen: "Alta proporción de la población activa sin cobertura de seguridad social.",
          url: "https://observatorio.ceplan.gob.pe/ficha/r1_tra",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo de las personas"
        }
      ]
    },
    "Oportunidades": {
      articulos: [
        {
          titulo: "Programas de recertificación y recapacitación (upskilling) digital",
          tituloCorto: "Upskilling laboral",
          resumen: "Adaptación de la fuerza laboral a los requerimientos de la economía digital.",
          url: "https://observatorio.ceplan.gob.pe/ficha/o1_tra",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo de las personas"
        }
      ]
    },
    "Señal débil": { articulos: [] },
    "Carta salvaje": { articulos: [] },
    "Escenarios": { articulos: [] }
  },

  // ─── TRANSPORTE Y COMUNICACIONES (3 artículos) ───────────────────────────────
  "Transporte y Comunicaciones": {
    url: "",
    "Tendencias": {
      articulos: [
        {
          titulo: "Despliegue de redes de fibra óptica e infraestructura 5G nacional",
          tituloCorto: "Conectividad 5G",
          resumen: "Ampliación de la banda ancha móvil y fija en regiones alejadas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_tra_com",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Competitividad e innovación"
        }
      ]
    },
    "Riesgos": {
      articulos: [
        {
          titulo: "Congestión vehicular crítica y déficit de transporte masivo sostenible",
          tituloCorto: "Congestión urbana",
          resumen: "Pérdidas económicas y contaminación en áreas metropolitanas densas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/r1_tra_com",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible"
        }
      ]
    },
    "Oportunidades": {
      articulos: [
        {
          titulo: "Sistemas de transporte inteligente (ITS) y electromovilidad urbana",
          tituloCorto: "Electromovilidad",
          resumen: "Introducción de flotas de transporte público eléctricas y gestión de tráfico por IA.",
          url: "https://observatorio.ceplan.gob.pe/ficha/o1_tra_com",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible"
        }
      ]
    },
    "Señal débil": { articulos: [] },
    "Carta salvaje": { articulos: [] },
    "Escenarios": { articulos: [] }
  },

  // ─── MUJER Y POBLACIONES VULNERABLES (3 artículos) ───────────────────────────
  "Mujer y poblaciones vulnerables": {
    url: "",
    "Tendencias": {
      articulos: [
        {
          titulo: "Mayor participación de la mujer en puestos de liderazgo y dirección pública",
          tituloCorto: "Liderazgo femenino",
          resumen: "Avance en paridad de género dentro de instituciones del Estado.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_mpv",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas"
        }
      ]
    },
    "Riesgos": {
      articulos: [
        {
          titulo: "Brechas salariales persistentes y violencia basada en género",
          tituloCorto: "Brechas de género",
          resumen: "Obstáculos estructurales para la autonomía económica plena de la mujer.",
          url: "https://observatorio.ceplan.gob.pe/ficha/r1_mpv",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas"
        }
      ]
    },
    "Oportunidades": {
      articulos: [
        {
          titulo: "Programas de emprendimiento digital enfocados en mujeres rurales",
          tituloCorto: "Emprendimiento digital",
          resumen: "Capacitación en comercio electrónico para cerrar brechas socioeconómicas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/o1_mpv",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo de las personas"
        }
      ]
    },
    "Señal débil": { articulos: [] },
    "Carta salvaje": { articulos: [] },
    "Escenarios": { articulos: [] }
  },

  // ─── DESARROLLO E INCLUSIÓN SOCIAL (3 artículos) ─────────────────────────────
  "Desarrollo e Inclusión Social": {
    url: "",
    "Tendencias": {
      articulos: [
        {
          titulo: "Transición hacia programas sociales articulados mediante big data",
          tituloCorto: "Programas sociales digitales",
          resumen: "Focalización eficiente de subsidios a poblaciones en situación de pobreza.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_dis",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas"
        }
      ]
    },
    "Riesgos": {
      articulos: [
        {
          titulo: "Vulnerabilidad ante choques económicos inflacionarios en sectores urbanos",
          tituloCorto: "Inflación y vulnerabilidad",
          resumen: "Riesgo de retroceso en indicadores de pobreza multidimensional.",
          url: "https://observatorio.ceplan.gob.pe/ficha/r1_dis",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas"
        }
      ]
    },
    "Oportunidades": {
      articulos: [
        {
          titulo: "Creación de redes comunitarias de protección social y resiliencia",
          tituloCorto: "Redes comunitarias",
          resumen: "Fortalecimiento del tejido social local frente a emergencias.",
          url: "https://observatorio.ceplan.gob.pe/ficha/o1_dis",
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo de las personas"
        }
      ]
    },
    "Señal débil": { articulos: [] },
    "Carta salvaje": { articulos: [] },
    "Escenarios": { articulos: [] }
  },

  // ─── COMERCIO EXTERIOR Y TURISMO (3 artículos) ───────────────────────────────
  "Comercio Exterior y Turismo": {
    url: "",
    "Tendencias": {
      articulos: [
        {
          titulo: "Crecimiento del turismo sostenible y experiencias vivenciales comunitarias",
          tituloCorto: "Turismo sostenible",
          resumen: "Auge de rutas turísticas respetuosas del entorno natural y cultural.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_cet",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible"
        }
      ]
    },
    "Riesgos": {
      articulos: [
        {
          titulo: "Inestabilidad turística por eventos climáticos extremos o alertas sanitarias",
          tituloCorto: "Riesgo turístico externo",
          resumen: "Vulnerabilidad del sector ante interrupciones de infraestructura de acceso.",
          url: "https://observatorio.ceplan.gob.pe/ficha/r1_cet",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible"
        }
      ]
    },
    "Oportunidades": {
      articulos: [
        {
          titulo: "Diversificación de mercados de exportación no tradicional agrícola",
          tituloCorto: "Exportación no tradicional",
          resumen: "Posicionamiento de productos agroexportables en nuevos bloques comerciales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/o1_cet",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Competitividad e innovación"
        }
      ]
    },
    "Señal débil": { articulos: [] },
    "Carta salvaje": { articulos: [] },
    "Escenarios": { articulos: [] }
  },

  // ─── AGRARIO Y DE RIESGO (3 artículos) ───────────────────────────────────────
  "Agrario y de Riesgo": {
    url: "",
    "Tendencias": {
      articulos: [
        {
          titulo: "Implementación de agricultura de precisión y riego tecnificado por goteo",
          tituloCorto: "Agricultura de precisión",
          resumen: "Optimización del recurso hídrico y fertilizantes mediante sensores IoT.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_agr",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible"
        }
      ]
    },
    "Riesgos": {
      articulos: [
        {
          titulo: "Impacto de sequías prolongadas y anomalías climáticas en la seguridad alimentaria",
          tituloCorto: "Sequías y seguridad alimentaria",
          resumen: "Pérdida de cosechas y encarecimiento de insumos agrícolas básicos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/r1_agr",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible"
        }
      ]
    },
    "Oportunidades": {
      articulos: [
        {
          titulo: "Desarrollo de bio-fertilizantes y prácticas agrícolas regenerativas",
          tituloCorto: "Agricultura regenerativa",
          resumen: "Recuperación de suelos degradados y menor dependencia de químicos sintéticos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/o1_agr",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible"
        }
      ]
    },
    "Señal débil": { articulos: [] },
    "Carta salvaje": { articulos: [] },
    "Escenarios": { articulos: [] }
  },

  // ─── VIVIENDA, CONSTRUCCIÓN Y SANEAMIENTO (3 artículos) ──────────────────────
  "Vivienda, construcción y saneamiento": {
    url: "",
    "Tendencias": {
      articulos: [
        {
          titulo: "Adopción de metodologías BIM y construcción modular sostenible",
          tituloCorto: "Metodología BIM",
          resumen: "Eficiencia en diseño y ejecución de proyectos de infraestructura pública y privada.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_viv",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Competitividad e innovación"
        }
      ]
    },
    "Riesgos": {
      articulos: [
        {
          titulo: "Déficit habitacional cuantitativo y cualitativo en zonas urbanas periféricas",
          tituloCorto: "Déficit habitacional",
          resumen: "Crecimiento informal de viviendas sin acceso a servicios básicos de saneamiento.",
          url: "https://observatorio.ceplan.gob.pe/ficha/r1_viv",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible"
        }
      ]
    },
    "Oportunidades": {
      articulos: [
        {
          titulo: "Masificación de plantas de tratamiento de aguas residuales descentralizadas",
          tituloCorto: "Plantas de tratamiento",
          resumen: "Reutilización de aguas grises para riego de áreas verdes y procesos industriales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/o1_viv",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible"
        }
      ]
    },
    "Señal débil": { articulos: [] },
    "Carta salvaje": { articulos: [] },
    "Escenarios": { articulos: [] }
  }

};