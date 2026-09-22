import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  abrirEnlace() {
    window.open('https://geo.ceplan.gob.pe/', '_blank');
  }
}
