import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../../models/Cliente';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent implements OnInit{

  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateList()
  }

  updateList() {
    this.clienteService.getClientes(1).subscribe((clientes) => this.clientes = clientes.content);
  }

  deleteCliente(clienteId: number) {
    this.clienteService.deleteCliente(clienteId).subscribe();
    this.updateList();
  }

  editCliente(cliente: Cliente) {
    this.router.navigate([`/clientes/cadastro/${cliente.id}`])
  }

}
