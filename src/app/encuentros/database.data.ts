// Datos de ejemplos

export interface Actualidad {
    titulo: string;
    institucion: string;
    anio: string;
    tipo: string;
    tema: string;
    observaciones: string;
    url: string;
    img:string;
}

export interface ActualidadDatabase {
    actualidad: Actualidad[];
}

export const ACTUALIDAD_DATABASE: ActualidadDatabase =
{
    actualidad: [
        {
            "titulo": "Conferencia Magistral 'Horizontes 2050: El mundo se enfrenta a sus límites'",
            "institucion": "Javier Barros Sierra",
            "anio": "2026",
            "tipo": "Documento técnico",
            "tema": "Metodologías de evaluación y prospectiva",
            "observaciones": "La Fundación Javier Barros Sierra extiende una cordial invitación a la Conferencia Magistral a cargo de François de Jouvenel, Director de Futuribles, Redactor en Jefe del Informe Vigía, Director Editorial de Futuribles y Delegado General de Futuribles International",
            "url":"https://observatorio.ceplan.gob.pe/encuentro/en_743",
            "img":"https://observatorio.ceplan.gob.pe/uploads/wFUD0ih9Zv1n4xWnw7BCZUW8.png"
        },
        {
            "titulo": "Prospectivas de la Educación Superior: Experiencias, prácticas y cultura futurista en las IES",
            "institucion": "Global Rectoral Board",
            "anio": "2026",
            "tipo": "Informe",
            "tema": "Riesgos comerciales y dependencia económica regional",
            "observaciones": "Con el fin de facilitar el acceso a nivel internacional, los organizadores han dispuesto que todas las jornadas se lleven a cabo en vivo por Zoom.",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/692",
            "img":"https://observatorio.ceplan.gob.pe/uploads/nGNh466OIrSERYY7qWYAuX8r.jfif"
        },
        {
            "titulo": "CEPAL presenta el Estudio Económico de América Latina y el Caribe 2026",
            "institucion": "Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (UNESCO)",
            "anio": "2026",
            "tipo": "Informe",
            "tema": "Educación, acceso y equidad (ODS 4)",
            "observaciones": "Informe oficial de seguimiento del ODS 4, con análisis estadístico y 35 estudios de caso nacionales",
            "url": "https://observatorio.ceplan.gob.pe/encuentro/en_741",
            "img":"https://observatorio.ceplan.gob.pe/uploads/P_c8NS0z-YfW2NlT9Jw0TJk8.png"
        },
        {
            "titulo": "Diálogo prospectivo entre bloques regionales para construir los futuros compartidos al 2050: Acuerdo Unión Europea – MERCOSUR",
            "institucion": "Red de Integración Regional del Cono Sur de Innovación, Prospectiva y Estudios de Futuros",
            "anio": "2026",
            "tipo": "Informe",
            "tema": "Inversión extranjera directa (IED) y geopolítica económica",
            "observaciones": "Informe oficial de UNCTAD sobre tendencias globales de IED",
            "url": "https://observatorio.ceplan.gob.pe/encuentro/en_740",
            "img":"https://observatorio.ceplan.gob.pe/uploads/fO0cKVwxZarp5mXD-DHNEryT.jpg"
        },
        {
            "titulo": "Educación y Competencias en Perú",
            "institucion": "Organización para la Cooperación y el Desarrollo Económicos (OCDE)",
            "anio": "2026",
            "tipo": "Informe",
            "tema": "Sistema educativo y competencias en Perú",
            "observaciones": "Informe elaborado en el marco del proceso de adhesión del Perú a la OCDE; evalúa políticas educativas a lo largo del ciclo de aprendizaje",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/651",
            "img":"https://observatorio.ceplan.gob.pe/uploads/Tjojnnkg6HirJqp_ol8L4Yqg.png"
        },
        {
            "titulo": "El estado mundial de la pesca y la acuicultura 2026: Transformación azul, de la visión a la repercusión",
            "institucion": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO)",
            "anio": "2026",
            "tipo": "Informe",
            "tema": "Pesca, acuicultura y sostenibilidad de recursos marinos",
            "observaciones": "Versión resumida del informe bienal de la FAO (\"Transformación azul: de la visión a la repercusión\"), de carácter estadístico, analítico y prospectivo",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/705",
            "img":"https://observatorio.ceplan.gob.pe/uploads/mRs0_NDGVPNbdontWU6lm0eK.png"
        },
        {
            "titulo": "Estimaciones de las tendencias comerciales: América Latina y el Caribe",
            "institucion": "Banco Interamericano de Desarrollo (BID)",
            "anio": "2026",
            "tipo": "Informe",
            "tema": "Comercio exterior y tendencias de exportación/importación regional",
            "observaciones": "Actualización trimestral (T1 2026) del informe periódico del BID sobre comercio regional",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/694",
            "img":""
        },
        {
            "titulo": "Inteligencia de futuros: acortando la brecha entre el conocimiento y las decisiones orientadas al futuro",
            "institucion": "Futures Platform (autores: Tuomo Kuosa y Marianna Mäki-Teeri)",
            "anio": "2026",
            "tipo": "Documento técnico",
            "tema": "Metodologías de prospectiva y toma de decisiones estratégicas",
            "observaciones": "El propio documento se autodenomina \"documento técnico\"; propone el concepto de Futures Intelligence",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/648",
            "img":""
        },
        {
            "titulo": "Más allá de la conciencia: Los juegos climáticos como invitaciones a cuidar el futuro",
            "institucion": "Revista Futures, Elsevier (autores: Carien Moossdorff y Joost M. Vervoort)",
            "anio": "2026",
            "tipo": "Publicación científica",
            "tema": "Cambio climático, ética del cuidado y diseño de juegos",
            "observaciones": "Artículo académico revisado por pares, publicado en la revista científica Futures",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/626",
            "img":""
        },
        {
            "titulo": "Las aceleradoras agroindustriales como vía para ampliar la innovación agrícola",
            "institucion": "Grupo Banco Mundial (blog especializado en agricultura y agronegocios)",
            "anio": "2026",
            "tipo": "Documento técnico",
            "tema": "Innovación agrícola, agronegocios y desarrollo rural en África",
            "observaciones": "Artículo publicado en el blog especializado del Banco Mundial sobre la iniciativa AgriConnect (casos de Ghana y Zambia)",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/664",
            "img":""
        },
        {
            "titulo": "Más allá del mañana: cuatro escenarios para el mundo de 2050",
            "institucion": "BCG Henderson Institute",
            "anio": "2026",
            "tipo": "Informe",
            "tema": "Prospectiva estratégica global y escenarios de futuro a 2050",
            "observaciones": "Informe prospectivo basado en análisis cuantitativo de megatendencias y entrevistas a expertos globales",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/678",
            "img":""
        },
        {
            "titulo": "Our World of Futures Studies as a Mosaic 2 (Futures Series 11)",
            "institucion": "Finnish Society for Futures Studies (Tulevaisuuden tutkimuksen seura ry)",
            "anio": "2026",
            "tipo": "Libro",
            "tema": "Estudios de futuros y prospectiva desde perspectivas regionales y culturales globales",
            "observaciones": "Volumen editado con 12 capítulos de cinco continentes; segunda parte de la serie \"mosaico\"; cuenta con ISBN/ISSN propio",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/709",
            "img":""
        },
        {
            "titulo": "OECD Compendium of Productivity Indicators 2026",
            "institucion": "Organización para la Cooperación y el Desarrollo Económicos (OCDE)",
            "anio": "2026",
            "tipo": "Compendio",
            "tema": "Tendencias de productividad, crecimiento económico y medición de la productividad ambiental",
            "observaciones": "El propio título del documento lo define como \"Compendium\" (compendio) de indicadores",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/704",
            "img":""
        },
        {
            "titulo": "Losing the War of the Future: How New Technologies Threaten America's Military Advantage",
            "institucion": "Foreign Affairs (autor: Paul Scharre, Center for a New American Security)",
            "anio": "2026",
            "tipo": "Documento técnico",
            "tema": "Tecnología militar, competencia geopolítica EE.UU.-China e inteligencia artificial aplicada a defensa",
            "observaciones": "Artículo de análisis publicado en la revista de política exterior Foreign Affairs, escrito por un experto de un centro de estudios (CNAS)",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/703",
            "img":""
        },
        {
            "titulo": "Top 10 Emerging Technologies of 2026",
            "institucion": "Foro Económico Mundial (World Economic Forum), en colaboración con Frontiers",
            "anio": "2026",
            "tipo": "Informe",
            "tema": "Tecnologías emergentes en energía, materiales, salud y computación",
            "observaciones": "14.ª edición de este informe anual; incluye análisis científico y una perspectiva estratégica elaborada con la Dubai Future Foundation",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/702",
            "img":""
        },
        {
            "titulo": "Digital Government Outlook 2026: From Foundations to Transformational Impact",
            "institucion": "Organización para la Cooperación y el Desarrollo Económicos (OCDE)",
            "anio": "2026",
            "tipo": "Informe",
            "tema": "Gobierno digital y transformación digital del sector público",
            "observaciones": "Evaluación integral de 36 países miembros de la OCDE y 8 candidatos a la adhesión, basada en el Digital Government Index (DGI) y el OURdata Index 2025",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/701",
            "img":""
        },
        {
            "titulo": "Financiamiento inclusivo e innovador al servicio del desarrollo local en la Amazonía",
            "institucion": "Banco Interamericano de Desarrollo (BID) — Blog de Análisis Económico",
            "anio": "2026",
            "tipo": "Documento técnico",
            "tema": "Financiamiento inclusivo e innovador para el desarrollo sostenible en la Amazonía",
            "observaciones": "Artículo publicado en el blog de análisis económico del BID sobre innovación, inversión y colaboración público-privada en la Amazonía",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/700",
            "img":""
        },
        {
            "titulo": "Estimaciones de las tendencias comerciales: América Latina y el Caribe (edición 2026, actualización 1T)",
            "institucion": "Banco Interamericano de Desarrollo (BID)",
            "anio": "2026",
            "tipo": "Informe",
            "tema": "Comercio exterior y tendencias de exportación/importación regional",
            "observaciones": "Actualización correspondiente al primer trimestre de 2026 del informe periódico del BID sobre comercio regional",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/694",
            "img":""
        },
        {
            "titulo": "World Competitiveness Ranking 2026",
            "institucion": "IMD World Competitiveness Center",
            "anio": "2026",
            "tipo": "Información estadística",
            "tema": "Competitividad económica global y posicionamiento comparado de naciones",
            "observaciones": "Ranking anual que combina 172 indicadores estadísticos (datos duros) y una encuesta a 6.900 ejecutivos, para evaluar la competitividad de 70 economías",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/693",
            "img":""
        },
        {
            "titulo": "Prospectiva Estratégica Multipaís para América Latina y el Caribe, 2025-2028",
            "institucion": "Organización Internacional para las Migraciones (OIM)",
            "anio": "2026",
            "tipo": "Informe",
            "tema": "Prospectiva y planificación estratégica de la migración en América Latina y el Caribe",
            "observaciones": "Panorama multipaís elaborado a partir de ejercicios de prospectiva realizados en siete países de la región (mayo-septiembre 2025) sobre escenarios futuros de migración y desplazamiento",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/691",
            "img":""
        },
        {
            "titulo": "Desplazamiento forzado en 2025: Tendencias en las Américas",
            "institucion": "Alto Comisionado de las Naciones Unidas para los Refugiados (ACNUR)",
            "anio": "2026",
            "tipo": "Informe",
            "tema": "Desplazamiento forzado y protección internacional en las Américas",
            "observaciones": "Informe anual regional de ACNUR con cifras y análisis del desplazamiento forzado en el continente americano, incluyendo Venezuela, Haití, Nicaragua y Centroamérica",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/690",
            "img":""
        },
        {
            "titulo": "New Energy Outlook 2026",
            "institucion": "BloombergNEF (BNEF)",
            "anio": "2026",
            "tipo": "Informe",
            "tema": "Transición energética y escenarios climático-energéticos globales a 2050",
            "observaciones": "Informe insignia anual de BNEF con escenarios de largo plazo (caso base y escenario climático) sobre electricidad, industria, edificios y transporte hasta 2050",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/689",
            "img":""
        },
        {
            "titulo": "Global Economic Prospects, junio 2026",
            "institucion": "Grupo Banco Mundial",
            "anio": "2026",
            "tipo": "Informe",
            "tema": "Perspectivas económicas mundiales y proyecciones de crecimiento",
            "observaciones": "Informe insignia semestral del Banco Mundial con proyecciones de crecimiento global y por región, y análisis de riesgos económicos",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/685",
            "img":""
        },
        {
            "titulo": "El coste oculto de la IA: en 2030 consumirá tanta agua como 1300 millones de personas y la electricidad de 650 millones",
            "institucion": "Noticias ONU (con base en informe de la Universidad de las Naciones Unidas, UNU-INWEH)",
            "anio": "2026",
            "tipo": "Informe",
            "tema": "Huella ambiental (agua, energía y suelo) del uso de la inteligencia artificial",
            "observaciones": "Nota periodística basada en el informe \"Coste ambiental del uso energético de la IA: huellas de carbono, agua y suelo\" del Instituto UNU-INWEH",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/677",
            "img":""
        },
        {
            "titulo": "Panorama de las Políticas de Desarrollo Productivo en América Latina y el Caribe, 2025: ¿cómo salir de la trampa de baja capacidad para crecer?",
            "institucion": "Comisión Económica para América Latina y el Caribe (CEPAL)",
            "anio": "2026",
            "tipo": "Informe",
            "tema": "Políticas de desarrollo productivo, productividad laboral, ciencia, tecnología e innovación (CTI) y desarrollo sostenible en ALC.",
            "observaciones": "Informe bandera que analiza los obstáculos estructurales y propone un gran impulso para la sostenibilidad y la mitigación del cambio climático en la región.",
            "url": "https://observatorio.ceplan.gob.pe/actualidad/688",
            "img":""
        }
    ]

}