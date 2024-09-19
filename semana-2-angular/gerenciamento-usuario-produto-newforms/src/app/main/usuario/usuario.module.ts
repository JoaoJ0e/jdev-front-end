import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { CadastroModule } from './features/cadastro/cadastro.module';
import { ListagemModule } from './features/listagem/listagem.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UsuarioRoutingModule,
    CadastroModule,
    ListagemModule
  ]
})
export class UsuarioModule { }
