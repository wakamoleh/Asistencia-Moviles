import { Component } from '@angular/core';
import * as QRCode from 'qrcode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencia-profesor',
  templateUrl: './asistencia-profesor.page.html',
  styleUrls: ['./asistencia-profesor.page.scss'],
})
export class AsistenciaProfesorPage {
  opcionAsistencia: string = ''; // Propiedad para almacenar la opción de asistencia seleccionada
  codigoQRGenerado: string = ''; // Propiedad para almacenar el contenido del código QR

  constructor(private router: Router) {}

  generarCodigoQR() {
    // Genera el contenido del código QR a partir de la opción de asistencia seleccionada
    const opcionAsistencia = this.opcionAsistencia;

    // Utiliza la función 'QRCode.toDataURL' de la librería "qrcode" para generar el código QR
    QRCode.toDataURL(opcionAsistencia, (err, url) => {
      if (err) {
        console.error(err);
      } else {
        // Asigna la URL generada a la propiedad código QR
        this.codigoQRGenerado = url;
      }
    });
  }
  getFechaHora(asistencia: string): string {
  
    const fechaHoraActual = new Date();
  
   
    const mensaje = `¡Gracias!, quedas presente en tu clase de ${asistencia}`;
    const fechaHoraFormateada = `${mensaje} - ${fechaHoraActual.toLocaleString()}`;
  
    return fechaHoraFormateada;
  }
  navegarAPaginaPrincipal() {
 
    this.router.navigate(['/home']);
  }
  
}
