import { Component, Injectable, OnInit, SimpleChanges, signal } from '@angular/core';
import { Productos } from '../../../shared/interfaces/interface'; // Importa la interfaz de productos
import { NgFor, NgIf, CommonModule } from '@angular/common'; // Importa directivas necesarias
import { CarritoServiceService } from '../../../shared/services/carrito-service.service';


@Component({
  selector: 'modal-carrito',
  standalone: true, // Modo independiente para el componente
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  imports: [NgFor, NgIf, CommonModule] // Importa las directivas necesarias
})
export class CarritoComponent implements OnInit{
  productosEnCarrito: Productos[] = []; // Arreglo para almacenar productos en el carrito
  modalVisible: boolean = false;
  
  constructor (private servicioCarrito: CarritoServiceService) {}
  
  ngOnInit(): void {
    this.servicioCarrito._listaProductosObservable.subscribe(listaProductos => 
      this.productosEnCarrito = listaProductos
    );

    // suscribirmos el valor modalVisible a valor de visibilidad que maneja el servicio
    this.servicioCarrito.esVisibleObservable.subscribe(esVisible =>
      this.modalVisible = esVisible
    )
  }

  eliminarProductoDelCarrito(Producto: Productos) {
    const indexProductoEliminar = this.productosEnCarrito.indexOf(Producto);
    if (indexProductoEliminar !== -1) {
      this.productosEnCarrito.splice(indexProductoEliminar, 1);
    }
  }

  vaciarElCarrito() {
    this.productosEnCarrito = [];
  }

}
