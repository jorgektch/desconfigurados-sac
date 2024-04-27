import { Component } from '@angular/core';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CarritoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}