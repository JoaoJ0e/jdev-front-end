import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './features/listagem/listagem.component';
import { CadastroComponent } from './features/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: ListagemComponent},
  { path: 'listagem', component: ListagemComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'cadastro/:id', component: CadastroComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
