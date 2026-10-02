import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import localeEsPe from '@angular/common/locales/es-PE';

import { StepsModule } from 'primeng/steps';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ChipModule } from 'primeng/chip';
import { DialogModule } from 'primeng/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TerritorialComponent } from './territorial/territorial.component';
import { SectorialComponent } from './sectorial/sectorial.component';
import { AccordionModule } from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';
import { MessageModule } from 'primeng/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FormsModule } from '@angular/forms';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { TabViewModule } from 'primeng/tabview';
import { CarouselModule } from 'primeng/carousel';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';



import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { EventoComponent } from './evento/evento.component';
import { ChartModule } from 'primeng/chart';
import { ActualidadComponent } from './actualidad/actualidad.component';
import { EscenariosComponent } from './escenarios/escenarios.component';
import { ProspectivaComponent } from './prospectiva/prospectiva.component';

import { RiesgoComponent } from './riesgo/riesgo.component';
import { GuiaInteractivaComponent } from './guia-interactiva/guia-interactiva.component';
import { EncuentrosComponent } from './encuentros/encuentros.component';
import { ChartComponent } from './components/chart/chart.component';
import { OportunidadesComponent } from './oportunidades/oportunidades.component';
import { FichaComponent } from './ficha/ficha.component';
import { GlobalNacionalComponent } from './global-nacional/global-nacional.component';
import { MetodosComponent } from './guia-interactiva/pages/metodos/metodos.component';
import { RadarVigilanciaComponent } from './radar-vigilancia/radar-vigilancia.component';
import { PaginatorModule } from 'primeng/paginator';



registerLocaleData(localeEsPe);

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TerritorialComponent,
    SectorialComponent,
    HeaderComponent,
    FooterComponent,
    ChatbotComponent,
    EventoComponent,
    ActualidadComponent,
    EscenariosComponent,
    ProspectivaComponent,
    MainLayoutComponent,
    RiesgoComponent,
    GuiaInteractivaComponent,
    EncuentrosComponent,
    OportunidadesComponent,
    FichaComponent,
    GlobalNacionalComponent,
    MetodosComponent,
    RadarVigilanciaComponent
  ],
  imports: [
    BrowserModule,
    PaginatorModule,
    AppRoutingModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    ButtonModule,
    CardModule,
    AccordionModule,
    BadgeModule,
    MessageModule,
    BrowserAnimationsModule,
    OverlayPanelModule,
    FormsModule,
    ChartModule,
    DataViewModule,
    TableModule,
    TagModule,
    DropdownModule,
    TooltipModule,
    TabViewModule,
    CarouselModule,
    StepsModule,
    ProgressBarModule,
    SelectButtonModule,
    ChipModule,
    DialogModule,
    ChartComponent
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-PE' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
