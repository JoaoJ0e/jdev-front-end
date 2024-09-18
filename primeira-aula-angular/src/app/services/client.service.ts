import { Injectable } from '@angular/core';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private id = 0;
  private clients: Array<Client> = [];

  addClient(client: Client) {
    client.id = this.id;
    this.clients.push(client);
    this.id++;
  }

  removeClient(id: number) {
    this.clients = this.clients.filter(client => client.id !== id);
  }

  get getClients() {
    return this.clients;
  }

  findById(id: number): Client | undefined {
    return this.clients.find(client => client.id == id);
  }

  editClient(client: Client) {
    this.clients.forEach(clientList => {
      if (clientList.id === client.id) {
        clientList.name = client.name;
        clientList.age = client.age;
        return;
      }
    });
  }
}
