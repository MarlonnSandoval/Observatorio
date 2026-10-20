import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ARTICLES_DATABASE } from './articles-database.data';
import {
  CapturaTerritorio, CATEGORIAS_VIG, DisenoTerritorio, EvidenciaCaptada, FichaCatalogo, PerfilBusqueda, SenalHorizonte
} from './radar-item.model';

/**
 * Servicio único del módulo de vigilancia (mockup).
 * Contiene los datos de ejemplo y el adaptador hacia el Observatorio. Los tipos están en radar-item.model.ts.
 * Para pasar a producción: reemplazar el cuerpo de los métodos por llamadas HttpClient y borrar los MOCK.
 * Los datos del Callao siguen el ejemplo del documento; lo demás es ilustrativo.
 */

// ============ MOCK · Paso 1: diseño de vigilancia (lo que definiría el Ceplan) ============
const VIGILANCIA_DISENO: Record<string, DisenoTerritorio> = {
  'Callao': {
    escenarios: {
      // Diseño completo (las 4 etapas)
      'e1_cal': {
        instrumento: 'PDRC Callao 2025–2034',
        horizonte: '2025–2034',
        insumos: [
          { tipo: 'Escenario', informacion: 'Nueva cepa COVID-19' },
          { tipo: 'Situación descrita', informacion: 'Aparición y propagación de una nueva enfermedad respiratoria altamente contagiosa, con posibles efectos sobre el sistema sanitario, la economía y otros servicios del territorio.' },
          { tipo: 'Tendencia relacionada', informacion: 'Persistencia de enfermedades transmisibles.' },
          { tipo: 'Riesgo relacionado', informacion: 'Propagación rápida y masiva de enfermedades infecciosas.' },
          { tipo: 'Ámbito territorial', informacion: 'Provincia Constitucional del Callao.' },
          { tipo: 'Horizonte', informacion: 'Horizonte del PDRC 2025–2034.' }
        ],
        elementos: [
          { elementoId: 't3_cal', justificacion: 'Explica el aumento de eventos respiratorios atípicos.' },
          { elementoId: 'r2_cal', justificacion: 'Describe la dinámica central del escenario.' }
        ]
      },
      // Diseño en curso: solo la etapa 1 (para mostrar el indicador de avance)
      'e2_cal': {
        instrumento: 'PDRC Callao 2025–2034',
        horizonte: '2025–2034',
        insumos: [
          { tipo: 'Escenario', informacion: 'Escasez hídrica severa' },
          { tipo: 'Situación descrita', informacion: 'Déficit de agua que limita el abastecimiento de la población y de las actividades productivas.' },
          { tipo: 'Ámbito territorial', informacion: 'Provincia Constitucional del Callao.' }
        ],
        elementos: []
      }
    },
    hechos: [
      {
        id: 'HP1', elementoId: 'r2_cal', tipo: 'POTENCIAL',
        descripcion: 'Comunicación oficial de una nueva cepa o agente con potencial epidémico',
        razonamiento: {
          aspecto: 'Amenazas sanitarias identificadas por las autoridades de salud',
          cambio: 'Reconocimiento oficial de un agente respiratorio nuevo con potencial epidémico',
          manifestacion: 'Alerta o comunicado oficial sobre una nueva cepa o agente respiratorio'
        },
        indicador: 'Alerta oficial emitida',
        lineaBase: 'Sin alerta oficial vigente sobre una nueva cepa',
        fuente: 'Autoridades sanitarias nacionales e internacionales',
        periodicidad: 'Ante nuevas alertas',
        tipoUmbral: 'EVENTO',
        umbral: 'Comunicación oficial de una amenaza transmisible relevante para el país'
      },
      {
        id: 'HP2', elementoId: 't3_cal', tipo: 'OBSERVABLE',
        descripcion: 'Aparición o incremento de eventos respiratorios graves inusitados en el Callao',
        razonamiento: {
          aspecto: 'Aparición y comportamiento de eventos epidemiológicos con potencial de propagación',
          cambio: 'Desviación respecto de los patrones epidemiológicos habituales',
          manifestacion: 'Aparición o incremento inusual de eventos epidemiológicos, cambios atípicos en su distribución o concentración'
        },
        indicador: 'Casos notificados de IRAG inusitada',
        lineaBase: 'SE 13-2024: 0 casos notificados de IRAG inusitada',
        fuente: 'DIRESA Callao – Boletín epidemiológico',
        periodicidad: 'Semanal',
        tipoUmbral: 'NORMATIVO',
        umbral: 'Supera la condición inusual según los criterios técnicos de vigilancia epidemiológica'
      },
      {
        id: 'HP3', elementoId: 'r2_cal', tipo: 'POTENCIAL',
        descripcion: 'Presión sobre la capacidad de atención por cuadros respiratorios graves',
        razonamiento: {
          aspecto: 'Capacidad de respuesta del sistema de salud',
          cambio: 'Aumento de la presión asistencial respecto del comportamiento habitual',
          manifestacion: 'Más hospitalizaciones y mayor ocupación por cuadros respiratorios graves'
        },
        indicador: 'Hospitalizaciones y ocupación asociadas',
        lineaBase: 'Ocupación habitual por cuadros respiratorios (por definir con DIRESA)',
        fuente: 'DIRESA Callao / establecimientos de salud',
        periodicidad: 'Semanal',
        tipoUmbral: 'NORMATIVO',
        umbral: 'Supera la condición de presión sanitaria definida técnicamente para el indicador'
      },
      {
        id: 'HP4', elementoId: 'r2_cal', tipo: 'POTENCIAL',
        descripcion: 'Transmisión local sostenida del nuevo agente',
        razonamiento: {
          aspecto: 'Circulación local de un agente nuevo',
          cambio: 'Paso de casos aislados a transmisión sostenida en el territorio',
          manifestacion: 'Casos confirmados con evidencia de transmisión local'
        },
        indicador: 'Casos confirmados con transmisión local',
        lineaBase: 'Sin casos confirmados de la nueva cepa',
        fuente: 'DIRESA Callao / CDC-MINSA',
        periodicidad: 'Ante confirmación',
        tipoUmbral: 'EVENTO',
        umbral: 'Confirmación oficial de casos y evidencia de transmisión local'
      }
    ]
  }
};

