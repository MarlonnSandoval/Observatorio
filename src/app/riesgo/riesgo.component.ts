import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

type CriterioOrden = 'impacto' | 'probabilidad' | 'periodo' | 'preparacion';
type Tematica = 'social' | 'tecnologico' | 'ambiental' | 'economico' | 'politico';

export interface RiesgoTabla {
  ranking: number;
  codigo: string;
  tematica: string;
  nombre: string;
  impacto: number;
  probabilidad: number;
  periodo: number;      // Periodo de concretización
  preparacion: number;  // Nivel de preparación
}

export interface Riesgo {
  id: string;
  codigo: string;
  nombre: string;
  tematica: Tematica;
  ranking: number;
  impacto: number;       // Rango: 3.2 a 4.6 (Eje Y)
  probabilidad: number;  // Rango: 2.6 a 4.4 (Eje X)
  interconexion: number;
  preparacion: number;
  brecha: string;
}

interface Periodo {
  label: string;
  value: string;
}

interface HeroSlide {
  image: string;
  title: string;
  subtitle?: string;
}

interface NodoRed extends d3.SimulationNodeDatum {
  id: string;
  label: string;
  cat: Tematica;
  size: number;
}

interface EnlaceRed extends d3.SimulationLinkDatum<NodoRed> {
  weight: number;
}

// Interfaces traídas de OportunidadesComponent (sección de brechas y nuevos riesgos)
export interface RiesgoBrecha {
  id: string;
  nombre: string;
  tematica: string;
  prioridadLabel: string;
  preparacionLabel: string;
  preparacionVal: number; // Eje X: 0 a 100
  prioridadVal: number;  // Eje Y: 0 a 100
}

export interface NuevoRiesgo {
  id: string;
  nombre: string;
  impacto: number;
  probabilidad: number;
}

// Dominios y rangos del gráfico de dispersión (Mapa de riesgos).
// Antes se recalculaba la fórmula de interpolación lineal a mano en cada llamada;
// se centralizan aquí como constantes y se usan escalas de D3 (mismo resultado numérico).
const SCATTER_DOMAIN_X: [number, number] = [2.6, 4.4];
const SCATTER_RANGE_X: [number, number] = [0, 826.5];
const SCATTER_DOMAIN_Y: [number, number] = [3.2, 4.6];
const SCATTER_RANGE_Y: [number, number] = [660, 0];

const NETWORK_HEIGHT = 680; // más alto para que la red "respire" (layout tipo burbujas)

const TOOLTIP_OFFSET_X = 15;
const TOOLTIP_OFFSET_Y = -80;

