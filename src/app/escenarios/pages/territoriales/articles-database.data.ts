export interface Articulo {
  titulo: string;
  resumen: string;
  url: string;
  tema: string;
}

export interface CategoriaDetalle {
  descargaUrl?: string;
  articulos: Articulo[];
}

export interface EscenarioDeseado {
  titulo?: string;
  sintesis: string;
  urlMapa?: string;
}

export interface RegionArticulos {
  "Tendencias territoriales"?: CategoriaDetalle;
  "Riesgos territoriales"?: CategoriaDetalle;
  "Oportunidades territoriales"?: CategoriaDetalle;
  "Escenarios territoriales"?: CategoriaDetalle;
  "Escenario Deseado": CategoriaDetalle;
  url: string;
  urlPdrc?: string;
  urlPdrcDescarga?: string;
  escenarioDeseado?: EscenarioDeseado;
}

export interface ArticlesDatabase {
  [region: string]: RegionArticulos;
}

export const ARTICLES_DATABASE: ArticlesDatabase = {
  "Callao": {
    "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138",
    // "escenarioDeseado": {
    //   titulo: "Imagen del territorio deseado al 2034",
    //   sintesis: "En el 2034, la Provincia Constitucional del Callao va camino a ser un puerto-ciudad que se desarrolla de forma sostenible, atractivo culturalmente que impregna de maritimidad a la ciudad, foco de conocimiento y talento en el sector náutico, referente en innovación y nítidamente inclusivo.",
    //   urlMapa: "https://ejemplo.gob.pe/mapa-futuro-callao.jpg"
    // },

    "Escenario Deseado": {
      articulos: [
        {
          titulo: "Optimización de la movilidad urbana",
          resumen: "Para 2030, la integración de la Línea 2 del Metro y nuevas vías de acceso al puerto reducirán los tiempos de tránsito de carga y pasajeros.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Transporte"
        },
        {
          titulo: "Optimización de la movilidad urbana",
          resumen: "Para 2030, la integración de la Línea 2 del Metro y nuevas vías de acceso al puerto reducirán los tiempos de tránsito de carga y pasajeros.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Transporte"
        },
        {
          titulo: "Optimización de la movilidad urbana",
          resumen: "Para 2030, la integración de la Línea 2 del Metro y nuevas vías de acceso al puerto reducirán los tiempos de tránsito de carga y pasajeros.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Transporte"
        },
        {
          titulo: "Optimización de la movilidad urbana",
          resumen: "Para 2030, la integración de la Línea 2 del Metro y nuevas vías de acceso al puerto reducirán los tiempos de tránsito de carga y pasajeros.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Transporte"
        }
      ]
    }
  },
  "Lima Metropolitana": {
    "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138",
    // "escenarioDeseado": {
    //   titulo: "Imagen del territorio deseado al 2034",
    //   sintesis: "Al 2034, Lima Metropolitana es una metrópoli moderna, policéntrica y resiliente, con un sistema de transporte público integrado y masivo, espacios públicos recuperados, y un desarrollo urbano que respeta sus cuencas hídricas y promueve la equidad social.",
    //   urlMapa: "https://ejemplo.gob.pe/mapa-futuro-limametro.jpg"
    // },
    "Escenario Deseado": {
      articulos: [
        {
          titulo: "Aumento del acceso seguro a agua y saneamiento",
          resumen: "Para 2030, se espera que los grandes proyectos de desalinización y tratamiento de aguas residuales reduzcan las brechas en la periferia de la ciudad.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Acceso a agua y saneamiento"
        }
      ]
    }
  },
  "Apurímac": {
    "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138",
    // "escenarioDeseado": {
    //   titulo: "Imagen del territorio deseado al 2034",
    //   sintesis: "Al 2034, Apurímac es una región integrada y competitiva que aprovecha sosteniblemente sus recursos mineros y agropecuarios, con cierre de brechas sociales en zonas rurales y una sólida gestión de conflictos socioambientales.",
    // },
    
    "Escenario Deseado": {
      articulos: [
        {
          titulo: "Diversificación productiva regional",
          resumen: "Se proyecta que mediante la inversión del canon minero en infraestructura de riego, Apurímac logrará modernizar su sector agropecuario para el 2032.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Desarrollo económico"
        }
      ]
    }
  },
  "Loreto": {
    "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138",
    // "escenarioDeseado": {
    //   titulo: "Imagen del territorio deseado al 2034",
    //   sintesis: "Al 2034, Loreto es una región amazónica conectada y próspera, que basa su desarrollo en la bioeconomía, el turismo sostenible y la conservación de sus bosques, garantizando el bienestar y los derechos de las comunidades originarias.",
    // },
    "Escenario Deseado": {
      articulos: [
        {
          titulo: "Mejora de la conectividad multimodal",
          resumen: "Para 2030, la integración de hidrovías seguras y enlaces aéreos subsidiados mejorará significativamente el flujo comercial y la asistencia estatal en la Amazonía.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Infraestructura"
        }
      ]
    }
  },
  "Tumbes": {
    "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138",
    // "escenarioDeseado": {
    //   titulo: "Imagen del territorio deseado al 2034",
    //   sintesis: "Al 2034, Tumbes es el principal destino ecoturístico de la costa norte, con una frontera dinámica, segura e integrada comercialmente, y un sector agroindustrial resiliente a los fenómenos climáticos.",
    // },
    "Escenario Deseado": {
      articulos: [
        {
          titulo: "Gestión integral de riesgos de desastres",
          resumen: "La implementación de defensas ribereñas y sistemas de alerta temprana mitigarán en un 60% el impacto económico de futuros eventos climáticos extremos para 2030.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Gestión de riesgos"
        }
      ]
    }
  },
  "Tacna": {
    "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138",
    // "escenarioDeseado": {
    //   titulo: "Imagen del territorio deseado al 2034",
    //   sintesis: "Al 2034, Tacna es un polo de desarrollo comercial, tecnológico y de servicios médicos en el sur del país, con una gestión hídrica eficiente que asegura el recurso para la agroexportación y el consumo humano.",
    // },
    "Escenario Deseado": {
      articulos: [
        {
          titulo: "Seguridad hídrica territorial",
          resumen: "Se espera que proyectos de afianzamiento hídrico y desalinización logren equilibrar la oferta y demanda de agua en la región para el año 2032.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Gestión ambiental"
        }
      ]
    }
  },
  "Puno": {
    "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138",
    // "escenarioDeseado": {
    //   titulo: "Imagen del territorio deseado al 2034",
    //   sintesis: "Al 2034, Puno es el articulador comercial y turístico del Eje Andino, destacando por su cadena productiva de camélidos, el saneamiento integral del Lago Titicaca y la erradicación del contrabando a favor del comercio formal.",
    // },
    "Escenario Deseado": {
      articulos: [
        {
          titulo: "Recuperación ambiental del Titicaca",
          resumen: "Para 2030, la puesta en marcha del Sistema de Plantas de Tratamiento de Aguas Residuales (PTAR) mitigará significativamente la eutrofización de la bahía interior.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Gestión ambiental"
        }
      ]
    }
  },
  "Lima": {
    "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138",
    // "escenarioDeseado": {
    //   titulo: "Imagen del territorio deseado al 2034",
    //   sintesis: "Al 2034, el Gobierno Regional de Lima (Provincias) ha consolidado sus corredores agroexportadores y turísticos, reduciendo su dependencia administrativa de la metrópoli y garantizando infraestructura segura frente a desastres naturales.",
    // },
    "Escenario Deseado": {
      articulos: [
        {
          titulo: "Autonomía e integración vial interprovincial",
          resumen: "La consolidación de vías longitudinales de la sierra permitirá conectar las provincias de Lima sin necesidad de descender a la costa metropolitana.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Infraestructura"
        }
      ]
    }
  },
  "Ucayali": {
    
    "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138",
    // "escenarioDeseado": {
    //   titulo: "Imagen del territorio deseado al 2034",
    //   sintesis: "Al 2034, Ucayali es un clúster de innovación forestal y agroindustrial responsable, libre de deforestación ilegal y con servicios básicos interculturales garantizados para sus comunidades nativas.",
    // },
    "Escenario Deseado": {
      articulos: [
        {
          titulo: "Gobernanza forestal territorial",
          resumen: "Para 2030, la titulación completa de comunidades nativas y el control satelital reducirán significativamente las tasas de deforestación.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Gestión ambiental"
        }
      ]
    }
  }
};