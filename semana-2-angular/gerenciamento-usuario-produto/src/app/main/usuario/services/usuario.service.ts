import { Injectable } from '@angular/core';
import { Usuario } from '../../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private id = 0;
  private usuarios: Array<Usuario> = [];


  constructor() { }
}
