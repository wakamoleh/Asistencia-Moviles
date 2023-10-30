import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoAlumnoPage } from './ingreso-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoAlumnoPageRoutingModule {}
