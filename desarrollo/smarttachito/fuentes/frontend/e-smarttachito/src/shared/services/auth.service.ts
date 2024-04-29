import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUsuarios: string = 'http://localhost:3000/usuarios';

  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
  
  constructor(private http: HttpClient) { }

  login(usuario: string, contrasenia: string): Observable <any>{
    const loginData = { usuario, contrasenia};
    return this.http.post(this.apiUsuarios, loginData).pipe();
  } 
}
