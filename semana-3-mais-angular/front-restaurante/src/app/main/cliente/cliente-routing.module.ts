import { ListagemModule } from './../../../../../../semana-2-angular/gerenciamento-usuario-produto-newforms/src/app/main/produto/features/listagem/listagem.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './features/listagem/listagem.component';
import { CadastroComponent } from './features/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: ListagemComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'cadastro/:id', component: CadastroComponent},
  { path: 'clientes', component: ListagemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
