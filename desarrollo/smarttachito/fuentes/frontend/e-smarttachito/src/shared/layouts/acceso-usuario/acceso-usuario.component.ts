import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acceso-usuario',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterLink],
  templateUrl: './acceso-usuario.component.html',
  styleUrl: './acceso-usuario.component.css'
})
export class AccesoUsuarioComponent implements OnInit {

  logged_in: boolean = false;
  user_role!: any;

  constructor(private router: Router) { }

  ngOnInit() {
    const user_session_id = sessionStorage.getItem("user_session_id");
    if (user_session_id) {
      this.logged_in = true;
      // Consider fetching user data if needed
    }
  }

  logout() {
    sessionStorage.removeItem("user_session_id");
    sessionStorage.removeItem("role");
    this.router.navigateByUrl('/');
    location.reload();
  }

}