@Component({
  selector: 'app-riesgo',
  templateUrl: './riesgo.component.html',
  styleUrls: ['./riesgo.component.css']
})
export class RiesgoComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('networkContainer', { static: false })
  private networkContainer!: ElementRef<HTMLDivElement>;

  // Escalas reutilizables: se construyen una sola vez en lugar de recalcular
  // la interpolación lineal en cada invocación de getCoordX/getCoordY.
  private readonly escalaX = d3.scaleLinear().domain(SCATTER_DOMAIN_X).range(SCATTER_RANGE_X);
  private readonly escalaY = d3.scaleLinear().domain(SCATTER_DOMAIN_Y).range(SCATTER_RANGE_Y);

  // Referencia a la simulación de fuerzas para poder detenerla al destruir el componente.
  private simulation?: d3.Simulation<NodoRed, EnlaceRed>;

  heroSlides: HeroSlide[] = [
    {
      image: 'assets/img/A3IXVw9IKvScqsYSMQl-o0zv.png',
      title: 'Aumento del acceso seguro a agua y saneamiento en Amazonas',
      subtitle: 'Escenarios del Plan Estratégico de Desarrollo Nacional',
    },
    {
      image: 'assets/img/tbiiZTH0aN88k81XDBQgKllY.png',
      title: 'Aumento de logros educativos en Cajamarca',
      subtitle: 'Escenarios del Perú al 2050',
    },
  ];

  periodos: Periodo[] = [];
  periodoSeleccionado: string = '2026 - 2036';

  kpis = {
    totalRiesgos: 47,
    mayorImpacto: { valor: 4.39, titulo: 'Colapso del sistema de salud pública' },
    mayorProbabilidad: { valor: 4.34, titulo: 'Automatización acelerada del empleo' },
    masInterconectado: 'Incremento de la violencia de género',
    mayorBrecha: 'Debilitamiento de la seguridad ciudadana'
  };

  // Mapeo de colores por temática según la paleta del gráfico
  colorMap: Record<Tematica, string> = {
    ambiental: 'rgb(5, 145, 65)',
    economico: 'rgb(239, 197, 20)',
    politico: 'rgb(154, 32, 226)',
    social: 'rgb(255, 85, 51)',
    tecnologico: 'rgb(78, 135, 198)'
  };

  // Arreglo centralizado de riesgos evaluados
  riesgos: Riesgo[] = [
    { id: 'r1', codigo: 'R1', nombre: 'Incremento de la conflictividad social', tematica: 'social', ranking: 38, impacto: 3.67, probabilidad: 2.91, interconexion: 1.79, preparacion: 2.14, brecha: 'MEDIA' },
    { id: 'r2', codigo: 'R2', nombre: 'Crisis bancaria y financiera', tematica: 'economico', ranking: 29, impacto: 3.34, probabilidad: 3.56, interconexion: 1.62, preparacion: 1.88, brecha: 'ALTA' },
    { id: 'r3', codigo: 'R3', nombre: 'Crisis del sistema democrático', tematica: 'politico', ranking: 32, impacto: 3.33, probabilidad: 3.51, interconexion: 1.45, preparacion: 1.58, brecha: 'ALTA' },
    { id: 'r4', codigo: 'R4', nombre: 'Colapso de los ecosistemas', tematica: 'ambiental', ranking: 39, impacto: 3.81, probabilidad: 2.77, interconexion: 1.62, preparacion: 1.63, brecha: 'ALTA' },
    { id: 'r5', codigo: 'R5', nombre: 'Vulneración de la ciberseguridad', tematica: 'tecnologico', ranking: 9, impacto: 3.8, probabilidad: 4.06, interconexion: 1.79, preparacion: 1.66, brecha: 'ALTA' },
    { id: 'r6', codigo: 'R6', nombre: 'Debilitamiento del sistema educativo', tematica: 'social', ranking: 23, impacto: 3.54, probabilidad: 3.72, interconexion: 1.45, preparacion: 2.4, brecha: 'BAJA' },
    { id: 'r7', codigo: 'R7', nombre: 'Desaceleración prolongada del crecimiento económico', tematica: 'economico', ranking: 21, impacto: 4.0, probabilidad: 3.32, interconexion: 1.45, preparacion: 2.43, brecha: 'BAJA' },
    { id: 'r8', codigo: 'R8', nombre: 'Transnacionalización de las organizaciones delictivas', tematica: 'politico', ranking: 17, impacto: 3.31, probabilidad: 4.11, interconexion: 2.12, preparacion: 1.81, brecha: 'ALTA' },
    { id: 'r9', codigo: 'R9', nombre: 'Fenómenos naturales y meteorológicos extremos', tematica: 'ambiental', ranking: 43, impacto: 3.44, probabilidad: 2.85, interconexion: 1.45, preparacion: 1.83, brecha: 'ALTA' },
    { id: 'r10', codigo: 'R10', nombre: 'Vulneración de la privacidad y uso indebido de datos personales', tematica: 'tecnologico', ranking: 22, impacto: 4.31, probabilidad: 2.96, interconexion: 2.04, preparacion: 2.07, brecha: 'MEDIA' },
    { id: 'r11', codigo: 'R11', nombre: 'Persistencia de la desnutrición infantil', tematica: 'social', ranking: 18, impacto: 4.08, probabilidad: 3.28, interconexion: 1.79, preparacion: 2.04, brecha: 'MEDIA' },
    { id: 'r12', codigo: 'R12', nombre: 'Incremento del desempleo estructural', tematica: 'economico', ranking: 46, impacto: 3.33, probabilidad: 2.75, interconexion: 2.54, preparacion: 1.74, brecha: 'ALTA' },
    { id: 'r13', codigo: 'R13', nombre: 'Crisis de representación política', tematica: 'politico', ranking: 14, impacto: 4.13, probabilidad: 3.38, interconexion: 2.12, preparacion: 1.83, brecha: 'ALTA' },
    { id: 'r14', codigo: 'R14', nombre: 'Incremento de la contaminación del aire en áreas urbanas', tematica: 'ambiental', ranking: 16, impacto: 4.01, probabilidad: 3.42, interconexion: 2.21, preparacion: 1.82, brecha: 'ALTA' },
    { id: 'r15', codigo: 'R15', nombre: 'Incremento del uso malicioso de deepfakes', tematica: 'tecnologico', ranking: 4, impacto: 4.28, probabilidad: 3.84, interconexion: 1.79, preparacion: 1.77, brecha: 'CRÍTICA' },
    { id: 'r16', codigo: 'R16', nombre: 'Incremento de la violencia de género', tematica: 'social', ranking: 13, impacto: 4.0, probabilidad: 3.54, interconexion: 3.8, preparacion: 2.34, brecha: 'BAJA' },
    { id: 'r17', codigo: 'R17', nombre: 'Pérdida de competitividad internacional', tematica: 'economico', ranking: 19, impacto: 4.2, probabilidad: 3.14, interconexion: 1.62, preparacion: 2.43, brecha: 'BAJA' },
    { id: 'r18', codigo: 'R18', nombre: 'Surgimiento de poderes demagógicos y populistas', tematica: 'politico', ranking: 35, impacto: 3.4, probabilidad: 3.36, interconexion: 2.96, preparacion: 2.23, brecha: 'BAJA' },
    { id: 'r19', codigo: 'R19', nombre: 'Deforestación acelerada de la Amazonía', tematica: 'ambiental', ranking: 27, impacto: 3.45, probabilidad: 3.48, interconexion: 1.62, preparacion: 1.59, brecha: 'ALTA' },
    { id: 'r20', codigo: 'R20', nombre: 'Ampliación de la brecha digital', tematica: 'tecnologico', ranking: 7, impacto: 4.12, probabilidad: 3.95, interconexion: 1.45, preparacion: 2.07, brecha: 'MEDIA' },
    { id: 'r21', codigo: 'R21', nombre: 'Colapso del sistema de salud pública', tematica: 'social', ranking: 12, impacto: 4.39, probabilidad: 3.18, interconexion: 2.12, preparacion: 2.18, brecha: 'MEDIA' },
    { id: 'r22', codigo: 'R22', nombre: 'Crisis en las cadenas de suministro', tematica: 'economico', ranking: 11, impacto: 4.02, probabilidad: 3.64, interconexion: 2.29, preparacion: 1.96, brecha: 'ALTA' },
    { id: 'r23', codigo: 'R23', nombre: 'Escalada de confrontaciones bélicas', tematica: 'politico', ranking: 1, impacto: 4.34, probabilidad: 4.26, interconexion: 1.54, preparacion: 1.98, brecha: 'ALTA' },
    { id: 'r24', codigo: 'R24', nombre: 'Pérdida acelerada de la biodiversidad', tematica: 'ambiental', ranking: 31, impacto: 4.11, probabilidad: 2.75, interconexion: 1.62, preparacion: 2.18, brecha: 'MEDIA' },
    { id: 'r25', codigo: 'R25', nombre: 'Automatización acelerada del empleo', tematica: 'tecnologico', ranking: 2, impacto: 4.09, probabilidad: 4.34, interconexion: 3.13, preparacion: 2.29, brecha: 'BAJA' },
    { id: 'r26', codigo: 'R26', nombre: 'Aumento de la migración forzada', tematica: 'social', ranking: 28, impacto: 3.62, probabilidad: 3.31, interconexion: 1.7, preparacion: 2.15, brecha: 'MEDIA' },
    { id: 'r27', codigo: 'R27', nombre: 'Volatilidad de los precios de materias primas', tematica: 'economico', ranking: 36, impacto: 3.28, probabilidad: 3.43, interconexion: 1.54, preparacion: 1.7, brecha: 'ALTA' },
    { id: 'r28', codigo: 'R28', nombre: 'Debilitamiento de la institucionalidad pública', tematica: 'politico', ranking: 45, impacto: 3.4, probabilidad: 2.75, interconexion: 2.29, preparacion: 2.24, brecha: 'BAJA' },
    { id: 'r29', codigo: 'R29', nombre: 'Incremento de la vulnerabilidad ante el cambio climático', tematica: 'ambiental', ranking: 40, impacto: 3.42, probabilidad: 3.07, interconexion: 1.87, preparacion: 1.9, brecha: 'ALTA' },
    { id: 'r30', codigo: 'R30', nombre: 'Dependencia tecnológica externa', tematica: 'tecnologico', ranking: 24, impacto: 4.38, probabilidad: 2.79, interconexion: 1.79, preparacion: 1.95, brecha: 'ALTA' },
    { id: 'r31', codigo: 'R31', nombre: 'Erosión de la cohesión social', tematica: 'social', ranking: 5, impacto: 3.96, probabilidad: 4.15, interconexion: 1.79, preparacion: 2.29, brecha: 'BAJA' },
    { id: 'r32', codigo: 'R32', nombre: 'Incremento de la informalidad empresarial', tematica: 'economico', ranking: 15, impacto: 4.37, probabilidad: 3.12, interconexion: 1.62, preparacion: 1.92, brecha: 'ALTA' },
    { id: 'r33', codigo: 'R33', nombre: 'Incremento de la corrupción en el Estado', tematica: 'politico', ranking: 8, impacto: 3.72, probabilidad: 4.15, interconexion: 1.87, preparacion: 2.41, brecha: 'BAJA' },
    { id: 'r34', codigo: 'R34', nombre: 'Degradación de suelos agrícolas', tematica: 'ambiental', ranking: 42, impacto: 3.45, probabilidad: 2.95, interconexion: 1.54, preparacion: 1.76, brecha: 'ALTA' },
    { id: 'r35', codigo: 'R35', nombre: 'Desinformación impulsada por inteligencia artificial', tematica: 'tecnologico', ranking: 26, impacto: 3.55, probabilidad: 3.47, interconexion: 1.79, preparacion: 2.08, brecha: 'MEDIA' },
    { id: 'r36', codigo: 'R36', nombre: 'Incremento del trabajo informal', tematica: 'social', ranking: 44, impacto: 3.59, probabilidad: 2.66, interconexion: 1.79, preparacion: 1.93, brecha: 'ALTA' },
    { id: 'r37', codigo: 'R37', nombre: 'Contracción de la inversión privada', tematica: 'economico', ranking: 20, impacto: 3.73, probabilidad: 3.61, interconexion: 2.88, preparacion: 2.41, brecha: 'BAJA' },
    { id: 'r38', codigo: 'R38', nombre: 'Polarización política y social', tematica: 'politico', ranking: 10, impacto: 4.15, probabilidad: 3.53, interconexion: 1.45, preparacion: 2.11, brecha: 'MEDIA' },
    { id: 'r39', codigo: 'R39', nombre: 'Contaminación de fuentes de agua dulce', tematica: 'ambiental', ranking: 30, impacto: 4.13, probabilidad: 2.74, interconexion: 3.55, preparacion: 2.36, brecha: 'BAJA' },
    { id: 'r40', codigo: 'R40', nombre: 'Obsolescencia de la infraestructura tecnológica del Estado', tematica: 'tecnologico', ranking: 3, impacto: 4.26, probabilidad: 4.14, interconexion: 3.05, preparacion: 2.27, brecha: 'BAJA' },
    { id: 'r41', codigo: 'R41', nombre: 'Exacerbación de la criminalidad y la violencia', tematica: 'social', ranking: 25, impacto: 3.76, probabilidad: 3.33, interconexion: 1.45, preparacion: 1.64, brecha: 'ALTA' },
    { id: 'r42', codigo: 'R42', nombre: 'Aumento sostenido de la deuda pública', tematica: 'economico', ranking: 33, impacto: 4.07, probabilidad: 2.76, interconexion: 1.62, preparacion: 1.61, brecha: 'ALTA' },
    { id: 'r43', codigo: 'R43', nombre: 'Pérdida de legitimidad de los partidos políticos', tematica: 'politico', ranking: 41, impacto: 3.52, probabilidad: 2.93, interconexion: 1.95, preparacion: 1.86, brecha: 'ALTA' },
    { id: 'r44', codigo: 'R44', nombre: 'Inseguridad hídrica y debilitamiento de la gestión del agua', tematica: 'ambiental', ranking: 47, impacto: 3.32, probabilidad: 2.65, interconexion: 1.7, preparacion: 1.69, brecha: 'ALTA' },
    { id: 'r45', codigo: 'R45', nombre: 'Ciberdependencia crítica de infraestructuras esenciales', tematica: 'tecnologico', ranking: 37, impacto: 3.38, probabilidad: 3.27, interconexion: 1.45, preparacion: 1.57, brecha: 'ALTA' },
    { id: 'r46', codigo: 'R46', nombre: 'Debilitamiento de la seguridad ciudadana', tematica: 'social', ranking: 6, impacto: 4.39, probabilidad: 3.69, interconexion: 1.87, preparacion: 1.68, brecha: 'CRÍTICA' },
    { id: 'r47', codigo: 'R47', nombre: 'Fuga de capitales y desinversión', tematica: 'economico', ranking: 34, impacto: 3.58, probabilidad: 3.24, interconexion: 2.29, preparacion: 1.88, brecha: 'ALTA' },
  ];

  // Estado del Tooltip flotante
  selectedRiesgo: Riesgo | null = null;
  tooltipStyle = { display: 'none', top: '0px', left: '0px' };

  ngOnInit(): void {
    this.periodos = [
      { label: '2020 - 2030', value: '2020-2030' },
      { label: '2021 - 2031', value: '2021-2031' },
      { label: '2023 - 2033', value: '2023-2033' },
      { label: '2024 - 2034', value: '2024-2034' },
      { label: '2025 - 2035', value: '2025-2035' },
      { label: '2026 - 2036', value: '2026-2036' }
    ];
  }

  // Conversión matemática: Probabilidad (2.6 -> 4.4) a Píxeles (0 -> 826.5)
  getCoordX(probabilidad: number): number {
    return this.escalaX(probabilidad);
  }

  // Conversión matemática: Impacto (3.2 -> 4.6) a Píxeles (660 -> 0)
  getCoordY(impacto: number): number {
    return this.escalaY(impacto);
  }

  // Controladores de eventos para la tarjeta de inspección
  showTooltip(event: MouseEvent, riesgo: Riesgo): void {
    this.selectedRiesgo = riesgo;
    this.updateTooltipPos(event);
  }

  moveTooltip(event: MouseEvent): void {
    this.updateTooltipPos(event);
  }

  hideTooltip(): void {
    this.selectedRiesgo = null;
    this.tooltipStyle.display = 'none';
  }

  private updateTooltipPos(event: MouseEvent): void {
    this.tooltipStyle = {
      display: 'block',
      top: `${event.clientY + TOOLTIP_OFFSET_Y}px`,
      left: `${event.clientX + TOOLTIP_OFFSET_X}px`
    };
  }

  descargarPDF(): void {
    console.log('Descargando informe PDF...');
  }

  // Columna seleccionada por defecto para el Ranking Top
  columnaOrden: CriterioOrden = 'impacto';
  ordenAscendente: boolean = false; // Descendente por defecto para ver el TOP (mayor a menor)

  riesgosTabla: RiesgoTabla[] = [
    { ranking: 1, codigo: 'R23', tematica: 'Político', nombre: 'Escalada de confrontaciones bélicas', impacto: 4.34, probabilidad: 4.26, periodo: 1.65, preparacion: 1.98 },
    { ranking: 2, codigo: 'R25', tematica: 'Tecnología', nombre: 'Automatización acelerada del empleo', impacto: 4.09, probabilidad: 4.34, periodo: 1.72, preparacion: 2.29 },
    { ranking: 3, codigo: 'R40', tematica: 'Tecnología', nombre: 'Obsolescencia de la infraestructura tecnológica del Estado', impacto: 4.26, probabilidad: 4.14, periodo: 1.8, preparacion: 2.27 },
    { ranking: 4, codigo: 'R15', tematica: 'Tecnología', nombre: 'Incremento del uso malicioso de deepfakes', impacto: 4.28, probabilidad: 3.84, periodo: 1.84, preparacion: 1.77 },
    { ranking: 5, codigo: 'R31', tematica: 'Social', nombre: 'Erosión de la cohesión social', impacto: 3.96, probabilidad: 4.15, periodo: 1.88, preparacion: 2.29 },
    { ranking: 6, codigo: 'R46', tematica: 'Social', nombre: 'Debilitamiento de la seguridad ciudadana', impacto: 4.39, probabilidad: 3.69, periodo: 1.93, preparacion: 1.68 },
    { ranking: 7, codigo: 'R20', tematica: 'Tecnología', nombre: 'Ampliación de la brecha digital', impacto: 4.12, probabilidad: 3.95, periodo: 1.97, preparacion: 2.07 },
    { ranking: 8, codigo: 'R33', tematica: 'Político', nombre: 'Incremento de la corrupción en el Estado', impacto: 3.72, probabilidad: 4.15, periodo: 2.05, preparacion: 2.41 },
    { ranking: 9, codigo: 'R5', tematica: 'Tecnología', nombre: 'Vulneración de la ciberseguridad', impacto: 3.8, probabilidad: 4.06, periodo: 2.12, preparacion: 1.66 },
    { ranking: 10, codigo: 'R38', tematica: 'Político', nombre: 'Polarización política y social', impacto: 4.15, probabilidad: 3.53, periodo: 2.2, preparacion: 2.11 },
  ];

  // Método para ordenar al hacer clic en una cabecera
  ordenarPor(columna: CriterioOrden): void {
    // Si vuelve a hacer clic en la misma columna, alterna entre descendente y ascendente;
    // si cambia de columna, muestra primero el TOP (mayor a menor).
    this.ordenAscendente = this.columnaOrden === columna ? !this.ordenAscendente : false;
    this.columnaOrden = columna;

    const direccion = this.ordenAscendente ? 1 : -1;
    this.riesgosTabla.sort((a, b) => (a[columna] - b[columna]) * direccion);

    // Reasignar posiciones del ranking según el nuevo orden
    this.riesgosTabla.forEach((item, index) => {
      item.ranking = index + 1;
    });
  }

  nodoRedSeleccionado: string | null = null;
  statusHintRed: string = 'Haz clic en un nodo para aislar sus interconexiones';

  // Datos para la Red de Interconexiones
  nodosRed: NodoRed[] = [
    { id: 'r1', label: 'Incremento de la conflictividad social', cat: 'social', size: 28 },
    { id: 'r2', label: 'Crisis bancaria y financiera', cat: 'economico', size: 32 },
    { id: 'r3', label: 'Crisis del sistema democrático', cat: 'politico', size: 24 },
    { id: 'r4', label: 'Colapso de los ecosistemas', cat: 'ambiental', size: 18 },
    { id: 'r5', label: 'Vulneración de la ciberseguridad', cat: 'tecnologico', size: 16 },
    { id: 'r6', label: 'Debilitamiento del sistema educativo', cat: 'social', size: 22 },
    { id: 'r7', label: 'Desaceleración prolongada del crecimiento económico', cat: 'economico', size: 18 },
    { id: 'r8', label: 'Transnacionalización de las organizaciones delictivas', cat: 'politico', size: 14 },
    { id: 'r9', label: 'Fenómenos naturales y meteorológicos extremos', cat: 'ambiental', size: 14 },
    { id: 'r10', label: 'Vulneración de la privacidad y uso indebido de datos personales', cat: 'tecnologico', size: 28 },
    { id: 'r11', label: 'Persistencia de la desnutrición infantil', cat: 'social', size: 32 },
    { id: 'r12', label: 'Incremento del desempleo estructural', cat: 'economico', size: 24 },
    { id: 'r13', label: 'Crisis de representación política', cat: 'politico', size: 18 },
    { id: 'r14', label: 'Incremento de la contaminación del aire en áreas urbanas', cat: 'ambiental', size: 16 },
    { id: 'r15', label: 'Incremento del uso malicioso de deepfakes', cat: 'tecnologico', size: 22 },
    { id: 'r16', label: 'Incremento de la violencia de género', cat: 'social', size: 18 },
    { id: 'r17', label: 'Pérdida de competitividad internacional', cat: 'economico', size: 14 },
    { id: 'r18', label: 'Surgimiento de poderes demagógicos y populistas', cat: 'politico', size: 28 },
    { id: 'r19', label: 'Deforestación acelerada de la Amazonía', cat: 'ambiental', size: 32 },
    { id: 'r20', label: 'Ampliación de la brecha digital', cat: 'tecnologico', size: 24 },
    { id: 'r21', label: 'Colapso del sistema de salud pública', cat: 'social', size: 18 },
    { id: 'r22', label: 'Crisis en las cadenas de suministro', cat: 'economico', size: 16 },
    { id: 'r23', label: 'Escalada de confrontaciones bélicas', cat: 'politico', size: 22 },
    { id: 'r24', label: 'Pérdida acelerada de la biodiversidad', cat: 'ambiental', size: 18 },
    { id: 'r25', label: 'Automatización acelerada del empleo', cat: 'tecnologico', size: 14 },
    { id: 'r26', label: 'Aumento de la migración forzada', cat: 'social', size: 28 },
    { id: 'r27', label: 'Volatilidad de los precios de materias primas', cat: 'economico', size: 32 },
    { id: 'r28', label: 'Debilitamiento de la institucionalidad pública', cat: 'politico', size: 24 },
    { id: 'r29', label: 'Incremento de la vulnerabilidad ante el cambio climático', cat: 'ambiental', size: 18 },
    { id: 'r30', label: 'Dependencia tecnológica externa', cat: 'tecnologico', size: 16 },
    { id: 'r31', label: 'Erosión de la cohesión social', cat: 'social', size: 22 },
    { id: 'r32', label: 'Incremento de la informalidad empresarial', cat: 'economico', size: 18 },
    { id: 'r33', label: 'Incremento de la corrupción en el Estado', cat: 'politico', size: 14 },
    { id: 'r34', label: 'Degradación de suelos agrícolas', cat: 'ambiental', size: 28 },
    { id: 'r35', label: 'Desinformación impulsada por inteligencia artificial', cat: 'tecnologico', size: 32 },
    { id: 'r36', label: 'Incremento del trabajo informal', cat: 'social', size: 24 },
    { id: 'r37', label: 'Contracción de la inversión privada', cat: 'economico', size: 18 },
    { id: 'r38', label: 'Polarización política y social', cat: 'politico', size: 16 },
    { id: 'r39', label: 'Contaminación de fuentes de agua dulce', cat: 'ambiental', size: 22 },
    { id: 'r40', label: 'Obsolescencia de la infraestructura tecnológica del Estado', cat: 'tecnologico', size: 18 },
    { id: 'r41', label: 'Exacerbación de la criminalidad y la violencia', cat: 'social', size: 14 },
    { id: 'r42', label: 'Aumento sostenido de la deuda pública', cat: 'economico', size: 32 },
    { id: 'r43', label: 'Pérdida de legitimidad de los partidos políticos', cat: 'politico', size: 24 },
    { id: 'r44', label: 'Inseguridad hídrica y debilitamiento de la gestión del agua', cat: 'ambiental', size: 18 },
    { id: 'r45', label: 'Ciberdependencia crítica de infraestructuras esenciales', cat: 'tecnologico', size: 16 },
    { id: 'r46', label: 'Debilitamiento de la seguridad ciudadana', cat: 'social', size: 22 },
    { id: 'r47', label: 'Fuga de capitales y desinversión', cat: 'economico', size: 18 },
  ];

  enlacesRed: EnlaceRed[] = [
    { source: 'r1', target: 'r10', weight: 4 },
    { source: 'r1', target: 'r2', weight: 5 },
    { source: 'r1', target: 'r34', weight: 4 },
    { source: 'r1', target: 'r4', weight: 3 },
    { source: 'r1', target: 'r5', weight: 3 },
    { source: 'r10', target: 'r12', weight: 3 },
    { source: 'r10', target: 'r34', weight: 4 },
    { source: 'r10', target: 'r39', weight: 3 },
    { source: 'r11', target: 'r12', weight: 4 },
    { source: 'r11', target: 'r14', weight: 3 },
    { source: 'r11', target: 'r16', weight: 4 },
    { source: 'r11', target: 'r26', weight: 3 },
    { source: 'r11', target: 'r8', weight: 3 },
    { source: 'r12', target: 'r15', weight: 4 },
    { source: 'r12', target: 'r16', weight: 4 },
    { source: 'r12', target: 'r39', weight: 4 },
    { source: 'r12', target: 'r9', weight: 3 },
    { source: 'r13', target: 'r12', weight: 4 },
    { source: 'r13', target: 'r18', weight: 3 },
    { source: 'r13', target: 'r19', weight: 4 },
    { source: 'r13', target: 'r22', weight: 3 },
    { source: 'r13', target: 'r25', weight: 3 },
    { source: 'r13', target: 'r40', weight: 5 },
    { source: 'r13', target: 'r47', weight: 3 },
    { source: 'r14', target: 'r10', weight: 3 },
    { source: 'r14', target: 'r16', weight: 4 },
    { source: 'r14', target: 'r34', weight: 3 },
    { source: 'r15', target: 'r16', weight: 3 },
    { source: 'r15', target: 'r39', weight: 3 },
    { source: 'r16', target: 'r12', weight: 3 },
    { source: 'r16', target: 'r18', weight: 3 },
    { source: 'r16', target: 'r25', weight: 3 },
    { source: 'r16', target: 'r37', weight: 3 },
    { source: 'r16', target: 'r39', weight: 3 },
    { source: 'r16', target: 'r8', weight: 3 },
    { source: 'r17', target: 'r12', weight: 3 },
    { source: 'r17', target: 'r14', weight: 4 },
    { source: 'r17', target: 'r16', weight: 3 },
    { source: 'r18', target: 'r16', weight: 3 },
    { source: 'r18', target: 'r21', weight: 4 },
    { source: 'r18', target: 'r22', weight: 4 },
    { source: 'r18', target: 'r24', weight: 3 },
    { source: 'r18', target: 'r25', weight: 5 },
    { source: 'r18', target: 'r28', weight: 4 },
    { source: 'r18', target: 'r37', weight: 3 },
    { source: 'r18', target: 'r39', weight: 4 },
    { source: 'r18', target: 'r40', weight: 3 },
    { source: 'r19', target: 'r13', weight: 4 },
    { source: 'r19', target: 'r25', weight: 3 },
    { source: 'r19', target: 'r39', weight: 3 },
    { source: 'r19', target: 'r40', weight: 5 },
    { source: 'r19', target: 'r43', weight: 3 },
    { source: 'r19', target: 'r47', weight: 3 },
    { source: 'r2', target: 'r1', weight: 3 },
    { source: 'r2', target: 'r10', weight: 3 },
    { source: 'r2', target: 'r26', weight: 4 },
    { source: 'r2', target: 'r3', weight: 4 },
    { source: 'r2', target: 'r34', weight: 3 },
    { source: 'r20', target: 'r14', weight: 3 },
    { source: 'r20', target: 'r16', weight: 3 },
    { source: 'r20', target: 'r23', weight: 4 },
    { source: 'r20', target: 'r27', weight: 3 },
    { source: 'r20', target: 'r36', weight: 4 },
    { source: 'r21', target: 'r18', weight: 3 },
    { source: 'r21', target: 'r25', weight: 3 },
    { source: 'r21', target: 'r28', weight: 3 },
    { source: 'r21', target: 'r39', weight: 3 },
    { source: 'r22', target: 'r13', weight: 3 },
    { source: 'r22', target: 'r16', weight: 3 },
    { source: 'r22', target: 'r18', weight: 3 },
    { source: 'r22', target: 'r21', weight: 3 },
    { source: 'r22', target: 'r25', weight: 4 },
    { source: 'r22', target: 'r28', weight: 3 },
    { source: 'r22', target: 'r37', weight: 3 },
    { source: 'r22', target: 'r39', weight: 4 },
    { source: 'r22', target: 'r40', weight: 3 },
    { source: 'r23', target: 'r12', weight: 3 },
    { source: 'r23', target: 'r14', weight: 4 },
    { source: 'r23', target: 'r16', weight: 4 },
    { source: 'r23', target: 'r17', weight: 3 },
    { source: 'r23', target: 'r26', weight: 4 },
    { source: 'r23', target: 'r27', weight: 4 },
    { source: 'r24', target: 'r25', weight: 4 },
    { source: 'r24', target: 'r31', weight: 3 },
    { source: 'r24', target: 'r36', weight: 3 },
    { source: 'r24', target: 'r39', weight: 3 },
    { source: 'r25', target: 'r12', weight: 3 },
    { source: 'r25', target: 'r13', weight: 3 },
    { source: 'r25', target: 'r16', weight: 3 },
    { source: 'r25', target: 'r18', weight: 4 },
    { source: 'r25', target: 'r21', weight: 3 },
    { source: 'r25', target: 'r22', weight: 4 },
    { source: 'r25', target: 'r28', weight: 3 },
    { source: 'r25', target: 'r37', weight: 4 },
    { source: 'r25', target: 'r39', weight: 5 },
    { source: 'r25', target: 'r40', weight: 4 },
    { source: 'r26', target: 'r14', weight: 3 },
    { source: 'r26', target: 'r16', weight: 3 },
    { source: 'r26', target: 'r17', weight: 4 },
    { source: 'r26', target: 'r2', weight: 3 },
    { source: 'r26', target: 'r23', weight: 4 },
    { source: 'r26', target: 'r27', weight: 3 },
    { source: 'r27', target: 'r12', weight: 3 },
    { source: 'r27', target: 'r14', weight: 4 },
    { source: 'r27', target: 'r16', weight: 3 },
    { source: 'r27', target: 'r23', weight: 3 },
    { source: 'r28', target: 'r18', weight: 3 },
    { source: 'r28', target: 'r21', weight: 3 },
    { source: 'r28', target: 'r25', weight: 3 },
    { source: 'r28', target: 'r37', weight: 3 },
    { source: 'r28', target: 'r38', weight: 3 },
    { source: 'r28', target: 'r39', weight: 3 },
    { source: 'r29', target: 'r16', weight: 3 },
    { source: 'r29', target: 'r30', weight: 3 },
    { source: 'r29', target: 'r37', weight: 4 },
    { source: 'r29', target: 'r40', weight: 3 },
    { source: 'r3', target: 'r10', weight: 3 },
    { source: 'r3', target: 'r12', weight: 3 },
    { source: 'r3', target: 'r16', weight: 4 },
    { source: 'r3', target: 'r26', weight: 3 },
    { source: 'r3', target: 'r39', weight: 3 },
    { source: 'r30', target: 'r29', weight: 3 },
    { source: 'r30', target: 'r37', weight: 3 },
    { source: 'r30', target: 'r38', weight: 3 },
    { source: 'r30', target: 'r39', weight: 3 },
    { source: 'r30', target: 'r40', weight: 3 },
    { source: 'r31', target: 'r29', weight: 3 },
    { source: 'r31', target: 'r36', weight: 5 },
    { source: 'r31', target: 'r40', weight: 4 },
    { source: 'r32', target: 'r35', weight: 4 },
    { source: 'r32', target: 'r42', weight: 3 },
    { source: 'r32', target: 'r46', weight: 3 },
    { source: 'r32', target: 'r9', weight: 3 },
    { source: 'r33', target: 'r14', weight: 3 },
    { source: 'r33', target: 'r16', weight: 4 },
    { source: 'r33', target: 'r29', weight: 3 },
    { source: 'r33', target: 'r30', weight: 3 },
    { source: 'r33', target: 'r8', weight: 3 },
    { source: 'r34', target: 'r16', weight: 3 },
    { source: 'r34', target: 'r39', weight: 3 },
    { source: 'r35', target: 'r32', weight: 3 },
    { source: 'r35', target: 'r37', weight: 3 },
    { source: 'r35', target: 'r38', weight: 3 },
    { source: 'r35', target: 'r9', weight: 3 },
    { source: 'r36', target: 'r31', weight: 3 },
    { source: 'r37', target: 'r18', weight: 3 },
    { source: 'r37', target: 'r21', weight: 3 },
    { source: 'r37', target: 'r25', weight: 3 },
    { source: 'r37', target: 'r28', weight: 3 },
    { source: 'r37', target: 'r39', weight: 4 },
    { source: 'r37', target: 'r40', weight: 3 },
    { source: 'r38', target: 'r21', weight: 3 },
    { source: 'r38', target: 'r28', weight: 3 },
    { source: 'r38', target: 'r37', weight: 3 },
    { source: 'r38', target: 'r39', weight: 3 },
    { source: 'r38', target: 'r40', weight: 3 },
    { source: 'r39', target: 'r15', weight: 3 },
    { source: 'r39', target: 'r16', weight: 3 },
    { source: 'r39', target: 'r18', weight: 3 },
    { source: 'r39', target: 'r25', weight: 3 },
    { source: 'r39', target: 'r37', weight: 3 },
    { source: 'r39', target: 'r40', weight: 3 },
    { source: 'r4', target: 'r1', weight: 5 },
    { source: 'r4', target: 'r10', weight: 4 },
    { source: 'r4', target: 'r2', weight: 3 },
    { source: 'r4', target: 'r34', weight: 3 },
    { source: 'r4', target: 'r39', weight: 3 },
    { source: 'r40', target: 'r13', weight: 5 },
    { source: 'r40', target: 'r16', weight: 3 },
    { source: 'r40', target: 'r18', weight: 3 },
    { source: 'r40', target: 'r19', weight: 4 },
    { source: 'r40', target: 'r25', weight: 3 },
    { source: 'r40', target: 'r37', weight: 4 },
    { source: 'r40', target: 'r43', weight: 3 },
    { source: 'r40', target: 'r45', weight: 3 },
    { source: 'r40', target: 'r47', weight: 3 },
    { source: 'r41', target: 'r32', weight: 3 },
    { source: 'r41', target: 'r43', weight: 4 },
    { source: 'r41', target: 'r47', weight: 4 },
    { source: 'r42', target: 'r16', weight: 3 },
    { source: 'r42', target: 'r37', weight: 3 },
    { source: 'r42', target: 'r39', weight: 3 },
    { source: 'r42', target: 'r44', weight: 3 },
    { source: 'r42', target: 'r46', weight: 5 },
    { source: 'r43', target: 'r47', weight: 4 },
    { source: 'r44', target: 'r14', weight: 3 },
    { source: 'r44', target: 'r16', weight: 3 },
    { source: 'r44', target: 'r36', weight: 5 },
    { source: 'r44', target: 'r47', weight: 3 },
    { source: 'r44', target: 'r8', weight: 3 },
    { source: 'r45', target: 'r18', weight: 4 },
    { source: 'r45', target: 'r21', weight: 4 },
    { source: 'r45', target: 'r28', weight: 3 },
    { source: 'r45', target: 'r39', weight: 3 },
    { source: 'r45', target: 'r40', weight: 3 },
    { source: 'r46', target: 'r16', weight: 4 },
    { source: 'r46', target: 'r30', weight: 3 },
    { source: 'r46', target: 'r37', weight: 4 },
    { source: 'r46', target: 'r38', weight: 3 },
    { source: 'r46', target: 'r39', weight: 4 },
    { source: 'r47', target: 'r16', weight: 4 },
    { source: 'r47', target: 'r18', weight: 3 },
    { source: 'r47', target: 'r22', weight: 3 },
    { source: 'r47', target: 'r25', weight: 3 },
    { source: 'r47', target: 'r40', weight: 3 },
    { source: 'r47', target: 'r44', weight: 3 },
    { source: 'r47', target: 'r8', weight: 4 },
    { source: 'r5', target: 'r10', weight: 5 },
    { source: 'r5', target: 'r12', weight: 3 },
    { source: 'r5', target: 'r16', weight: 3 },
    { source: 'r5', target: 'r34', weight: 4 },
    { source: 'r5', target: 'r39', weight: 3 },
    { source: 'r6', target: 'r10', weight: 4 },
    { source: 'r6', target: 'r14', weight: 3 },
    { source: 'r6', target: 'r31', weight: 4 },
    { source: 'r6', target: 'r34', weight: 3 },
    { source: 'r6', target: 'r36', weight: 5 },
    { source: 'r7', target: 'r30', weight: 4 },
    { source: 'r7', target: 'r31', weight: 3 },
    { source: 'r8', target: 'r12', weight: 4 },
    { source: 'r8', target: 'r16', weight: 4 },
    { source: 'r8', target: 'r18', weight: 3 },
    { source: 'r8', target: 'r25', weight: 3 },
    { source: 'r8', target: 'r37', weight: 3 },
    { source: 'r8', target: 'r39', weight: 3 },
    { source: 'r9', target: 'r12', weight: 4 },
    { source: 'r9', target: 'r16', weight: 3 },
    { source: 'r9', target: 'r35', weight: 3 },
    { source: 'r9', target: 'r46', weight: 3 }
  ];

  ngAfterViewInit(): void {
    this.generarRedInterconexiones();
  }

  ngOnDestroy(): void {
    // Detiene la simulación de fuerzas para no seguir consumiendo CPU
    // en segundo plano una vez que el componente se destruye.
    this.simulation?.stop();
  }

  private generarRedInterconexiones(): void {
    if (!this.networkContainer) return;
    const element = this.networkContainer.nativeElement;
    d3.select(element).selectAll('svg').remove();

    const width = element.clientWidth || 900;
    const height = NETWORK_HEIGHT;

    const svg = d3.select(element)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`);

    // Rectángulo de fondo para deseleccionar al hacer clic fuera
    svg.append('rect')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', 'transparent')
      .on('click', () => this.resetFiltroRed());

    // FUERZAS CALIBRADAS PARA UN LAYOUT ORGÁNICO TIPO "BURBUJAS"
    // - charge proporcional al tamaño del nodo (no un valor fijo muy fuerte)
    // - collide estricto con padding para la etiqueta
    // - sin clamp duro en el tick: forceX/forceY suaves mantienen todo centrado
    //   (un clamp duro apila los nodos contra el borde del SVG)
    this.simulation = d3.forceSimulation<NodoRed>(this.nodosRed)
      .force('link', d3.forceLink<NodoRed, EnlaceRed>(this.enlacesRed)
        .id(d => d.id)
        .distance(d => 60 + (5 - Math.min(d.weight, 5)) * 10)
        .strength(0.4)
      )
      .force('charge', d3.forceManyBody<NodoRed>()
        .strength(d => -180 - d.size * 4)
        .distanceMax(320)
      )
      .force('collide', d3.forceCollide<NodoRed>()
        .radius(d => d.size + 22)
        .strength(1)
        .iterations(2)
      )
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('x', d3.forceX(width / 2).strength(0.04))
      .force('y', d3.forceY(height / 2).strength(0.05))
      .velocityDecay(0.4)
      .alphaDecay(0.018);

    const link = svg.append('g')
      .attr('class', 'links')
      .selectAll<SVGLineElement, EnlaceRed>('line')
      .data(this.enlacesRed)
      .enter().append('line')
      .attr('class', 'net-link')
      .attr('stroke', '#cbd5e1')
      .attr('stroke-opacity', 0.6)
      .attr('stroke-width', d => d.weight);

    const nodeGroup = svg.append('g')
      .attr('class', 'nodes')
      .selectAll<SVGGElement, NodoRed>('.net-node')
      .data(this.nodosRed)
      .enter().append('g')
      .attr('class', 'net-node')
      .style('cursor', 'pointer')
      .on('click', (event, d) => {
        event.stopPropagation();
        this.filtrarConexionesRed(d);
      });

    nodeGroup.append('circle')
      .attr('r', d => d.size)
      .attr('fill', d => this.colorMap[d.cat])
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 2.5);

    nodeGroup.append('title')
      .text(d => `${d.label} (${d.cat.toUpperCase()})`);

    nodeGroup.append('text')
      .attr('dy', d => d.size + 14)
      .attr('font-size', '11px')
      .attr('font-weight', '600')
      .attr('fill', '#1e293b')
      .attr('text-anchor', 'middle')
      .attr('pointer-events', 'none')
      .text(d => d.label.length > 18 ? d.label.substring(0, 16) + '...' : d.label);

    // Precalentar la simulación: avanza en frío antes de pintar, así el grafo
    // aparece ya bastante estable en vez de ir reacomodándose visiblemente.
    this.simulation.stop();
    for (let i = 0; i < 250; i++) {
      this.simulation.tick();
    }
    this.simulation.alpha(0.3).restart();

    // Límites suaves: solo una red de seguridad para no salir del SVG,
    // no un clamp agresivo que aplaste los nodos contra el borde.
    this.simulation.on('tick', () => {
      link
        .attr('x1', d => (d.source as NodoRed).x!)
        .attr('y1', d => (d.source as NodoRed).y!)
        .attr('x2', d => (d.target as NodoRed).x!)
        .attr('y2', d => (d.target as NodoRed).y!);

      nodeGroup.attr('transform', d => {
        const marginTop = d.size + 30;
        const marginBottom = d.size + 26;
        const marginHorizontal = d.size + 16;

        d.x = Math.max(marginHorizontal, Math.min(width - marginHorizontal, d.x!));
        d.y = Math.max(marginTop, Math.min(height - marginBottom, d.y!));

        return `translate(${d.x},${d.y})`;
      });
    });
  }

  // Extrae el id de un extremo de enlace, ya sea que D3 lo haya resuelto
  // como objeto NodoRed o que aún sea el string original.
  private getNodoId(ref: string | NodoRed): string {
    return typeof ref === 'object' ? ref.id : ref;
  }

  filtrarConexionesRed(nodo: NodoRed): void {
    if (this.nodoRedSeleccionado === nodo.id) {
      this.resetFiltroRed();
      return;
    }

    this.nodoRedSeleccionado = nodo.id;
    this.statusHintRed = `Conexiones aisladas para: ${nodo.label}`;

    const vecinos = new Set<string>([nodo.id]);

    this.enlacesRed.forEach(l => {
      const sourceId = this.getNodoId(l.source as string | NodoRed);
      const targetId = this.getNodoId(l.target as string | NodoRed);

      if (sourceId === nodo.id) vecinos.add(targetId);
      if (targetId === nodo.id) vecinos.add(sourceId);
    });

    const svg = d3.select(this.networkContainer.nativeElement);

    svg.selectAll<SVGLineElement, EnlaceRed>('.net-link')
      .style('opacity', l => {
        const sId = this.getNodoId(l.source as string | NodoRed);
        const tId = this.getNodoId(l.target as string | NodoRed);
        return (sId === nodo.id || tId === nodo.id) ? 1 : 0.05;
      });

    svg.selectAll<SVGGElement, NodoRed>('.net-node')
      .style('opacity', d => vecinos.has(d.id) ? 1 : 0.15);
  }

  resetFiltroRed(): void {
    this.nodoRedSeleccionado = null;
    this.statusHintRed = 'Haz clic en un nodo para aislar sus interconexiones';

    const svg = d3.select(this.networkContainer.nativeElement);
    svg.selectAll('.net-link').style('opacity', 1);
    svg.selectAll('.net-node').style('opacity', 1);
  }

  // --- Traído de OportunidadesComponent: Top 5 brechas y nuevos riesgos ---

  top5Brechas: RiesgoBrecha[] = [
    { id: '1', nombre: 'Debilitamiento de la seguridad ciudadana', tematica: 'social', prioridadLabel: 'Muy alta', preparacionLabel: 'Muy baja', preparacionVal: 23, prioridadVal: 67 },
    { id: '2', nombre: 'Escalada de confrontaciones bélicas', tematica: 'politico', prioridadLabel: 'Muy alta', preparacionLabel: 'Baja', preparacionVal: 48, prioridadVal: 82 },
    { id: '3', nombre: 'Incremento del uso malicioso de deepfakes', tematica: 'tecnologico', prioridadLabel: 'Muy alta', preparacionLabel: 'Muy baja', preparacionVal: 31, prioridadVal: 68 },
    { id: '4', nombre: 'Vulneración de la ciberseguridad', tematica: 'tecnologico', prioridadLabel: 'Alta', preparacionLabel: 'Muy baja', preparacionVal: 22, prioridadVal: 61 },
    { id: '5', nombre: 'Ampliación de la brecha digital', tematica: 'tecnologico', prioridadLabel: 'Muy alta', preparacionLabel: 'Baja', preparacionVal: 56, prioridadVal: 67 },
  ];

  nuevosRiesgos: NuevoRiesgo[] = [
    { id: 'nr1', nombre: 'Manipulación algorítmica de la opinión pública', impacto: 4.08, probabilidad: 3.86 },
    { id: 'nr2', nombre: 'Colapso de cadenas logísticas interoceánicas', impacto: 3.94, probabilidad: 3.41 },
    { id: 'nr3', nombre: 'Fragmentación regulatoria del ciberespacio global', impacto: 3.77, probabilidad: 3.62 },
  ];

  explorarRiesgo(riesgo: NuevoRiesgo): void {
    console.log('Explorando nuevo riesgo:', riesgo);
  }
}