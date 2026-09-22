import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-chart',
  standalone: true,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  // Referencia al contenedor SVG en el HTML
  @ViewChild('chartContainer', { static: true }) 
  private chartContainer!: ElementRef<SVGElement>;

  ngOnInit(): void {
    this.createSvgChart();
  }

  private createSvgChart(): void {
    const element = this.chartContainer.nativeElement;
    
    // Seleccionar el SVG con D3
    const svg = d3.select(element)
      .attr('width', 400)
      .attr('height', 400);

    // Ejemplo básico: Renderizar un círculo
    svg.append('circle')
      .attr('cx', 200)
      .attr('cy', 200)
      .attr('r', 80)
      .style('fill', '#3f51b5')
      .style('cursor', 'pointer')
      .on('mouseover', function() {
        d3.select(this).style('fill', '#ff4081');
      })
      .on('mouseout', function() {
        d3.select(this).style('fill', '#3f51b5');
      });
  }
}