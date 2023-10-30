import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoProfesorPageRoutingModule } from './ingreso-profesor-routing.module';

import { IngresoProfesorPage } from './ingreso-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoProfesorPageRoutingModule
  ],
  declarations: [IngresoProfesorPage]
})
export class IngresoProfesorPageModule {}
