import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../../models/usuario';
import { UsuarioService } from '../../../usuario/services/usuario.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent implements OnInit{
  usuarios: Array<Usuario> = [];

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.updateList();
  }

  updateList() {
    this.usuarios = this.usuarioService.getUsuarios;
  }

  removeUsuario(id?: number) {
    if (id || id == 0) {
      this.usuarioService.removeUsuario(id);
      this.updateList();
    }
  }

  editUsuario(usuario: Usuario) {
    this.router.navigate([`/cadastro/${usuario.id}`])
  }
}
