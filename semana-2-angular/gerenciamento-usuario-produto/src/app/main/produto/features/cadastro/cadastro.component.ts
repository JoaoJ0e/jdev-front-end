import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../../../models/produto';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  id?: number;
  nome?: string;
  preco?: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) {
    this.activatedRoute.params.subscribe(valores => {
      const produto: Produto | undefined = this.produtoService.findById(valores['id']);
      this.editProduto(produto);
    });
  }

  cadastrarProduto() {
    if (this.nome && this.preco && !this.id) {
      console.log('Pedindo pro service')
      this.produtoService.addProduto({nome: this.nome, preco: this.preco })
      console.log('deu certo o cadastro')
    } else if (this.id && this.nome && this.preco) {
      this.produtoService.editProduto({ id: this.id, nome: this.nome, preco: this.preco});
      this.router.navigate(['/listagem'])
    }

    this.nome = '';
    this.id = undefined;
    this.preco = undefined;
  }

  editProduto(produto?: Produto) {
    if (produto) {
      this.id = produto.id;
      this.nome = produto.nome;
      this.preco = produto.preco;
    }
  }



}
