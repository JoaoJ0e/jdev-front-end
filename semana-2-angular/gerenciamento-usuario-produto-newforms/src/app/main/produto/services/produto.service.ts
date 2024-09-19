import { Injectable } from '@angular/core';
import { Produto } from '../../../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private id = 0;
  private produtos: Array<Produto> = [];

  constructor() {}

  addProduto(produto: Produto) {
    produto.id = this.id;
    this.produtos.push(produto);
    this.id++;
    console.log('Adicionei produto na lista!')
    console.log(this.produtos)
  }

  removeProduto(id: number) {
    this.produtos = this.produtos.filter(produto => produto.id !== id);
  }

  get getProdutos() {
    console.log('get', this.produtos);
    return this.produtos;
  }

  findById(id: number): Produto | undefined {
    return this.produtos.find(produto => produto.id == id);
  }

  editProduto(produto: Produto) {
    this.produtos.forEach(produtoList => {
      if (produtoList.id == produto.id) {
        produtoList.nome = produto.nome;
        produtoList.preco = produto.preco;
        return;
      }
    })
  }
}
