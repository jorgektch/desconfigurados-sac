import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto/producto.class';
import { NgIf } from '@angular/common';
import { BehaviorSubject, Observable, from, map } from 'rxjs';

@Component({
    selector: 'carrito',
    standalone: true,
    templateUrl: './carrito.component.html',
    styleUrl: './carrito.component.css',
    imports: [NgIf]
})
export class CarritoComponent implements OnInit {
  productosEnCarrito: Producto[] = [];
  seVisualiza: Boolean = false;

  totalCarrito$ = new BehaviorSubject<number>(0) // Observable para la cantidad total

  constructor () {}

  ngOnInit(): void {
    from(this.productosEnCarrito).subscribe(() => this.recalcularTotal());
  }

  agregarProductoAlCarrito(idProducto: Producto) {
    this.productosEnCarrito.push(idProducto);
    this.recalcularTotal();
  }

  eliminarProductoDelCarrito(idProducto: Producto) {
    const indexProductoEliminar = this.productosEnCarrito.indexOf(idProducto);
    if(indexProductoEliminar != -1) {
      this.productosEnCarrito.splice(indexProductoEliminar, 1);
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
    // lógica para implementar el cálculo total a pagar
    const total = this.productosEnCarrito.reduce((acc, producto) => acc + producto.precio, 0);
    this.totalCarrito$.next(total);
    return this.totalCarrito$.asObservable();
  }

  private recalcularTotal() {
    this.obtenerElTotal();
  }

  toggleVisualizacionCarrito() {
    this.seVisualiza = !this.seVisualiza;
  }
}
