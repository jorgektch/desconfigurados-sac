import { Component } from '@angular/core';
import { LoginComponent } from '../../../customer/login/login.component';
import { RegistroComponent } from '../../../customer/registro/registro.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-acceso-usuario',
  standalone: true,
  imports: [LoginComponent, RegistroComponent, RouterModule],
  templateUrl: './acceso-usuario.component.html',
  styleUrl: './acceso-usuario.component.css'
})
export class AccesoUsuarioComponent {

}
