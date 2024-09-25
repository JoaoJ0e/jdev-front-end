import { Injectable } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(
    private http: HttpClient
   ) { }

   getClientes(restauranteId: number) {
    return this.http.get(`localhost:8080/cliente/restaurante/${restauranteId}`)
   }

   addCliente(cliente: Cliente) {
     return this.http.post('localhost:8080/cliente', cliente);
   }

  //  findById(id:number): Cliente | undefined {
  //   return this.http.get(`localhost:8080/cliente/${id}`);
  //  }

}
