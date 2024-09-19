import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../../models/usuario';
import { UsuarioService } from '../../../usuario/services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  id?: number;
  nome?: string;
  idade?: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.activatedRoute.params.subscribe(valores => {
      const usuario: Usuario | undefined = this.usuarioService.findById(valores['id']);
      this.editUsuario(usuario);
    });
  }

  cadastrarUsuario() {
    if (this.nome && this.idade && !this.id) {
      this.usuarioService.addUsuario({nome: this.nome, idade: this.idade })
    } else if (this.id && this.nome && this.idade) {
      this.usuarioService.editUsuario({ id: this.id, nome: this.nome, idade: this.idade});
      this.router.navigate(['/listagem'])
    }

    this.nome = '';
    this.id = undefined;
    this.idade = undefined;
  }

  editUsuario(usuario?: Usuario) {
    if (usuario) {
      this.id = usuario.id;
      this.nome = usuario.nome;
      this.idade = usuario.idade;
    }
  }

}
