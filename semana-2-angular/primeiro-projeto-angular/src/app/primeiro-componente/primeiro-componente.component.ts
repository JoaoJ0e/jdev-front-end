import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.scss'
})
export class PrimeiroComponenteComponent {
  @Input() titulo? : string;
  @Output() botaoClicado = new EventEmitter<string>();

  metodoClick() {
    this.botaoClicado.emit('CLICARAM NO BOTÃO');
  }

}
