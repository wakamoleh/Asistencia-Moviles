import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoAlumnoPageRoutingModule } from './ingreso-alumno-routing.module';

import { IngresoAlumnoPage } from './ingreso-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoAlumnoPageRoutingModule
  ],
  declarations: [IngresoAlumnoPage]
})
export class IngresoAlumnoPageModule {}
