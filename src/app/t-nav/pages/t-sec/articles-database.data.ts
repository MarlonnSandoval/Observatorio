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
  "Tendencias": CategoriaTendenciasDetalle;
  url?: string;
}

export interface SectorDatabase {
  [sector: string]: ContenidoSector;
}

export const SECTOR_DATABASE: SectorDatabase = {

  // ─── AMBIENTAL ────────────────────────────────────────────────────────────────
  "Ambiental": {
    url: "",
    "Tendencias": {
      caracterizan: [
        {
          titulo: "Disponibilidad y acceso sostenido al recurso hídrico",
          tituloCorto: "Acceso agua",
          resumen: "Evolución de la disponibilidad de agua segura y presión sobre fuentes hídricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Acceso agua"
        },
        {
          titulo: "Conservación y dinámica de cobertura de bosques naturales",
          tituloCorto: "Bosques",
          resumen: "Variación de la superficie forestal y esfuerzos de protección de ecosistemas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_amb",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Bosques"
        },
        {
          titulo: "Degradación progresiva de ecosistemas terrestres y acuáticos",
          tituloCorto: "Degradación de ecosistemas",
          resumen: "Pérdida de capacidad de los ecosistemas para proveer servicios ambientales clave.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Degradación de ecosistemas"
        },
        {
          titulo: "Aumento de la frecuencia e intensidad de eventos climáticos extremos",
          tituloCorto: "Eventos climáticos extremos",
          resumen: "Mayor recurrencia de sequías, lluvias intensas y anomalías climáticas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_amb",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Eventos climáticos extremos"
        },
        {
          titulo: "Reducción de la superficie glaciar y regulación hídrica de altura",
          tituloCorto: "Superficie glaciar",
          resumen: "Retroceso de masas glaciares y alteración de caudales en cuencas altoandinas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Superficie glaciar"
        },
        {
          titulo: "Variabilidad de temperatura y patrones de precipitaciones",
          tituloCorto: "Temperatura y precipitaciones",
          resumen: "Cambios térmicos y pluviométricos con impacto en ciclos ecológicos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Temperatura y precipitaciones"
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
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Concentración urbana"
        },
        {
          titulo: "Mayor conciencia ambiental en ciudadanía y organizaciones",
          tituloCorto: "Conciencia ambiental",
          resumen: "Demanda creciente de prácticas sostenibles y control de impactos ecológicos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_amb",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Conciencia ambiental"
        },
        {
          titulo: "Incremento de emisiones de gases de efecto invernadero",
          tituloCorto: "Emisiones de GEI",
          resumen: "Aporte de actividades energéticas, transporte e industria al calentamiento global.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Emisiones de GEI"
        },
        {
          titulo: "Expansión de energías renovables en la matriz energética",
          tituloCorto: "Energías renovables",
          resumen: "Sustitución progresiva de combustibles fósiles por fuentes limpias.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_amb",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Energías renovables"
        },
        {
          titulo: "Intensificación del uso de agroquímicos en cultivos",
          tituloCorto: "Uso de agroquímicos",
          resumen: "Afectación de suelos y cuerpos de agua por insumos químicos agrícolas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_amb",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso de agroquímicos"
        },
        {
          titulo: "Transformación y cambio en el uso del suelo",
          tituloCorto: "Uso del suelo",
          resumen: "Reconversión de áreas naturales hacia usos urbanos, agrícolas o extractivos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t12_amb",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del suelo"
        }
      ]
    }
  },

  // ─── CULTURA ──────────────────────────────────────────────────────────────────
  "Cultura": {
    url: "",
    "Tendencias": {
      caracterizan: [
        {
          titulo: "Evolución de creencias religiosas y prácticas culturales",
          tituloCorto: "Creencias religiosas",
          resumen: "Diversificación de expresiones espirituales y festividades comunitarias.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_cul",
          tematica: "Actitud, valores y ética",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Creencias religiosas"
        },
        {
          titulo: "Transformación de las estructuras familiares y transmisión cultural",
          tituloCorto: "Estructuras familiares",
          resumen: "Nuevas dinámicas de hogar que reconfiguran la convivencia y herencia cultural.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_cul",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Estructuras familiares"
        }
      ],
      afectan: [
        {
          titulo: "Concentración urbana y transformación de espacios culturales",
          tituloCorto: "Concentración urbana",
          resumen: "Centralización de oferta cultural y encuentro de diversas identidades.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_cul",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Concentración urbana"
        },
        {
          titulo: "Expansión de la conectividad digital y acceso a contenidos",
          tituloCorto: "Conectividad digital",
          resumen: "Mayor circulación de bienes culturales y patrimonio en plataformas digitales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_cul",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Conectividad digital"
        },
        {
          titulo: "Articulación entre educación y tecnología para la creación cultural",
          tituloCorto: "Educación y tecnología",
          resumen: "Nuevas herramientas para preservar, difundir y crear expresiones culturales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_cul",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Competitividad e innovación",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Educación y tecnología"
        },
        {
          titulo: "Incremento del nivel educativo y consumo cultural",
          tituloCorto: "Nivel educativo",
          resumen: "Mayor participación ciudadana en actividades artísticas y patrimoniales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_cul",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Nivel educativo"
        },
        {
          titulo: "Cambios demográficos y generacionales en la población",
          tituloCorto: "Población",
          resumen: "Reconfiguración de demandas culturales según estructura etaria y migración.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t7_cul",
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo de las personas",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Población"
        },
        {
          titulo: "Masificación del uso del internet en industrias creativas",
          tituloCorto: "Uso del internet",
          resumen: "Difusión global de contenidos locales y nuevos hábitos de consumo cultural.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_cul",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Competitividad e innovación",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del internet"
        }
      ]
    }
  },

  // ─── COMERCIO EXTERIOR Y TURISMO ──────────────────────────────────────────────
  "Comercio Exterior y Turismo": {
    url: "",
    "Tendencias": {
      caracterizan: [
        {
          titulo: "Consolidación de hub portuario emergente en el Pacífico",
          tituloCorto: "Hub portuario emergente",
          resumen: "Fortalecimiento de la infraestructura portuaria y nodos logísticos internacionales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_cet",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Competitividad e innovación",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Hub portuario emergente"
        },
        {
          titulo: "Profundización de la integración comercial internacional",
          tituloCorto: "Integración comercial",
          resumen: "Ampliación de acuerdos comerciales y diversificación de mercados de destino.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_cet",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Competitividad e innovación",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Integración comercial"
        },
        {
          titulo: "Expansión del comercio electrónico transfronterizo y turístico",
          tituloCorto: "Comercio electrónico",
          resumen: "Digitalización de canales de exportación y comercialización de servicios turísticos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_cet",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Competitividad e innovación",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Comercio electrónico"
        }
      ],
      afectan: [
        {
          titulo: "Concentración urbana en nodos comerciales y turísticos",
          tituloCorto: "Concentración urbana",
          resumen: "Mayor demanda de servicios logísticos, hoteleros y conectividad en ciudades eje.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t4_cet",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Concentración urbana"
        },
        {
          titulo: "Conciencia ambiental y exigencias de sostenibilidad en mercados",
          tituloCorto: "Conciencia ambiental",
          resumen: "Preferencia por exportaciones sostenibles y turismo responsable.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_cet",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Conciencia ambiental"
        },
        {
          titulo: "Impacto de eventos climáticos extremos en logística y destinos",
          tituloCorto: "Eventos climáticos extremos",
          resumen: "Afectación temporal de corredores de exportación y circuitos turísticos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t6_cet",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Eventos climáticos extremos"
        },
        {
          titulo: "Dinámica de flujos de capitales internacionales",
          tituloCorto: "Flujos de capitales",
          resumen: "Inversión extranjera en infraestructura portuaria, hotelera y exportadora.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t7_cet",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Competitividad e innovación",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Flujos de capitales"
        },
        {
          titulo: "Incremento de la productividad en cadenas exportadoras",
          tituloCorto: "Productividad",
          resumen: "Mejora de eficiencia competitiva para sostener presencia en mercados externos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t8_cet",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Competitividad e innovación",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Productividad"
        }
      ]
    }
  },

  // ─── PRODUCCIÓN ───────────────────────────────────────────────────────────────
  "Producción": {
    url: "",
    "Tendencias": {
      caracterizan: [
        {
          titulo: "Adopción masiva de manufactura avanzada e impresión 3D industrial",
          tituloCorto: "Manufactura 3D",
          resumen: "Implementación de tecnologías de fabricación aditiva en plantas de ensamblaje y componentes.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_prod",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          clave: "manufactura avanzada",
          cuadrante: "Competitividad e innovación",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Manufactura 3D"
        },
        {
          titulo: "Transición hacia fábricas inteligentes conectadas mediante redes 5G",
          tituloCorto: "Fábricas inteligentes 5G",
          resumen: "Automatización y control de procesos productivos en tiempo real mediante IoT industrial.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_prod",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          clave: "iot industrial",
          cuadrante: "Competitividad e innovación",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Fábricas inteligentes 5G"
        }
      ],
      afectan: [
        {
          titulo: "Implementación generalizada de la economía circular en cadenas de valor",
          tituloCorto: "Economía circular",
          resumen: "Reutilización de subproductos industriales y reducción drástica de residuos sólidos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t3_prod",
          tematica: "Ambiental",
          horizonte: "2030-2040",
          clave: "circularidad",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Economía circular"
        },
        {
          titulo: "Descarbonización profunda de procesos térmicos en la industria pesada",
          tituloCorto: "Descarbonización industrial",
          resumen: "Sustitución de combustibles fósiles por hidrógeno verde en calderos y hornos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_prod",
          tematica: "Ambiental",
          horizonte: "2040-2050",
          clave: "hidrógeno verde",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Descarbonización industrial"
        }
      ]
    }
  },

  // ─── EDUCACIÓN ────────────────────────────────────────────────────────────────
  "Educación": {
    url: "",
    "Tendencias": {
      caracterizan: [
        {
          titulo: "Expansión de plataformas virtuales y educación híbrida",
          tituloCorto: "Educación digital",
          resumen: "Incremento del uso de plataformas virtuales en colegios públicos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_edu",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Educación digital"
        }
      ],
      afectan: [
        {
          titulo: "Ampliación de la conectividad digital en centros educativos",
          tituloCorto: "Conectividad digital",
          resumen: "Condiciona el acceso equitativo a herramientas digitales de aprendizaje.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_edu",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Competitividad e innovación",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Conectividad digital"
        }
      ]
    }
  },

  // ─── SALUD ────────────────────────────────────────────────────────────────────
  "Salud": {
    url: "",
    "Tendencias": {
      caracterizan: [
        {
          titulo: "Digitalización de historias clínicas y telemedicina",
          tituloCorto: "Telemedicina",
          resumen: "Adopción de sistemas de salud digitales en atención primaria.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_sal",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Telemedicina"
        }
      ],
      afectan: [
        {
          titulo: "Envejecimiento y cambios demográficos de la población",
          tituloCorto: "Población",
          resumen: "Incrementa la demanda de atención preventiva y tratamiento de enfermedades crónicas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_sal",
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo de las personas",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Población"
        }
      ]
    }
  },

  // ─── RESTO DE SECTORES (MUESTRA BREVE) ────────────────────────────────────────
  "Desarrollo e Inclusión Social": {
    url: "",
    "Tendencias": {
      caracterizan: [
        {
          titulo: "Focalización digital de programas de protección social",
          tituloCorto: "Programas sociales digitales",
          resumen: "Uso de registros integrados para atender población vulnerable.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_dis",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Programas sociales digitales"
        }
      ],
      afectan: [
        {
          titulo: "Persistencia de la informalidad laboral en hogares urbanos y rurales",
          tituloCorto: "Informalidad laboral",
          resumen: "Limita la protección social contributiva y estabilidad de ingresos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_dis",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Informalidad laboral"
        }
      ]
    }
  },

  "Competitividad Institucional": {
    url: "",
    "Tendencias": {
      caracterizan: [
        {
          titulo: "Digitalización de trámites y servicios públicos interoperables",
          tituloCorto: "Gobierno digital",
          resumen: "Modernización de procesos administrativos del Estado.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_ci",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Democracia y paz",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Gobierno digital"
        }
      ],
      afectan: [
        {
          titulo: "Percepción ciudadana sobre integridad y transparencia pública",
          tituloCorto: "Percepción de la corrupción",
          resumen: "Condiciona la confianza institucional y legitimidad de políticas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_ci",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Democracia y paz",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Percepción de la corrupción"
        }
      ]
    }
  },

  "Mujer y poblaciones vulnerables": {
    url: "",
    "Tendencias": {
      caracterizan: [
        {
          titulo: "Mayor participación de la mujer en espacios de decisión",
          tituloCorto: "Liderazgo femenino",
          resumen: "Avance progresivo en representación y autonomía económica.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_mpv",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Liderazgo femenino"
        }
      ],
      afectan: [
        {
          titulo: "Cambios en estructuras familiares y demanda de cuidados",
          tituloCorto: "Estructuras familiares",
          resumen: "Impacta la distribución del tiempo y oportunidades laborales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_mpv",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Estructuras familiares"
        }
      ]
    }
  },

  "Transporte y Comunicaciones": {
    url: "",
    "Tendencias": {
      caracterizan: [
        {
          titulo: "Despliegue de redes de fibra óptica e infraestructura 5G",
          tituloCorto: "Conectividad 5G",
          resumen: "Ampliación de cobertura de telecomunicaciones a nivel nacional.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_tc",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Competitividad e innovación",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Conectividad 5G"
        }
      ],
      afectan: [
        {
          titulo: "Crecimiento urbano y mayor demanda de movilidad metropolitana",
          tituloCorto: "Concentración urbana",
          resumen: "Presiona los sistemas de transporte público y corredores viales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_tc",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Concentración urbana"
        }
      ]
    }
  },

  "Trabajo y Promoción de Empleo": {
    url: "",
    "Tendencias": {
      caracterizan: [
        {
          titulo: "Adopción de esquemas híbridos y teletrabajo formal",
          tituloCorto: "Teletrabajo formal",
          resumen: "Flexibilización de modalidades laborales en servicios y empresas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_tpe",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Teletrabajo formal"
        }
      ],
      afectan: [
        {
          titulo: "Automatización y digitalización de procesos productivos",
          tituloCorto: "Educación y tecnología",
          resumen: "Transforma los perfiles ocupacionales y competencias requeridas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_tpe",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Competitividad e innovación",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Educación y tecnología"
        }
      ]
    }
  },

  "Energía y Minas": {
    url: "",
    "Tendencias": {
      caracterizan: [
        {
          titulo: "Transición hacia generación eléctrica solar y eólica",
          tituloCorto: "Energías renovables",
          resumen: "Diversificación de la matriz energética con fuentes no convencionales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_em",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Energías renovables"
        }
      ],
      afectan: [
        {
          titulo: "Demanda global de minerales críticos para transición energética",
          tituloCorto: "Integración comercial",
          resumen: "Impulsa inversiones y estándares ambientales en minería.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_em",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Competitividad e innovación",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Integración comercial"
        }
      ]
    }
  },

  "Relaciones exteriores": {
    url: "",
    "Tendencias": {
      caracterizan: [
        {
          titulo: "Fortalecimiento de bloques comerciales transpacíficos",
          tituloCorto: "Comercio transpacífico",
          resumen: "Mayor inserción diplomática y económica en Asia-Pacífico.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_re",
          tematica: "Política",
          horizonte: "PRESENTE-2030",
          cuadrante: "Democracia y paz",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Comercio transpacífico"
        }
      ],
      afectan: [
        {
          titulo: "Flujos migratorios y movilidad internacional de población",
          tituloCorto: "Población",
          resumen: "Demanda acuerdos consulares, integración y cooperación regional.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_re",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Democracia y paz",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Población"
        }
      ]
    }
  },

  "Economía y Finanzas": {
    url: "",
    "Tendencias": {
      caracterizan: [
        {
          titulo: "Masificación de pagos digitales e inclusión financiera",
          tituloCorto: "Pagos digitales",
          resumen: "Reducción del uso de efectivo mediante billeteras y banca digital.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_ef",
          tematica: "Económica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Competitividad e innovación",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Pagos digitales"
        }
      ],
      afectan: [
        {
          titulo: "Volatilidad de flujos de capitales internacionales",
          tituloCorto: "Flujos de capitales",
          resumen: "Incide en costo de financiamiento e inversión pública y privada.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_ef",
          tematica: "Económica",
          horizonte: "2030-2040",
          cuadrante: "Competitividad e innovación",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Flujos de capitales"
        }
      ]
    }
  },

  "Agrario y de Riesgo": {
    url: "",
    "Tendencias": {
      caracterizan: [
        {
          titulo: "Adopción de agricultura de precisión y riego tecnificado",
          tituloCorto: "Agricultura de precisión",
          resumen: "Optimización del recurso hídrico y productividad parcelaria.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_ar",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Agricultura de precisión"
        }
      ],
      afectan: [
        {
          titulo: "Escasez hídrica y eventos climáticos extremos en cuencas",
          tituloCorto: "Escasez hídrica",
          resumen: "Afecta campañas agrícolas y seguridad alimentaria regional.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_ar",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Escasez hídrica"
        }
      ]
    }
  },

  "Vivienda, construcción y saneamiento": {
    url: "",
    "Tendencias": {
      caracterizan: [
        {
          titulo: "Adopción de metodologías BIM y construcción sostenible",
          tituloCorto: "Metodología BIM",
          resumen: "Modernización en diseño y ejecución de edificaciones e infraestructura.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_vcs",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Competitividad e innovación",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Metodología BIM"
        }
      ],
      afectan: [
        {
          titulo: "Concentración urbana y demanda de agua y saneamiento",
          tituloCorto: "Acceso agua",
          resumen: "Presiona la ampliación de redes de agua potable y vivienda formal.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_vcs",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Acceso agua"
        }
      ]
    }
  },

  "Defensa": {
    url: "",
    "Tendencias": {
      caracterizan: [
        {
          titulo: "Modernización de sistemas de vigilancia satelital y geoespacial",
          tituloCorto: "Vigilancia satelital",
          resumen: "Monitoreo soberano del territorio, fronteras y apoyo ante desastres.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_def",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Democracia y paz",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Vigilancia satelital"
        }
      ],
      afectan: [
        {
          titulo: "Mayor recurrencia de eventos climáticos extremos",
          tituloCorto: "Eventos climáticos extremos",
          resumen: "Incrementa el despliegue logístico de respuesta y atención de emergencias.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_def",
          tematica: "Ambiental",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Eventos climáticos extremos"
        }
      ]
    }
  },

  "Justicia": {
    url: "",
    "Tendencias": {
      caracterizan: [
        {
          titulo: "Expediente judicial electrónico y digitalización procesal",
          tituloCorto: "Expediente electrónico",
          resumen: "Reducción de plazos y trazabilidad digital de procesos judiciales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_jus",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Democracia y paz",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Expediente electrónico"
        }
      ],
      afectan: [
        {
          titulo: "Uso masivo del internet y nuevas modalidades de delitos digitales",
          tituloCorto: "Uso del internet",
          resumen: "Demanda actualización normativa y capacidades de investigación digital.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_jus",
          tematica: "Tecnológica",
          horizonte: "2030-2040",
          cuadrante: "Democracia y paz",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del internet"
        }
      ]
    }
  },

  "Interior": {
    url: "",
    "Tendencias": {
      caracterizan: [
        {
          titulo: "Sistemas de videovigilancia inteligente y analítica preventiva",
          tituloCorto: "Videovigilancia IA",
          resumen: "Incorporación de tecnología para prevención y respuesta frente al delito.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_int",
          tematica: "Tecnológica",
          horizonte: "PRESENTE-2030",
          cuadrante: "Democracia y paz",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Videovigilancia IA"
        }
      ],
      afectan: [
        {
          titulo: "Concentración urbana y seguridad ciudadana en metrópolis",
          tituloCorto: "Concentración urbana",
          resumen: "Requiere mayor coordinación territorial y prevención comunitaria.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t2_int",
          tematica: "Social",
          horizonte: "PRESENTE-2030",
          cuadrante: "Democracia y paz",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Concentración urbana"
        }
      ]
    }
  }

};