// ============ MOCK · Paso 2: búsqueda y captación (lo que tendría registrado el ONP) ============
// HP1 a HP3 tienen perfil configurado; HP4 no, para mostrar el asistente desde cero.
const VIGILANCIA_CAPTACION: Record<string, CapturaTerritorio> = {
  'Callao': {
    material: [
      {
        hechoId: 'HP1',
        referenciasPlan: [
          { id: 'p1a', tipo: 'Fuente', descripcion: 'Alertas epidemiológicas del CDC-MINSA', nivel: 'OFICIAL' },
          { id: 'p1b', tipo: 'Referencia', descripcion: 'Análisis del riesgo «Propagación rápida y masiva de enfermedades infecciosas» del PDRC', nivel: 'OFICIAL' }
        ],
        antecedentesOnp: [
          { id: 'o1a', tipo: 'Ficha', titulo: 'Propagación rápida y masiva de enfermedades infecciosas', detalle: 'Ficha del Observatorio con el riesgo del que deriva el hecho.' }
        ],
        resultadosExternos: [
          { id: 'x1a', titulo: 'Alertas y comunicados sobre agentes respiratorios emergentes', fuente: 'OMS / OPS', nivel: 'OFICIAL', fecha: '2025-04-02', fragmento: 'Comunicados oficiales sobre detección y evaluación de agentes respiratorios nuevos.' },
          { id: 'x1b', titulo: 'Revisión sobre vigilancia de nuevos virus respiratorios', fuente: 'Publicaciones científicas', nivel: 'CIENTIFICA', fecha: '2024-12-10', fragmento: 'Revisión de sistemas de detección temprana de virus respiratorios emergentes.' },
          { id: 'x1c', titulo: 'Variante respiratoria bajo evaluación según medios de salud', fuente: 'Prensa especializada en salud', nivel: 'ABIERTA', fecha: '2025-04-04', fragmento: 'Nota periodística que menciona una variante en evaluación, sin cita de fuente oficial.' }
        ]
      },
      {
        hechoId: 'HP2',
        referenciasPlan: [
          { id: 'p2a', tipo: 'Fuente', descripcion: 'DIRESA Callao – Boletín Epidemiológico', nivel: 'OFICIAL' },
          { id: 'p2b', tipo: 'Base de datos', descripcion: 'CDC-MINSA – Vigilancia de virus respiratorios', nivel: 'OFICIAL' },
          { id: 'p2c', tipo: 'Referencia', descripcion: 'Análisis de la tendencia «Persistencia de enfermedades transmisibles» del PDRC', nivel: 'OFICIAL' }
        ],
        antecedentesOnp: [
          { id: 'o2a', tipo: 'Ficha', titulo: 'Persistencia de las enfermedades transmisibles', detalle: 'Ficha del Observatorio con la tendencia de la que deriva el hecho.' },
          { id: 'o2b', tipo: 'Indicador', titulo: 'Casos notificados de IRAG inusitada', detalle: 'Indicador ya indexado, con corte a la SE 13-2025.' },
          { id: 'o2c', tipo: 'Análisis', titulo: 'Nota técnica sobre circulación de virus respiratorios en el Callao', detalle: 'Análisis de especialistas del Ceplan (ilustrativo).' }
        ],
        resultadosExternos: [
          { id: 'x2a', titulo: 'Boletín Epidemiológico SE 13-2025', fuente: 'DIRESA Callao – Boletín Epidemiológico', nivel: 'OFICIAL', fecha: '2025-04-03', fragmento: 'Reporta casos acumulados de IRAG inusitada y su clasificación por laboratorio.' },
          { id: 'x2b', titulo: 'Informe semanal de virus respiratorios', fuente: 'CDC-MINSA – Vigilancia de virus respiratorios', nivel: 'OFICIAL', fecha: '2025-04-01', fragmento: 'Resumen semanal de circulación de virus respiratorios a nivel nacional.' },
          { id: 'x2c', titulo: 'Circulación de influenza A(H1N1) en Lima y Callao', fuente: 'Publicaciones científicas', nivel: 'CIENTIFICA', fecha: '2024-11-15', fragmento: 'Estudio sobre circulación de influenza en el área metropolitana.' },
          { id: 'x2d', titulo: 'Aumentan casos de infecciones respiratorias graves en el Callao', fuente: 'Prensa local', nivel: 'ABIERTA', fecha: '2025-04-04', fragmento: 'Nota periodística sobre el aumento de casos; debe corroborarse con el boletín oficial.' }
        ]
      },
      {
        hechoId: 'HP3',
        referenciasPlan: [
          { id: 'p3a', tipo: 'Fuente', descripcion: 'DIRESA Callao / establecimientos de salud', nivel: 'OFICIAL' },
          { id: 'p3b', tipo: 'Referencia', descripcion: 'Análisis de la tendencia «Persistencia de enfermedades transmisibles» del PDRC', nivel: 'OFICIAL' }
        ],
        antecedentesOnp: [
          { id: 'o3a', tipo: 'Indicador', titulo: 'Ocupación de camas por cuadros respiratorios', detalle: 'Indicador por definir con DIRESA (ilustrativo).' }
        ],
        resultadosExternos: [
          { id: 'x3a', titulo: 'Reporte de capacidad hospitalaria', fuente: 'MINSA', nivel: 'OFICIAL', fecha: '2025-03-28', fragmento: 'Reporte de camas disponibles y ocupadas por establecimiento.' },
          { id: 'x3b', titulo: 'Presión asistencial por infecciones respiratorias en hospitales', fuente: 'Prensa local', nivel: 'ABIERTA', fecha: '2025-04-02', fragmento: 'Nota sobre mayor demanda en emergencias; requiere corroboración oficial.' }
        ]
      },
      {
        hechoId: 'HP4',
        referenciasPlan: [
          { id: 'p4a', tipo: 'Fuente', descripcion: 'CDC-MINSA – Confirmación de casos', nivel: 'OFICIAL' },
          { id: 'p4b', tipo: 'Fuente', descripcion: 'DIRESA Callao – Boletín Epidemiológico', nivel: 'OFICIAL' }
        ],
        antecedentesOnp: [
          { id: 'o4a', tipo: 'Ficha', titulo: 'Propagación rápida y masiva de enfermedades infecciosas', detalle: 'Ficha del Observatorio con el riesgo del que deriva el hecho.' },
          { id: 'o4b', tipo: 'Análisis', titulo: 'Criterios para considerar transmisión local sostenida', detalle: 'Análisis de especialistas del Ceplan (ilustrativo).' }
        ],
        resultadosExternos: [
          { id: 'x4a', titulo: 'Definiciones de caso y de transmisión local', fuente: 'CDC-MINSA', nivel: 'OFICIAL', fecha: '2025-02-20', fragmento: 'Documento técnico con definiciones de caso y criterios de transmisión.' },
          { id: 'x4b', titulo: 'Evidencia sobre transmisión comunitaria de virus respiratorios', fuente: 'Publicaciones científicas', nivel: 'CIENTIFICA', fecha: '2024-09-05', fragmento: 'Revisión de indicadores de transmisión comunitaria.' },
          { id: 'x4c', titulo: 'Casos confirmados y contactos: lo que se sabe', fuente: 'Prensa local', nivel: 'ABIERTA', fecha: '2025-04-04', fragmento: 'Nota explicativa sin datos oficiales propios.' }
        ]
      }
    ],
    perfiles: [
      {
        hechoId: 'HP1', modalidad: 'EXPLORATORIA',
        informacionRequerida: 'Comunicados o alertas oficiales sobre nuevos agentes respiratorios con potencial epidémico.',
        planIds: ['p1a', 'p1b'], onpIds: ['o1a'], externosIds: ['x1a', 'x1b'],
        fuentes: [
          { nombre: 'Alertas epidemiológicas del CDC-MINSA', nivel: 'OFICIAL', principal: true },
          { nombre: 'OMS / OPS', nivel: 'OFICIAL', principal: false },
          { nombre: 'Publicaciones científicas', nivel: 'CIENTIFICA', principal: false }
        ],
        acceso: 'Alertas y comunicados de autoridades sanitarias; suscripción a alertas cuando esté disponible.',
        terminos: ['nueva cepa', 'agente respiratorio emergente', 'alerta epidemiológica'],
        ecuacion: '"nueva cepa" O "agente respiratorio emergente" O "alerta epidemiológica"',
        filtros: 'Territorio: nacional e internacional · Periodo: últimos 7 días',
        mecanismo: 'SEMIAUTOMATIZADA',
        frecuencia: 'Ante nuevas alertas y revisión semanal',
        pertinencia: 'Debe identificar una amenaza con capacidad de transmisión y relevancia para el país. La prensa se corrobora con una fuente oficial.'
      },
      {
        hechoId: 'HP2', modalidad: 'DIRIGIDA',
        informacionRequerida: 'Casos de IRAG inusitada notificados en la semana epidemiológica y acumulados en el año, con su condición (confirmado, probable o descartado) cuando esté disponible.',
        planIds: ['p2a', 'p2b', 'p2c'], onpIds: ['o2a', 'o2b'], externosIds: ['x2a', 'x2b'],
        fuentes: [
          { nombre: 'DIRESA Callao – Boletín Epidemiológico', nivel: 'OFICIAL', principal: true },
          { nombre: 'CDC-MINSA – Vigilancia de virus respiratorios', nivel: 'OFICIAL', principal: false }
        ],
        acceso: 'Consulta de los boletines epidemiológicos publicados por DIRESA Callao y búsqueda dirigida del término; recuperación del valor semanal y acumulado del último corte.',
        terminos: ['IRAG inusitada', 'infección respiratoria aguda grave inusitada', 'Callao', 'semana epidemiológica'],
        ecuacion: '"IRAG inusitada" Y Callao',
        filtros: 'Territorio: Callao · Periodo: último corte semanal',
        mecanismo: 'MANUAL',
        frecuencia: 'Semanal',
        pertinencia: 'Corresponde al Callao, al evento IRAG inusitada y al último corte disponible. Se verifica si incluye personas de otros ámbitos.'
      },
      {
        hechoId: 'HP3', modalidad: 'DIRIGIDA',
        informacionRequerida: 'Hospitalizaciones y ocupación de camas asociadas a cuadros respiratorios graves.',
        planIds: ['p3a'], onpIds: [], externosIds: ['x3a'],
        fuentes: [
          { nombre: 'DIRESA Callao / establecimientos de salud', nivel: 'OFICIAL', principal: true },
          { nombre: 'MINSA', nivel: 'OFICIAL', principal: false }
        ],
        acceso: 'Reportes de capacidad hospitalaria de DIRESA Callao y sistemas oficiales del sector salud.',
        terminos: ['hospitalizaciones respiratorias', 'ocupación de camas', 'Callao'],
        ecuacion: '"ocupación de camas" Y respiratorio Y Callao',
        filtros: 'Territorio: Callao · Periodo: semanal',
        mecanismo: 'MANUAL',
        frecuencia: 'Semanal o según disponibilidad',
        pertinencia: 'Debe referirse a establecimientos del Callao y al mismo evento respiratorio vigilado.'
      }
    ],
    evidencias: [
      {
        id: 'ev-1', hechoId: 'HP2',
        fechaCaptacion: '2025-03-20', periodoReferencia: 'SE 11-2025',
        hallazgo: '4 casos acumulados de IRAG inusitada, todos descartados. Se notificó 1 caso en la semana.',
        valorIndicador: '4 acumulados (1 en la semana)',
        fuente: 'DIRESA Callao – Boletín Epidemiológico SE 11-2025', nivelFuente: 'OFICIAL', origen: 'PRIMARIA',
        enlace: 'https://www.gob.pe/regioncallao',
        mecanismo: 'MANUAL', direccion: 'NEUTRA'
      },
      {
        id: 'ev-2', hechoId: 'HP2',
        fechaCaptacion: '2025-04-03', periodoReferencia: 'SE 13-2025',
        hallazgo: '48 casos acumulados de IRAG inusitada: 10 confirmados (21 %), 32 descartados (67 %) y 6 probables (13 %). En la SE 13 se notificaron 12 casos; en la misma semana de 2024 no hubo casos.',
        valorIndicador: '48 acumulados (12 en la semana)',
        fuente: 'DIRESA Callao – Boletín Epidemiológico SE 13-2025', nivelFuente: 'OFICIAL', origen: 'PRIMARIA',
        enlace: 'https://www.gob.pe/regioncallao',
        mecanismo: 'MANUAL', direccion: 'CONSISTENTE'
      },
      {
        id: 'ev-3', hechoId: 'HP2',
        fechaCaptacion: '2025-04-04', periodoReferencia: 'SE 13-2025',
        hallazgo: 'Nota periodística que repite las cifras del boletín de la DIRESA sin aportar datos propios.',
        fuente: 'Prensa local', nivelFuente: 'ABIERTA', origen: 'REPRODUCCION',
        enlace: '',
        mecanismo: 'SEMIAUTOMATIZADA', direccion: 'CONSISTENTE'
      }
    ],
    senales: [
      {
        id: 'sh-1', fecha: '2025-04-05',
        titulo: 'Reportes de mayor ausentismo escolar por cuadros respiratorios en colegios del Callao',
        descripcion: 'Señal débil detectada fuera del diseño inicial; aún sin corroboración oficial.',
        fuente: 'Prensa local (ilustrativo)',
        estado: 'NUEVA'
      },
      {
        id: 'sh-2', fecha: '2025-03-28',
        titulo: 'Aumento de consultas por síntomas respiratorios en farmacias de la zona portuaria',
        fuente: 'Observación de campo (ilustrativo)',
        estado: 'EN_OBSERVACION',
        evaluacion: { relevancia: 'MEDIA', persistencia: 'BAJA', impacto: 'MEDIA' }
      }
    ]
  }
};

