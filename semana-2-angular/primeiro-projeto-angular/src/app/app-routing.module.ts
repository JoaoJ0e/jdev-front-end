import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: '', redirectTo: 'primeiro-component', pathMatch: 'full'},
  { path: 'primeiro-component', component: PrimeiroComponenteComponent},
  { path: 'formulario', component: FormularioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
