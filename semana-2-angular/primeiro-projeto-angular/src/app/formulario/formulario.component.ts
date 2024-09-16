import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  nome='';
  email='';
  fone='';

  sendAlert() {
    alert("AAAAAAAAAAAAAA")
  }

}
