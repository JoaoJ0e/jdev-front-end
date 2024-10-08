import { FotosAlbumComponent } from './fotos-album.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListagemComponent } from './features/listagem/listagem.component';

const routes: Routes = [
  {
    path: '', component: FotosAlbumComponent,
    children: [
      { path: '', component: ListagemComponent },
      { path: ':id', component: ListagemComponent }
    ]
  }

]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class FotosAlbumRouterModule{}
