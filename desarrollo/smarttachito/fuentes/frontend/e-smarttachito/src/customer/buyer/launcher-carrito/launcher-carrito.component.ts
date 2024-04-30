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
  modalVisible: boolean = false

  constructor(private servicioCarrito: CarritoServiceService) {}
  
  ngOnInit(): void {
    // suscribimos el valor cantidadProductosCarrito a la longitud actual del carrito
    this.servicioCarrito._listaProductosObservable.subscribe(listaProductosCarrito => 
      this.cantidadProductosCarrito = listaProductosCarrito.length
    );

    // suscribirmos el valor modalVisible a valor de visibilidad que maneja el servicio
    this.servicioCarrito.esVisibleObservable.subscribe(esVisible =>
      this.modalVisible = esVisible
    )
  }
  
  toggleVisualizacionCarrito() {
    this.servicioCarrito.toggleVisualizacionCarrito();
  }
}
