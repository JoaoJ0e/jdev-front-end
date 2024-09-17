import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.scss'
})
export class PrimeiroComponenteComponent implements OnInit, AfterViewInit, OnChanges{
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  @Input() titulo? : string;
  @Output() botaoClicado = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('ON INIT')
  }


  metodoClick() {
    this.botaoClicado.emit('CLICARAM NO BOTÃO');
  }

}
