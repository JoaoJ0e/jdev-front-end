import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { OutletContext } from '@angular/router';
import { Client } from '../models/client';

@Component({
  selector: 'app-listagem-clientes',
  templateUrl: './listagem-clientes.component.html',
  styleUrl: './listagem-clientes.component.scss'
})
export class ListagemClientesComponent implements OnChanges{
  @Output() requestDelete = new EventEmitter<Client>();
  @Output() requestEdit = new EventEmitter<Client>();
  @Input() clientes: any[] = [];

  deletaCliente(cliente: Client) {
    this.requestDelete.emit(cliente);
  }

  editaCliente(cliente: Client) {
    this.requestEdit.emit(cliente);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ALTERACOES FEITAS')
  }
}
