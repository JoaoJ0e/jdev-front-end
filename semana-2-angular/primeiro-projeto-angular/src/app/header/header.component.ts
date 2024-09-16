import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() titulo? : string;
  @Output() emitePesquisa = new EventEmitter<string>();

  pesquisa?: string;

  emiteValor() {
    this.emitePesquisa.emit(this.pesquisa);
  }
}
