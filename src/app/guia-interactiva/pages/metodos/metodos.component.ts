import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetodosService, FichaMetodo } from './metodo.service';

@Component({
  selector: 'app-metodos',
  templateUrl: './metodos.component.html',
  styleUrls: ['./metodos.component.css']
})
export class MetodosComponent implements OnInit {
  metodo?: FichaMetodo;
  seccionActiva: string = 'donde-se-aplica';
  pasoSeleccionado: number = 1;

  // Menú de navegación rápida de la barra lateral
  navItems = [
    { id: 'donde-se-aplica', titulo: '3.1. Dónde se aplica', icon: 'pi-compass' },
    { id: 'definicion', titulo: 'Definición', icon: 'pi-book' },
    { id: 'herramientas', titulo: 'Estructura / Herramientas', icon: 'pi-wrench' },
    { id: 'pasos', titulo: 'Pasos de implementación', icon: 'pi-list' },
    { id: 'ventajas-riesgos', titulo: 'Ventajas y Riesgos', icon: 'pi-shield' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private metodosService: MetodosService
  ) {}

  ngOnInit(): void {
    // Escuchar el parámetro ID o número de la URL
    const id = this.route.snapshot.paramMap.get('id') || '3';
    this.metodo = this.metodosService.getMetodoByNum(id);
  }

  scrollToSection(id: string): void {
    this.seccionActiva = id;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  seleccionarPaso(numero: number): void {
    this.pasoSeleccionado = numero;
  }

  volver(): void {
    this.router.navigate(['/guia-interactiva']);
  }
}   