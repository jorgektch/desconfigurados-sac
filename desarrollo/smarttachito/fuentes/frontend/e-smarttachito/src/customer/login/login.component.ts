import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginSignupService } from '../../shared/services/login-signup.service';
import { Usuarios } from '../../shared/interfaces/interface';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  regForm: boolean = false;
  signInfrom!: FormGroup;
  signUpsubmitted = false;
  href: string = '';
  user_data: any;
  user_dto!: Usuarios;
  user_reg_data: any;
  signInFormValue: any = {};

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginSignupService) { }

  ngOnInit(): void {
    this.href = this.router.url;
    if (this.href == '/registro') {
      this.regForm = true;
    } else if (this.href == '/login') {
      this.regForm = false;
    }
  }

  onSubmitSignIn() {
    this.loginService.authLogin(this.signInFormValue.userEmail, this.signInFormValue.userPassword).subscribe(data => {
      this.user_data = data;
      if (this.user_data.length == 1) {
        if (this.user_data[0].role == "cliente") {
          sessionStorage.setItem("user_session_id", this.user_data[0].id);
          sessionStorage.setItem("role", this.user_data[0].role);
          this.router.navigateByUrl('/');
        }
      } else {
        alert("Invalid")
      }
      console.log(this.user_data)
    }, error => {
      console.log("My error", error)
    })
  }
}
