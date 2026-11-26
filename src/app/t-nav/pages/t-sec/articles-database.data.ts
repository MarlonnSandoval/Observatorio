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

export const SECTOR_DATABASE: SectorDatabase = {

  // ─── AMBIENTAL ────────────────────────────────────────────────────────────────
  "Ambiental": {
    url: "",
    "Social": {
      caracterizan: [
        {
          titulo: "Disponibilidad y acceso sostenido al recurso hídrico",
          tituloCorto: "Acceso agua",
          resumen: "Evolución de la disponibilidad de agua segura y presión sobre fuentes hídricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del suelo"
        }
      ]
    },
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
    "Social": {
      caracterizan: [
        {
          titulo: "Disponibilidad y acceso sostenido al recurso hídrico",
          tituloCorto: "Acceso agua",
          resumen: "Evolución de la disponibilidad de agua segura y presión sobre fuentes hídricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del suelo"
        }
      ]
    },
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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

  // ─── COMERCIO EXTERIOR Y TURISMO ──────────────────────────────────────────────
  "Comercio Exterior y Turismo": {
    url: "",
    "Social": {
      caracterizan: [
        {
          titulo: "Disponibilidad y acceso sostenido al recurso hídrico",
          tituloCorto: "Acceso agua",
          resumen: "Evolución de la disponibilidad de agua segura y presión sobre fuentes hídricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del suelo"
        }
      ]
    },
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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

  // ─── PRODUCCIÓN ───────────────────────────────────────────────────────────────
  "Producción": {
    url: "",
    "Social": {
      caracterizan: [
        {
          titulo: "Disponibilidad y acceso sostenido al recurso hídrico",
          tituloCorto: "Acceso agua",
          resumen: "Evolución de la disponibilidad de agua segura y presión sobre fuentes hídricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del suelo"
        }
      ]
    },
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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

  // ─── EDUCACIÓN ────────────────────────────────────────────────────────────────
  "Educación": {
    url: "",
    "Social": {
      caracterizan: [
        {
          titulo: "Disponibilidad y acceso sostenido al recurso hídrico",
          tituloCorto: "Acceso agua",
          resumen: "Evolución de la disponibilidad de agua segura y presión sobre fuentes hídricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del suelo"
        }
      ]
    },
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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

  // ─── SALUD ────────────────────────────────────────────────────────────────────
  "Salud": {
    url: "",
    "Social": {
      caracterizan: [
        {
          titulo: "Disponibilidad y acceso sostenido al recurso hídrico",
          tituloCorto: "Acceso agua",
          resumen: "Evolución de la disponibilidad de agua segura y presión sobre fuentes hídricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del suelo"
        }
      ]
    },
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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

  // ─── RESTO DE SECTORES (MUESTRA BREVE) ────────────────────────────────────────
  "Desarrollo e Inclusión Social": {
    url: "",
    "Social": {
      caracterizan: [
        {
          titulo: "Disponibilidad y acceso sostenido al recurso hídrico",
          tituloCorto: "Acceso agua",
          resumen: "Evolución de la disponibilidad de agua segura y presión sobre fuentes hídricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del suelo"
        }
      ]
    },
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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

  "Competitividad Institucional": {
    url: "",
    "Social": {
      caracterizan: [
        {
          titulo: "Disponibilidad y acceso sostenido al recurso hídrico",
          tituloCorto: "Acceso agua",
          resumen: "Evolución de la disponibilidad de agua segura y presión sobre fuentes hídricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del suelo"
        }
      ]
    },
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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

  "Mujer y poblaciones vulnerables": {
    url: "",
    "Social": {
      caracterizan: [
        {
          titulo: "Disponibilidad y acceso sostenido al recurso hídrico",
          tituloCorto: "Acceso agua",
          resumen: "Evolución de la disponibilidad de agua segura y presión sobre fuentes hídricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del suelo"
        }
      ]
    },
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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

  "Transporte y Comunicaciones": {
    url: "",
    "Social": {
      caracterizan: [
        {
          titulo: "Disponibilidad y acceso sostenido al recurso hídrico",
          tituloCorto: "Acceso agua",
          resumen: "Evolución de la disponibilidad de agua segura y presión sobre fuentes hídricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del suelo"
        }
      ]
    },
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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

  "Trabajo y Promoción de Empleo": {
    url: "",
    "Social": {
      caracterizan: [
        {
          titulo: "Disponibilidad y acceso sostenido al recurso hídrico",
          tituloCorto: "Acceso agua",
          resumen: "Evolución de la disponibilidad de agua segura y presión sobre fuentes hídricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del suelo"
        }
      ]
    },
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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

  "Energía y Minas": {
    url: "",
    "Social": {
      caracterizan: [
        {
          titulo: "Disponibilidad y acceso sostenido al recurso hídrico",
          tituloCorto: "Acceso agua",
          resumen: "Evolución de la disponibilidad de agua segura y presión sobre fuentes hídricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del suelo"
        }
      ]
    },
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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

  "Relaciones exteriores": {
    url: "",
    "Social": {
      caracterizan: [
        {
          titulo: "Disponibilidad y acceso sostenido al recurso hídrico",
          tituloCorto: "Acceso agua",
          resumen: "Evolución de la disponibilidad de agua segura y presión sobre fuentes hídricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del suelo"
        }
      ]
    },
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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

  "Economía y Finanzas": {
    url: "",
    "Social": {
      caracterizan: [
        {
          titulo: "Disponibilidad y acceso sostenido al recurso hídrico",
          tituloCorto: "Acceso agua",
          resumen: "Evolución de la disponibilidad de agua segura y presión sobre fuentes hídricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del suelo"
        }
      ]
    },
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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

  "Agrario y de Riesgo": {
    url: "",
    "Social": {
      caracterizan: [
        {
          titulo: "Disponibilidad y acceso sostenido al recurso hídrico",
          tituloCorto: "Acceso agua",
          resumen: "Evolución de la disponibilidad de agua segura y presión sobre fuentes hídricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del suelo"
        }
      ]
    },
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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

  "Vivienda, construcción y saneamiento": {
    url: "",
    "Social": {
      caracterizan: [
        {
          titulo: "Disponibilidad y acceso sostenido al recurso hídrico",
          tituloCorto: "Acceso agua",
          resumen: "Evolución de la disponibilidad de agua segura y presión sobre fuentes hídricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del suelo"
        }
      ]
    },
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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

  "Defensa": {
    url: "",
    "Social": {
      caracterizan: [
        {
          titulo: "Disponibilidad y acceso sostenido al recurso hídrico",
          tituloCorto: "Acceso agua",
          resumen: "Evolución de la disponibilidad de agua segura y presión sobre fuentes hídricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del suelo"
        }
      ]
    },
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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

  "Justicia": {
    url: "",
    "Social": {
      caracterizan: [
        {
          titulo: "Disponibilidad y acceso sostenido al recurso hídrico",
          tituloCorto: "Acceso agua",
          resumen: "Evolución de la disponibilidad de agua segura y presión sobre fuentes hídricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del suelo"
        }
      ]
    },
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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

  "Interior": {
    url: "",
    "Social": {
      caracterizan: [
        {
          titulo: "Disponibilidad y acceso sostenido al recurso hídrico",
          tituloCorto: "Acceso agua",
          resumen: "Evolución de la disponibilidad de agua segura y presión sobre fuentes hídricas.",
          url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb",
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
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
          tematica: "Social",
          horizonte: "2030-2040",
          cuadrante: "Territorio sostenible",
          imagenUrl: "https://observatorio.ceplan.gob.pe/uploads/GZQaC7d3HmQvhd2nxo49Xw_u.jpg",
          fechaActualizacion: "20/05/2026",
          fuerzaCambio: "Uso del suelo"
        }
      ]
    },
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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
          tematica: "Ambiental",
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

};