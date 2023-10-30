import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ingreso-alumno',
    loadChildren: () => import('./ingreso-alumno/ingreso-alumno.module').then( m => m.IngresoAlumnoPageModule)
  },
  {
    path: 'ingreso-profesor',
    loadChildren: () => import('./ingreso-profesor/ingreso-profesor.module').then( m => m.IngresoProfesorPageModule)
  },
  {
    path: 'cambio-contrasena',
    loadChildren: () => import('./cambio-contrasena/cambio-contrasena.module').then( m => m.CambioContrasenaPageModule)
  },
  {
    path: 'restablecer-contrasena',
    loadChildren: () => import('./restablecer-contrasena/restablecer-contrasena.module').then( m => m.RestablecerContrasenaPageModule)
  },
  {
    path: 'asistencia-profesor',
    loadChildren: () => import('./asistencia-profesor/asistencia-profesor.module').then( m => m.AsistenciaProfesorPageModule)
  },
  {
    path: 'asistencia-alumno',
    loadChildren: () => import('./asistencia-alumno/asistencia-alumno.module').then( m => m.AsistenciaAlumnoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
