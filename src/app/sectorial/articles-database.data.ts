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

  // ─── EDUCACIÓN ───────────────────────────────────────────────────────────────
  "Educación": {
    url: "",
    "Tendencias": {
      articulos: [
        { titulo: "Ejemplo: Expansión de la educación digital en colegios públicos", tituloCorto: "Educación digital", resumen: "Incremento del uso de plataformas virtuales y recursos digitales en el sistema educativo público.", url: "https://observatorio.ceplan.gob.pe/ficha/t1_edu", tematica: "Tecnológica", horizonte: "PRESENTE-2030", clave: "educación digital" }
      ]
    },
    "Riesgos":        { articulos: [] },
    "Oportunidades":  { articulos: [] },
    "Señal débil":    { articulos: [] },
    "Carta salvaje":  { articulos: [] },
    "Escenarios":     { articulos: [] }
  },

  // ─── SALUD ───────────────────────────────────────────────────────────────────
  "Salud": {
    url: "",
    "Tendencias": {
      articulos: [
        { titulo: "Ejemplo: Digitalización de historias clínicas y telemedicina", tituloCorto: "Telemedicina", resumen: "Adopción de sistemas de salud digitales y consultas remotas en el primer nivel de atención.", url: "https://observatorio.ceplan.gob.pe/ficha/t1_sal", tematica: "Tecnológica", horizonte: "PRESENTE-2030", clave: "telemedicina" }
      ]
    },
    "Riesgos":        { articulos: [] },
    "Oportunidades":  { articulos: [] },
    "Señal débil":    { articulos: [] },
    "Carta salvaje":  { articulos: [] },
    "Escenarios":     { articulos: [] }
  },

  // ─── AMBIENTAL ───────────────────────────────────────────────────────────────
  "Ambiental": {
    url: "",
    "Tendencias": {
      articulos: [
        { titulo: "Ejemplo: Incremento de áreas naturales protegidas", tituloCorto: "Áreas protegidas", resumen: "Expansión de la cobertura de ecosistemas bajo protección formal del Estado.", url: "https://observatorio.ceplan.gob.pe/ficha/t1_amb", tematica: "Ambiental", horizonte: "PRESENTE-2030", clave: "áreas protegidas" }
      ]
    },
    "Riesgos":        { articulos: [] },
    "Oportunidades":  { articulos: [] },
    "Señal débil":    { articulos: [] },
    "Carta salvaje":  { articulos: [] },
    "Escenarios":     { articulos: [] }
  },

  // ─── PRODUCCIÓN ──────────────────────────────────────────────────────────────
  "Producción": {
    url: "",
    "Tendencias":     { articulos: [] },
    "Riesgos":        { articulos: [] },
    "Oportunidades":  { articulos: [] },
    "Señal débil":    { articulos: [] },
    "Carta salvaje":  { articulos: [] },
    "Escenarios":     { articulos: [] }
  },

  // ─── CULTURA ─────────────────────────────────────────────────────────────────
  "Cultura": {
    url: "",
    "Tendencias":     { articulos: [] },
    "Riesgos":        { articulos: [] },
    "Oportunidades":  { articulos: [] },
    "Señal débil":    { articulos: [] },
    "Carta salvaje":  { articulos: [] },
    "Escenarios":     { articulos: [] }
  },

  // ─── INTERIOR ────────────────────────────────────────────────────────────────
  "Interior": {
    url: "",
    "Tendencias":     { articulos: [] },
    "Riesgos":        { articulos: [] },
    "Oportunidades":  { articulos: [] },
    "Señal débil":    { articulos: [] },
    "Carta salvaje":  { articulos: [] },
    "Escenarios":     { articulos: [] }
  },

  // ─── JUSTICIA ────────────────────────────────────────────────────────────────
  "Justicia": {
    url: "",
    "Tendencias":     { articulos: [] },
    "Riesgos":        { articulos: [] },
    "Oportunidades":  { articulos: [] },
    "Señal débil":    { articulos: [] },
    "Carta salvaje":  { articulos: [] },
    "Escenarios":     { articulos: [] }
  },

  // ─── DEFENSA ─────────────────────────────────────────────────────────────────
  "Defensa": {
    url: "",
    "Tendencias":     { articulos: [] },
    "Riesgos":        { articulos: [] },
    "Oportunidades":  { articulos: [] },
    "Señal débil":    { articulos: [] },
    "Carta salvaje":  { articulos: [] },
    "Escenarios":     { articulos: [] }
  },

  // ─── ECONOMÍA Y FINANZAS ─────────────────────────────────────────────────────
  "Economía y Finanzas": {
    url: "",
    "Tendencias":     { articulos: [] },
    "Riesgos":        { articulos: [] },
    "Oportunidades":  { articulos: [] },
    "Señal débil":    { articulos: [] },
    "Carta salvaje":  { articulos: [] },
    "Escenarios":     { articulos: [] }
  },

  // ─── RELACIONES EXTERIORES ───────────────────────────────────────────────────
  "Relaciones exteriores": {
    url: "",
    "Tendencias":     { articulos: [] },
    "Riesgos":        { articulos: [] },
    "Oportunidades":  { articulos: [] },
    "Señal débil":    { articulos: [] },
    "Carta salvaje":  { articulos: [] },
    "Escenarios":     { articulos: [] }
  },

  // ─── ENERGÍA Y MINAS ─────────────────────────────────────────────────────────
  "Energía y Minas": {
    url: "",
    "Tendencias":     { articulos: [] },
    "Riesgos":        { articulos: [] },
    "Oportunidades":  { articulos: [] },
    "Señal débil":    { articulos: [] },
    "Carta salvaje":  { articulos: [] },
    "Escenarios":     { articulos: [] }
  },

  // ─── TRABAJO Y PROMOCIÓN DE EMPLEO ───────────────────────────────────────────
  "Trabajo y Promoción de Empleo": {
    url: "",
    "Tendencias":     { articulos: [] },
    "Riesgos":        { articulos: [] },
    "Oportunidades":  { articulos: [] },
    "Señal débil":    { articulos: [] },
    "Carta salvaje":  { articulos: [] },
    "Escenarios":     { articulos: [] }
  },

  // ─── TRANSPORTE Y COMUNICACIONES ─────────────────────────────────────────────
  "Transporte y Comunicaciones": {
    url: "",
    "Tendencias":     { articulos: [] },
    "Riesgos":        { articulos: [] },
    "Oportunidades":  { articulos: [] },
    "Señal débil":    { articulos: [] },
    "Carta salvaje":  { articulos: [] },
    "Escenarios":     { articulos: [] }
  },

  // ─── MUJER Y POBLACIONES VULNERABLES ─────────────────────────────────────────
  "Mujer y poblaciones vulnerables": {
    url: "",
    "Tendencias":     { articulos: [] },
    "Riesgos":        { articulos: [] },
    "Oportunidades":  { articulos: [] },
    "Señal débil":    { articulos: [] },
    "Carta salvaje":  { articulos: [] },
    "Escenarios":     { articulos: [] }
  },

  // ─── COMPETITIVIDAD INSTITUCIONAL ────────────────────────────────────────────
  "Competitividad Institucional": {
    url: "",
    "Tendencias":     { articulos: [] },
    "Riesgos":        { articulos: [] },
    "Oportunidades":  { articulos: [] },
    "Señal débil":    { articulos: [] },
    "Carta salvaje":  { articulos: [] },
    "Escenarios":     { articulos: [] }
  },

  // ─── DESARROLLO E INCLUSIÓN SOCIAL ───────────────────────────────────────────
  "Desarrollo e Inclusión Social": {
    url: "",
    "Tendencias":     { articulos: [] },
    "Riesgos":        { articulos: [] },
    "Oportunidades":  { articulos: [] },
    "Señal débil":    { articulos: [] },
    "Carta salvaje":  { articulos: [] },
    "Escenarios":     { articulos: [] }
  },

  // ─── COMERCIO EXTERIOR Y TURISMO ─────────────────────────────────────────────
  "Comercio Exterior y Turismo": {
    url: "",
    "Tendencias":     { articulos: [] },
    "Riesgos":        { articulos: [] },
    "Oportunidades":  { articulos: [] },
    "Señal débil":    { articulos: [] },
    "Carta salvaje":  { articulos: [] },
    "Escenarios":     { articulos: [] }
  },

  // ─── AGRARIO Y DE RIESGO ─────────────────────────────────────────────────────
  "Agrario y de Riesgo": {
    url: "",
    "Tendencias":     { articulos: [] },
    "Riesgos":        { articulos: [] },
    "Oportunidades":  { articulos: [] },
    "Señal débil":    { articulos: [] },
    "Carta salvaje":  { articulos: [] },
    "Escenarios":     { articulos: [] }
  },

  // ─── VIVIENDA, CONSTRUCCIÓN Y SANEAMIENTO ────────────────────────────────────
  "Vivienda, construcción y saneamiento": {
    url: "",
    "Tendencias":     { articulos: [] },
    "Riesgos":        { articulos: [] },
    "Oportunidades":  { articulos: [] },
    "Señal débil":    { articulos: [] },
    "Carta salvaje":  { articulos: [] },
    "Escenarios":     { articulos: [] }
  }

};