import { Component } from '@angular/core';
import { LaucherCarritoComponent } from '../../../customer/buyer/launcher-carrito/launcher-carrito.component';
import { AccesoUsuarioComponent } from "../acceso-usuario/acceso-usuario.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [LaucherCarritoComponent, AccesoUsuarioComponent]
})
export class HeaderComponent {

}