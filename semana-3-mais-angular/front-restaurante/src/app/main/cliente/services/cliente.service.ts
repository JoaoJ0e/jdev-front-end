import { Injectable } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(
    private http: HttpClient
   ) { }

   getClientes(restauranteId: number): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`localhost:8080/cliente/restaurante/${restauranteId}`)
   }

   addCliente(cliente: Cliente) {

    console.log('post requested:')
    return this.http.post('localhost:8080/cliente', cliente);
   }

  //  findById(id:number): Cliente | undefined {
  //   return this.http.get(`localhost:8080/cliente/${id}`);
  //  }

}
