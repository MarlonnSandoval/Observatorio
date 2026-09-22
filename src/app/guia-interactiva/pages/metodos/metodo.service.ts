import { Injectable } from '@angular/core';

export interface PasoMetodo {
  numero: number;
  titulo: string;
  descripcion: string;
}

export interface FichaMetodo {
  num: string;
  nombre: string;
  fase: string;
  subetapa?: string;
  aplicacion: {
    caracteristicas: string;
    fasesAplicacion: string[];
    nivelParticipacion: string;
    dificultad: string;
    recursosPresenciales: string[];
    recursosVirtuales: string[];
  };
  definicion: string;
  herramientas: string[];
  pasos: PasoMetodo[];
  ventajas: string[];
  desventajas: { riesgo: string; recomendacion: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class MetodosService {

  getMetodoByNum(num: string): FichaMetodo | undefined {
    // Si la consulta es para el Árbol de Problemas (id / num = "3")
    if (num === '3' || num === 'arbol-de-problemas') {
      return {
        num: '3',
        nombre: 'Árbol de Problemas',
        fase: 'Fase 1. Análisis de la situación actual',
        subetapa: 'Caracterización y Diagnóstico',
        aplicacion: {
          caracteristicas: 'Método semicuantitativo de identificación participativa y estructuración de problemas públicos.',
          fasesAplicacion: [
            'Fase 1: Caracterización y Diagnóstico (Determinación y modelo del problema público)'
          ],
          nivelParticipacion: 'Tomadores de decisión, grupo de trabajo y otros miembros del ente público (con apoyo de expertos).',
          dificultad: 'Intermedio',
          recursosPresenciales: ['Pizarra', 'Tarjetas de cartulina', 'Papelógrafo', 'Notas adhesivas', 'Tiza o plumones'],
          recursosVirtuales: ['Plataforma de reuniones virtuales', 'Hoja de MS Excel']
        },
        definicion: 'El árbol de problemas es una herramienta que pertenece a la metodología del marco lógico, empleada como un método participativo para la identificación de una situación problemática que experimenta un grupo de población y que se desea resolver mediante la intervención del Estado. Permite resumir de manera gráfica el análisis de un problema sustentado en información diagnóstica, integrando dos partes principales: el árbol de causas y el árbol de efectos.',
        herramientas: [
          'Matriz / Diagrama de Árbol de Causas y Efectos',
          'Técnicas de Lluvia de Ideas participativa y consulta a expertos',
          'Análisis Documental y Diagnóstico Cuantitativo/Cualitativo',
          'Verificación de Lógica Vertical (Causalidad de abajo hacia arriba)'
        ],
        pasos: [
          {
            numero: 1,
            titulo: 'Paso 1: Identificación del problema',
            descripcion: 'Reconocer el problema principal que justifica la intervención pública. Se establecen tres elementos clave: 1) Necesidad por satisfacer o problema principal (expresado como carencia, necesidad, oportunidad de mejora o riesgo a mitigar); 2) Magnitud del problema (evidencia cuantitativa y cualitativa sobre gravedad, alcance, urgencia y oportunidad); 3) Población afectada (delimitar quiénes directa/indirectamente y cuántos son afectados).'
          },
          {
            numero: 2,
            titulo: 'Paso 2: Planteamiento del problema',
            descripcion: 'Generar una lluvia de ideas participativa con un grupo multidisciplinario sobre situaciones negativas reales (no potenciales) que afectan al sector. Reglas: expresarlo como estado negativo, no confundir con falta de medios, delimitar el área de enfoque y sustentarlo ampliamente con diagnósticos y estadísticas.'
          },
          {
            numero: 3,
            titulo: 'Paso 3: Construcción del árbol de problemas',
            descripcion: 'Se conjugan dos partes: a) Árbol de Causas: ubicar el problema al centro y definir de abajo hacia arriba las condiciones negativas que le dan origen (máximo 3 niveles); b) Árbol de Efectos: definir en la parte superior las consecuencias o resultados negativos si el problema persiste (máximo 3 niveles y macroefectos); c) Árbol de Problemas: integrar ambos mapas en un modelo causal completo.'
          },
          {
            numero: 4,
            titulo: 'Paso 4: Validación del árbol de problemas',
            descripcion: 'Revisión participativa y socialización con los actores involucrados y el equipo técnico. Se verifica la consistencia de la lógica vertical (leer de abajo hacia arriba) y la integridad de causas/efectos. Se reestructura de forma iterativa hasta contar con la conformidad metodológica (p. ej., validación de Ceplan).'
          }
        ],
        ventajas: [
          'Visualización clara y lógica de la interrelación entre causas y efectos.',
          'Promueve la participación y entendimiento compartido entre actores con experiencia.',
          'Permite focalizar la intervención pública en un problema específico.',
          'Facilita la transición hacia la planificación estratégica.'
        ],
        desventajas: [
          {
            riesgo: 'Riesgo de definir el problema como una "falta de solución" o sesgo de participantes.',
            recomendacion: 'Realizar análisis documental exhaustivo de necesidades e integrar múltiples actores.'
          },
          {
            riesgo: 'Confusión entre causas y efectos, o análisis lineal que limita el enfoque sistémico.',
            recomendacion: 'Capacitar en diferenciación causal, revisar la lógica vertical e integrar enfoques sistémicos.'
          }
        ]
      };
    }
    return undefined;
  }
}