// ============ SERVICIO ============
/** Adaptador entre el Observatorio y el módulo de vigilancia. */
@Injectable({ providedIn: 'root' })
export class VigilanciaService {

  /** Síncrono: se usa para pintar el mapa. */
  tieneCatalogo(territorio: string): boolean {
    const reg = ARTICLES_DATABASE[territorio];
    return !!reg && CATEGORIAS_VIG.some(c => (reg[c]?.articulos?.length ?? 0) > 0);
  }

  /** Fichas existentes del territorio (tendencias, riesgos, oportunidades y escenarios). */
  getFichas(territorio: string): Observable<FichaCatalogo[]> {
    const reg = ARTICLES_DATABASE[territorio];
    const fichas: FichaCatalogo[] = [];
    const vistos = new Set<string>();
    if (reg) {
      for (const categoria of CATEGORIAS_VIG) {
        for (const a of reg[categoria]?.articulos ?? []) {
          const id = a.url.split('/').pop() ?? a.url;
          const clave = categoria + ':' + id;
          if (vistos.has(clave)) { continue; }   // el catálogo mock repite fichas
          vistos.add(clave);
          fichas.push({ id, categoria, titulo: a.titulo, tema: a.tema, resumen: a.resumen, url: a.url, periodo: a.periodo });
        }
      }
    }
    return of(fichas);
  }

