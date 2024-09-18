import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuarios: Array<{ nombre: string; correo: string }> = [];
  nuevoUsuario = { nombre: '', correo: '' };

  agregarUsuario(usuarioForm: any) {
    if (this.nuevoUsuario.nombre && this.nuevoUsuario.correo) {
      this.usuarios.push({ ...this.nuevoUsuario });

      this.nuevoUsuario = { nombre: '', correo: '' };
      usuarioForm.resetForm();
    }
  }
}
