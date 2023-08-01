import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ContribucionesComponent } from './pages/contribuciones/contribuciones.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children:
    [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'proyectos',
        component: ProyectosComponent,
        pathMatch: 'full'
      },
      {
        path: 'experiencia',
        component: ExperienciaComponent,
        pathMatch: 'full'
      },
      {
        path: 'educacion',
        component: EducacionComponent,
        pathMatch: 'full'
      },
      {
        path: 'habilidades',
        component: HabilidadesComponent,
        pathMatch: 'full'
      },
      {
        path: 'contribuciones',
        component: ContribucionesComponent,
        pathMatch: 'full'
      },
      {
        path: 'contacto',
        component: ContactoComponent,
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
