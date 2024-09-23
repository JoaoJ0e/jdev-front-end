import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotosAlbumRouterModule } from './fotos-album-routing.module';
import { ListagemComponent } from './features/listagem/listagem.component';

@NgModule({
  declarations: [
    ListagemComponent
  ],
  imports: [
    CommonModule,
    FotosAlbumRouterModule
  ]
})
export class FotosAlbumModule { }
