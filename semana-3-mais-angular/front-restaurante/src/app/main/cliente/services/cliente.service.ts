import { Injectable } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { Page } from '../../models/Page';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private restaurantIdSubject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);


  constructor(
    private http: HttpClient
  ) { }

  getClientes(restauranteId: number): Observable<Page<Cliente>> {
    return this.http.get<Page<Cliente>>(`http://localhost:8080/clientes/restaurante/${restauranteId}`)
  }

  findById(id:number): Observable<Cliente> {
    return this.http.get<Cliente>(`http://localhost:8080/clientes/${id}`);
  }

  addCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/clientes', cliente);
  }

  deleteCliente(clienteId: number) {
    return this.http.delete(`http://localhost:8080/clientes/${clienteId}`);
  }

  editCliente(cliente: Cliente):Observable<Cliente> {
    return this.http.put<Cliente>(`http://localhost:8080/clientes/${cliente.id}`, cliente);
  }

  setRestaurantId(id: number): void {
    this.restaurantIdSubject.next(id);
  }

  getRestaurantId(): Observable<number | null> {
    return this.restaurantIdSubject.asObservable();
  }


}
