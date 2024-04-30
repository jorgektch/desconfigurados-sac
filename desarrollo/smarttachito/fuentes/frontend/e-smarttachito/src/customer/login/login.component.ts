import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginSignupService } from '../../shared/services/login-signup.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  regForm: boolean = false;
  signUpfrom!: FormGroup;
  signInfrom!: FormGroup;
  signUpsubmitted = false;
  href: string = '';
  user_data: any;
  user_dto: any;
  user_reg_data: any = {};

  constructor(private formBuilder: FormBuilder, private router: Router, loginService: LoginSignupService){ }

  

}
