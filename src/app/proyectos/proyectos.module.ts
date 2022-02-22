import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from './proyectos.component';
import { RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [ProyectosComponent, DetalleComponent],
  imports: [CommonModule, ProyectosRoutingModule, RouterModule],
})
export class ProyectosModule {}
