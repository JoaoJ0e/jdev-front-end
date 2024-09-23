import { FotosAlbumComponent } from './fotos-album.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '/:id', component: FotosAlbumComponent}

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
