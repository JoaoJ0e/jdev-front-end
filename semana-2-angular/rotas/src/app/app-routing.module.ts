import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListagemClientesComponent } from './listagem-clientes/listagem-clientes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: 'dash', component: DashboardComponent},
  { path: 'form', component: FormularioComponent},
  { path: 'form/:id', component: FormularioComponent},
  { path: 'list', component: ListagemClientesComponent},

  {
    path: 'func',
    children: [
      { path: '', component: FormularioComponent},
      { path: 'form', component: FormularioComponent},
      { path: 'list', component: ListagemClientesComponent}
    ]
  },

  { path: '', redirectTo: 'dash', pathMatch: 'full'},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
