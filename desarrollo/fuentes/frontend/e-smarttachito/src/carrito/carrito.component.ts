import { Component } from '@angular/core';
import { Producto } from '../producto/producto.class';

@Component({
  selector: 'carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  productosEnCarrito: Producto[] = [];

  agregarProductoAlCarrito(idProducto: Producto) {
    this.productosEnCarrito.push(idProducto);
  }

  eliminarProductoDelCarrito(idProducto: Producto) {
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
