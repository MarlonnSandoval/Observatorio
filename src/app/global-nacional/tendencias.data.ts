export interface Tendencia {
  titulo: string;
  categoriaId: string;
  ruta: string;
}

export interface Categoria {
  id: string;
  nombre: string;
  color: string;
  colorB: string;
  icono: string;
}

export const categorias: Categoria[] = [
  { id: 'social', nombre: 'Social', color: '#FF5533', colorB: '#fab4a5', icono: 'bi-people' },
  { id: 'ambiental', nombre: 'Ambiental', color: '#059141', colorB: '#a8e8c4', icono: 'bi-tree' },
  { id: 'economica', nombre: 'Económica', color: '#edbd00', colorB: '#fcf1c5', icono: 'bi-graph-up' },
  { id: 'tecnologica', nombre: 'Tecnológica', color: '#4E87C6', colorB: '#c2defe', icono: 'bi-cpu' },
  { id: 'politica', nombre: 'Política', color: '#9A20E2', colorB: '#e5c4f9', icono: 'bi-bank' },
  { id: 'etica', nombre: 'Actitud, valores y ética', color: '#83B7DD', colorB: '#c4e6fe', icono: 'bi-heart' },
];

export const tendencias: Tendencia[] = [
  // --- ambiental---
  { titulo: 'Aumento del estrés hídrico', categoriaId: 'ambiental', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg43' },
  { titulo: 'Aumento de la variabilidad de las temperaturas y las precipitaciones', categoriaId: 'ambiental', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg38' },
  { titulo: 'Mayor contaminación de los océanos', categoriaId: 'ambiental', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg45' },
  { titulo: 'Disminución de la superficie glaciar', categoriaId: 'ambiental', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg42' },
  { titulo: 'Incremento de energías renovables', categoriaId: 'ambiental', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg48' },
  { titulo: 'eventos climáticos extremos', categoriaId: 'ambiental', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg46' },
  { titulo: 'Incremento de las emisiones de Gases de Efecto Invernadero (GEI)', categoriaId: 'ambiental', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg53' },
  { titulo: 'Incremento de residuos sólidos', categoriaId: 'ambiental', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg51' },
  { titulo: 'Incremento del comercio basado en la biodiversidad', categoriaId: 'ambiental', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg127' },
  { titulo: 'Incremento del consumo de biocombustibles', categoriaId: 'ambiental', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg132' },
  { titulo: 'Incremento del uso de agroquímicos', categoriaId: 'ambiental', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg58' },
  { titulo: 'Mayor comercio justo agrícola', categoriaId: 'ambiental', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg141' },
  { titulo: 'Mayor desertificación', categoriaId: 'ambiental', ruta: 'https://observatorio.ceplan.gob.pe/ficha/' },
  { titulo: '', categoriaId: 'ambiental', ruta: 'https://observatorio.ceplan.gob.pe/ficha/' },

  // --- economica---
  { titulo: 'Cobertura de los sistemas previsionales contributivos', categoriaId: 'economica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg10' },
  { titulo: 'Informalidad y precariedad del empleo', categoriaId: 'economica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg18' },
  { titulo: 'Jóvenes que ni trabajan ni estudian o reciben formación (ninis)', categoriaId: 'economica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg19' },
  { titulo: 'Calidad de la inversión', categoriaId: 'economica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg20' },
  { titulo: 'Participación de la industria', categoriaId: 'economica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg21' },
  { titulo: 'Cadenas de valor complejas', categoriaId: 'economica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg22' },
  { titulo: 'Países emergentes en la economía mundial', categoriaId: 'economica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg23' },
  { titulo: 'Centro de gravedad económico', categoriaId: 'economica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/24' },
  { titulo: 'Actitudes emprendedoras', categoriaId: 'economica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/25' },
  { titulo: 'Clases medias', categoriaId: 'economica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/26' },


  // --- tecnologica---
  { titulo: 'Incremento de la conectividad digital (IoT)', categoriaId: 'tecnologica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg50' },
  { titulo: 'Acceso a la salud por el uso de la tecnología', categoriaId: 'tecnologica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg54' },
  { titulo: 'Acceso a la educación por el uso de la tecnología', categoriaId: 'tecnologica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg55' },
  { titulo: 'Transformación digital de actividades', categoriaId: 'tecnologica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg66' },
  { titulo: 'Transformación tecnológica de los procesos productivos', categoriaId: 'tecnologica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg67' },
  { titulo: 'Mayor empleo de la inteligencia artificial', categoriaId: 'tecnologica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg68' },
  { titulo: 'Analítica de big y small data', categoriaId: 'tecnologica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg69' },
  { titulo: 'Mayor desarrollo de las interfaces hombre-máquina', categoriaId: 'tecnologica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg70' },
  { titulo: 'Empleo de realidades no físicas', categoriaId: 'tecnologica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg72' },
  { titulo: 'Incremento de controles y riesgos en el ciberespacio', categoriaId: 'tecnologica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg73' },
  { titulo: 'Medicina preventiva y personalizada', categoriaId: 'tecnologica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg74' },
  { titulo: 'Medios digitales y modelos de negocio como servicio', categoriaId: 'tecnologica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg75' },

  // --- politica---
  { titulo: 'Fragilidad de los Estados', categoriaId: 'politica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg30' },
  { titulo: 'Mayor insatisfacción con el funcionamiento de la democracia', categoriaId: 'politica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg32' },
  { titulo: 'Percepción de corrupción', categoriaId: 'politica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg33' },
  { titulo: 'Crímenes organizados', categoriaId: 'politica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg34' },
  { titulo: 'Participación ciudadana a través de medios digitales', categoriaId: 'politica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg35' },
  { titulo: 'Servicios en línea de los gobiernos', categoriaId: 'politica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg36' },
  { titulo: 'Polarización de la sociedad', categoriaId: 'politica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg76' },
  { titulo: 'Mayor presencia de la mujer en la política', categoriaId: 'politica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg161' },
  { titulo: 'Persistencia de las organizaciones políticas', categoriaId: 'politica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg160' },
  { titulo: 'Desconfianza en los partidos políticos', categoriaId: 'politica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg159' },

  // --- etica---
  { titulo: 'Bienestar subjetivo', categoriaId: 'etica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg56' },
  { titulo: 'Restricciones religiosas', categoriaId: 'etica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg57' },
  { titulo: 'Desaceleración de la filantropía', categoriaId: 'etica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg59' },
  { titulo: 'Incremento de noticias falsas', categoriaId: 'etica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg60' },
  { titulo: 'Mayor transformación de las estructuras familiares', categoriaId: 'etica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg61' },
  { titulo: 'Incremento del individualismo', categoriaId: 'etica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg77' },
  { titulo: 'Persistencia de la discriminación', categoriaId: 'etica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg137' },
  { titulo: 'Recuperación de la solidaridad', categoriaId: 'etica', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg138' },

  // --- Social---
  { titulo: 'Aumento del activismo femenino', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg120' },
  { titulo: 'Desigualdad entre mujeres y hombres', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg11' },
  { titulo: 'Mayor liderazgo femenino', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg103' },
  { titulo: 'Consumo de alimentos', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg9' },
  { titulo: 'Consumo de tabaco', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg15' },
  { titulo: 'Demanda de Educación Privada', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg97' },
  { titulo: 'Demanda de Profesiones Creativas', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg94' },
  { titulo: 'Dependencia demográfica', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg5' },
  { titulo: 'Educación de las madres', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg17' },
  { titulo: 'Educación Superior', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg107' },
  { titulo: 'Enfermedades no transmisibles', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg13' },
  { titulo: 'Enfermedades transmisibles', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg63' },
  { titulo: 'Esperanza de vida al nacer', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg3' },
  { titulo: 'Estancamiento de la felicidad', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg139' },
  { titulo: 'Estructura etaria de la población', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg4' },
  { titulo: 'Fecundidad', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg2' },
  { titulo: 'Inclusión Financiera', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg105' },
  { titulo: 'Inclusión laboral', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg111' },
  { titulo: 'Incremento de la población', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg1' },
  { titulo: 'Incremento de vulnerabilidad de niñas, niños y mujeres por conflictos armados', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg121' },
  { titulo: 'Incremento del empoderamiento económico de las mujeres', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg119' },
  { titulo: 'Incremento del sobrepeso y la obesidad', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg14' },
  { titulo: 'Mayor acceso a servicios básicos', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg113' },
  { titulo: 'Mayor demanda de educación técnica', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg104' },
  { titulo: 'Mayor demanda de profesionales en medicina', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg125' },
  { titulo: 'Mayor diversificación de la canasta exportadora en el Perú', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg126' },
  { titulo: 'Mayor población con trastornos afectivos y de ansiedad', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg124' },
  { titulo: 'Mayor protección infantil', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg123' },
  { titulo: 'Mayor urbanización', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg8' },
  { titulo: 'Migración internacional', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg6' },
  { titulo: 'Movilidad Internacional Estudiantil', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg96' },
  { titulo: 'Penetración de los Videojuegos', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg90' },
  { titulo: 'Persistencia de la pobreza', categoriaId: 'social', ruta: 'https://observatorio.ceplan.gob.pe/ficha/tg62' },

];