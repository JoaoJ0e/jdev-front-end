import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeiroModuloRoteamentoRoutingModule } from './primeiro-modulo-roteamento-routing.module';
import { PrimeiroModuloRoteamentoComponent } from './primeiro-modulo-roteamento.component';
import { SegundoModuloModule } from "../segundo-modulo/segundo-modulo.module";
import { ListagemComponent } from './components/listagem/listagem.component';
import { FormularioComponent } from './components/formulario/formulario.component';


@NgModule({
  declarations: [
    PrimeiroModuloRoteamentoComponent,
    ListagemComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    PrimeiroModuloRoteamentoRoutingModule
]
})
export class PrimeiroModuloRoteamentoModule { }
