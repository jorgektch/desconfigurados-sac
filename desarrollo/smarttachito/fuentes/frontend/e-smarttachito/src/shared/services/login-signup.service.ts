import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPruebaService } from './api-prueba.service';
import { Observable } from 'rxjs';
import { Usuarios } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  public login_url = "https://desconfigurados-sacdeployment.onrender.com";
  public reg_url = "https://desconfigurados-sacdeployment.onrender.com";

  constructor(private http: HttpClient, private api: ApiPruebaService) { }

  authLogin(usuario: any, contrasenia: any):Observable<any>{
    return this.api.get(this.login_url+'/usuarios?usuario='+usuario+'&contrasenia='+contrasenia)
  }

  registroUsuario(user_dto: any): Observable<any>{
    return this.api.post(this.reg_url+'/usuarios', user_dto)
  }
}
