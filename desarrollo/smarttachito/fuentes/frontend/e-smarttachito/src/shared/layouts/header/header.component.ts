import { Component } from '@angular/core';
import { CarritoComponent } from '../../../customer/buyer/carrito/carrito.component';
import { AccesoUsuarioComponent } from "../acceso-usuario/acceso-usuario.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CarritoComponent, AccesoUsuarioComponent]
})
export class HeaderComponent {
        
}