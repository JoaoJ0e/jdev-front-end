import { Client } from './../../../../../../semana-2-angular/rotas/src/app/models/client';
import { Cliente } from "./Cliente";

export interface Page<Client> {
  content: Cliente[];           // Itens da página
}
