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
  "Tendencias territoriales": CategoriaDetalle;
  "Riesgos territoriales": CategoriaDetalle;
  "Oportunidades territoriales": CategoriaDetalle;
  "Escenarios territoriales": CategoriaDetalle;
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
    "escenarioDeseado": {
      titulo: "Imagen del territorio deseado al 2034",
      sintesis: "En el 2034, la Provincia Constitucional del Callao va camino a ser un puerto-ciudad que se desarrolla de forma sostenible, atractivo culturalmente que impregna de maritimidad a la ciudad, foco de conocimiento y talento en el sector náutico, referente en innovación y nítidamente inclusivo.",
      urlMapa: "https://ejemplo.gob.pe/mapa-futuro-callao.jpg"
    },
    "Tendencias territoriales": {
      articulos: [
        {
          titulo: "Crecimiento del comercio exterior",
          resumen: "El volumen de carga en el Puerto del Callao y el Aeropuerto Jorge Chávez continúa en expansión, demandando mayor capacidad logística y tecnológica.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Desarrollo económico"
        }
      ]
    },
    "Riesgos territoriales": {
      articulos: [
        {
          titulo: "Sismo y tsunami de gran magnitud",
          resumen: "Un sismo de magnitud 8.8 a 9.0 Mw acompañado de tsunami y deslizamientos en la costa central del Perú, dejando 110,000 fallecidos, 2 millones de heridos y cerca de un millón de viviendas destruidas o inhabitables en Lima y Callao debido a que el 76% de la población habitaba en zonas de muy alto riesgo. La emergencia provocó el colapso del sistema sanitario y educativo y generó un aislamiento logístico total por el bloqueo de las Panamericanas Norte y Sur y la Carretera Central, sumado a la paralización del Puerto del Callao...",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Peligros naturales"
        },
        {
          titulo: "Aumento de la inseguridad ciudadana",
          resumen: "La incidencia de delitos como extorsión, sicariato y robo continúan afectando la actividad comercial y la calidad de vida de la población chalaca.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Seguridad ciudadana"
        }
      ]
    },
    "Oportunidades territoriales": {
      articulos: [
        {
          titulo: "Hub logístico multimodal",
          resumen: "La ampliación del aeropuerto y la modernización del puerto permiten consolidar al Callao como el principal hub logístico del Pacífico Sur.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Infraestructura"
        }
      ]
    },
    "Escenarios territoriales": {
      articulos: [
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
    "escenarioDeseado": {
      titulo: "Imagen del territorio deseado al 2034",
      sintesis: "Al 2034, Lima Metropolitana es una metrópoli moderna, policéntrica y resiliente, con un sistema de transporte público integrado y masivo, espacios públicos recuperados, y un desarrollo urbano que respeta sus cuencas hídricas y promueve la equidad social.",
      urlMapa: "https://ejemplo.gob.pe/mapa-futuro-limametro.jpg"
    },
    "Tendencias territoriales": {
      articulos: [
        {
          titulo: "Expansión de la mancha urbana",
          resumen: "El crecimiento poblacional y la ocupación informal continúan expandiendo la ciudad hacia zonas periféricas de alto riesgo y laderas de cerros.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Ordenamiento territorial"
        },
        {
          titulo: "Crecimiento de la economía digital",
          resumen: "El uso de plataformas digitales, pagos electrónicos y comercio en línea se expande rápidamente entre empresas y hogares limeños.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Conectividad digital"
        }
      ]
    },
    "Riesgos territoriales": {
      articulos: [
        {
          titulo: "Estrés hídrico severo",
          resumen: "La creciente demanda poblacional y los efectos del cambio climático sobre las cuencas de los ríos Rímac, Chillón y Lurín amenazan el abastecimiento continuo de agua potable.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Acceso a agua y saneamiento"
        },
        {
          titulo: "Saturación del sistema de transporte",
          resumen: "El parque automotor excesivo y la fragmentación del transporte público generan pérdidas millonarias en horas-hombre y graves niveles de contaminación del aire.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Infraestructura"
        }
      ]
    },
    "Oportunidades territoriales": {
      articulos: [
        {
          titulo: "Red de transporte masivo (Metro de Lima)",
          resumen: "La consolidación de las líneas del Metro de Lima y Callao representa una oportunidad histórica para estructurar el desarrollo inmobiliario y comercial en torno a ejes de transporte.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Transporte"
        }
      ]
    },
    "Escenarios territoriales": {
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
    "escenarioDeseado": {
      titulo: "Imagen del territorio deseado al 2034",
      sintesis: "Al 2034, Apurímac es una región integrada y competitiva que aprovecha sosteniblemente sus recursos mineros y agropecuarios, con cierre de brechas sociales en zonas rurales y una sólida gestión de conflictos socioambientales.",
    },
    "Tendencias territoriales": {
      articulos: [
        {
          titulo: "Dependencia de la actividad minera",
          resumen: "El PBI regional se mantiene altamente concentrado en la extracción de cobre, lo que dinamiza la economía pero genera vulnerabilidad ante la fluctuación de precios internacionales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Desarrollo económico"
        }
      ]
    },
    "Riesgos territoriales": {
      articulos: [
        {
          titulo: "Persistencia de los conflictos sociales",
          resumen: "Las tensiones por el uso de recursos hídricos, el impacto ambiental y la redistribución del canon minero en el corredor minero del sur amenazan la gobernabilidad y la inversión.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Conflictos sociales"
        },
        {
          titulo: "Vulnerabilidad ante heladas y friajes",
          resumen: "Las bajas temperaturas extremas continúan afectando la salud de la población vulnerable y provocando alta mortandad en la ganadería altoandina.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Peligros naturales"
        }
      ]
    },
    "Oportunidades territoriales": {
      articulos: [
        {
          titulo: "Potencial agroexportador andino",
          resumen: "El desarrollo de cultivos orgánicos, quinua, palta y tubérculos nativos ofrece una vía para diversificar la economía y mejorar los ingresos de la agricultura familiar.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Agricultura"
        }
      ]
    },
    "Escenarios territoriales": {
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
    "escenarioDeseado": {
      titulo: "Imagen del territorio deseado al 2034",
      sintesis: "Al 2034, Loreto es una región amazónica conectada y próspera, que basa su desarrollo en la bioeconomía, el turismo sostenible y la conservación de sus bosques, garantizando el bienestar y los derechos de las comunidades originarias.",
    },
    "Tendencias territoriales": {
      articulos: [
        {
          titulo: "Expansión de actividades extractivas informales",
          resumen: "La minería ilegal y la tala no autorizada avanzan sobre áreas protegidas y territorios indígenas, impactando la biodiversidad amazónica.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Calidad ambiental"
        }
      ]
    },
    "Riesgos territoriales": {
      articulos: [
        {
          titulo: "Derrames de hidrocarburos",
          resumen: "La obsolescencia de la infraestructura del oleoducto representa un riesgo constante de contaminación de ríos, afectando la seguridad alimentaria de las comunidades ribereñas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Riesgos ambientales"
        },
        {
          titulo: "Aislamiento logístico y brecha digital",
          resumen: "La falta de conectividad terrestre y las deficiencias en la infraestructura de telecomunicaciones limitan el acceso a servicios de salud, educación y comercio electrónico.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Infraestructura"
        }
      ]
    },
    "Oportunidades territoriales": {
      articulos: [
        {
          titulo: "Desarrollo de la bioeconomía",
          resumen: "El aprovechamiento sostenible de frutos amazónicos, plantas medicinales y acuicultura ofrece un enorme potencial para bionegocios en mercados internacionales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Desarrollo económico"
        }
      ]
    },
    "Escenarios territoriales": {
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
    "escenarioDeseado": {
      titulo: "Imagen del territorio deseado al 2034",
      sintesis: "Al 2034, Tumbes es el principal destino ecoturístico de la costa norte, con una frontera dinámica, segura e integrada comercialmente, y un sector agroindustrial resiliente a los fenómenos climáticos.",
    },
    "Tendencias territoriales": {
      articulos: [
        {
          titulo: "Dinamismo del comercio fronterizo",
          resumen: "El intercambio comercial y de servicios con Ecuador se mantiene como el motor económico de la región, requiriendo mayor formalización aduanera.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Desarrollo económico"
        }
      ]
    },
    "Riesgos territoriales": {
      articulos: [
        {
          titulo: "Impacto del Fenómeno El Niño",
          resumen: "Las lluvias intensas recurrentes provocan el desborde del río Tumbes, destruyendo hectáreas de cultivos de exportación y afectando la infraestructura vial y urbana.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Peligros naturales"
        },
        {
          titulo: "Contaminación de la cuenca binacional",
          resumen: "Los relaves mineros y aguas residuales provenientes de la zona alta de la cuenca del río Puyango-Tumbes afectan severamente la calidad del agua para uso agrícola y poblacional.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Calidad ambiental"
        }
      ]
    },
    "Oportunidades territoriales": {
      articulos: [
        {
          titulo: "Ecoturismo y turismo de playas",
          resumen: "La consolidación del circuito de playas del norte, manglares y áreas naturales protegidas atrae inversiones hoteleras y diversifica el empleo local.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Turismo"
        }
      ]
    },
    "Escenarios territoriales": {
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
    "escenarioDeseado": {
      titulo: "Imagen del territorio deseado al 2034",
      sintesis: "Al 2034, Tacna es un polo de desarrollo comercial, tecnológico y de servicios médicos en el sur del país, con una gestión hídrica eficiente que asegura el recurso para la agroexportación y el consumo humano.",
    },
    "Tendencias territoriales": {
      articulos: [
        {
          titulo: "Consolidación de servicios de salud transfronterizos",
          resumen: "La demanda de servicios médicos, odontológicos y turísticos por parte de ciudadanos extranjeros (principalmente de Chile) impulsa la modernización del sector servicios.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Turismo y Salud"
        }
      ]
    },
    "Riesgos territoriales": {
      articulos: [
        {
          titulo: "Agudización del déficit hídrico",
          resumen: "La ubicación en zona árida, sumada a la sobreexplotación de acuíferos y el cambio climático, ponen en riesgo crítico el abastecimiento de agua para la población y la agricultura.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Acceso a agua y saneamiento"
        }
      ]
    },
    "Oportunidades territoriales": {
      articulos: [
        {
          titulo: "Potenciación de la ZofraTacna",
          resumen: "La modernización de la Zona Franca Comercial e Industrial ofrece un espacio estratégico para la instalación de empresas de ensamblaje, tecnología y logística.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Desarrollo económico"
        }
      ]
    },
    "Escenarios territoriales": {
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
    "escenarioDeseado": {
      titulo: "Imagen del territorio deseado al 2034",
      sintesis: "Al 2034, Puno es el articulador comercial y turístico del Eje Andino, destacando por su cadena productiva de camélidos, el saneamiento integral del Lago Titicaca y la erradicación del contrabando a favor del comercio formal.",
    },
    "Tendencias territoriales": {
      articulos: [
        {
          titulo: "Crecimiento del comercio informal",
          resumen: "La porosidad de las fronteras facilita el ingreso de contrabando, lo que afecta la recaudación fiscal y limita el crecimiento de la industria local formal.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Desarrollo económico"
        }
      ]
    },
    "Riesgos territoriales": {
      articulos: [
        {
          titulo: "Contaminación del Lago Titicaca",
          resumen: "El vertimiento de aguas residuales sin tratamiento y residuos sólidos urbanos sigue deteriorando el ecosistema del lago, afectando el turismo y la salud pública.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Calidad ambiental"
        },
        {
          titulo: "Impacto de heladas severas",
          resumen: "Las alteraciones climáticas generan periodos prolongados de heladas que impactan mortalmente a la ganadería de alpacas y llamas, base económica de la zona altoandina.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Peligros naturales"
        }
      ]
    },
    "Oportunidades territoriales": {
      articulos: [
        {
          titulo: "Turismo vivencial y cultural",
          resumen: "La riqueza folclórica, arqueológica y el turismo comunitario en las islas del lago presentan alto potencial para captar turismo internacional de mayor poder adquisitivo.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Turismo"
        }
      ]
    },
    "Escenarios territoriales": {
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
    "escenarioDeseado": {
      titulo: "Imagen del territorio deseado al 2034",
      sintesis: "Al 2034, el Gobierno Regional de Lima (Provincias) ha consolidado sus corredores agroexportadores y turísticos, reduciendo su dependencia administrativa de la metrópoli y garantizando infraestructura segura frente a desastres naturales.",
    },
    "Tendencias territoriales": {
      articulos: [
        {
          titulo: "Modernización agrícola",
          resumen: "La expansión de sistemas de riego tecnificado en los valles costeros está incrementando los rendimientos de exportación de frutales.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Desarrollo económico"
        }
      ]
    },
    "Riesgos territoriales": {
      articulos: [
        {
          titulo: "Activación de quebradas y huaicos",
          resumen: "Las lluvias estacionales en la sierra activan quebradas que aíslan centros poblados, destruyen carreteras y afectan la infraestructura de riego en valles como Huarochirí y Yauyos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Peligros naturales"
        }
      ]
    },
    "Oportunidades territoriales": {
      articulos: [
        {
          titulo: "Turismo de cercanía",
        resumen: "La proximidad al gran mercado de Lima Metropolitana ofrece ventajas excepcionales para el turismo de aventura, gastronómico y cultural de fin de semana.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Turismo"
        }
      ]
    },
    "Escenarios territoriales": {
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
    "escenarioDeseado": {
      titulo: "Imagen del territorio deseado al 2034",
      sintesis: "Al 2034, Ucayali es un clúster de innovación forestal y agroindustrial responsable, libre de deforestación ilegal y con servicios básicos interculturales garantizados para sus comunidades nativas.",
    },
    "Tendencias territoriales": {
      articulos: [
        {
          titulo: "Avance de monocultivos",
          resumen: "La sustitución de bosques primarios por plantaciones industriales de palma aceitera genera crecimiento económico local, pero presiona la biodiversidad forestal.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Agricultura"
        }
      ]
    },
    "Riesgos territoriales": {
      articulos: [
        {
          titulo: "Expansión del narcotráfico y tala ilegal",
          resumen: "Las economías ilegales generan violencia, invaden tierras comunales e incentivan la deforestación descontrolada en zonas fronterizas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Seguridad y Medio Ambiente"
        }
      ]
    },
    "Oportunidades territoriales": {
      articulos: [
        {
          titulo: "Transformación maderera de alto valor",
          resumen: "La transición de la venta de madera rolliza hacia productos forestales con valor agregado (muebles, pisos) puede multiplicar el empleo formal en la región.",
          url: "https://observatorio.ceplan.gob.pe/ficha/e7_lp",
          tema: "Desarrollo económico"
        }
      ]
    },
    "Escenarios territoriales": {
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