export interface KitRecurso {
    id: string;
    titulo: string;
    ext: 'XLSX' | 'DOCX' | 'PPTX' | 'PDF';
    urlArchivo: string;
}

export interface RecursoUnificado {
    id: string;
    tipoRecurso: 'metodo' | 'kit';
    nombre: string;
    finalidad: string;
    imagen: string;
    producto?: string;
    etapa?: string[];
    subetapa?: string[];
    instrumento: string[];
    insumo?: string[];
    kit?: KitRecurso;
    extension?: string;
    version?: string;
    urlDescarga?: string;
    nombreArchivo?: string;
    ficha?: string;
}

export interface Metodo {
    num: string;
    nombre: string;
    finalidad: string;
    producto: string;
    etapa: string[];
    subetapa?: string[];
    instrumento: string[];
    insumo: string[];
    kit?: KitRecurso;
    ficha?: string;
}

export interface KitDescargable {
    nombre: string;
    finalidad: string;
    extension: string;
    tipo: string[];
    instrumento: string[];
    metodo: string[];
    version: string;
    actualizacion: string;
    urlDescarga: string;
    nombreArchivo?: string;
    etapa?: string[];
    subetapa?: string[];
    kit?: KitRecurso;
    ficha?: string;
}

export interface Glosario {
    termino: string;
    definicion: string;
}

