import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoProfesorPage } from './ingreso-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoProfesorPageRoutingModule {}
