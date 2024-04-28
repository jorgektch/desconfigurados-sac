import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder){}
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      contrasenia: ['', Validators.required]
    });
  }

  onSubmit(): void{
    if(this.loginForm.invalid) return;
    const{usuario, contrasenia} = this.loginForm.value;
    this.authService.login(usuario, contrasenia)
    .subscribe({
      next: () => {
        this.router.navigate(['usuario']); 
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });
  }
}
