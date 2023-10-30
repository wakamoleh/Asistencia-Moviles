import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso-alumno',
  templateUrl: './ingreso-alumno.page.html',
  styleUrls: ['./ingreso-alumno.page.scss'],
})
export class IngresoAlumnoPage {
  nombreAlumno: string ='';
  usuario: string = '';
  contrasena: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController
  ) {}

  async iniciarSesion() {
    const usuario = this.usuario;
    const contrasena = this.contrasena;
    const nombreAlumno = this.authService.getNombreAlumno(usuario, contrasena);

    if (this.authService.verificarCredencialesAlumno(usuario, contrasena)) {
      this.nombreAlumno = nombreAlumno;
      const alert = await this.alertController.create({
        header: 'Inicio de sesion correcto',
        message: 'Bienvenido '+ this.nombreAlumno,
        buttons: ['Aceptar'],
      });
      await alert.present();
      this.router.navigate(['/asistencia-alumno']);
    } else {

      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrectos',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
  navegarARestablecerContrasena() {
    this.router.navigate(['/restablecer-contrasena']);
  }
  irAPaginaPrincipal() {
    this.router.navigate(['/home']);
  }
  irACambioContrasena() {
    this.router.navigate(['/cambio-contrasena']);
  }
}
