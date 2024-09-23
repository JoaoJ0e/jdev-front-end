import { Injectable } from '@angular/core';
import { Produto } from '../../../models/produto';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private id = 0;
  private produtos: Array<Produto> = [];

  constructor(
    private http: HttpClient
  ) {}

  buscarUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  buscarPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  deletarPost(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  cadastrarPost(id: number) {
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`, {title: 'Meu Post', body: 'askdoasdfs'}).pipe(take(1))
  }

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
