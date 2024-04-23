import { Component, Input } from '@angular/core';
import { Producto } from './producto.class';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input() producto: Producto;
  cantidad: number = 1;

  constructor(prodc: Producto) {
    this.producto = prodc;
  }

  agregarAlCarrito() {
    
  }

  verDetalles() {

  }

  calcularSubtotal(): number {
    return this.producto.precio * this.cantidad;
  }

  obtenerProducto(): any {
    return this.producto;
  }
}
