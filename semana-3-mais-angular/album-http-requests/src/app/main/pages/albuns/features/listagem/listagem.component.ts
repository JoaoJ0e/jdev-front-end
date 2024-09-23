import { Component, OnInit } from '@angular/core';
import { Album } from '../../../../../models/Album';
import { AlbumService } from '../../services/album.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent implements OnInit{
  albuns: Array<Album> = [];
  id?: number;

  constructor(
    private albumService: AlbumService, private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.albumService.getAlbuns().subscribe((res: any) => {
      this.albuns = res;
      console.log(res);
    });
  }
  
  verFotos(albumId: number){
    this.router.navigate([`/albuns/${albumId}`])
  }

  

}