  /** Fase 1: diseño de vigilancia del territorio, si existe. Devuelve una copia editable. */
  getDiseno(territorio: string): Observable<DisenoTerritorio | null> {
    const d = VIGILANCIA_DISENO[territorio];
    return of(d ? JSON.parse(JSON.stringify(d)) as DisenoTerritorio : null);
  }

  /** Fase 2: material de búsqueda, perfiles, evidencias y señales. Devuelve una copia editable. */
  getCaptacion(territorio: string): Observable<CapturaTerritorio | null> {
    const c = VIGILANCIA_CAPTACION[territorio];
    return of(c ? JSON.parse(JSON.stringify(c)) as CapturaTerritorio : null);
  }

  /** MOCK: no persiste. En producción sería un POST al módulo de vigilancia del ONP. */
  guardarPerfil(territorio: string, perfil: PerfilBusqueda): Observable<PerfilBusqueda> {
    return of(perfil);
  }

  /** MOCK: no persiste. */
  guardarEvidencia(territorio: string, evidencia: EvidenciaCaptada): Observable<EvidenciaCaptada> {
    return of(evidencia);
  }

  /** MOCK: no persiste. */
  guardarSenal(territorio: string, senal: SenalHorizonte): Observable<SenalHorizonte> {
    return of(senal);
  }
}