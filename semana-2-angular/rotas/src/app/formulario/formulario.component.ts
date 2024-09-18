import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, NgModule } from '@angular/core';
import { Client } from '../models/client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnChanges{
  @Output() cadastrarClienteEvent = new EventEmitter<Client>();
  @Output() editClient = new EventEmitter<Client>();
  @Input() client: any;

  id=0;
  nome?: string;
  email?: string;
  cpf?: string;

  constructor(private route: ActivatedRoute) {
    console.log(route);
    this.route.params.subscribe(valores => {
      console.log(valores);
      const id = valores['id'];
      }
    )
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (this.client) {
      this.nome = this.client.nome;
      this.email = this.client.email;
      this.cpf = this.client.cpf;
    }
  }

  cadastrarCliente() {
    if (this.nome && this.email && this.cpf && !this.client) {
      this.cadastrarClienteEvent.emit({ id: this.id, nome: this.nome, email: this.email, cpf: this.cpf })
      this.id++
      console.log({ id: this.id, nome: this.nome, email: this.email, cpf: this.cpf });
    } else if (this.client && this.nome && this.email && this.cpf){
      this.editClient.emit({ id: this.client.id, nome: this.nome, email: this.email, cpf: this.cpf })
      console.log({ id: this.id, nome: this.nome, email: this.email, cpf: this.cpf });
    }

    this.nome='';
    this.email='';
    this.cpf='';
  }

}
