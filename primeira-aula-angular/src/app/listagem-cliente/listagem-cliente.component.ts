import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../models/client';
import { ClientService } from '../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-cliente.component.html',
  styleUrl: './listagem-cliente.component.scss'
})
export class ListagemClienteComponent implements OnInit{
  clients: Array<Client> = [];

  constructor(
    private router: Router,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.updateList();
  }

  removeClient(id?: number) {
    if (id || id == 0) {
      this.clientService.removeClient(id);
      this.updateList();
    }
  }

  editClient(client: Client) {
    this.router.navigate([`/formulario/${client.id}`])
  }

  updateList() {
    this.clients = this.clientService.getClients;
  }
}
