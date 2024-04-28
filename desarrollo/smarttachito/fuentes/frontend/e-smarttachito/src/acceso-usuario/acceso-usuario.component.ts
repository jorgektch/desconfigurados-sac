import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-acceso-usuario',
  standalone: true,
  imports: [LoginComponent, RegistroComponent],
  templateUrl: './acceso-usuario.component.html',
  styleUrl: './acceso-usuario.component.css'
})
export class AccesoUsuarioComponent {

}
