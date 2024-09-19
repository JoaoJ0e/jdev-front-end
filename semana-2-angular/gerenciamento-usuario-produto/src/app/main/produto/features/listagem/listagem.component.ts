import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../../models/produto';
import { Router } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent implements OnInit{
  produtos: Array<Produto> = [];

  constructor(
    private router: Router,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.updateList();
    console.log(this.produtos)
    console.log(this.produtoService.getProdutos)
  }

  updateList() {
    this.produtos = this.produtoService.getProdutos;
    console.log('dei update')
  }

  removeProduto(id?: number) {
    if (id || id == 0) {
      this.produtoService.removeProduto(id);
      this.updateList();
    }
  }

  editProduto(produto: Produto) {
    this.router.navigate([`/cadastro/${produto.id}`])
  }
}
