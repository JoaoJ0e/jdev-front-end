import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro-componente',
  templateUrl: './meu-primeiro-componente.component.html',
  styleUrl: './meu-primeiro-componente.component.scss'
})
export class MeuPrimeiroComponenteComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @Input() teste = '';

  ngOnInit(): void {
    console.log('OnInit')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('changes');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
}
