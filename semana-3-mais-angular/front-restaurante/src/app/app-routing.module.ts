import { RestauranteComponent } from './main/restaurante/restaurante.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'clientes',
    loadChildren: () => import('./main/cliente/cliente.module').then((m) => m.ClienteModule)
  },
  { path: '',
    loadChildren: () => import('./main/cliente/cliente.module').then((m) => m.ClienteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
