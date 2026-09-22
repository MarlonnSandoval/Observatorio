import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

type Tematica = 'social' | 'tecnologico' | 'ambiental' | 'economico' | 'politico';

interface Periodo {
  label: string;
  value: string;
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

// Agrega estas interfaces al archivo
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

@Component({
  selector: 'app-oportunidades',
  templateUrl: './oportunidades.component.html',
  styleUrls: ['./oportunidades.component.css']
})
export class OportunidadesComponent implements OnInit, AfterViewInit {
  @ViewChild('networkContainer', { static: false })
  private networkContainer!: ElementRef<HTMLDivElement>;
  colorMap: Record<Tematica, string> = {
    ambiental: 'rgb(5, 145, 65)',
    economico: 'rgb(239, 197, 20)',
    politico: 'rgb(154, 32, 226)',
    social: 'rgb(255, 85, 51)',
    tecnologico: 'rgb(78, 135, 198)'
  };

  periodos: Periodo[] = [];
  periodoSeleccionado: string = '2026 - 2036';

  kpis = {
    totalRiesgos: 47,
    mayorImpacto: { valor: 4.62, titulo: 'Riesgos de exacerbación de la criminalidad' },
    mayorProbabilidad: { valor: 4.51, titulo: 'Riesgos de vulneración de la ciberseguridad' },
    masInterconectado: 'Riesgos de escalada de confrontaciones bélicas',
    mayorBrecha: 'Escalada de confrontaciones bélicas'
  };

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

  // Mantén tus propiedades existentes (heroSlides, periodos, kpis, colorMap, riesgos, etc.)

  nodoRedSeleccionado: string | null = null;
  statusHintRed: string = 'Haz clic en un nodo para aislar sus interconexiones';

