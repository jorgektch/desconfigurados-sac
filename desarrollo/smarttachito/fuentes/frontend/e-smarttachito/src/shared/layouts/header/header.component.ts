import { Component, OnInit } from '@angular/core';
import { LauncherCarritoComponent } from '../../../customer/buyer/carrito-components/launcher-carrito/launcher-carrito.component';
import { AccesoUsuarioComponent } from "../acceso-usuario/acceso-usuario.component";
import { NotificacionesCarritoComponent } from '../../../customer/buyer/carrito-components/notificaciones-carrito/notificaciones-carrito.component';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [LauncherCarritoComponent, AccesoUsuarioComponent, NotificacionesCarritoComponent]
})
export class HeaderComponent implements OnInit {
    ngOnInit(): void {}

}