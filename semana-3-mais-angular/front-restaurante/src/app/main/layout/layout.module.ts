import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderModule } from './header/header.module';
import { NavbarModule } from './navbar/navbar.module';
import { ContentModule } from './content/content.module';
import { LayoutComponent } from './layout.component';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    NavbarModule,
    ContentModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
