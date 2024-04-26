import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interface, Productos } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ApiPruebaService {

  constructor(private http: HttpClient) { }

  getApi(): Observable<Interface>{
    return this.http.get<Interface>(`http://localhost:3000`);
  }
}
