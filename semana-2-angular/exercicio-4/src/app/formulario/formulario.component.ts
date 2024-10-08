import { Component, EventEmitter, Output } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  @Output() enviaDados = new EventEmitter<Client>();
  @Output() editClient = new EventEmitter<Client>();

  id='';
  nome='';
  email='';
  cpf='';

  contador = 1;


  enviaCliente() {
    const cliente = {
      id: this.contador,
      nome: this.nome,
      email: this.email,
      cpf: this.cpf
    }

    this.enviaDados.emit(cliente);
    this.nome='';
    this.email='';
    this.cpf='';
    this.contador++;
  }

}
