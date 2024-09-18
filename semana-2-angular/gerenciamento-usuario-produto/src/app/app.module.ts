import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoModule } from './main/produto/produto.module';
import { UsuarioModule } from './main/usuario/usuario.module';
import { CadastroModule } from "./main/produto/features/cadastro/cadastro.module";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutoModule,
    UsuarioModule,
    CadastroModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
