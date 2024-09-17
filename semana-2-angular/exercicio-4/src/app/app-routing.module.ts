import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListagemClientesComponent } from './listagem-clientes/listagem-clientes.component';

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full'},
  {path: 'form', component: FormularioComponent},
  {path: 'list', component: ListagemClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
