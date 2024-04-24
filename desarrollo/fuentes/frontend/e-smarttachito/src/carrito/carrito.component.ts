import { Component } from '@angular/core';

@Component({
  selector: 'carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  productosEnCarrito: number[] = [];

  agregarProductoAlCarrito(idProducto: number) {
    this.productosEnCarrito.push(idProducto);
  }

  eliminarProductoDelCarrito(idProducto: number) {
    const indexProductoEliminar = this.productosEnCarrito.indexOf(idProducto);
    if(indexProductoEliminar != -1) {
      this.productosEnCarrito.splice(indexProductoEliminar, 1);
    }
  }

  vaciarElCarrito() {
    this.productosEnCarrito = [];
  }

  obtenerElTotal(): number {
    // lógica para implementar el cálculo total a pagar
    return 0;
  }
}
