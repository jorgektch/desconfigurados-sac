import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/interface';
import { BehaviorSubject } from 'rxjs';
import { ProductoCarrito } from '../../customer/buyer/carrito-components/carrito/productoCarrito.class';

@Injectable({
  providedIn: 'root'
})
export class CarritoServiceService {

  // lista de productos del servicio
  productosCarrito: ProductoCarrito[] = [];
  // lista de productos del servicio
  ultimosProductoAgregado: Productos[] = [];
  // lista de productos que se emitiran a todos los componentes que se suscriptores
  _listaProductos: BehaviorSubject<ProductoCarrito[]>; 
  // ultimo producto agregado
  _ultimosProductoAgregado: BehaviorSubject<Productos[]>;


  constructor() {
    // inicializamos con una lista vacia
    this._listaProductos = new BehaviorSubject<ProductoCarrito[]>([]);
    this._ultimosProductoAgregado = new BehaviorSubject<Productos[]>([]); 
   }

   // funcionalidad para retornar como observable a nuestra lista de productos
   get _listaProductosObservable() {
    return this._listaProductos.asObservable();
   }

   get _ultimosProductoAgregadoObservable() {
    return this._ultimosProductoAgregado.asObservable();
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
      this.productosCarrito[index].aumentarCantidadProducto();
    }

    this.ultimosProductoAgregado.push(producto);
    if(this.ultimosProductoAgregado.length > 3) {
      this.ultimosProductoAgregado.shift();
    }
    this._ultimosProductoAgregado.next(this.ultimosProductoAgregado);

    this._listaProductos.next(this.productosCarrito);
   }
}
