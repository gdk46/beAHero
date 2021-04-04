import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { doadorModel } from 'src/models/doador.models';

@Injectable({
  providedIn: 'root'
})
export class DoadorService {

  constructor(private http: HttpClient) { }

  getAllDoador(): Observable<any> {
    return this.http.get('http://localhost:3000/doador');
  }

  postDoador(doador: doadorModel): Observable<any> {
    return this.http.post('http://localhost:3000/doador', doador)
  }  
}
