import { Component, EventEmitter, Output } from '@angular/core';
import { Client } from '../models/client';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {
    console.log(route);
    this.route.params.subscribe(valores => {
      console.log(valores);
      const id = valores['id'];
      }
    )
  };

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
