import { Component, OnInit } from '@angular/core';
import { CarritoServiceService } from '../../../shared/services/carrito-service.service';

@Component({
  selector: 'app-laucher-carrito',
  standalone: true,
  imports: [],
  templateUrl: './launcher-carrito.component.html',
  styleUrl: './launcher-carrito.component.css'
})
export class LauncherCarritoComponent implements OnInit {
  cantidadProductosCarrito: number = 0;

  constructor(private servicioCarrito: CarritoServiceService) {}
  
  ngOnInit(): void {
    // suscribimos el valor cantidadProductosCarrito a la longitud actual del carrito
    this.servicioCarrito._listaProductosObservable.subscribe(listaProductosCarrito => {
      this.cantidadProductosCarrito = 0;
      for (let productoCarrito of listaProductosCarrito) {
        this.cantidadProductosCarrito += productoCarrito.cantidad;
      }
    }
    );
  }
  
  toggleVisualizacionCarrito() {
    this.servicioCarrito.toggleVisualizacionCarrito();
  }
}
