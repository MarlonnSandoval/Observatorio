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
  url?: string;
  urlPdrc?: string;
  urlPdrcDescarga?: string;
  escenarioDeseado?: EscenarioDeseado;
}

export interface ArticlesDatabase {
  [region: string]: RegionArticulos;
}

export const ARTICLES_DATABASE: ArticlesDatabase = {
  "Callao": {
    // "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138#page=1",

    "Escenario Deseado": {
      articulos: [
        {
          titulo: "Callao seguro, inclusivo y con bienestar social",
          resumen: "Al 2034, el Callao busca consolidarse como un territorio más seguro e inclusivo, con menores niveles de inseguridad ciudadana, pobreza y violencia familiar. Se proyecta mejorar los servicios de salud y educación, fortalecer la protección de las poblaciones vulnerables y ampliar las oportunidades para el bienestar de la ciudadanía.",
          url: "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138#page=12",
          tema: "Social"
        },
        {
          titulo: "Callao como centro logístico, industrial y económico competitivo",
          resumen: "El Callao se proyecta como un centro estratégico de servicios portuarios, aeroportuarios, industriales y logísticos, impulsado por megaproyectos e inversión privada. Se plantea un crecimiento anual del PBI regional del 5 %, acompañado de una mayor formalización laboral, fortalecimiento empresarial y generación de oportunidades económicas.",
          url: "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138#page=12",
          tema: "Económico"
        },
        {
          titulo: "Callao sostenible, resiliente y ambientalmente recuperado",
          resumen: "Al 2034, el Callao aspira a contar con un territorio ambientalmente sostenible, mediante la recuperación de ecosistemas costeros, humedales, playas y riberas de los ríos Rímac y Chillón. Asimismo, se busca reducir la contaminación, proteger la biodiversidad y fortalecer la prevención y respuesta ante sismos, tsunamis y otros desastres.",
          url: "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138#page=13",
          tema: "Ambiental"
        },
        {
          titulo: "Callao integrado, moderno y con movilidad urbana sostenible",
          resumen: "Se proyecta una ciudad mejor conectada e integrada territorialmente, con infraestructura vial, transporte público eficiente y mayor accesibilidad. El escenario contempla el fortalecimiento de la movilidad sostenible, la integración entre las actividades logísticas y urbanas, la recuperación de espacios públicos y la mejora de las condiciones de habitabilidad.",
          url: "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138#page=13",
          tema: "General"
        }
      ]
    }
  },
  "Lima Metropolitana": {
    // "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
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
    // "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138",

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
    // "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138",

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
    // "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138",

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
    // "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138",

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
    // "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138",

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
    // "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138",

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

    // "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138",
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