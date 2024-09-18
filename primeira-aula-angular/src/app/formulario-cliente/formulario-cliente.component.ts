import { ClientService } from './../services/client.service';
import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Client } from '../models/client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrl: './formulario-cliente.component.scss'
})
export class FormularioClienteComponent {
  id?: number;
  name?: string;
  age?: number;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {
    this.activeRoute.params.subscribe(valores => {
      const client: Client | undefined = this.clientService.findById(valores['id']);
      this.editClient(client);
    });
  }

  cadastrarCliente() {
    if (this.name && this.age && !this.id) {
      this.clientService.addClient({ name: this.name, age: this.age });
    } else if (this.id && this.name && this.age) {
      this.clientService.editClient({ id: this.id, name: this.name, age: this.age });
      this.router.navigate(['/listagem']);
    }

    this.name = '';
    this.id = undefined;
    this.age = undefined;
  }

  editClient(client?: Client) {
    if (client) {
      this.id = client.id;
      this.name = client.name;
      this.age = client.age;
    }
  }
}
