import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Componente, SuperHeroe } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getUsers():Observable<any>{
   return this.http.get('https://jsonplaceholder.typicode.com/users');

  }

//
  getMenuOpts(){
    return this.http.get<Componente[]>('assets/data/menu.json');

  }

  getAlbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums');

  }
  getSuperHeroes(){
    return this.http.get<SuperHeroe[]>('assets/data/superheroes.json');

  }
}
