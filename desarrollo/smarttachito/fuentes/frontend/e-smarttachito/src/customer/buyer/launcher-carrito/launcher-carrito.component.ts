import { Component, OnInit } from '@angular/core';
import { CarritoServiceService } from '../../../shared/services/carrito-service.service';

@Component({
  selector: 'app-laucher-carrito',
  standalone: true,
  imports: [],
  templateUrl: './launcher-carrito.component.html',
  styleUrl: './launcher-carrito.component.css'
})
export class LaucherCarritoComponent implements OnInit {
  seVisualiza: boolean = false; // Bandera para controlar la visibilidad del div desplegable
  cantidadProductosCarrito: number = 0;

  constructor(private servicioCarrito: CarritoServiceService) {}
  
  ngOnInit(): void {
    this.servicioCarrito._listaProductosObservable.subscribe(listaProductosCarrito => 
      this.cantidadProductosCarrito = listaProductosCarrito.length
    );
  }
  
  toggleVisualizacionCarrito() {
    this.seVisualiza = !this.seVisualiza; // Cambia la visibilidad del div del carrito
  }
}
