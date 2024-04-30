import { Component, OnInit,} from '@angular/core';
import { Productos } from '../../../shared/interfaces/interface'; // Importa la interfaz de productos
import { NgFor, NgIf, CommonModule } from '@angular/common'; // Importa directivas necesarias
import { CarritoServiceService } from '../../../shared/services/carrito-service.service';
import { ProductoCarrito } from './productoCarrito.class';


@Component({
  selector: 'modal-carrito',
  standalone: true, // Modo independiente para el componente
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  imports: [NgFor, NgIf, CommonModule] // Importa las directivas necesarias
})
export class CarritoComponent implements OnInit{
  productosEnCarrito: ProductoCarrito[] = []; // Arreglo para almacenar productos en el carrito
  modalVisible: boolean = false;
  hayProductos: boolean = false;

  precioTotal:number = 0;
  
  constructor (private servicioCarrito: CarritoServiceService) {}

  private enElCarro(id: string, listaProductosEnCarrito: ProductoCarrito[]): number{
    for(let producto of listaProductosEnCarrito) {
      if (id === producto.id) {
        return listaProductosEnCarrito.indexOf(producto);
      }
    }
    return -1;
  }
  
  ngOnInit(): void {
    this.servicioCarrito._listaProductosObservable.subscribe(listaProductos => {

      this.productosEnCarrito = [];
      
      for (let producto of listaProductos) {
        const index = this.enElCarro(producto.id, this.productosEnCarrito)
        if (index == -1) {
          let nuevoProductoCarrito: ProductoCarrito = new ProductoCarrito(
            producto.id,
            producto
          )
          this.productosEnCarrito.push(nuevoProductoCarrito);
        } else {
          this.productosEnCarrito[index].cantidad++;
        }
      }

      this.precioTotal = 0;
      //calcular precio total
      for(let producto of this.productosEnCarrito) {
        this.precioTotal += producto.producto.precio * producto.cantidad;
      }

      this.hayProductos = this.productosEnCarrito.length == 0;
    });

    // suscribirmos el valor modalVisible a valor de visibilidad que maneja el servicio
    this.servicioCarrito.esVisibleObservable.subscribe(esVisible =>
      this.modalVisible = esVisible
    )
  }

  eliminarProductoDelCarrito(Producto: ProductoCarrito) {
    const indexProductoEliminar = this.productosEnCarrito.indexOf(Producto);
    if (indexProductoEliminar !== -1) {
      this.productosEnCarrito.splice(indexProductoEliminar, 1);
    }
  }

  //Obtener la imagen compuesta del path y la extension
  getImagen(img: { path: string; extension: string }): string {
    return `${img.path}.${img.extension}`;  
  }

  vaciarElCarrito() {
    this.productosEnCarrito = [];
  }

  closeModal() {
    this.servicioCarrito.toggleVisualizacionCarrito()
  }
}
