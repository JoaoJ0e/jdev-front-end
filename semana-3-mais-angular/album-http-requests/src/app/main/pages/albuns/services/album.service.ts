import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../../../../models/Album';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

   getAlbuns() {
     return this.http.get<Array<Album>>('https://jsonplaceholder.typicode.com/albums').pipe(take(1));
   }
}

