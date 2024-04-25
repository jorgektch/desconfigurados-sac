import { Component } from '@angular/core';
import { Producto } from '../producto/producto.class';
import { NgIf } from '@angular/common';

@Component({
  selector: 'carrito',
  standalone: true,
  imports: [NgIf],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  productosEnCarrito: Producto[] = [];
  seVisualiza: Boolean = false;

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

  obtenerCantidadProductos(): number {
    return this.productosEnCarrito.length;
  }

  obtenerElTotal(): number {
    // lógica para implementar el cálculo total a pagar
    return 0;
  }

  toggleVisualizacionCarrito() {
    this.seVisualiza = !this.seVisualiza;
  }
}
