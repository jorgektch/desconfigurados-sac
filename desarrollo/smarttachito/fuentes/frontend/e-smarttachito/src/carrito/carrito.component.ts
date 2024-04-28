import { Component, OnInit, Injectable } from '@angular/core';
import { Productos } from '../interfaces/interface'; // Importa la interfaz de productos
import { NgFor, NgIf } from '@angular/common'; // Importa directivas necesarias

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'carrito',
  standalone: true, // Modo independiente para el componente
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  imports: [NgFor, NgIf] // Importa las directivas necesarias
})
export class CarritoComponent implements OnInit {
  productosEnCarrito: Productos[] = []; // Arreglo para almacenar productos en el carrito
  seVisualiza: boolean = false; // Bandera para controlar la visibilidad del div desplegable
  cantidadProductos: number = 0; // Propiedad para almacenar la cantidad de productos en el carrito

  ngOnInit(): void {
    this.actualizarCantidadProductos();
  }

  agregarProductoAlCarrito(producto: Productos) {
    this.productosEnCarrito.push(producto);
    this.actualizarCantidadProductos();

    console.log(this.cantidadProductos);
  }

  eliminarProductoDelCarrito(Producto: Productos) {
    const indexProductoEliminar = this.productosEnCarrito.indexOf(Producto);
    if (indexProductoEliminar !== -1) {
      this.productosEnCarrito.splice(indexProductoEliminar, 1);
      this.actualizarCantidadProductos();
    }
  }

  vaciarElCarrito() {
    this.productosEnCarrito = [];
    this.actualizarCantidadProductos();
  }

  toggleVisualizacionCarrito() {
    this.seVisualiza = !this.seVisualiza; // Cambia la visibilidad del div del carrito
  }

  private actualizarCantidadProductos() {
    this.cantidadProductos = this.productosEnCarrito.length;
  }
}
