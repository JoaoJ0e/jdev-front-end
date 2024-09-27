import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../../models/Cliente';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit, OnDestroy{
  form!: FormGroup;
  restaurantId: number | null = null;
  private subscription: Subscription | null = null;


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
    this.subscription = this.clienteService.getRestaurantId().subscribe((id) => {
      this.restaurantId = id;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  buildForm() {
    this.form = this.formBuilder.group({
      id: [null],
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
    if (this.form.valid && this.restaurantId!) {
      const cliente: Cliente = this.form.getRawValue();

      this.form.patchValue({
        restauranteId: this.restaurantId
      });


      if (!cliente.id) {
        this.clienteService.addCliente(this.form.getRawValue()).subscribe();
        this.form.reset();
        this.router.navigate(['/clientes']);
        return;
      }
      this.clienteService.editCliente(cliente).subscribe();
      this.form.reset();
      this.router.navigate(['/clientes']);
    }
    alert('Erro! Formulário incompleto. Colocou o ID do restaurante?')
  }

  editCliente(cliente?: Cliente) {
    if (cliente) {
      this.form.patchValue({
        id: cliente.id,
        restauranteId: cliente.restauranteId ?? this.restaurantId,
        nome: cliente.nome,
        sobrenome: cliente.sobrenome,
        cpf: cliente.cpf,
        dataNascimento: cliente.dataNascimento,
        sexoEnum: cliente.sexoEnum,
        telefone: cliente.telefone
      })
    }
  }

  

}
