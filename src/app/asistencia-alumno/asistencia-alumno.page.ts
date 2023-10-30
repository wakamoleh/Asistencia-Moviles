import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencia-alumno',
  templateUrl: 'asistencia-alumno.page.html',
  styleUrls: ['asistencia-alumno.page.scss']
})
export class AsistenciaAlumnoPage {

  constructor(private router: Router,) {}

  simularEscaneoQR() {

    alert('Asistencia registrada'); 
  }
  irAPaginaPrincipal() {
    this.router.navigate(['/home']);
  }
}
