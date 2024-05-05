import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CarritoServiceService } from '../../../../shared/services/carrito-service.service';
import { Productos } from '../../../../shared/interfaces/interface';

@Component({
  selector: 'app-notificaciones-carrito',
  standalone: true,
  imports: [NgFor],
  templateUrl: './notificaciones-carrito.component.html',
  styleUrl: './notificaciones-carrito.component.css'
})
export class NotificacionesCarritoComponent implements OnInit {

  productosAgregadosRecientemente: Productos[] = []

  constructor(private carritoservice: CarritoServiceService) {}

  ngOnInit(): void {
    this.carritoservice._ultimosProductosAgregadosNotificacionObservable.subscribe(listaUltimosAgregados => {
      this.productosAgregadosRecientemente = listaUltimosAgregados;
    });
  }

  getImagen(img: { path: string; extension: string }): string {
    return `${img.path}.${img.extension}`;  
  }
  
}
