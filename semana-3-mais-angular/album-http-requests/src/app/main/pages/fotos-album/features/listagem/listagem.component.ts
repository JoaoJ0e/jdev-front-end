import { Component, OnInit } from '@angular/core';
import { Photo } from '../../../../../models/Photo';
import { FotoService } from '../../services/foto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent implements OnInit{

  fotos: Array<Photo> =[];
  id?: number;

  constructor(
    private fotoService: FotoService,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
  }

  ngOnInit() {
    if (this.id) {
      this.fotoService.getFotosByAlbum(this.id).subscribe((res: any) => {
        this.fotos = res;
      });
    } else {
      this.fotoService.getFotos().subscribe((res: any) => {
        this.fotos = res;
    });
  }

}
}
