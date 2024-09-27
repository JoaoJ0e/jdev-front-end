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
      if (valores['id']) {
        this.clienteService.findById(valores['id'])?.subscribe((cliente: Cliente) =>
        this.editCliente(cliente));
      }
    })

  }
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      restauranteId: [1, Validators.required],
      nome: [null, Validators.required],
      sobrenome: [null, Validators.required],
      cpf: [null, Validators.required],
      dataNascimento: [null, Validators.required],
      sexoEnum: [2, Validators.required],
      telefone: [null, Validators.required]
    });
  }

  addCliente() {
    if (this.form.valid) {
      const cliente: Cliente = this.form.getRawValue();
      if (!cliente.id) {
        this.clienteService.addCliente(this.form.getRawValue()).subscribe();
        return;
      }
      this.clienteService.editCliente(cliente)
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
