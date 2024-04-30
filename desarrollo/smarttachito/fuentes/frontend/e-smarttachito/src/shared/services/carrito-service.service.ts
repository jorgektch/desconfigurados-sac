import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/interface';
import { BehaviorSubject } from 'rxjs';
import { ProductoCarrito } from '../../customer/buyer/carrito/productoCarrito.class';

@Injectable({
  providedIn: 'root'
})
export class CarritoServiceService {

  // lista de productos del servicio
  private productosCarrito: ProductoCarrito[] = [];
  // lista de productos que se emitiran a todos los componentes que se suscriptores
  private _listaProductos: BehaviorSubject<ProductoCarrito[]>;

  // manejar la visibilidad del modal lista carrito
  private esVisible: boolean = false;
  private _esVisible: BehaviorSubject<boolean>;


  constructor() {
    // inicializamos con una lista vacia
    this._listaProductos = new BehaviorSubject<ProductoCarrito[]>([]);

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

   private enElCarro(id: string, listaProductosEnCarrito: ProductoCarrito[]): number{
    for(let producto of listaProductosEnCarrito) {
      if (id === producto.id) {
        return listaProductosEnCarrito.indexOf(producto);
      }
    }
    return -1;
  }
   
   // implementamos la funcionalidad añadir producto y emitimos la nueva lista
   agregarProducto(producto: Productos) {

    const index = this.enElCarro(producto.id, this.productosCarrito)
    if (index == -1) {
      let nuevoProductoCarrito: ProductoCarrito = new ProductoCarrito(
        producto.id,
        producto
      )
      this.productosCarrito.push(nuevoProductoCarrito);
    } else {
      this.productosCarrito[index].cantidad++;
    }

    this._listaProductos.next(this.productosCarrito);
   }

   toggleVisualizacionCarrito() {
    this.esVisible = !this.esVisible
    this._esVisible.next(this.esVisible)
  }

}
