import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPruebaService } from './api-prueba.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  public login_url = "http://localhost:3000";
  public reg_url = "http://localhost:3000";

  constructor(private http: HttpClient, private api: ApiPruebaService) { }

  authLogin(usuario: any, contrasenia: any):Observable<any>{
    return this.api.get(this.login_url+'/usuarios?usuario='+usuario+'&contrasenia='+contrasenia)
  }

  userRegister(user_dto:any): Observable<any>{
    return this.api.post(this.reg_url+'/usuarios', user_dto)
  }
}
