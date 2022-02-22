import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { ProyectosComponent } from './proyectos.component';

const routes: Routes = [
  {
    path: '',
    component: ProyectosComponent,
  },
  {
    path: 'detalle/:urlName',
    component: DetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectosRoutingModule {}
