import { Component } from '@angular/core';
import { ClienteService } from '../../cliente/services/cliente.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  selectedRestaurantId: number | null = null;

  constructor(private clienteService: ClienteService) {}

  onRestaurantIdChange(value: string): void {
    const id = Number(value);  // Converter o valor para número
    this.clienteService.setRestaurantId(id);
  }

}
