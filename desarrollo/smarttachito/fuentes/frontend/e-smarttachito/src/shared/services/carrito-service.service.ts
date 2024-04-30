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

  // manejar la visibilidad del modal lista carrito
  private esVisible: boolean = false;
  private _esVisible: BehaviorSubject<boolean>;


  constructor() {
    // inicializamos con una lista vacia
    this._listaProductos = new BehaviorSubject<Productos[]>([]);

    // inicializamos con un valor falso
    this._esVisible = new BehaviorSubject<boolean>(false);
   }

   // funcionalidad para retornar como observable a nuestra lista de productos
   get _listaProductosObservable() {
    return this._listaProductos.asObservable();
   }

   get esVisibleObservable() {
    return this._esVisible.asObservable();
   }
   
   // implementamos la funcionalidad añadir producto y emitimos la nueva lista
   agregarProducto(producto: Productos) {
    this.productosCarrito.push(producto);
    this._listaProductos.next(this.productosCarrito);
   }

   toggleVisualizacionCarrito() {
    this.esVisible = !this.esVisible
    this._esVisible.next(this.esVisible)
  }

}
