import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../../models/Cliente';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit{
  form!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService,
    private formBuilder: FormBuilder
  ) {
    this.activatedRoute.params.subscribe(valores => {
      const cliente: Cliente | undefined = this.clienteService.findById(valores['id']); //TODO: Implementar findById (xgh 12)
      this.buildForm()
      this.editCliente(cliente);
    })

  }
  ngOnInit(): void { // da um jeito de colocar o restauranteId aqui no lugar do 1
    this.clienteService.getClientes(1).subscribe((clientes) => {
      console.log('clientes', clientes);
      this.buildForm();
    })
  }

  buildForm() {
    this.form = this.formBuilder.group({
      restauranteId: [0, Validators.required],
      nome: [null, Validators.required],
      sobrenome: [null, Validators.required],
      cpf: [null, Validators.required],
      dataNascimento: [null, Validators.required],
      sexo: [2, Validators.required],
      telefone: [null, Validators.required]
    });
  }

  addCliente() {
    if (this.form.valid) {
      this.clienteService.addCliente(this.form.getRawValue());
      return;
    }
    alert('Erro: Dados inválidos no campo! Revise seus dados, por favor.')
  }

  editCliente(cliente?: Cliente) {
    if (cliente) {
      this.form.patchValue({restauranteId: cliente.restauranteId,
        nome: cliente.nome,
        sobrenome: cliente.sobrenome,
        cpf: cliente.cpf,
        dataNascimento: cliente.dataNascimento,
        sexo: cliente.sexoEnum,
        telefone: cliente.telefone
      })
    }
  }

}
