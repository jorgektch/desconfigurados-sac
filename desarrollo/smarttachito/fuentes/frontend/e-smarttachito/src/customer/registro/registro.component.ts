import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Usuarios } from '../../shared/interfaces/interface';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginSignupService } from '../../shared/services/login-signup.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule,RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit{

  regForm: boolean = false;
  signUpfrom!:FormGroup;
  signUpsubmitted = false;
  href: string = '';
  user_dto!: Usuarios;
  user_reg_data: any;
  signInFormValue: any = {};

  constructor(private formBuilder: FormBuilder, private router: Router, private SingUpService: LoginSignupService) { }

  ngOnInit(): void {
    this.href = this.router.url;
    if (this.href == '/registro') {
      this.regForm = true;
    } else if (this.href == '/login') {
      this.regForm = false;
    }

    this.signUpfrom = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      usuario: ['', Validators.required],
      genero: ['', Validators.required],
      id: ['', Validators.required],
      contrasenia: ['', Validators.required],
      role: ['', Validators.required],
    });
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
    this.user_dto = {
      nombre: this.user_reg_data.nombre,
      apellido: this.user_reg_data.apellido,
      genero: this.user_reg_data.nombre,
      usuario: this.user_reg_data.nombre,
      contrasenia: this.user_reg_data.contrasenia,
      id: this.user_reg_data.id,
      role: this.user_reg_data.role,
    }
    this.SingUpService.registroUsuario(this.user_dto).subscribe(data=>{
      alert("Usuario registrado con Éxito :D");
      this.router.navigateByUrl('/login');
    })
  }
}
