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
    "urlPdrcDescarga": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",

    "Escenario Deseado": {
      articulos: [
        {
          titulo: "Callao 2034: ciudad portuaria sostenible, competitiva, segura e inclusiva",
          resumen: "Al 2034, el Callao avanza hacia su consolidación como una ciudad-puerto sostenible, innovadora e integrada territorialmente, aprovechando su posición estratégica en el comercio y la logística internacional. Se proyecta una economía regional con crecimiento anual del 5 %, mayor formalización laboral y reducción de la pobreza, la inseguridad ciudadana y la corrupción. Asimismo, se busca fortalecer la educación, la salud y la inclusión social, mejorar la movilidad urbana y la infraestructura de servicios, reducir la vulnerabilidad ante desastres y recuperar los ecosistemas costeros. Todo ello mediante una gestión pública participativa y una mayor articulación institucional.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "económica"
        }
      ]
    },
    "Escenarios territoriales": {
      articulos: [
        {
          titulo: "Sismo y tsunami de gran magnitud",
          resumen: "Un terremoto de magnitud entre 8,8 y 9 Mw, seguido de un tsunami en la costa central del Perú, ocasionaría graves pérdidas humanas y daños en viviendas, establecimientos de salud, instituciones educativas e infraestructura estratégica del Callao. Ventanilla, Callao Cercado y La Punta figuran entre los territorios más afectados. La interrupción de servicios básicos, transporte y actividades económicas provocaría un incremento de la pobreza, el desempleo y la inseguridad ciudadana. Este escenario evidencia la necesidad de fortalecer la gestión del riesgo de desastres, la preparación de la población y las capacidades de respuesta, rehabilitación y reconstrucción.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Económico"
        },
        {
          titulo: "Nueva cepa COVID-19 y crisis sanitaria",
          resumen: "La aparición de una nueva cepa del COVID-19, con elevados niveles de contagio, generaría una emergencia sanitaria que podría sobrepasar la capacidad de atención de los establecimientos de salud del Callao. Las medidas de contención, el aislamiento social y las restricciones a las actividades económicas afectarían el empleo, los ingresos familiares, la educación y la prestación de servicios públicos. Además, la reasignación de recursos para atender la emergencia podría retrasar inversiones y profundizar las desigualdades sociales. Este escenario resalta la importancia de fortalecer la vigilancia epidemiológica, la capacidad hospitalaria, la protección social y la continuidad de los servicios esenciales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Ambiental"
        },
        {
          titulo: "Ejecución de megaproyectos públicos y privados",
          resumen: "La ejecución articulada de megaproyectos de infraestructura portuaria, aeroportuaria, vial, logística y urbana impulsaría la transformación económica y territorial del Callao. Estas inversiones favorecerían la generación de empleo, la modernización de los servicios públicos, la conectividad y la competitividad regional, contribuyendo a reducir la pobreza y mejorar la habitabilidad urbana. Asimismo, permitirían recuperar espacios degradados, desarrollar nuevas actividades productivas y fortalecer el posicionamiento del Callao como nodo estratégico del comercio nacional e internacional. Para aprovechar estos beneficios, resulta fundamental alinear las inversiones con los instrumentos de planificación territorial y promover la sostenibilidad ambiental y la inclusión social.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "General"
        }
      ]
    }
  },
  "Lima Metropolitana": {
    // "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "urlPdrcDescarga": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    // "urlPdrcDescarga": "https://cdn.www.gob.pe/uploads/document/file/7123625/6118781-plan-de-desarrollo-regional-concertado-2025-2034.pdf?v=1729715138",
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
    // "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",

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
    // "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",

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
    // "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",

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
    // "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",

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
    // "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",

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
    // "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",

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
    // "urlPdrc": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
    "urlPdrcDescarga": "https://www.gob.pe/institucion/regioncallao/informes-publicaciones/6118781",
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