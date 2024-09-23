import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbunsRoutingModule } from './albuns-routing.module';
import { ListagemComponent } from './features/listagem/listagem.component';
import { AlbunsComponent } from './albuns.component';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AlbunsComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule,
    AlbunsRoutingModule,
  ],
  exports: [
    AlbunsComponent,
    ListagemComponent
  ]
})
export class AlbunsModule { }