  // Datos para la Red de Interconexiones
  nodosRed: NodoRed[] = [
    { id: 'r1', label: 'Ejemplo1', cat: 'social', size: 28 },
    { id: 'r2', label: 'Ejemplo2', cat: 'economico', size: 32 },
    { id: 'r3', label: 'Ejemplo3', cat: 'politico', size: 24 },
    { id: 'r4', label: 'Ejemplo4', cat: 'ambiental', size: 18 },
    { id: 'r5', label: 'Ejemplo5', cat: 'tecnologico', size: 16 },
    { id: 'r6', label: 'Ejemplo6', cat: 'social', size: 22 },
    { id: 'r7', label: 'Ejemplo7', cat: 'economico', size: 18 },
    { id: 'r8', label: 'Ejemplo8', cat: 'politico', size: 14 },
    { id: 'r9', label: 'Ejemplo9', cat: 'ambiental', size: 14 },
    { id: 'r10', label: 'Ejemplo10', cat: 'tecnologico', size: 28 },
    { id: 'r11', label: 'Ejemplo11', cat: 'social', size: 32 },
    { id: 'r12', label: 'Ejemplo12', cat: 'economico', size: 24 },
    { id: 'r13', label: 'Ejemplo13', cat: 'politico', size: 18 },
    { id: 'r14', label: 'Ejemplo14', cat: 'ambiental', size: 16 },
    { id: 'r15', label: 'Ejemplo15', cat: 'tecnologico', size: 22 },
    { id: 'r16', label: 'Ejemplo16', cat: 'social', size: 18 },
    { id: 'r17', label: 'Ejemplo17', cat: 'economico', size: 14 },
    { id: 'r18', label: 'Ejemplo18', cat: 'politico', size: 28 },
    { id: 'r19', label: 'Ejemplo19', cat: 'ambiental', size: 32 },
    { id: 'r20', label: 'Ejemplo20', cat: 'tecnologico', size: 24 },
    { id: 'r21', label: 'Ejemplo21', cat: 'social', size: 18 },
    { id: 'r22', label: 'Ejemplo22', cat: 'economico', size: 16 },
    { id: 'r23', label: 'Ejemplo23', cat: 'politico', size: 22 },
    { id: 'r24', label: 'Ejemplo24', cat: 'ambiental', size: 18 },
    { id: 'r25', label: 'Ejemplo25', cat: 'tecnologico', size: 14 },
    { id: 'r26', label: 'Ejemplo26', cat: 'social', size: 28 },
    { id: 'r27', label: 'Ejemplo27', cat: 'economico', size: 32 },
    { id: 'r28', label: 'Ejemplo28', cat: 'politico', size: 24 },
    { id: 'r29', label: 'Ejemplo29', cat: 'ambiental', size: 18 },
    { id: 'r30', label: 'Ejemplo30', cat: 'tecnologico', size: 16 },
    { id: 'r31', label: 'Ejemplo31', cat: 'social', size: 22 },
    { id: 'r32', label: 'Ejemplo32', cat: 'economico', size: 18 },
    { id: 'r33', label: 'Ejemplo33', cat: 'politico', size: 14 },
    { id: 'r34', label: 'Ejemplo34', cat: 'ambiental', size: 28 },
    { id: 'r35', label: 'Ejemplo35', cat: 'tecnologico', size: 32 },
    { id: 'r36', label: 'Ejemplo36', cat: 'social', size: 24 },
    { id: 'r37', label: 'Ejemplo37', cat: 'economico', size: 18 },
    { id: 'r38', label: 'Ejemplo38', cat: 'politico', size: 16 },
    { id: 'r39', label: 'Ejemplo39', cat: 'ambiental', size: 22 },
    { id: 'r40', label: 'Ejemplo40', cat: 'tecnologico', size: 28 },
    { id: 'r41', label: 'Ejemplo41', cat: 'social', size: 32 },
    { id: 'r42', label: 'Ejemplo42', cat: 'economico', size: 24 },
    { id: 'r43', label: 'Ejemplo43', cat: 'politico', size: 18 },
    { id: 'r44', label: 'Ejemplo44', cat: 'ambiental', size: 16 },
    { id: 'r45', label: 'Ejemplo45', cat: 'tecnologico', size: 22 },
    { id: 'r46', label: 'Ejemplo46', cat: 'social', size: 18 },
    { id: 'r47', label: 'Ejemplo47', cat: 'economico', size: 14 },
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

  descargarPDF(): void {
    console.log('Descargando informe PDF...');
  }


  private generarRedInterconexiones(): void {
    if (!this.networkContainer) return;
    const element = this.networkContainer.nativeElement;
    d3.select(element).selectAll('svg').remove();

    const width = element.clientWidth || 700;
    const height = 680; // más alto para dar espacio a que la red "respire"

    const svg = d3.select(element)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`);

    svg.append('rect')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', 'transparent')
      .on('click', () => this.resetFiltroRed());

    // 1. FUERZAS RECALIBRADAS PARA UN LAYOUT ORGÁNICO TIPO "BURBUJAS"
    // - charge moderado (no -1200) para que los nodos se repelan sin salir disparados
    // - collide con más padding para dejar sitio a la etiqueta de texto
    // - sin "clamp" duro: en su lugar, forceX/forceY suaves que mantienen todo centrado
    //   (el clamp duro es lo que causaba que los nodos se apilaran contra los bordes)
    const simulation = d3.forceSimulation<NodoRed>(this.nodosRed)
      .force('link', d3.forceLink<NodoRed, EnlaceRed>(this.enlacesRed)
        .id(d => d.id)
        .distance(d => 60 + (5 - Math.min(d.weight, 5)) * 10) // enlaces más fuertes = nodos más juntos
        .strength(0.4)
      )
      .force('charge', d3.forceManyBody<NodoRed>()
        .strength(d => -180 - d.size * 4) // nodos grandes repelen más para no aplastar a sus vecinos
        .distanceMax(320)
      )
      .force('collide', d3.forceCollide<NodoRed>()
        .radius(d => d.size + 22)
        .strength(1) // colisión estricta: evita que los círculos se superpongan
        .iterations(2)
      )
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('x', d3.forceX(width / 2).strength(0.04))
      .force('y', d3.forceY(height / 2).strength(0.05))
      .velocityDecay(0.4)
      .alphaDecay(0.018);

    // 2. "PRECALENTAR" la simulación: avanzamos varios ticks en frío antes de pintar,
    // así el grafo aparece ya estabilizado en vez de ir reacomodándose visiblemente
    simulation.stop();
    for (let i = 0; i < 250; i++) {
      simulation.tick();
    }
    simulation.alpha(0.3).restart();

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

    // 3. LÍMITES SUAVES: solo una red de seguridad para que nada quede fuera del SVG,
    // no un clamp agresivo que aplaste los nodos contra el borde
    simulation.on('tick', () => {
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

  filtrarConexionesRed(nodo: NodoRed): void {
    if (this.nodoRedSeleccionado === nodo.id) {
      this.resetFiltroRed();
      return;
    }

    this.nodoRedSeleccionado = nodo.id;
    this.statusHintRed = `Conexiones aisladas para: ${nodo.label}`;

    const vecinos = new Set<string>();
    vecinos.add(nodo.id);

    this.enlacesRed.forEach(l => {
      const sourceId = typeof l.source === 'object' ? (l.source as NodoRed).id : l.source;
      const targetId = typeof l.target === 'object' ? (l.target as NodoRed).id : l.target;

      if (sourceId === nodo.id) vecinos.add(targetId as string);
      if (targetId === nodo.id) vecinos.add(sourceId as string);
    });

    const svg = d3.select(this.networkContainer.nativeElement);

    svg.selectAll<SVGLineElement, EnlaceRed>('.net-link')
      .style('opacity', l => {
        const sId = typeof l.source === 'object' ? (l.source as NodoRed).id : l.source;
        const tId = typeof l.target === 'object' ? (l.target as NodoRed).id : l.target;
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

  top5Brechas: RiesgoBrecha[] = [
    { id: '1', nombre: 'Riesgo A', tematica: 'social', prioridadLabel: 'Muy alta', preparacionLabel: 'Muy baja', preparacionVal: 20, prioridadVal: 70 },
    { id: '2', nombre: 'Riesgo B', tematica: 'social', prioridadLabel: 'Muy alta', preparacionLabel: 'Muy baja', preparacionVal: 30, prioridadVal: 70 },
    { id: '3', nombre: 'Riesgo C', tematica: 'social', prioridadLabel: 'Muy alta', preparacionLabel: 'Muy baja', preparacionVal: 32, prioridadVal: 60 },
    { id: '4', nombre: 'Riesgo D', tematica: 'social', prioridadLabel: 'Muy alta', preparacionLabel: 'Muy baja', preparacionVal: 20, prioridadVal: 25 },
    { id: '5', nombre: 'Riesgo E', tematica: 'social', prioridadLabel: 'Muy alta', preparacionLabel: 'Muy baja', preparacionVal: 60, prioridadVal: 25 }
  ];

  nuevosRiesgos: NuevoRiesgo[] = [
    { id: 'nr1', nombre: 'Riesgo de vulneración de la ciberseguridad', impacto: 4.29, probabilidad: 4.27 },
    { id: 'nr2', nombre: 'Riesgo de vulneración de la ciberseguridad', impacto: 4.19, probabilidad: 4.25 },
    { id: 'nr3', nombre: 'Riesgo de vulneración de la ciberseguridad', impacto: 4.04, probabilidad: 4.04 }
  ];

  explorarRiesgo(riesgo: NuevoRiesgo): void {
    console.log('Explorando nuevo riesgo:', riesgo);
  }
}