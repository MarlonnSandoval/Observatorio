import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component'; // Importa el layout
import { IndexComponent } from './index/index.component';
import { TerritorialComponent } from './territorial/territorial.component';
import { SectorialComponent } from './sectorial/sectorial.component';
import { EventoComponent } from './evento/evento.component';
import { ActualidadComponent } from './actualidad/actualidad.component';
import { EscenariosComponent } from './escenarios/escenarios.component';
import { RiesgoComponent } from './riesgo/riesgo.component';
import { GuiaInteractivaComponent } from './guia-interactiva/guia-interactiva.component';
import { EncuentrosComponent } from './encuentros/encuentros.component';
import { OportunidadesComponent } from './oportunidades/oportunidades.component';

import { MetodosComponent } from './guia-interactiva/pages/metodos/metodos.component';
import { FichaComponent } from './ficha/ficha.component';
import { GlobalNacionalComponent } from './global-nacional/global-nacional.component';
import { RadarVigilanciaComponent } from './radar-vigilancia/radar-vigilancia.component';

const routes: Routes = [
  // Rutas con Header y Footer
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: IndexComponent },
      { path: 'territorial', component: TerritorialComponent },
      { path: 'sectorial', component: SectorialComponent },
      { path: 'evento', component: EventoComponent },
      { path: 'actualidad', component: ActualidadComponent },
      { path: 'escenarios', component: EscenariosComponent },
      { path: 'riesgo', component: RiesgoComponent },
      { path: 'guia-interactiva', component: GuiaInteractivaComponent },
      { path: 'encuentros', component: EncuentrosComponent },
      { path: 'oportunidades', component: OportunidadesComponent },
      { path: 'ficha', component: FichaComponent },
      { path: 'tendencias', component: GlobalNacionalComponent },
      { path: 'guia-interactiva/metodo/:id', component: MetodosComponent },
      { path: 'radar', component: RadarVigilanciaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }