import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../../models/Cliente';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent implements OnInit{

  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClienteService
  ) {}
  
  ngOnInit(): void {
    this.clienteService.getClientes(1).subscribe((clientes) => this.clientes = clientes);
  }


  deleteCliente(arg0: any) {
  throw new Error('Method not implemented.');
  }
  editCliente(_t17: any) {
  throw new Error('Method not implemented.');
  }

}
