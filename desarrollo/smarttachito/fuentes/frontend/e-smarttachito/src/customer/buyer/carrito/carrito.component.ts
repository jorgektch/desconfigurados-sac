import { Component, Injectable, SimpleChanges, signal } from '@angular/core';
import { Productos } from '../../../shared/interfaces/interface'; // Importa la interfaz de productos
import { NgFor, NgIf, CommonModule } from '@angular/common'; // Importa directivas necesarias
import { Producto } from '../../vista-catalogo/producto/producto.class';


@Component({
  selector: 'carrito',
  standalone: true, // Modo independiente para el componente
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  imports: [NgFor, NgIf, CommonModule] // Importa las directivas necesarias
})
export class CarritoComponent {
  productosEnCarrito: Productos[] = []; // Arreglo para almacenar productos en el carrito
  seVisualiza: boolean = false; // Bandera para controlar la visibilidad del div desplegable
  
  agregarProductoAlCarrito(producto: Productos) {
    this.productosEnCarrito.push(producto);
  }

  eliminarProductoDelCarrito(Producto: Productos) {
    const indexProductoEliminar = this.productosEnCarrito.indexOf(Producto);
    if (indexProductoEliminar !== -1) {
      this.productosEnCarrito.splice(indexProductoEliminar, 1);
    }
  }

  vaciarElCarrito() {
    this.productosEnCarrito = [];
  }

  toggleVisualizacionCarrito() {
    this.seVisualiza = !this.seVisualiza; // Cambia la visibilidad del div del carrito

  }
}
