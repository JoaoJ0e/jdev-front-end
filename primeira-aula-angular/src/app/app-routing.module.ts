import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeuPrimeiroComponenteComponent } from './meu-primeiro-componente/meu-primeiro-componente.component';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';
import { ListagemClienteComponent } from './listagem-cliente/listagem-cliente.component';

const routes: Routes = [
  { path: '', redirectTo: 'meu-primeiro-component', pathMatch: 'full' },
  { path: 'meu-primeiro-component', component: MeuPrimeiroComponenteComponent },
  { path: 'formulario', component: FormularioClienteComponent },
  { path: 'formulario/:id', component: FormularioClienteComponent },
  { path: 'listagem', component: ListagemClienteComponent },
  {
    path: 'client',
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'form', component: FormularioClienteComponent },
      { path: 'formulario/:id', component: FormularioClienteComponent },
      { path: 'list', component: ListagemClienteComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
