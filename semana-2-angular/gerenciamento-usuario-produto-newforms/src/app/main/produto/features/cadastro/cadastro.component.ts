import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../../../models/produto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { subscribeOn } from 'rxjs';

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
    private produtoService: ProdutoService,
    private formBuilder: FormBuilder
  ) {
    this.activatedRoute.params.subscribe(valores => {
      const produto: Produto | undefined = this.produtoService.findById(valores['id']);
      console.log(produto)
      this.buildForm()
      this.editProduto(produto);
    });
  }

  ngOnInit(): void {
    this.produtoService.buscarUsuarios().subscribe((usuarios) => {
      console.log('usuarios', usuarios)
    })

    this.buildForm();
  }

  deletaPost(id: number) {
    this;this.produtoService.deletarPost(id).subscribe(() => {
      this.produtoService.buscarPosts().subscribe((posts) => {
        this.posts = posts;
      })
    })
  }


  buildForm() {
    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      preco: [0, (Validators.required, this.validaQtd.bind(this))],
      estoque: [0, (Validators.required, this.validaQtd.bind(this))]
    });
    console.log(this.form.get('name')?.valueChanges);
    this.form.get('name')?.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  validaQtd(qtd: FormGroup) {
    if (qtd.value <= 0){
      return { isQtdInvalida: true }
    }
    return null;
  }

  cadastraProduto() {
    if (this.form.valid) {
      this.produtoService.addProduto(this.form.getRawValue());
      return;
    }
    alert('PREENCHE O CAMPO DIREITO!')

  }


  editProduto(produto?: Produto) {
    if (produto) {
      this.form.patchValue({nome: produto.nome, preco: produto.preco, estoque: produto.estoque})
    }
  }



}
