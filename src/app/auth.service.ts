import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarios = [
    { usuario: 'profe1', contrasena: 'profe2', correo: 'Profesorduoc1@duocuc.cl', nombreProfesor:'Jose luis'},
    { usuario: 'alumno1', contrasena: 'alumno2',correo: 'Alumnoduoc1@duocuc.cl', nombreAlumno:'Juan Diaz'},
    
  ];

  constructor() {}

  verificarCredencialesProfesor(usuario: string, contrasena: string): boolean {
    const profesor = this.usuarios.find((u) => u.usuario === usuario && u.contrasena === contrasena);
    return !!profesor;
  }
  verificarCredencialesAlumno(usuario: string, contrasena: string): boolean {
    const profesor = this.usuarios.find((u) => u.usuario === usuario && u.contrasena === contrasena);
    return !!profesor;
  }
  getNombreAlumno(usuario: string, contrasena: string): any {
    const usuarioEncontrado = this.usuarios.find(
      (u) => u.usuario === usuario && u.contrasena === contrasena
    );
    return usuarioEncontrado ? usuarioEncontrado.nombreAlumno: null ;
  }
  getNombreProfesor(usuario: string, contrasena: string): any {
    const usuarioEncontrado = this.usuarios.find(
      (u) => u.usuario === usuario && u.contrasena === contrasena
    );
    return usuarioEncontrado ? usuarioEncontrado.nombreProfesor: null ;
  }
  
  verificarUsuarioYCorreo(usuario: string, correo: string): boolean {


    const usuarioExistente = this.usuarios.find(
      (u) => u.usuario === usuario && u.correo === correo
    );

    return !!usuarioExistente; 
  }

  cambiarContrasenaProfesor(usuario: string, nuevaContrasena: string): void {

    const profesor = this.usuarios.find((u) => u.usuario === usuario);
    if (profesor) {
      profesor.contrasena = nuevaContrasena;
    }
  }

}
