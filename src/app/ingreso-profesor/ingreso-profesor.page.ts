import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { AlertController } from '@ionic/angular'; // Importa AlertController

@Component({
  selector: 'app-ingreso-profesor',
  templateUrl: './ingreso-profesor.page.html',
  styleUrls: ['./ingreso-profesor.page.scss'],
})
export class IngresoProfesorPage {
  nombreProfesor: string ='';
  usuario: string = '';
  contrasena: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController // Inyecta AlertController
  ) {}

  async iniciarSesion() {
    const usuario = this.usuario;
    const contrasena = this.contrasena;
    const nombreProfesor = this.authService.getNombreProfesor(usuario, contrasena);

    if (this.authService.verificarCredencialesProfesor(usuario, contrasena)) {
      this.nombreProfesor = nombreProfesor;
      const alert = await this.alertController.create({
        header: 'Inicio de sesion correcto',
        message: 'Bienvenido '+ this.nombreProfesor,
        buttons: ['Aceptar'],
      });
      await alert.present();
      this.router.navigate(['/asistencia-profesor']);

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
