import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbunsComponent } from './main/pages/albuns/albuns.component';

const routes: Routes = [
  {
    path: 'albuns/:id',
    loadChildren: () => import('./main/pages/fotos-album/fotos-album.module').then((m) => m.FotosAlbumModule)
  },
  {
    path: '',
    loadChildren: () => import('./main/pages/albuns/albuns.module').then((m) => m.AlbunsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
