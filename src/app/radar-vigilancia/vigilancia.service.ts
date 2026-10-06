import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ARTICLES_DATABASE } from './articles-database.data';
import {
  CapturaTerritorio, CATEGORIAS_VIG, DisenoTerritorio, EvidenciaCaptada, FichaCatalogo, SenalHorizonte
} from './radar-item.model';

/**
 * Servicio único del módulo de vigilancia (mockup).
 * Contiene los datos de ejemplo y el adaptador hacia el Observatorio. Los tipos están en radar-item.model.ts.
 * Para pasar a producción: reemplazar el cuerpo de los métodos por llamadas HttpClient y borrar los MOCK.
 */

// ============ MOCK · Paso 1: diseño de vigilancia (lo que definiría el Ceplan) ============
/**
 * MOCK de lo que el Ceplan diseñaría en la Fase 1.
 * No duplica las fichas: solo referencia sus ids (los del catálogo del Observatorio)
 * y agrega lo nuevo: qué elementos configuran cada escenario y los hechos precursores.
 * En producción esto vendría de un endpoint del módulo de vigilancia.
 */
export const VIGILANCIA_DISENO: Record<string, DisenoTerritorio> = {
  'Callao': {
    escenarios: {
      'e1_cal': [
        { elementoId: 't3_cal', justificacion: 'Explica el aumento de eventos respiratorios atípicos.' },
        { elementoId: 'r2_cal', justificacion: 'Describe la dinámica central del escenario.' }
      ]
    },
    hechos: [
      { id: 'HP1', elementoId: 'r2_cal', tipo: 'POTENCIAL',
        descripcion: 'Comunicación oficial de una nueva cepa o agente con potencial epidémico',
        indicador: 'Alerta oficial emitida',
        fuente: 'Autoridades sanitarias nacionales e internacionales',
        periodicidad: 'Ante nuevas alertas',
        umbral: 'Comunicación oficial de una amenaza transmisible relevante para el país' },
      { id: 'HP2', elementoId: 't3_cal', tipo: 'OBSERVABLE',
        descripcion: 'Aparición o incremento de eventos respiratorios graves inusitados en el Callao',
        indicador: 'Casos notificados de IRAG inusitada',
        fuente: 'DIRESA Callao – Boletín epidemiológico',
        periodicidad: 'Semanal',
        umbral: 'Supera la condición inusual según los criterios de vigilancia epidemiológica' },
      { id: 'HP3', elementoId: 'r2_cal', tipo: 'POTENCIAL',
        descripcion: 'Presión sobre la capacidad de atención por cuadros respiratorios graves',
        indicador: 'Hospitalizaciones y ocupación asociadas',
        fuente: 'DIRESA Callao / establecimientos de salud',
        periodicidad: 'Semanal',
        umbral: 'Supera la condición de presión sanitaria definida técnicamente' },
      { id: 'HP4', elementoId: 'r2_cal', tipo: 'POTENCIAL',
        descripcion: 'Transmisión local sostenida del nuevo agente',
        indicador: 'Casos confirmados con transmisión local',
        fuente: 'DIRESA Callao / CDC-MINSA',
        periodicidad: 'Ante confirmación',
        umbral: 'Confirmación oficial de casos y evidencia de transmisión local' }
    ]
  }
};

// ============ MOCK · Paso 2: búsqueda y captación (lo que tendría registrado el ONP) ============
/**
 * MOCK de lo que el ONP tendría registrado en la Fase 2 (ids de hecho = los de vigilancia-diseno.data.ts).
 * HP2 sigue el ejemplo del documento (Boletín epidemiológico DIRESA Callao, SE 11 y SE 13 de 2025).
 * HP4 no tiene perfil a propósito, para mostrar el estado "Perfil pendiente".
 * Los demás datos son ilustrativos.
 */
