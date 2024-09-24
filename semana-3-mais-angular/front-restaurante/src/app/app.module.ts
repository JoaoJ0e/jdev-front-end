import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './main/cliente/cliente.module';
import { LayoutModule } from './main/layout/layout.module';
import { RestauranteModule } from './main/restaurante/restaurante.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ClienteModule,
    RestauranteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
