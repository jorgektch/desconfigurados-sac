import { Component, OnInit,} from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common'; // Importa directivas necesarias
import { CarritoServiceService } from '../../../shared/services/carrito-service.service';
import { ProductoCarrito } from './productoCarrito.class';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'modal-carrito',
  standalone: true, // Modo independiente para el componente
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  imports: [NgFor, NgIf, CommonModule, RouterModule] // Importa las directivas necesarias
})
export class CarritoComponent implements OnInit{
  productosEnCarrito: ProductoCarrito[] = []; // Arreglo para almacenar productos en el carrito
  hayProductos: boolean = false;

  precioTotal:number = 0;
  precioConIGV: number = 0;
  precioEnvio: number = 0;
  precioDescuentoEnvio: number = 0;
  IGV: number = 0;
  
  constructor (private servicioCarrito: CarritoServiceService) {}

  ngOnInit(): void {
    this.servicioCarrito._listaProductosObservable.subscribe(listaProductos => {

      this.productosEnCarrito = listaProductos;

      this.precioTotal = 0;
      //calcular precio total
      for(let producto of this.productosEnCarrito) {
        this.precioTotal += producto.producto.precio * producto.cantidad;
      }

      this.hayProductos = this.productosEnCarrito.length != 0;
    });
  }

  eliminarProductoDelCarrito(Producto: ProductoCarrito) {
    const indexProductoEliminar = this.productosEnCarrito.indexOf(Producto);
    if (indexProductoEliminar !== -1) {
      this.servicioCarrito.productosCarrito.splice(indexProductoEliminar, 1);
      this.servicioCarrito._listaProductos.next(this.servicioCarrito.productosCarrito)
    }
  }

  //Obtener la imagen compuesta del path y la extension
  getImagen(img: { path: string; extension: string }): string {
    return `${img.path}.${img.extension}`;  
  }

  vaciarElCarrito() {
    this.productosEnCarrito = [];
  } 

  aumentarProductosCarrito(index: number) {
    this.servicioCarrito.productosCarrito[index].aumentarCantidadProducto()
    this.servicioCarrito._listaProductos.next(this.servicioCarrito.productosCarrito)
  }

  disminuirProductosCarrito(index: number) {
    this.servicioCarrito.productosCarrito[index].disminuirCantidadProducto()
    this.servicioCarrito._listaProductos.next(this.servicioCarrito.productosCarrito)
  }
}