export const VIGILANCIA_CAPTACION: Record<string, CapturaTerritorio> = {
  'Callao': {
    perfiles: [
      {
        hechoId: 'HP1',
        modalidad: 'EXPLORATORIA',
        informacionRequerida: 'Comunicados o alertas oficiales sobre nuevos agentes respiratorios con potencial epidémico.',
        fuentes: [
          { nombre: 'Alertas epidemiológicas del CDC-MINSA', nivel: 'OFICIAL', principal: true },
          { nombre: 'OMS / OPS', nivel: 'OFICIAL', principal: false },
          { nombre: 'Publicaciones científicas sobre virus respiratorios emergentes', nivel: 'CIENTIFICA', principal: false },
          { nombre: 'Prensa especializada en salud', nivel: 'ABIERTA', principal: false }
        ],
        mecanismo: 'SEMIAUTOMATIZADA',
        terminos: ['nueva cepa', 'agente respiratorio emergente', 'alerta epidemiológica', 'OPS'],
        frecuencia: 'Ante nuevas alertas y revisión semanal',
        pertinencia: 'Debe identificar una amenaza con capacidad de transmisión y relevancia para el país. La prensa se corrobora con una fuente oficial.'
      },
      {
        hechoId: 'HP2',
        modalidad: 'DIRIGIDA',
        informacionRequerida: 'Casos de IRAG inusitada notificados en la semana epidemiológica y acumulados en el año, con su condición (confirmado, probable o descartado) cuando esté disponible.',
        fuentes: [
          { nombre: 'DIRESA Callao – Oficina de Epidemiología, Boletín Epidemiológico', nivel: 'OFICIAL', principal: true },
          { nombre: 'Sistema nacional de vigilancia epidemiológica', nivel: 'OFICIAL', principal: false }
        ],
        mecanismo: 'MANUAL',
        terminos: ['IRAG inusitada', 'infección respiratoria aguda grave inusitada', 'Callao', 'semana epidemiológica'],
        frecuencia: 'Semanal',
        pertinencia: 'Corresponde al Callao, al evento IRAG inusitada y al último corte disponible. Se verifica si incluye personas de otros ámbitos.'
      },
      {
        hechoId: 'HP3',
        modalidad: 'DIRIGIDA',
        informacionRequerida: 'Hospitalizaciones y ocupación de camas asociadas a cuadros respiratorios graves.',
        fuentes: [
          { nombre: 'DIRESA Callao / establecimientos de salud', nivel: 'OFICIAL', principal: true }
        ],
        mecanismo: 'MANUAL',
        terminos: ['hospitalizaciones respiratorias', 'ocupación de camas', 'Callao'],
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
        fuente: 'DIRESA Callao – Boletín Epidemiológico SE 11-2025',
        enlace: 'https://www.gob.pe/regioncallao',
        mecanismo: 'MANUAL', direccion: 'NEUTRA'
      },
      {
        id: 'ev-2', hechoId: 'HP2',
        fechaCaptacion: '2025-04-03', periodoReferencia: 'SE 13-2025',
        hallazgo: '48 casos acumulados de IRAG inusitada: 10 confirmados (21 %), 32 descartados (67 %) y 6 probables (13 %). En la SE 13 se notificaron 12 casos; en la misma semana de 2024 no hubo casos.',
        valorIndicador: '48 acumulados (12 en la semana)',
        fuente: 'DIRESA Callao – Boletín Epidemiológico SE 13-2025',
        enlace: 'https://www.gob.pe/regioncallao',
        mecanismo: 'MANUAL', direccion: 'CONSISTENTE'
      }
    ],
    senales: [
      {
        id: 'sh-1', fecha: '2025-04-05',
        titulo: 'Reportes de mayor ausentismo escolar por cuadros respiratorios en colegios del Callao',
        descripcion: 'Señal débil detectada fuera del diseño inicial; aún sin corroboración oficial.',
        fuente: 'Prensa local (ilustrativo)',
        estado: 'NUEVA'
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

  /** Diseño de vigilancia (hechos precursores) del territorio, si existe. */
  getDiseno(territorio: string): Observable<DisenoTerritorio | null> {
    return of(VIGILANCIA_DISENO[territorio] ?? null);
  }

  /** Fase 2: perfiles de búsqueda, evidencias captadas y señales del horizonte. Devuelve una copia editable. */
  getCaptacion(territorio: string): Observable<CapturaTerritorio | null> {
    const c = VIGILANCIA_CAPTACION[territorio];
    return of(c ? JSON.parse(JSON.stringify(c)) as CapturaTerritorio : null);
  }

  /** MOCK: no persiste. En producción sería un POST al módulo de vigilancia del ONP. */
  guardarEvidencia(territorio: string, evidencia: EvidenciaCaptada): Observable<EvidenciaCaptada> {
    return of(evidencia);
  }

  /** MOCK: no persiste. */
  guardarSenal(territorio: string, senal: SenalHorizonte): Observable<SenalHorizonte> {
    return of(senal);
  }
}
