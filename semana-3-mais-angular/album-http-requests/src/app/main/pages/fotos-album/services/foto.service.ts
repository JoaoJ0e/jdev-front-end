import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Photo } from '../../../../models/Photo';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor(private http: HttpClient) { }

  getFotos() {
    return this.http.get<Array<Photo>>('https://jsonplaceholder.typicode.com/photos').pipe(take(1));
  }

  getFotosByAlbum(id: number) {
    return this.http.get<Array<Photo>>('https://jsonplaceholder.typicode.com/photos', { params: { albumId: id } }).pipe(take(1));
  }

}
