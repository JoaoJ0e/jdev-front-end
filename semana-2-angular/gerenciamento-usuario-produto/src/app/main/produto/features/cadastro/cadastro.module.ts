import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { FormsModule } from '@angular/forms';
import { ListagemModule } from "../listagem/listagem.module";



@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ListagemModule
],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
