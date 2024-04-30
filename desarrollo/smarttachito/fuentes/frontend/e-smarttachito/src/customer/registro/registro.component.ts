import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiPruebaService } from '../../shared/services/api-prueba.service';
import { Usuarios } from '../../shared/interfaces/interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginSignupService } from '../../shared/services/login-signup.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  regForm: boolean = false;
  signUpfrom!: FormGroup;
  signInfrom!: FormGroup;
  signUpsubmitted = false;
  href: string = '';
  user_data: any;
  user_dto!: Usuarios;
  user_reg_data:any;
  signInFormValue:any ={};

  constructor(private formBuilder: FormBuilder, private router: Router, loginService: LoginSignupService){ }
  
  ngOnInit(): void{
    this.href = this.router.url;
    if(this.href == '/registro'){
      this.regForm = true;
    }
    else if(this.href == '/login'){
      this.regForm = false
    }

    this.signUpfrom = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      usuario: ['', Validators.required],
      contrasenia: ['', Validators.required],
    })
  }
  get rf(){
    return this.signUpfrom.controls;
  }

  onSubmitSignUp(){
    this.signUpsubmitted = true;
    if(this.signUpfrom.invalid){
      return;
    }
    this.user_reg_data = this.signUpfrom.value;
    // this.user_dto = {
    //   // nombre: this.user_reg_data.nombre,
    //   apellido: this.user_reg_data.apellido,
    //   usuario: this.user_reg_data.usuario,
    //   contrasenia: this.user_reg_data.contrasenia,
    // }
    // this.loginService.userRegister()
  }
}
