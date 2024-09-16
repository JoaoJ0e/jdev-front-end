import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Título da Página';
  link = 'google.com';

  metodoClicador() {
    alert('ELE CLICOU!')
  }

  emitePesquisa(str: string) {
    alert(str)
  }

}
