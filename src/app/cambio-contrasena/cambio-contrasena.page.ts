import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambio-contrasena',
  templateUrl: './cambio-contrasena.page.html',
  styleUrls: ['./cambio-contrasena.page.scss'],
})
export class CambioContrasenaPage {
  usuario: string = ''; // Usuario actual
  contrasenaActual: string = ''; // Contraseña actual
  nuevaContrasena: string = ''; // Nueva contraseña

  constructor(private router: Router,
    private authService: AuthService,
    private alertController: AlertController) {}

  async cambiarContrasena() {
    const usuario = this.usuario;
    const contrasenaActual = this.contrasenaActual;
    const nuevaContrasena = this.nuevaContrasena;

    // Verifica las credenciales actuales
    if (this.authService.verificarCredencialesProfesor(usuario, contrasenaActual)) {
      // Las credenciales son válidas, cambia la contraseña
      this.authService.cambiarContrasenaProfesor(usuario, nuevaContrasena);

      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Contraseña actualizada con éxito.',
        buttons: ['OK'],
      });

      await alert.present();
      this.router.navigate(['/home']);
    } else {
      // Las credenciales actuales son incorrectas
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Contraseña actual es incorrecta.',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
  navegarAPaginaPrincipal() {
    // Redirige al usuario a la página principal
    this.router.navigate(['/home']);
  }
}
