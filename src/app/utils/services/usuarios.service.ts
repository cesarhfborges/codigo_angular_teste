import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly _URL: string = 'https://jsonplaceholder.typicode.com';

  constructor(
    private readonly _http: HttpClient,
  ) { }


  listarUsuarios(): Observable<any> {
    return this._http.get(`${this._URL}/users`);
  }

  getUsuario(value: number): Observable<any> {
    return this._http.get(`${this._URL}/users/${value}`);
  }
}
