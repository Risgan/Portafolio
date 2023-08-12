import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './pages/master-page/header/header.component';
import { FooterComponent } from './pages/master-page/footer/footer.component';
import { NavComponent } from './pages/master-page/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ContribucionesComponent } from './pages/contribuciones/contribuciones.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RedesSocialesComponent } from './pages/master-page/redes-sociales/redes-sociales.component';
import { FloatButtonComponent } from './pages/master-page/float-button/float-button.component';


@NgModule({
  declarations: [
    MasterPageComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProyectosComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ContribucionesComponent,
    ContactoComponent,
    NotFoundComponent,
    RedesSocialesComponent,
    FloatButtonComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule,
  ]
})
export class WebsiteModule { }
