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
  ultimosProductosAgregadosNotificacion : Productos[] = [];
  // lista de productos que se emitiran a todos los componentes que se suscriptores
  _listaProductos: BehaviorSubject<ProductoCarrito[]>; 
  // ultimo producto agregado
  _ultimosProductosAgregadosNotificacion: BehaviorSubject<Productos[]>;


  constructor() {
    // inicializamos con una lista vacia
    this._listaProductos = new BehaviorSubject<ProductoCarrito[]>([]);
    this._ultimosProductosAgregadosNotificacion = new BehaviorSubject<Productos[]>([]); 
   }

   // funcionalidad para retornar como observable a nuestra lista de productos
   get _listaProductosObservable() {
    return this._listaProductos.asObservable();
   }

   // funcionalidad para retornar como observable a nuestra lista de productos agregados ultimamente
   get _ultimosProductosAgregadosNotificacionObservable() {
    return this._ultimosProductosAgregadosNotificacion.asObservable();
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

    this.ultimosProductosAgregadosNotificacion.push(producto);
    this.removerNotificacionByColapso()
    this.programarRemoverNotificacionDelay(2000, producto);
    this._listaProductos.next(this.productosCarrito);
   }

  // para programar la eliminación automática de la notificación
  // dado un tiempo en específico.
  programarRemoverNotificacionDelay = (delay: number, producto: Productos) => {
    setTimeout(() => {
      console.log("lengthListUltimosProductosAgregadosNotificacion:", this.ultimosProductosAgregadosNotificacion.length)
      try {
        this.ultimosProductosAgregadosNotificacion.splice(
          this.ultimosProductosAgregadosNotificacion.indexOf(producto), 
          1
        );
      } catch(e) {
        console.error(e);
      }
    }, delay);
  };

  removerNotificacionByColapso = () => {
    if(this.ultimosProductosAgregadosNotificacion.length > 3) {
      this.ultimosProductosAgregadosNotificacion.shift();
    }
    this._ultimosProductosAgregadosNotificacion.next(this.ultimosProductosAgregadosNotificacion);
  }
}
