export interface Articulo {
  titulo: string;
  tituloCorto?: string; // <--- Propiedad opcional para títulos cortos
  resumen: string;
  url: string;
  imagenUrl?: string;
  tema?: string;
  periodo?: '2023-2030' | '2030-2040' | '2040-2050';
}

// Nueva interfaz para agrupar los artículos con su enlace de descarga por categoría
export interface CategoriaDetalle {
  descargaUrl?: string; // URL o enlace para descargar la ficha del tipo correspondiente
  articulos: Articulo[];
}

// La región ahora tiene claves explícitas para cada tipo de desplegable
export interface RegionArticulos {
  "Tendencias": CategoriaDetalle;
  "Riesgos": CategoriaDetalle;
  "Oportunidades": CategoriaDetalle;
  "Escenarios": CategoriaDetalle;
  url: string;
}

export interface ArticlesDatabase {
  [region: string]: RegionArticulos;
}

export const ARTICLES_DATABASE: ArticlesDatabase = {
  "Lima": {
    "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Aumento del acceso seguro a agua y saneamiento en Lima Región",
          tituloCorto: "agua y saneamiento",
          resumen: "Para 2030, se espera que el acceso seguro a agua y saneamiento en Lima Región continúe creciendo de manera moderada. Este contexto sugiere una mejora progresiva, aunque sin eliminar del todo la distancia entre Lima Región y los otros ámbitos de comparación.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_lr",
          tema: "Acceso a agua y saneamiento",
          periodo: "2023-2030"
        },
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/265000/266282-blank-355.png",
          titulo: "Mayor digitalización de la educación en Lima Región",
          tituloCorto: "digitalización de la educación",
          resumen: "La digitalización de la educación en Lima Región puede entenderse como un proceso que va más allá de disponer de internet en las escuelas, porque también supone integrar recursos digitales al aprendizaje, ampliar las posibilidades de acceso de estudiantes y docentes, y fortalecer capacidades para un uso pedagógico más pertinente.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_lr",
          tema: "Digitalización de la educación"
        },
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/1170000/1170631-blank-355.png",
          titulo: "Mayor conectividad digital en Lima Región",
          tituloCorto: "conectividad digital",
          resumen: "La conectividad digital puede entenderse como un proceso de ampliación del acceso y uso de internet que no depende únicamente de la infraestructura, sino también de la posibilidad real de que hogares y personas se conecten en condiciones adecuadas, seguras y útiles para sus actividades cotidianas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_lr",
          tema: "Conectividad digital"
        },
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/1170000/1170631-blank-355.png",
          titulo: "Mayor conectividad digital en Lima Región",
          tituloCorto: "conectividad digital",
          resumen: "La conectividad digital puede entenderse como un proceso de ampliación del acceso y uso de internet que no depende únicamente de la infraestructura, sino también de la posibilidad real de que hogares y personas se conecten en condiciones adecuadas, seguras y útiles para sus actividades cotidianas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_lr",
          tema: "Conectividad digital"
        },
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/1170000/1170631-blank-355.png",
          titulo: "Mayor conectividad digital en Lima Región",
          tituloCorto: "conectividad digital",
          resumen: "La conectividad digital puede entenderse como un proceso de ampliación del acceso y uso de internet que no depende únicamente de la infraestructura, sino también de la posibilidad real de que hogares y personas se conecten en condiciones adecuadas, seguras y útiles para sus actividades cotidianas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_lr",
          tema: "Conectividad digital"
        }
      ]
    },
    "Riesgos": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [

        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Persistencia de los conflictos sociales",
          tituloCorto: "conflictos sociales",
          resumen: "Los conflictos sociales se refieren a las tensiones y disputas entre diversos grupos dentro de una sociedad, originadas por múltiples factores como desigualdades económicas, diferencias culturales, disputas territoriales y competencia por recursos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_lr",
          tema: "Conflictos sociales"
        }
      ]
    },
    "Oportunidades": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Menor participación electoral",
          tituloCorto: "participación electoral",
          resumen: "La base fundamental de cualquier democracia radica en la participación electoral, ya que, mediante el acto de votar, los ciudadanos ejercen su derecho y responsabilidad de elegir a sus representantes en los distintos niveles de gobierno.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_lr",
          tema: "Participación electoral"
        }
      ]
    },
    "Escenarios": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [{
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Aumento del acceso seguro a agua y saneamiento en Lima Región",
        tituloCorto: "agua y saneamiento",
        resumen: "Para 2030, se espera que el acceso seguro a agua y saneamiento en Lima Región continúe creciendo de manera moderada. Este contexto sugiere una mejora progresiva, aunque sin eliminar del todo la distancia entre Lima Región y los otros ámbitos de comparación.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t1_lr",
        tema: "Acceso a agua y saneamiento"
      },
      {
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Mayor digitalización de la educación en Lima Región",
        tituloCorto: "digitalización de la educación",
        resumen: "La digitalización de la educación en Lima Región puede entenderse como un proceso que va más allá de disponer de internet en las escuelas, porque también supone integrar recursos digitales al aprendizaje, ampliar las posibilidades de acceso de estudiantes y docentes, y fortalecer capacidades para un uso pedagógico más pertinente.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t9_lr",
        tema: "Digitalización de la educación"
      },
      {
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Mayor conectividad digital en Lima Región",
        tituloCorto: "conectividad digital",
        resumen: "La conectividad digital puede entenderse como un proceso de ampliación del acceso y uso de internet que no depende únicamente de la infraestructura, sino también de la posibilidad real de que hogares y personas se conecten en condiciones adecuadas, seguras y útiles para sus actividades cotidianas.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t10_lr",
        tema: "Conectividad digital"
      }]
    }
  },
  "Arequipa": {
    "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Aumento del acceso seguro a agua y saneamiento en Lima Región",
          tituloCorto: "agua y saneamiento",
          resumen: "Para 2030, se espera que el acceso seguro a agua y saneamiento en Lima Región continúe creciendo de manera moderada. Este contexto sugiere una mejora progresiva, aunque sin eliminar del todo la distancia entre Lima Región y los otros ámbitos de comparación.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_lr",
          tema: "Acceso a agua y saneamiento"
        },
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Mayor digitalización de la educación en Lima Región",
          tituloCorto: "digitalización de la educación",
          resumen: "La digitalización de la educación en Lima Región puede entenderse como un proceso que va más allá de disponer de internet en las escuelas, porque también supone integrar recursos digitales al aprendizaje, ampliar las posibilidades de acceso de estudiantes y docentes, y fortalecer capacidades para un uso pedagógico más pertinente.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_lr",
          tema: "Digitalización de la educación"
        },
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Mayor conectividad digital en Lima Región",
          tituloCorto: "conectividad digital",
          resumen: "La conectividad digital puede entenderse como un proceso de ampliación del acceso y uso de internet que no depende únicamente de la infraestructura, sino también de la posibilidad real de que hogares y personas se conecten en condiciones adecuadas, seguras y útiles para sus actividades cotidianas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_lr",
          tema: "Conectividad digital"
        }
      ]
    },
    "Riesgos": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [

        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Persistencia de los conflictos sociales",
          tituloCorto: "conflictos sociales",
          resumen: "Los conflictos sociales se refieren a las tensiones y disputas entre diversos grupos dentro de una sociedad, originadas por múltiples factores como desigualdades económicas, diferencias culturales, disputas territoriales y competencia por recursos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_lr",
          tema: "Conflictos sociales"
        }
      ]
    },
    "Oportunidades": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Menor participación electoral",
          tituloCorto: "participación electoral",
          resumen: "La base fundamental de cualquier democracia radica en la participación electoral, ya que, mediante el acto de votar, los ciudadanos ejercen su derecho y responsabilidad de elegir a sus representantes en los distintos niveles de gobierno.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_lr",
          tema: "Participación electoral"
        }
      ]
    },
    "Escenarios": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [{
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Aumento del acceso seguro a agua y saneamiento en Lima Región",
        tituloCorto: "agua y saneamiento",
        resumen: "Para 2030, se espera que el acceso seguro a agua y saneamiento en Lima Región continúe creciendo de manera moderada. Este contexto sugiere una mejora progresiva, aunque sin eliminar del todo la distancia entre Lima Región y los otros ámbitos de comparación.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t1_lr",
        tema: "Acceso a agua y saneamiento"
      },
      {
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Mayor digitalización de la educación en Lima Región",
        tituloCorto: "digitalización de la educación",
        resumen: "La digitalización de la educación en Lima Región puede entenderse como un proceso que va más allá de disponer de internet en las escuelas, porque también supone integrar recursos digitales al aprendizaje, ampliar las posibilidades de acceso de estudiantes y docentes, y fortalecer capacidades para un uso pedagógico más pertinente.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t9_lr",
        tema: "Digitalización de la educación"
      },
      {
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Mayor conectividad digital en Lima Región",
        tituloCorto: "conectividad digital",
        resumen: "La conectividad digital puede entenderse como un proceso de ampliación del acceso y uso de internet que no depende únicamente de la infraestructura, sino también de la posibilidad real de que hogares y personas se conecten en condiciones adecuadas, seguras y útiles para sus actividades cotidianas.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t10_lr",
        tema: "Conectividad digital"
      }]
    }
  },
  "Ica": {
    "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Aumento del acceso seguro a agua y saneamiento en Lima Región",
          tituloCorto: "agua y saneamiento",
          resumen: "Para 2030, se espera que el acceso seguro a agua y saneamiento en Lima Región continúe creciendo de manera moderada. Este contexto sugiere una mejora progresiva, aunque sin eliminar del todo la distancia entre Lima Región y los otros ámbitos de comparación.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_lr",
          tema: "Acceso a agua y saneamiento"
        },
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Mayor digitalización de la educación en Lima Región",
          tituloCorto: "digitalización de la educación",
          resumen: "La digitalización de la educación en Lima Región puede entenderse como un proceso que va más allá de disponer de internet en las escuelas, porque también supone integrar recursos digitales al aprendizaje, ampliar las posibilidades de acceso de estudiantes y docentes, y fortalecer capacidades para un uso pedagógico más pertinente.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_lr",
          tema: "Digitalización de la educación"
        },
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Mayor conectividad digital en Lima Región",
          tituloCorto: "conectividad digital",
          resumen: "La conectividad digital puede entenderse como un proceso de ampliación del acceso y uso de internet que no depende únicamente de la infraestructura, sino también de la posibilidad real de que hogares y personas se conecten en condiciones adecuadas, seguras y útiles para sus actividades cotidianas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_lr",
          tema: "Conectividad digital"
        }
      ]
    },
    "Riesgos": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [

        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Persistencia de los conflictos sociales",
          tituloCorto: "conflictos sociales",
          resumen: "Los conflictos sociales se refieren a las tensiones y disputas entre diversos grupos dentro de una sociedad, originadas por múltiples factores como desigualdades económicas, diferencias culturales, disputas territoriales y competencia por recursos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_lr",
          tema: "Conflictos sociales"
        }
      ]
    },
    "Oportunidades": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Menor participación electoral",
          tituloCorto: "participación electoral",
          resumen: "La base fundamental de cualquier democracia radica en la participación electoral, ya que, mediante el acto de votar, los ciudadanos ejercen su derecho y responsabilidad de elegir a sus representantes en los distintos niveles de gobierno.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_lr",
          tema: "Participación electoral"
        }
      ]
    },
    "Escenarios": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [{
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Aumento del acceso seguro a agua y saneamiento en Lima Región",
        tituloCorto: "agua y saneamiento",
        resumen: "Para 2030, se espera que el acceso seguro a agua y saneamiento en Lima Región continúe creciendo de manera moderada. Este contexto sugiere una mejora progresiva, aunque sin eliminar del todo la distancia entre Lima Región y los otros ámbitos de comparación.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t1_lr",
        tema: "Acceso a agua y saneamiento"
      },
      {
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Mayor digitalización de la educación en Lima Región",
        tituloCorto: "digitalización de la educación",
        resumen: "La digitalización de la educación en Lima Región puede entenderse como un proceso que va más allá de disponer de internet en las escuelas, porque también supone integrar recursos digitales al aprendizaje, ampliar las posibilidades de acceso de estudiantes y docentes, y fortalecer capacidades para un uso pedagógico más pertinente.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t9_lr",
        tema: "Digitalización de la educación"
      },
      {
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Mayor conectividad digital en Lima Región",
        tituloCorto: "conectividad digital",
        resumen: "La conectividad digital puede entenderse como un proceso de ampliación del acceso y uso de internet que no depende únicamente de la infraestructura, sino también de la posibilidad real de que hogares y personas se conecten en condiciones adecuadas, seguras y útiles para sus actividades cotidianas.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t10_lr",
        tema: "Conectividad digital"
      }]
    }
  },
  "Moquegua": {
    "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Aumento del acceso seguro a agua y saneamiento en Lima Región",
          tituloCorto: "agua y saneamiento",
          resumen: "Para 2030, se espera que el acceso seguro a agua y saneamiento en Lima Región continúe creciendo de manera moderada. Este contexto sugiere una mejora progresiva, aunque sin eliminar del todo la distancia entre Lima Región y los otros ámbitos de comparación.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_lr",
          tema: "Acceso a agua y saneamiento"
        },
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Mayor digitalización de la educación en Lima Región",
          tituloCorto: "digitalización de la educación",
          resumen: "La digitalización de la educación en Lima Región puede entenderse como un proceso que va más allá de disponer de internet en las escuelas, porque también supone integrar recursos digitales al aprendizaje, ampliar las posibilidades de acceso de estudiantes y docentes, y fortalecer capacidades para un uso pedagógico más pertinente.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_lr",
          tema: "Digitalización de la educación"
        },
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Mayor conectividad digital en Lima Región",
          tituloCorto: "conectividad digital",
          resumen: "La conectividad digital puede entenderse como un proceso de ampliación del acceso y uso de internet que no depende únicamente de la infraestructura, sino también de la posibilidad real de que hogares y personas se conecten en condiciones adecuadas, seguras y útiles para sus actividades cotidianas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_lr",
          tema: "Conectividad digital"
        }
      ]
    },
    "Riesgos": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [

        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Persistencia de los conflictos sociales",
          tituloCorto: "conflictos sociales",
          resumen: "Los conflictos sociales se refieren a las tensiones y disputas entre diversos grupos dentro de una sociedad, originadas por múltiples factores como desigualdades económicas, diferencias culturales, disputas territoriales y competencia por recursos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_lr",
          tema: "Conflictos sociales"
        }
      ]
    },
    "Oportunidades": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Menor participación electoral",
          tituloCorto: "participación electoral",
          resumen: "La base fundamental de cualquier democracia radica en la participación electoral, ya que, mediante el acto de votar, los ciudadanos ejercen su derecho y responsabilidad de elegir a sus representantes en los distintos niveles de gobierno.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_lr",
          tema: "Participación electoral"
        }
      ]
    },
    "Escenarios": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [{
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Aumento del acceso seguro a agua y saneamiento en Lima Región",
        tituloCorto: "agua y saneamiento",
        resumen: "Para 2030, se espera que el acceso seguro a agua y saneamiento en Lima Región continúe creciendo de manera moderada. Este contexto sugiere una mejora progresiva, aunque sin eliminar del todo la distancia entre Lima Región y los otros ámbitos de comparación.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t1_lr",
        tema: "Acceso a agua y saneamiento"
      },
      {
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Mayor digitalización de la educación en Lima Región",
        tituloCorto: "digitalización de la educación",
        resumen: "La digitalización de la educación en Lima Región puede entenderse como un proceso que va más allá de disponer de internet en las escuelas, porque también supone integrar recursos digitales al aprendizaje, ampliar las posibilidades de acceso de estudiantes y docentes, y fortalecer capacidades para un uso pedagógico más pertinente.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t9_lr",
        tema: "Digitalización de la educación"
      },
      {
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Mayor conectividad digital en Lima Región",
        tituloCorto: "conectividad digital",
        resumen: "La conectividad digital puede entenderse como un proceso de ampliación del acceso y uso de internet que no depende únicamente de la infraestructura, sino también de la posibilidad real de que hogares y personas se conecten en condiciones adecuadas, seguras y útiles para sus actividades cotidianas.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t10_lr",
        tema: "Conectividad digital"
      }]
    }
  },
  "Huancavelica": {
    "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Aumento del acceso seguro a agua y saneamiento en Lima Región",
          tituloCorto: "agua y saneamiento",
          resumen: "Para 2030, se espera que el acceso seguro a agua y saneamiento en Lima Región continúe creciendo de manera moderada. Este contexto sugiere una mejora progresiva, aunque sin eliminar del todo la distancia entre Lima Región y los otros ámbitos de comparación.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_lr",
          tema: "Acceso a agua y saneamiento"
        },
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Mayor digitalización de la educación en Lima Región",
          tituloCorto: "digitalización de la educación",
          resumen: "La digitalización de la educación en Lima Región puede entenderse como un proceso que va más allá de disponer de internet en las escuelas, porque también supone integrar recursos digitales al aprendizaje, ampliar las posibilidades de acceso de estudiantes y docentes, y fortalecer capacidades para un uso pedagógico más pertinente.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_lr",
          tema: "Digitalización de la educación"
        },
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Mayor conectividad digital en Lima Región",
          tituloCorto: "conectividad digital",
          resumen: "La conectividad digital puede entenderse como un proceso de ampliación del acceso y uso de internet que no depende únicamente de la infraestructura, sino también de la posibilidad real de que hogares y personas se conecten en condiciones adecuadas, seguras y útiles para sus actividades cotidianas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_lr",
          tema: "Conectividad digital"
        }
      ]
    },
    "Riesgos": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [

        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Persistencia de los conflictos sociales",
          tituloCorto: "conflictos sociales",
          resumen: "Los conflictos sociales se refieren a las tensiones y disputas entre diversos grupos dentro de una sociedad, originadas por múltiples factores como desigualdades económicas, diferencias culturales, disputas territoriales y competencia por recursos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_lr",
          tema: "Conflictos sociales"
        }
      ]
    },
    "Oportunidades": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Menor participación electoral",
          tituloCorto: "participación electoral",
          resumen: "La base fundamental de cualquier democracia radica en la participación electoral, ya que, mediante el acto de votar, los ciudadanos ejercen su derecho y responsabilidad de elegir a sus representantes en los distintos niveles de gobierno.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_lr",
          tema: "Participación electoral"
        }
      ]
    },
    "Escenarios": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [{
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Aumento del acceso seguro a agua y saneamiento en Lima Región",
        tituloCorto: "agua y saneamiento",
        resumen: "Para 2030, se espera que el acceso seguro a agua y saneamiento en Lima Región continúe creciendo de manera moderada. Este contexto sugiere una mejora progresiva, aunque sin eliminar del todo la distancia entre Lima Región y los otros ámbitos de comparación.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t1_lr",
        tema: "Acceso a agua y saneamiento"
      },
      {
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Mayor digitalización de la educación en Lima Región",
        tituloCorto: "digitalización de la educación",
        resumen: "La digitalización de la educación en Lima Región puede entenderse como un proceso que va más allá de disponer de internet en las escuelas, porque también supone integrar recursos digitales al aprendizaje, ampliar las posibilidades de acceso de estudiantes y docentes, y fortalecer capacidades para un uso pedagógico más pertinente.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t9_lr",
        tema: "Digitalización de la educación"
      },
      {
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Mayor conectividad digital en Lima Región",
        tituloCorto: "conectividad digital",
        resumen: "La conectividad digital puede entenderse como un proceso de ampliación del acceso y uso de internet que no depende únicamente de la infraestructura, sino también de la posibilidad real de que hogares y personas se conecten en condiciones adecuadas, seguras y útiles para sus actividades cotidianas.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t10_lr",
        tema: "Conectividad digital"
      }]
    }
  },
  "Tacna": {
    "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Aumento del acceso seguro a agua y saneamiento en Lima Región",
          tituloCorto: "agua y saneamiento",
          resumen: "Para 2030, se espera que el acceso seguro a agua y saneamiento en Lima Región continúe creciendo de manera moderada. Este contexto sugiere una mejora progresiva, aunque sin eliminar del todo la distancia entre Lima Región y los otros ámbitos de comparación.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_lr",
          tema: "Acceso a agua y saneamiento"
        },
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Mayor digitalización de la educación en Lima Región",
          tituloCorto: "digitalización de la educación",
          resumen: "La digitalización de la educación en Lima Región puede entenderse como un proceso que va más allá de disponer de internet en las escuelas, porque también supone integrar recursos digitales al aprendizaje, ampliar las posibilidades de acceso de estudiantes y docentes, y fortalecer capacidades para un uso pedagógico más pertinente.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_lr",
          tema: "Digitalización de la educación"
        },
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Mayor conectividad digital en Lima Región",
          tituloCorto: "conectividad digital",
          resumen: "La conectividad digital puede entenderse como un proceso de ampliación del acceso y uso de internet que no depende únicamente de la infraestructura, sino también de la posibilidad real de que hogares y personas se conecten en condiciones adecuadas, seguras y útiles para sus actividades cotidianas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_lr",
          tema: "Conectividad digital"
        }
      ]
    },
    "Riesgos": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [

        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Persistencia de los conflictos sociales",
          tituloCorto: "conflictos sociales",
          resumen: "Los conflictos sociales se refieren a las tensiones y disputas entre diversos grupos dentro de una sociedad, originadas por múltiples factores como desigualdades económicas, diferencias culturales, disputas territoriales y competencia por recursos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_lr",
          tema: "Conflictos sociales"
        }
      ]
    },
    "Oportunidades": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Menor participación electoral",
          tituloCorto: "participación electoral",
          resumen: "La base fundamental de cualquier democracia radica en la participación electoral, ya que, mediante el acto de votar, los ciudadanos ejercen su derecho y responsabilidad de elegir a sus representantes en los distintos niveles de gobierno.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_lr",
          tema: "Participación electoral"
        }
      ]
    },
    "Escenarios": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [{
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Aumento del acceso seguro a agua y saneamiento en Lima Región",
        tituloCorto: "agua y saneamiento",
        resumen: "Para 2030, se espera que el acceso seguro a agua y saneamiento en Lima Región continúe creciendo de manera moderada. Este contexto sugiere una mejora progresiva, aunque sin eliminar del todo la distancia entre Lima Región y los otros ámbitos de comparación.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t1_lr",
        tema: "Acceso a agua y saneamiento"
      },
      {
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Mayor digitalización de la educación en Lima Región",
        tituloCorto: "digitalización de la educación",
        resumen: "La digitalización de la educación en Lima Región puede entenderse como un proceso que va más allá de disponer de internet en las escuelas, porque también supone integrar recursos digitales al aprendizaje, ampliar las posibilidades de acceso de estudiantes y docentes, y fortalecer capacidades para un uso pedagógico más pertinente.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t9_lr",
        tema: "Digitalización de la educación"
      },
      {
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Mayor conectividad digital en Lima Región",
        tituloCorto: "conectividad digital",
        resumen: "La conectividad digital puede entenderse como un proceso de ampliación del acceso y uso de internet que no depende únicamente de la infraestructura, sino también de la posibilidad real de que hogares y personas se conecten en condiciones adecuadas, seguras y útiles para sus actividades cotidianas.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t10_lr",
        tema: "Conectividad digital"
      }]
    }
  },
  "Áncash": {
    "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Aumento del acceso seguro a agua y saneamiento en Lima Región",
          tituloCorto: "agua y saneamiento",
          resumen: "Para 2030, se espera que el acceso seguro a agua y saneamiento en Lima Región continúe creciendo de manera moderada. Este contexto sugiere una mejora progresiva, aunque sin eliminar del todo la distancia entre Lima Región y los otros ámbitos de comparación.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_lr",
          tema: "Acceso a agua y saneamiento"
        },
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Mayor digitalización de la educación en Lima Región",
          tituloCorto: "digitalización de la educación",
          resumen: "La digitalización de la educación en Lima Región puede entenderse como un proceso que va más allá de disponer de internet en las escuelas, porque también supone integrar recursos digitales al aprendizaje, ampliar las posibilidades de acceso de estudiantes y docentes, y fortalecer capacidades para un uso pedagógico más pertinente.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_lr",
          tema: "Digitalización de la educación"
        },
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Mayor conectividad digital en Lima Región",
          tituloCorto: "conectividad digital",
          resumen: "La conectividad digital puede entenderse como un proceso de ampliación del acceso y uso de internet que no depende únicamente de la infraestructura, sino también de la posibilidad real de que hogares y personas se conecten en condiciones adecuadas, seguras y útiles para sus actividades cotidianas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_lr",
          tema: "Conectividad digital"
        }
      ]
    },
    "Riesgos": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [

        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Persistencia de los conflictos sociales",
          tituloCorto: "conflictos sociales",
          resumen: "Los conflictos sociales se refieren a las tensiones y disputas entre diversos grupos dentro de una sociedad, originadas por múltiples factores como desigualdades económicas, diferencias culturales, disputas territoriales y competencia por recursos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_lr",
          tema: "Conflictos sociales"
        }
      ]
    },
    "Oportunidades": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Menor participación electoral",
          tituloCorto: "participación electoral",
          resumen: "La base fundamental de cualquier democracia radica en la participación electoral, ya que, mediante el acto de votar, los ciudadanos ejercen su derecho y responsabilidad de elegir a sus representantes en los distintos niveles de gobierno.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_lr",
          tema: "Participación electoral"
        }
      ]
    },
    "Escenarios": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [{
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Aumento del acceso seguro a agua y saneamiento en Lima Región",
        tituloCorto: "agua y saneamiento",
        resumen: "Para 2030, se espera que el acceso seguro a agua y saneamiento en Lima Región continúe creciendo de manera moderada. Este contexto sugiere una mejora progresiva, aunque sin eliminar del todo la distancia entre Lima Región y los otros ámbitos de comparación.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t1_lr",
        tema: "Acceso a agua y saneamiento"
      },
      {
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Mayor digitalización de la educación en Lima Región",
        tituloCorto: "digitalización de la educación",
        resumen: "La digitalización de la educación en Lima Región puede entenderse como un proceso que va más allá de disponer de internet en las escuelas, porque también supone integrar recursos digitales al aprendizaje, ampliar las posibilidades de acceso de estudiantes y docentes, y fortalecer capacidades para un uso pedagógico más pertinente.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t9_lr",
        tema: "Digitalización de la educación"
      },
      {
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Mayor conectividad digital en Lima Región",
        tituloCorto: "conectividad digital",
        resumen: "La conectividad digital puede entenderse como un proceso de ampliación del acceso y uso de internet que no depende únicamente de la infraestructura, sino también de la posibilidad real de que hogares y personas se conecten en condiciones adecuadas, seguras y útiles para sus actividades cotidianas.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t10_lr",
        tema: "Conectividad digital"
      }]
    }
  },
  "La Libertad": {
    "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Aumento del acceso seguro a agua y saneamiento en Lima Región",
          tituloCorto: "agua y saneamiento",
          resumen: "Para 2030, se espera que el acceso seguro a agua y saneamiento en Lima Región continúe creciendo de manera moderada. Este contexto sugiere una mejora progresiva, aunque sin eliminar del todo la distancia entre Lima Región y los otros ámbitos de comparación.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_lr",
          tema: "Acceso a agua y saneamiento"
        },
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Mayor digitalización de la educación en Lima Región",
          tituloCorto: "digitalización de la educación",
          resumen: "La digitalización de la educación en Lima Región puede entenderse como un proceso que va más allá de disponer de internet en las escuelas, porque también supone integrar recursos digitales al aprendizaje, ampliar las posibilidades de acceso de estudiantes y docentes, y fortalecer capacidades para un uso pedagógico más pertinente.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t9_lr",
          tema: "Digitalización de la educación"
        },
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Mayor conectividad digital en Lima Región",
          tituloCorto: "conectividad digital",
          resumen: "La conectividad digital puede entenderse como un proceso de ampliación del acceso y uso de internet que no depende únicamente de la infraestructura, sino también de la posibilidad real de que hogares y personas se conecten en condiciones adecuadas, seguras y útiles para sus actividades cotidianas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t10_lr",
          tema: "Conectividad digital"
        }
      ]
    },
    "Riesgos": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [

        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Persistencia de los conflictos sociales",
          tituloCorto: "conflictos sociales",
          resumen: "Los conflictos sociales se refieren a las tensiones y disputas entre diversos grupos dentro de una sociedad, originadas por múltiples factores como desigualdades económicas, diferencias culturales, disputas territoriales y competencia por recursos.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t5_lr",
          tema: "Conflictos sociales"
        }
      ]
    },
    "Oportunidades": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Menor participación electoral",
          tituloCorto: "participación electoral",
          resumen: "La base fundamental de cualquier democracia radica en la participación electoral, ya que, mediante el acto de votar, los ciudadanos ejercen su derecho y responsabilidad de elegir a sus representantes en los distintos niveles de gobierno.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t11_lr",
          tema: "Participación electoral"
        }
      ]
    },
    "Escenarios": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [{
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Aumento del acceso seguro a agua y saneamiento en Lima Región",
        tituloCorto: "agua y saneamiento",
        resumen: "Para 2030, se espera que el acceso seguro a agua y saneamiento en Lima Región continúe creciendo de manera moderada. Este contexto sugiere una mejora progresiva, aunque sin eliminar del todo la distancia entre Lima Región y los otros ámbitos de comparación.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t1_lr",
        tema: "Acceso a agua y saneamiento"
      },
      {
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Mayor digitalización de la educación en Lima Región",
        tituloCorto: "digitalización de la educación",
        resumen: "La digitalización de la educación en Lima Región puede entenderse como un proceso que va más allá de disponer de internet en las escuelas, porque también supone integrar recursos digitales al aprendizaje, ampliar las posibilidades de acceso de estudiantes y docentes, y fortalecer capacidades para un uso pedagógico más pertinente.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t9_lr",
        tema: "Digitalización de la educación"
      },
      {
        imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
        titulo: "Mayor conectividad digital en Lima Región",
        tituloCorto: "conectividad digital",
        resumen: "La conectividad digital puede entenderse como un proceso de ampliación del acceso y uso de internet que no depende únicamente de la infraestructura, sino también de la posibilidad real de que hogares y personas se conecten en condiciones adecuadas, seguras y útiles para sus actividades cotidianas.",
        url: "https://observatorio.ceplan.gob.pe/ficha/t10_lr",
        tema: "Conectividad digital"
      }]
    }
  },
  "Lambayeque": {
    "url": "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
    "Tendencias": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: [
        {
          imagenUrl: "https://cdn.statcdn.com/Statistic/375000/379046-blank-355.png",
          titulo: "Aumento del acceso seguro a agua y saneamiento en Lima Región",
          tituloCorto: "agua y saneamiento",
          resumen: "Para 2030, se espera que el acceso seguro a agua y saneamiento en Lima Región continúe creciendo de manera moderada. Este contexto sugiere una mejora progresiva, aunque sin eliminar del todo la distancia entre Lima Región y los otros ámbitos de comparación.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_lr",
          tema: "Acceso a agua y saneamiento"
        }
      ]
    },
    "Riesgos": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: []
    },
    "Oportunidades": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: []
    },
    "Escenarios": {
      descargaUrl: "https://observatorio.ceplan.gob.pe/uploads/reporte/Gobierno%20Regional%20de%20Lima%20-%20Tendencias%20territoriales%20para%20el%20an%C3%A1lisis%20prospectivo_2024.pdf",
      articulos: []
    }
  }
};