import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoServiceService {

  // lista de productos del servicio
  private productosCarrito: Productos[] = [];

  // lista de productos que se emitiran a todos los componentes que se suscriptores
  private _listaProductos: BehaviorSubject<Productos[]>;

  constructor() {
    // inicializamos con una lista vacia
    this._listaProductos = new BehaviorSubject<Productos[]>([]);
   }

   // funcionalidad para retornar como observable a nuestra lista de productos
   get _listaProductosObservable() {
    return this._listaProductos.asObservable();
   }
   
   // implementamos la funcionalidad añadir producto y emitimos la nueva lista
   agregarProducto(producto: Productos) {
    this.productosCarrito.push(producto);
    this._listaProductos.next(this.productosCarrito);
   }

}