export const RECURSOS_DATABASE = {
    metodos: [
        {
            num: "1",
            nombre: "Árbol de competencias de Marc Giget",
            finalidad: "Representa capacidades, funciones y servicios en el pasado, presente y futuro para obtener una radiografía integral de la organización.",
            producto: "Caracterización del objeto de estudio e identificación de riesgos y oportunidades.",
            etapa: ["Fase 1", "Fase 2"],
            subetapa: ["Caracterización", "Formulación de escenarios"],
            instrumento: ["PEI", "PDRC", "PN"],
            insumo: ["Evidencia", "Experticia", "Creatividad"],
            kit: { id: "m-1", titulo: "Plantilla Árbol de Competencias", ext: "PDF", urlArchivo: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/assets/guia-prospectiva-ceplan-2024.pdf#page=100" },
            ficha: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/method?id=arbol-competencias&fase=1&etapa=caracterizacion"
        },
        {
            num: "2",
            nombre: "Mapas parlantes",
            finalidad: "Recoge gráficamente las percepciones de la población sobre un territorio y permite representar su situación actual y futura.",
            producto: "Modelos cartográficos actuales, futuros o del futuro deseado.",
            etapa: ["Fase 1", "Fase 2", "Fase 3"],
            subetapa: ["Caracterización", "Formulación de escenarios", "Definición del futuro deseado"],
            instrumento: ["PDLC", "PDRC"],
            insumo: ["Participación", "Evidencia", "Creatividad"],
            kit: { id: "m-2", titulo: "Guía y formato de Mapas Parlantes", ext: "PDF", urlArchivo: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/assets/guia-prospectiva-ceplan-2024.pdf#page=115" },
            ficha: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/method?id=mapa-parlante&fase=1&etapa=caracterizacion"
        },
        {
            num: "3",
            nombre: "Árbol de problemas",
            finalidad: "Organiza un problema público mediante sus causas y efectos, y hace visible la lógica que justifica la intervención del Estado.",
            producto: "Árbol y modelo del problema público.",
            etapa: ["Fase 1"],
            subetapa: ["Caracterización", "Diagnóstico"],
            instrumento: ["PN", "PDLC", "PDRC", "PEI"],
            insumo: ["Evidencia", "Participación"],
            kit: { id: "m-3", titulo: "Guía y formato de Mapas Parlantes", ext: "PDF", urlArchivo: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/assets/guia-prospectiva-ceplan-2024.pdf#page=122" },
            ficha: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/method?id=arbol-problemas&fase=1&etapa=caracterizacion"
        },
        {
            num: "4",
            nombre: "Análisis estructural",
            finalidad: "Mapea las relaciones de influencia y dependencia entre variables para reconocer cuáles estructuran el sistema.",
            producto: "Variables estratégicas clasificadas y propuestas estratégicas.",
            etapa: ["Fase 1", "Fase 2"],
            subetapa: ["Diagnóstico", "Opciones estratégicas"],
            instrumento: ["PDRC", "PESEM", "PN"],
            insumo: ["Evidencia", "Experticia"],
            kit: { id: "m-4", titulo: "Guía y formato de Mapas Parlantes", ext: "PDF", urlArchivo: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/assets/guia-prospectiva-ceplan-2024.pdf#page=133" },
            ficha: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/method?id=analisis-estructural&fase=1&etapa=diagnostico"
        },
        {
            num: "5",
            nombre: "Análisis de juego de actores",
            finalidad: "Examina relaciones de poder, coincidencias y conflictos para anticipar alianzas y resistencias entre actores.",
            producto: "Matrices de actores, objetivos e influencias; selección de opciones.",
            etapa: ["Fase 1", "Fase 2"],
            subetapa: ["Diagnóstico", "Opciones estratégicas"],
            instrumento: ["PEI", "PDLC", "PDRC", "PESEM", "PN"],
            insumo: ["Participación", "Experticia", "Evidencia"],
            kit: { id: "m-5", titulo: "Guía y formato de Mapas Parlantes", ext: "PDF", urlArchivo: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/assets/guia-prospectiva-ceplan-2024.pdf#page=149" },
            ficha: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/method?id=juego-actores&fase=1&etapa=diagnostico"
        },
        {
            num: "6",
            nombre: "Dinámica de sistemas",
            finalidad: "Modela cómo interactúan los componentes de un sistema a lo largo del tiempo y permite simular distintos comportamientos.",
            producto: "Modelo causal, proyecciones, escenarios y opciones.",
            etapa: ["Fase 1", "Fase 2", "Fase 3"],
            subetapa: ["Diagnóstico", "Formulación de escenarios", "Opciones estratégicas", "Definición del futuro deseado"],
            instrumento: ["PESEM", "PN", "PEI"],
            insumo: ["Evidencia", "Experticia"],
            kit: { id: "m-6", titulo: "Guía y formato de Mapas Parlantes", ext: "PDF", urlArchivo: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/assets/guia-prospectiva-ceplan-2024.pdf#page=163" },
            ficha: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/method?id=dinamica-sistemas&fase=1&etapa=diagnostico"
        },
        {
            num: "7",
            nombre: "Ábaco de Regnier",
            finalidad: "Convierte la opinión de expertos en una escala de colores para hacer visibles consensos, desacuerdos y dudas.",
            producto: "Selección de variables, tendencias, opciones o acuerdos.",
            etapa: ["Fase 1", "Fase 2", "Fase 3"],
            subetapa: ["Diagnóstico", "Formulación de escenarios", "Opciones estratégicas", "Definición del futuro deseado"],
            instrumento: ["PEI", "PDLC", "PDRC", "PESEM", "PN"],
            insumo: ["Participación", "Experticia"],
            kit: { id: "m-7", titulo: "Guía y formato de Mapas Parlantes", ext: "PDF", urlArchivo: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/assets/guia-prospectiva-ceplan-2024.pdf#page=172" },
            ficha: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/method?id=abaco-regnier&fase=1&etapa=diagnostico"
        },
        {
            num: "8",
            nombre: "Análisis causal estratificado (CLA)",
            finalidad: "Profundiza un problema en capas —hechos, causas, discursos y metáforas— para revelar supuestos y significados subyacentes.",
            producto: "Deconstrucción del objeto de estudio y consenso sobre el futuro.",
            etapa: ["Fase 1", "Fase 3"],
            subetapa: ["Diagnóstico", "Definición del futuro deseado"],
            instrumento: ["PDRC", "PN"],
            insumo: ["Participación", "Creatividad", "Experticia"],
            kit: { id: "m-8", titulo: "Guía y formato de Mapas Parlantes", ext: "PDF", urlArchivo: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/assets/guia-prospectiva-ceplan-2024.pdf#page=182" },
            ficha: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/method?id=causal-estratificado&fase=1&etapa=diagnostico"
        },
        {
            num: "9",
            nombre: "FODA prospectivo",
            finalidad: "Amplía el FODA tradicional al examinar cómo fortalezas, debilidades, oportunidades y amenazas pueden evolucionar en el tiempo.",
            producto: "Matriz FODA prospectiva y propuestas de opciones estratégicas.",
            etapa: ["Fase 1", "Fase 2"],
            subetapa: ["Diagnóstico", "Formulación de escenarios", "Opciones estratégicas"],
            instrumento: ["PEI", "PDLC", "PDRC", "PESEM", "PN"],
            insumo: ["Evidencia", "Creatividad", "Participación"],
            kit: { id: "m-9", titulo: "Guía y formato de Mapas Parlantes", ext: "PDF", urlArchivo: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/assets/guia-prospectiva-ceplan-2024.pdf#page=189" },
            ficha: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/method?id=foda-prospectivo&fase=1&etapa=diagnostico"
        },
        {
            num: "10",
            nombre: "Matriz de importancia y gobernabilidad (IGO)",
            finalidad: "Prioriza variables u opciones según su importancia para el sistema y la capacidad de los actores para controlarlas.",
            producto: "Variables u opciones categorizadas y priorizadas.",
            etapa: ["Fase 1", "Fase 2"],
            subetapa: ["Diagnóstico", "Opciones estratégicas"],
            instrumento: ["PEI", "PDLC", "PDRC", "PESEM", "PN"],
            insumo: ["Experticia", "Participación"],
            kit: { id: "m-10", titulo: "Guía y formato de Mapas Parlantes", ext: "PDF", urlArchivo: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/assets/guia-prospectiva-ceplan-2024.pdf#page=200" },
            ficha: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/method?id=matriz-igo&fase=1&etapa=diagnostico"
        },
        {
            num: "11",
            nombre: "Pensamiento de diseño",
            finalidad: "Sitúa a las personas usuarias en el centro para comprender problemas, idear soluciones, prototiparlas y probarlas.",
            producto: "Necesidades, problemas, ideas y propuestas de mejora o innovación.",
            etapa: ["Fase 1", "Fase 2"],
            subetapa: ["Diagnóstico", "Opciones estratégicas"],
            instrumento: ["PEI", "PDLC", "PN"],
            insumo: ["Participación", "Creatividad"],
            kit: { id: "m-11", titulo: "Guía y formato de Mapas Parlantes", ext: "PDF", urlArchivo: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/assets/guia-prospectiva-ceplan-2024.pdf#page=210" },
            ficha: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/method?id=pensamiento-diseno&fase=1&etapa=diagnostico"
        },
        {
            num: "12",
            nombre: "Escaneo del horizonte",
            finalidad: "Explora sistemáticamente el entorno para detectar tendencias, riesgos, oportunidades y eventos disruptivos poco visibles.",
            producto: "Listado y evaluación de eventos de futuro.",
            etapa: ["Fase 2"],
            subetapa: ["Diagnóstico", "Formulación de escenarios", "Opciones estratégicas"],
            instrumento: ["PEI", "PDLC", "PDRC", "PESEM", "PN"],
            insumo: ["Evidencia", "Experticia"],
            kit: { id: "m-12", titulo: "Guía y formato de Mapas Parlantes", ext: "PDF", urlArchivo: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/assets/guia-prospectiva-ceplan-2024.pdf#page=218" },
            ficha: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/method?id=escaneo-horizonte&fase=2&etapa=escenarios"
        },
        {
            num: "13",
            nombre: "Rueda de futuros",
            finalidad: "Expande un cambio o evento en consecuencias de primer, segundo y tercer orden a corto, mediano y largo plazo.",
            producto: "Diagrama de impactos y propuestas de respuesta.",
            etapa: ["Fase 2"],
            subetapa: ["Formulación de escenarios"],
            instrumento: ["PDLC", "PDRC", "PESEM", "PN"],
            insumo: ["Creatividad", "Participación"],
            kit: { id: "m-13", titulo: "Guía y formato de Mapas Parlantes", ext: "PDF", urlArchivo: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/assets/guia-prospectiva-ceplan-2024.pdf#page=232" },
            ficha: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/method?id=rueda-futuros&fase=2&etapa=escenarios"
        },
        {
            num: "14",
            nombre: "Ejes de Peter Schwartz",
            finalidad: "Combina dos incertidumbres críticas para construir cuatro escenarios contrastantes y orientar la elección estratégica.",
            producto: "Narrativas de escenarios alternativos.",
            etapa: ["Fase 2", "Fase 3"],
            subetapa: ["Formulación de escenarios", "Definición del futuro deseado"],
            instrumento: ["PEI", "PDRC", "PN"],
            insumo: ["Creatividad", "Experticia", "Participación"],
            kit: { id: "m-14", titulo: "Guía y formato de Mapas Parlantes", ext: "PDF", urlArchivo: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/assets/guia-prospectiva-ceplan-2024.pdf#page=240" },
            ficha: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/method?id=ejes-schwartz&fase=2&etapa=escenarios"
        },
        {
            num: "15",
            nombre: "Análisis morfológico",
            finalidad: "Explora el espacio de futuros combinando hipótesis alternativas de las variables y sus probabilidades de ocurrencia.",
            producto: "Espacio morfológico y escenarios posibles o preferidos.",
            etapa: ["Fase 2"],
            subetapa: ["Formulación de escenarios"],
            instrumento: ["PESEM", "PN", "PDRC"],
            insumo: ["Creatividad", "Experticia"],
            kit: { id: "m-15", titulo: "Guía y formato de Mapas Parlantes", ext: "PDF", urlArchivo: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/assets/guia-prospectiva-ceplan-2024.pdf#page=257" },
            ficha: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/method?id=analisis-morfologico&fase=2&etapa=escenarios"
        },
        {
            num: "16",
            nombre: "Impactos Cruzados Probabilísticos",
            finalidad: "Ajusta probabilidades de hipótesis al considerar cómo la ocurrencia de una influye sobre las demás.",
            producto: "Escenarios y estimación de probabilidades.",
            etapa: ["Fase 2", "Fase 3"],
            subetapa: ["Formulación de escenarios", "Definición del futuro deseado"],
            instrumento: ["PESEM", "PN", "PDRC"],
            insumo: ["Evidencia", "Experticia"],
            kit: { id: "m-16", titulo: "Guía y formato de Mapas Parlantes", ext: "PDF", urlArchivo: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/assets/guia-prospectiva-ceplan-2024.pdf#page=274" },
            ficha: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/method?id=impactos-cruzados&fase=2&etapa=escenarios"
        },
        {
            num: "17",
            nombre: "Delphi",
            finalidad: "Consulta a expertos en rondas sucesivas y anónimas para revelar convergencias, disensos y argumentos sobre el futuro.",
            producto: "Valoraciones, consensos y estimaciones sobre eventos o variables.",
            etapa: ["Fase 2", "Fase 3"],
            subetapa: ["Formulación de escenarios", "Definición del futuro deseado"],
            instrumento: ["PESEM", "PN", "PDRC"],
            insumo: ["Experticia"],
            kit: { id: "m-17", titulo: "Guía y formato de Mapas Parlantes", ext: "PDF", urlArchivo: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/assets/guia-prospectiva-ceplan-2024.pdf#page=283" },
            ficha: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/method?id=delphi&fase=2&etapa=escenarios"
        },
        {
            num: "18",
            nombre: "Backcasting",
            finalidad: "Parte de un futuro deseado y retrocede hasta el presente para identificar hitos, decisiones y rutas necesarias para alcanzarlo.",
            producto: "Narrativa del futuro deseado y secuencia retrospectiva de acciones.",
            etapa: ["Fase 2", "Fase 3"],
            subetapa: ["Formulación de escenarios", "Opciones estratégicas", "Definición del futuro deseado"],
            instrumento: ["PEI", "PDLC", "PDRC", "PESEM", "PN"],
            insumo: ["Creatividad", "Participación", "Experticia"],
            kit: { id: "m-18", titulo: "Guía y formato de Mapas Parlantes", ext: "PDF", urlArchivo: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/assets/guia-prospectiva-ceplan-2024.pdf#page=294" },
            ficha: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/method?id=backcasting&fase=2&etapa=escenarios"
        },
        {
            num: "19",
            nombre: "Hoja de ruta",
            finalidad: "Ordena en el tiempo estrategias, hitos y relaciones entre iniciativas para avanzar hacia una meta compartida.",
            producto: "Ruta central con hitos, decisiones y opciones estratégicas.",
            etapa: ["Fase 2", "Fase 3"],
            subetapa: ["Opciones estratégicas", "Definición del futuro deseado"],
            instrumento: ["PEI", "PDRC", "PESEM", "PN"],
            insumo: ["Experticia", "Creatividad", "Evidencia"],
            kit: { id: "m-19", titulo: "Guía y formato de Mapas Parlantes", ext: "PDF", urlArchivo: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/assets/guia-prospectiva-ceplan-2024.pdf#page=306" },
            ficha: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/method?id=hoja-ruta&fase=3"
        }
    ] as Metodo[],
    kits: [
        // {
        //     nombre: "Sistemas de información geográficos (SIG)",
        //     finalidad: "Integra y representa datos georreferenciados para analizar la situación territorial actual, escenarios y futuro deseado.",
        //     etapa: ["Fase 1","Fase 2", "Fase 3"],
        //     subetapa: ["Caracterización", "Formulación de escenarios", "Definición del futuro deseado"],
        //     kit: { id: "kit-1", titulo: "Guía y formato de Mapas Parlantes", ext: "PDF", urlArchivo: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/assets/guia-prospectiva-ceplan-2024.pdf#page=313" },
        //     ficha: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/method?id=sig&fase=1"
        // },
        // {
        //     nombre: "Talleres de prospectiva",
        //     finalidad: "Crea espacios estructurados de diálogo para generar ideas, compartir conocimiento y construir decisiones de manera colectiva.",
        //     etapa: ["Fase 1","Fase 2", "Fase 3"],
        //     subetapa: ["Caracterización", "Diagnóstico", "Opciones estratégicas", "Formulación de escenarios", "Definición del futuro deseado"],
        //     kit: { id: "kit-2", titulo: "Guía y formato de Mapas Parlantes", ext: "PDF", urlArchivo: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/assets/guia-prospectiva-ceplan-2024.pdf#page=322" },
        //     ficha: "https://metodos-prospectivos-ceplan.ceplan-ia-2815.chatgpt.site/method?id=talleres&fase=3&etapa=futuro"
        // },
        // {
        //     nombre: "Formato para escaneo del horizonte",
        //     finalidad: "Matriz para registrar señales, tendencias, riesgos, oportunidades y disrupciones.",
        //     extension: "XLSX",
        //     tipo: ["Hoja de cálculo"],
        //     instrumento: ["Todos"],
        //     metodo: ["Escaneo del horizonte"],
        //     version: "0.1 demo",
        //     actualizacion: "30/07/2026",
        //     urlDescarga: "#",
        //     nombreArchivo: "kit-horizonte"
        // },
        // {
        //     nombre: "Matriz para análisis de actores",
        //     finalidad: "Formato para objetivos, intereses, influencia y relaciones entre actores.",
        //     extension: "XLSX",
        //     tipo: ["Hoja de cálculo"],
        //     instrumento: ["Todos"],
        //     metodo: ["Análisis de juego de actores"],
        //     version: "0.1 demo",
        //     actualizacion: "30/07/2026",
        //     urlDescarga: "#",
        //     nombreArchivo: "kit-actores"
        // },
        // {
        //     nombre: "Guion para taller de escenarios",
        //     finalidad: "Secuencia orientadora para preparar, facilitar y sistematizar un taller.",
        //     extension: "DOCX",
        //     tipo: ["Documento"],
        //     instrumento: ["Todos"],
        //     metodo: ["Ejes de Peter Schwartz"],
        //     version: "0.1 demo",
        //     actualizacion: "30/07/2026",
        //     urlDescarga: "#",
        //     nombreArchivo: "kit-escenarios"
        // },
        // {
        //     nombre: "Matriz de importancia y gobernabilidad",
        //     finalidad: "Plantilla para valorar y clasificar variables u opciones.",
        //     extension: "XLSX",
        //     tipo: ["Hoja de cálculo"],
        //     instrumento: ["Todos"],
        //     metodo: ["Matriz de importancia y gobernabilidad (IGO)"],
        //     version: "0.1 demo",
        //     actualizacion: "30/07/2026",
        //     urlDescarga: "#",
        //     nombreArchivo: "kit-igo"
        // },
        // {
        //     nombre: "Plantilla de backcasting",
        //     finalidad: "Formato para trabajar desde el futuro deseado hacia hitos y acciones presentes.",
        //     extension: "DOCX",
        //     tipo: ["Documento"],
        //     instrumento: ["Todos"],
        //     metodo: ["Backcasting"],
        //     version: "0.1 demo",
        //     actualizacion: "30/07/2026",
        //     urlDescarga: "#",
        //     nombreArchivo: "kit-backcasting"
        // },
        // {
        //     nombre: "Lienzo de hoja de ruta",
        //     finalidad: "Lienzo visual para articular hitos, capacidades, decisiones y responsables.",
        //     extension: "PPTX",
        //     tipo: ["Presentación"],
        //     instrumento: ["PEI", "PDRC", "PESEM", "PN"],
        //     metodo: ["Hoja de ruta"],
        //     version: "0.1 demo",
        //     actualizacion: "30/07/2026",
        //     urlDescarga: "#",
        //     nombreArchivo: "kit-hoja"
        // },
        // {
        //     nombre: "Lista de verificación para talleres",
        //     finalidad: "Revisión de convocatoria, accesibilidad, materiales, facilitación y registro.",
        //     extension: "PDF",
        //     tipo: ["Lista de verificación"],
        //     instrumento: ["Todos"],
        //     metodo: ["Talleres"],
        //     version: "0.1 demo",
        //     actualizacion: "30/07/2026",
        //     urlDescarga: "#",
        //     nombreArchivo: "kit-taller"
        // },
        // {
        //     nombre: "Ficha de sistematización de resultados",
        //     finalidad: "Estructura para registrar acuerdos, disensos, evidencias y productos de una sesión.",
        //     extension: "DOCX",
        //     tipo: ["Documento"],
        //     instrumento: ["Todos"],
        //     metodo: ["Talleres"],
        //     version: "0.1 demo",
        //     actualizacion: "30/07/2026",
        //     urlDescarga: "#",
        //     nombreArchivo: "kit-sistematizacion"
        // }
    ] as KitDescargable[],
    glosario: [
        {
            termino: "Anticipación estratégica",
            definicion: "Capacidad de reconocer cambios e incertidumbres y utilizarlos para mejorar decisiones presentes."
        },
        {
            termino: "Escenario",
            definicion: "Descripción coherente de una situación futura posible, construida a partir de fuerzas de cambio e incertidumbres."
        },
        {
            termino: "Estudios de futuros",
            definicion: "Campo interdisciplinario que explora y analiza futuros posibles, probables y deseables."
        },
        {
            termino: "Evidencia",
            definicion: "Información cuantitativa o cualitativa que sustenta el análisis y permite contrastar supuestos."
        },
        {
            termino: "Experticia",
            definicion: "Conocimiento especializado aportado por personas con experiencia relevante en un tema o sistema."
        },
        {
            termino: "Futuro deseado",
            definicion: "Estado futuro que una sociedad, sector, territorio o institución considera valioso y factible orientar."
        },
        {
            termino: "Incertidumbre crítica",
            definicion: "Factor de alto impacto cuyo comportamiento futuro no puede anticiparse con suficiente certeza."
        },
        {
            termino: "Método prospectivo",
            definicion: "Procedimiento estructurado que apoya una tarea del proceso, como identificar tendencias o construir escenarios."
        },
        {
            termino: "Prospectiva",
            definicion: "Proceso sistemático y participativo para explorar futuros y fortalecer la toma de decisiones."
        },
        {
            termino: "Ruta metodológica",
            definicion: "Secuencia orientadora de métodos que puede adaptarse según el instrumento, la evidencia y la participación disponible."
        },
        {
            termino: "Señal débil",
            definicion: "Indicio temprano de un cambio emergente que todavía tiene baja visibilidad o evidencia limitada."
        },
        {
            termino: "SINAPLAN",
            definicion: "Sistema Nacional de Planeamiento Estratégico."
        },
        {
            termino: "Tendencia",
            definicion: "Patrón de cambio sustained que puede influir en el objeto de estudio durante el horizonte analizado."
        }
    ] as Glosario[]
};