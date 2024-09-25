import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { CadastroComponent } from './features/cadastro/cadastro.component';
import { ListagemComponent } from './features/listagem/listagem.component';
import { ListagemModule } from './features/listagem/listagem.module';
import { CadastroModule } from './features/cadastro/cadastro.module';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ClienteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ClienteRoutingModule,
    ListagemModule,
    CadastroModule
  ],
  exports: [
    ClienteComponent
  ]
})
export class ClienteModule { }
