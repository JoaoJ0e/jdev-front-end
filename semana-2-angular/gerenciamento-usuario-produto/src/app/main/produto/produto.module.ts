import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto.component';
import { CadastroModule } from './features/cadastro/cadastro.module';
import { ListagemModule } from './features/listagem/listagem.module';
import { RouterModule } from '@angular/router';
import { ProdutoRoutingModule } from './produto-routing.module';



@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProdutoRoutingModule,
    CadastroModule,
    ListagemModule
  ]
})
export class ProdutoModule { }
