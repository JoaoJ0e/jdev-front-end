import { Component, Input } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  client?: Object;

  clientes: any[] = [];

  addCliente(cliente: any) {
    this.clientes.push(cliente);
    console.log(cliente)
  }

  deleteCliente(cliente: any) {
    this.clientes = this.clientes.filter(c => c.id != cliente.id);
    console.log(cliente)
  }

  editaCliente(cliente: Client) {
    this.clientes.forEach(clientList => {
      if (clientList.id === cliente.id) {
        clientList.nome = cliente.nome;
        clientList.email = cliente.email;
        clientList.cpf = cliente.cpf;
      }
    })
  }
}
