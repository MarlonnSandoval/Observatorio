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

export const SECTOR_DATABASE: DatabaseSectores = {
  "Producción": {
    url: "https://observatorio.ceplan.gob.pe/",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/",
      articulos: [
        {
          tipo: 'caracterizan',
          titulo: "Recuperación de la clase media",
          tituloCorto: "Clase media",
          resumen: "Ampliación de la cobertura de agua segura en las cuencas productivas industriales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t33",
          imagen: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          categoria: "Tendencia",
          colorBadge: "#3b82f6",
          colorBgCategory: "#dbeafe",
          colorTextCategory: "#1e40af"
        },
        {
          tipo: 'caracterizan',
          titulo: "Incremento de la cobertura de electrificación",
          tituloCorto: "Cobertura de electrificación",
          resumen: "Ampliación de la cobertura de agua segura en las cuencas productivas industriales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t39",
          imagen: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          categoria: "Tendencia",
          colorBadge: "#3b82f6",
          colorBgCategory: "#dbeafe",
          colorTextCategory: "#1e40af"
        },
        {
          tipo: 'caracterizan',
          titulo: "Incremento de la cobertura de los sistemas previsionales contributivos",
          tituloCorto: "Cobertura de pensiones",
          resumen: "Ampliación de la cobertura de agua segura en las cuencas productivas industriales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t28",
          imagen: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          categoria: "Tendencia",
          colorBadge: "#3b82f6",
          colorBgCategory: "#dbeafe",
          colorTextCategory: "#1e40af"
        },
        {
          tipo: 'caracterizan',
          titulo: "Aumento del comercio electrónico",
          tituloCorto: "Comercio electrónico",
          resumen: "Ampliación de la cobertura de agua segura en las cuencas productivas industriales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t68",
          imagen: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          categoria: "Tendencia",
          colorBadge: "#3b82f6",
          colorBgCategory: "#dbeafe",
          colorTextCategory: "#1e40af"
        },
        {
          tipo: 'caracterizan',
          titulo: "Mayor concentración de la población en centros urbanos",
          tituloCorto: "Concentración urbana",
          resumen: "Ampliación de la cobertura de agua segura en las cuencas productivas industriales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t18",
          imagen: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          categoria: "Tendencia",
          colorBadge: "#3b82f6",
          colorBgCategory: "#dbeafe",
          colorTextCategory: "#1e40af"
        },
        {
          tipo: 'caracterizan',
          titulo: "Mayores conflictos sociales",
          tituloCorto: "Conflictos sociales",
          resumen: "Ampliación de la cobertura de agua segura en las cuencas productivas industriales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t27",
          imagen: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          categoria: "Tendencia",
          colorBadge: "#3b82f6",
          colorBgCategory: "#dbeafe",
          colorTextCategory: "#1e40af"
        },
        {
          tipo: 'impactan',
          titulo: "Aumento de la adopción de biomateriales para la industria",
          tituloCorto: "Biomateriales en la industria",
          resumen: "Uso de IA y sensores para la sostenibilidad del recurso marino.",
          url: "https://observatorio.ceplan.gob.pe/ficha/ts_6_mp",
          imagen: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          horizonte: "2030-2040",
          cuadrante: "Competitividad e innovación",
          categoria: "Innovación",
          colorBadge: "#10b981",
          colorBgCategory: "#d1fae5",
          colorTextCategory: "#065f46"
        },
        {
          tipo: 'impactan',
          titulo: "Mayor consumo de productos hidrobiológicos",
          tituloCorto: "Consumo de productos hidrobiológicos",
          resumen: "Uso de IA y sensores para la sostenibilidad del recurso marino.",
          url: "https://observatorio.ceplan.gob.pe/ficha/ts_4_mp",
          imagen: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          horizonte: "2030-2040",
          cuadrante: "Competitividad e innovación",
          categoria: "Innovación",
          colorBadge: "#10b981",
          colorBgCategory: "#d1fae5",
          colorTextCategory: "#065f46"
        },
        {
          tipo: 'impactan',
          titulo: "Crecimiento de oportunidades sostenibles en la industria textil",
          tituloCorto: "Oportunidades sostenibles en la industria textil",
          resumen: "Uso de IA y sensores para la sostenibilidad del recurso marino.",
          url: "https://observatorio.ceplan.gob.pe/ficha/ts_10_mp",
          imagen: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          horizonte: "2030-2040",
          cuadrante: "Competitividad e innovación",
          categoria: "Innovación",
          colorBadge: "#10b981",
          colorBgCategory: "#d1fae5",
          colorTextCategory: "#065f46"
        },
        {
          tipo: 'impactan',
          titulo: "Incremento de la sostenibilidad empresarial en la industria",
          tituloCorto: "Sostenibilidad empresarial",
          resumen: "Uso de IA y sensores para la sostenibilidad del recurso marino.",
          url: "https://observatorio.ceplan.gob.pe/ficha/ts_7_mp",
          imagen: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          horizonte: "2030-2040",
          cuadrante: "Competitividad e innovación",
          categoria: "Innovación",
          colorBadge: "#10b981",
          colorBgCategory: "#d1fae5",
          colorTextCategory: "#065f46"
        }
      ]
    },
    "Riesgos": { descargaUrl: "", articulos: [] },
    "Oportunidades": { descargaUrl: "", articulos: [] }
  },
  "Comercio Exterior y Turismo": {
    url: "https://observatorio.ceplan.gob.pe/",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/",
      articulos: [
        {
          tipo: 'caracterizan',
          titulo: "Expansión del ecoturismo digital",
          tituloCorto: "Clase media",
          resumen: "Integración de plataformas digitales para reservas comunitarias sostenibles.",
          url: "https://observatorio.ceplan.gob.pe/",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas",
          categoria: "Turismo",
          colorBadge: "#2cc2b1",
          colorBgCategory: "#e6f8f6",
          colorTextCategory: "#18685f"
        }
      ]
    },
    "Riesgos": { descargaUrl: "", articulos: [] },
    "Oportunidades": { descargaUrl: "", articulos: [] }
  },
  "Desarrollo e Inclusión Social": {
    url: "https://observatorio.ceplan.gob.pe/",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/",
      articulos: [
        {
          tipo: 'caracterizan',
          titulo: "Digitalización de programas sociales",
          tituloCorto: "Clase media",
          resumen: "Implementación de identidades digitales para la entrega eficiente de subsidios.",
          url: "https://observatorio.ceplan.gob.pe/",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas",
          categoria: "Social",
          colorBadge: "#65a1a9",
          colorBgCategory: "#e0f2f1",
          colorTextCategory: "#004d40"
        }
      ]
    },
    "Riesgos": { descargaUrl: "", articulos: [] },
    "Oportunidades": { descargaUrl: "", articulos: [] }
  },
  "Competitividad Institucional": {
    url: "https://observatorio.ceplan.gob.pe/",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/",
      articulos: [
        {
          tipo: 'caracterizan',
          titulo: "Interoperabilidad del Estado peruano",
          tituloCorto: "Clase media",
          resumen: "Modernización de trámites mediante APIs públicas y firma digital.",
          url: "https://observatorio.ceplan.gob.pe/",
          horizonte: "2030-2040",
          cuadrante: "Democracia y paz",
          categoria: "Gestión Pública",
          colorBadge: "#54cb33",
          colorBgCategory: "#e8f8e0",
          colorTextCategory: "#286018"
        }
      ]
    },
    "Riesgos": { descargaUrl: "", articulos: [] },
    "Oportunidades": { descargaUrl: "", articulos: [] }
  },
  "Educación": {
    url: "https://observatorio.ceplan.gob.pe/",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/",
      articulos: [
        {
          tipo: 'caracterizan',
          titulo: "Modelos híbridos de educación superior",
          tituloCorto: "Clase media",
          resumen: "Combinación de laboratorios virtuales y clases presenciales adaptativas.",
          url: "https://observatorio.ceplan.gob.pe/",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas",
          categoria: "Educación",
          colorBadge: "#7fb345",
          colorBgCategory: "#f0f7e6",
          colorTextCategory: "#3b581e"
        }
      ]
    },
    "Riesgos": { descargaUrl: "", articulos: [] },
    "Oportunidades": { descargaUrl: "", articulos: [] }
  },
  "Ambiental": {
    url: "https://observatorio.ceplan.gob.pe/",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/",
      articulos: [
        {
          tipo: 'caracterizan',
          titulo: "Monitoreo satelital de la Amazonía",
          tituloCorto: "Clase media",
          resumen: "Detección temprana de la deforestación usando aprendizaje automático.",
          url: "https://observatorio.ceplan.gob.pe/",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          categoria: "Ambiente",
          colorBadge: "#18af9e",
          colorBgCategory: "#e0f7f5",
          colorTextCategory: "#0d5c53"
        }
      ]
    },
    "Riesgos": { descargaUrl: "", articulos: [] },
    "Oportunidades": { descargaUrl: "", articulos: [] }
  },
  "Mujer y poblaciones vulnerables": {
    url: "https://observatorio.ceplan.gob.pe/",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/",
      articulos: [
        {
          tipo: 'caracterizan',
          titulo: "Sistemas integrados de protección infantil",
          tituloCorto: "Clase media",
          resumen: "Plataformas de alerta temprana contra la violencia intrafamiliar.",
          url: "https://observatorio.ceplan.gob.pe/",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas",
          categoria: "Inclusión",
          colorBadge: "#c1ca33",
          colorBgCategory: "#f8f9e0",
          colorTextCategory: "#5e6318"
        }
      ]
    },
    "Riesgos": { descargaUrl: "", articulos: [] },
    "Oportunidades": { descargaUrl: "", articulos: [] }
  },
  "Cultura": {
    url: "https://observatorio.ceplan.gob.pe/",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/",
      articulos: [
        {
          tipo: 'caracterizan',
          titulo: "Preservación digital del patrimonio inmaterial",
          tituloCorto: "Clase media",
          resumen: "Digitalización 3D y archivo audiovisual de manifestaciones culturales ancestrales.",
          url: "https://observatorio.ceplan.gob.pe/",
          horizonte: "2030-2040",
          cuadrante: "Desarrollo de las personas",
          categoria: "Patrimonio",
          colorBadge: "#0f94a5",
          colorBgCategory: "#e0f6f8",
          colorTextCategory: "#074c55"
        }
      ]
    },
    "Riesgos": { descargaUrl: "", articulos: [] },
    "Oportunidades": { descargaUrl: "", articulos: [] }
  },
  "Salud": {
    url: "https://observatorio.ceplan.gob.pe/",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/",
      articulos: [
        {
          tipo: 'caracterizan',
          titulo: "Telemedicina descentralizada",
          tituloCorto: "Clase media",
          resumen: "Acceso a diagnóstico médico remoto en zonas rurales de difícil acceso.",
          url: "https://observatorio.ceplan.gob.pe/",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas",
          categoria: "Salud",
          colorBadge: "#f7b61a",
          colorBgCategory: "#fef8e8",
          colorTextCategory: "#8a630a"
        }
      ]
    },
    "Riesgos": { descargaUrl: "", articulos: [] },
    "Oportunidades": { descargaUrl: "", articulos: [] }
  },
  "Agrario y de Riesgo": {
    url: "https://observatorio.ceplan.gob.pe/",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/",
      articulos: [
        {
          tipo: 'caracterizan',
          titulo: "Agricultura de precisión e irrigación inteligente",
          tituloCorto: "Clase media",
          resumen: "Tecnología IoT para la gestión óptima del agua en cultivos de exportación.",
          url: "https://observatorio.ceplan.gob.pe/",
          horizonte: "PRESENTE-2030",
          cuadrante: "Territorio sostenible",
          categoria: "Agro",
          colorBadge: "#92182f",
          colorBgCategory: "#f9e8eb",
          colorTextCategory: "#500c19"
        }
      ]
    },
    "Riesgos": { descargaUrl: "", articulos: [] },
    "Oportunidades": { descargaUrl: "", articulos: [] }
  },
  "Relaciones exteriores": {
    url: "https://observatorio.ceplan.gob.pe/",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/",
      articulos: [
        {
          tipo: 'caracterizan',
          titulo: "Cooperación bilateral en ciencia y tecnología",
          tituloCorto: "Clase media",
          resumen: "Convenios para la transferencia tecnológica en energías limpias.",
          url: "https://observatorio.ceplan.gob.pe/",
          horizonte: "2030-2040",
          cuadrante: "Competitividad e innovación",
          categoria: "Diplomacia",
          colorBadge: "#239eb9",
          colorBgCategory: "#e4f5f8",
          colorTextCategory: "#115261"
        }
      ]
    },
    "Riesgos": { descargaUrl: "", articulos: [] },
    "Oportunidades": { descargaUrl: "", articulos: [] }
  },
  "Defensa": {
    url: "https://observatorio.ceplan.gob.pe/",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/",
      articulos: [
        {
          tipo: 'caracterizan',
          titulo: "Ciberdefensa e infraestructura crítica",
          tituloCorto: "Clase media",
          resumen: "Protección de los sistemas informáticos nacionales ante ciberataques.",
          url: "https://observatorio.ceplan.gob.pe/",
          horizonte: "2030-2040",
          cuadrante: "Democracia y paz",
          categoria: "Seguridad",
          colorBadge: "#d63544",
          colorBgCategory: "#fbebee",
          colorTextCategory: "#741b23"
        }
      ]
    },
    "Riesgos": { descargaUrl: "", articulos: [] },
    "Oportunidades": { descargaUrl: "", articulos: [] }
  },
  "Economía y Finanzas": {
    url: "https://observatorio.ceplan.gob.pe/",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/",
      articulos: [
        {
          tipo: 'caracterizan',
          titulo: "Adopción masiva de pagos digitales",
          tituloCorto: "Clase media",
          resumen: "Disminución del uso de efectivo mediante interoperabilidad bancaria.",
          url: "https://observatorio.ceplan.gob.pe/",
          horizonte: "PRESENTE-2030",
          cuadrante: "Competitividad e innovación",
          categoria: "Finanzas",
          colorBadge: "#f37818",
          colorBgCategory: "#feefe4",
          colorTextCategory: "#843e0a"
        }
      ]
    },
    "Riesgos": { descargaUrl: "", articulos: [] },
    "Oportunidades": { descargaUrl: "", articulos: [] }
  },
  "Energía y Minas": {
    url: "https://observatorio.ceplan.gob.pe/",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/",
      articulos: [
        {
          tipo: 'caracterizan',
          titulo: "Transición hacia el Hidrógeno Verde",
          tituloCorto: "Clase media",
          resumen: "Proyectos piloto para la descarbonización de la minería de gran escala.",
          url: "https://observatorio.ceplan.gob.pe/",
          horizonte: "2040-2050",
          cuadrante: "Territorio sostenible",
          categoria: "Energía",
          colorBadge: "#d35400",
          colorBgCategory: "#faebd7",
          colorTextCategory: "#6e2c00"
        }
      ]
    },
    "Riesgos": { descargaUrl: "", articulos: [] },
    "Oportunidades": { descargaUrl: "", articulos: [] }
  },
  "Justicia": {
    url: "https://observatorio.ceplan.gob.pe/",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/",
      articulos: [
        {
          tipo: 'caracterizan',
          titulo: "Expediente Judicial Electrónico (EJE)",
          tituloCorto: "Clase media",
          resumen: "Reducción de tiempos procesales mediante tramitación 100% digital.",
          url: "https://observatorio.ceplan.gob.pe/",
          horizonte: "PRESENTE-2030",
          cuadrante: "Democracia y paz",
          categoria: "Justicia",
          colorBadge: "#3f5d7a",
          colorBgCategory: "#ebf0f5",
          colorTextCategory: "#20303f"
        }
      ]
    },
    "Riesgos": { descargaUrl: "", articulos: [] },
    "Oportunidades": { descargaUrl: "", articulos: [] }
  },
  "Transporte y Comunicaciones": {
    url: "https://observatorio.ceplan.gob.pe/",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/",
      articulos: [
        {
          tipo: 'caracterizan',
          titulo: "Despliegue de red 5G y conectividad rural",
          tituloCorto: "Clase media",
          resumen: "Ampliación de la banda ancha para reducir la brecha de conectividad.",
          url: "https://observatorio.ceplan.gob.pe/",
          horizonte: "PRESENTE-2030",
          cuadrante: "Competitividad e innovación",
          categoria: "Telecomunicaciones",
          colorBadge: "#619583",
          colorBgCategory: "#eff5f3",
          colorTextCategory: "#2e483f"
        }
      ]
    },
    "Riesgos": { descargaUrl: "", articulos: [] },
    "Oportunidades": { descargaUrl: "", articulos: [] }
  },
  "Interior": {
    url: "https://observatorio.ceplan.gob.pe/",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/",
      articulos: [
        {
          tipo: 'caracterizan',
          titulo: "Patrullaje inteligente asistido por IA",
          tituloCorto: "Clase media",
          resumen: "Análisis predictivo de delitos para el despliegue policial eficiente.",
          url: "https://observatorio.ceplan.gob.pe/",
          horizonte: "2030-2040",
          cuadrante: "Democracia y paz",
          categoria: "Seguridad Ciudadana",
          colorBadge: "#0c56a5",
          colorBgCategory: "#e3eeef",
          colorTextCategory: "#062b53"
        }
      ]
    },
    "Riesgos": { descargaUrl: "", articulos: [] },
    "Oportunidades": { descargaUrl: "", articulos: [] }
  },
  "Trabajo y Promoción del Empleo": {
    url: "https://observatorio.ceplan.gob.pe/",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/",
      articulos: [
        {
          tipo: 'caracterizan',
          titulo: "Regulación de plataformas de trabajo digital",
          tituloCorto: "Clase media",
          resumen: "Marcos normativos para la protección social de trabajadores independientes.",
          url: "https://observatorio.ceplan.gob.pe/",
          horizonte: "PRESENTE-2030",
          cuadrante: "Desarrollo de las personas",
          categoria: "Empleo",
          colorBadge: "#8e44ad",
          colorBgCategory: "#f4ecf7",
          colorTextCategory: "#4a235a"
        }
      ]
    },
    "Riesgos": { descargaUrl: "", articulos: [] },
    "Oportunidades": { descargaUrl: "", articulos: [] }
  },
  "Vivienda, construcción y saneamiento": {
    url: "https://observatorio.ceplan.gob.pe/",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/",
      articulos: [
        {
          tipo: 'caracterizan',
          titulo: "Ciudades resilientes e infraestructura ecoeficiente",
          tituloCorto: "Clase media",
          resumen: "Construcción sostenible orientada a la mitigación de riesgos sísmicos.",
          url: "https://observatorio.ceplan.gob.pe/",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          categoria: "Urbanismo",
          colorBadge: "#6c757d",
          colorBgCategory: "#f0f1f2",
          colorTextCategory: "#343a40"
        }
      ]
    },
    "Riesgos": { descargaUrl: "", articulos: [] },
    "Oportunidades": { descargaUrl: "", articulos: [] }
  }
};