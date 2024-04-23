import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input() producto: any;
  cantidad: number = 1;

  agregarAlCarrito() {

  }

  verDetaller() {

  }

  calcularSubtotal(): number {
    return this.producto.precio * this.cantidad;
  }

  obtenerProducto(): any {
    return this.producto;
  }
}
