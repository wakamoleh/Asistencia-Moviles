import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restablecer-contrasena',
  templateUrl: './restablecer-contrasena.page.html',
  styleUrls: ['./restablecer-contrasena.page.scss'],
})
export class RestablecerContrasenaPage {
  usuario: string = '';
  correo: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController
    
  ) {}

  async restablecerContrasena() {
    const usuario = this.usuario;
    const correo = this.correo;

    // Verifica que el usuario y el correo coincidan
    if (this.authService.verificarUsuarioYCorreo(usuario, correo)) {
      // Lógica para enviar un mensaje de restablecimiento al correo electrónico
      const mensaje = `Hemos enviado un mensaje a ${correo} con instrucciones para restablecer la contraseña.`;

      const alert = await this.alertController.create({
        header: 'Éxito',
        message: mensaje,
        buttons: ['OK'],
      });

      await alert.present();
      this.router.navigate(['/home']);
    } else {
      // Usuario y correo no coinciden, muestra un mensaje de error
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El usuario y el correo electrónico no coinciden.',
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
