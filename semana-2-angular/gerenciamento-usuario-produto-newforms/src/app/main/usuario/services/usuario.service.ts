import { Injectable } from '@angular/core';
import { Usuario } from '../../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private id = 0;
  private usuarios: Array<Usuario> = [];

  addUsuario(usuario: Usuario) {
    usuario.id = this.id;
    this.usuarios.push(usuario);
    this.id++;
  }

  removeUsuario(id: number) {
    this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
  }

  get getUsuarios() {
    return this.usuarios;
  }

  findById(id: number): Usuario | undefined {
    return this.usuarios.find(usuario => usuario.id == id);
  }

  editUsuario(usuario: Usuario) {
    this.usuarios.forEach(usuarioList => {
      if (usuarioList.id == usuario.id) {
        usuarioList.nome = usuario.nome;
        usuarioList.idade = usuario.idade;
        return;
      }
    })
  }
}
