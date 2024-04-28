import { Component, OnInit, Injectable } from '@angular/core';
import { Productos } from '../interfaces/interface';
import { NgIf } from '@angular/common'; // Importa la directiva NgIf para renderizado condicional
import { BehaviorSubject, Observable, from, map } from 'rxjs';  // Importa operadores RxJS

@Injectable({
  providedIn: 'root'
})

@Component({
    selector: 'carrito',
    standalone: true, // modo independiente para el componente
    templateUrl: './carrito.component.html',
    styleUrl: './carrito.component.css',
    imports: [NgIf]
})
export class CarritoComponent implements OnInit {
  productosEnCarrito: Productos[] = []; // Arreglo para almacenar productos en el carrito
  seVisualiza: Boolean = false; // Bandera para controlar la visibilidad del div desplegable 
                                // que mostrara los productos aniadidos al carrito

  totalCarrito$ = new BehaviorSubject<number>(0) // Observable para la cantidad total

  constructor () {}

  ngOnInit(): void {
    from(this.productosEnCarrito).subscribe(() => this.recalcularTotal());
    // Se suscribe a los cambios en productosEnCarrito para activar el recálculo
  }

  agregarProductoAlCarrito(producto: Productos) {
    this.productosEnCarrito.push(producto);// Agrega producto al carrito
    this.recalcularTotal(); // Recalcula el total después de agregar un producto
  }

  eliminarProductoDelCarrito(idProducto: Productos) {
    const indexProductoEliminar = this.productosEnCarrito.indexOf(idProducto);
    if(indexProductoEliminar != -1) {
      this.productosEnCarrito.splice(indexProductoEliminar, 1); // Elimina producto del carrito
      this.recalcularTotal()
    }
  }

  vaciarElCarrito() {
    this.productosEnCarrito = [];
    this.recalcularTotal();
  }

  obtenerCantidadProductos(): number {
    return this.productosEnCarrito.length;
  }

  obtenerElTotal(): Observable<number> {
    // Calcula el monto total de todos los productos en el carrito.
    const total = this.productosEnCarrito.reduce((acc, producto) => acc + producto.precio, 0);
    this.totalCarrito$.next(total);// Actualiza el BehaviorSubject con el nuevo total
    return this.totalCarrito$.asObservable();// Devuelve el observable del monto total
  }

  private recalcularTotal() {
    this.obtenerElTotal(); // Activa el recálculo y actualiza el observable
  }

  toggleVisualizacionCarrito() {
    this.seVisualiza = !this.seVisualiza; // Cambia la visibilidad del div del carrito 
  }
}
