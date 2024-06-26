import { Component, Input } from '@angular/core';
import { Productos } from '../../../shared/interfaces/interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../../shared/layouts/header/header.component";
import { CarritoServiceService } from '../../../shared/services/carrito-service.service';

@Component({
    selector: 'app-productos-filtrados',
    standalone: true,
    templateUrl: './productos-filtrados.component.html',
    styleUrl: './productos-filtrados.component.css',
    imports: [
        CommonModule,
        RouterModule,
        HeaderComponent
    ]
})
export class ProductosFiltradosComponent {
  @Input() producto!: Productos;
  
  constructor(private servicioCarrito: CarritoServiceService){}

  //Obtener la imagen compuesta del path y la extension
  getImagen(img: { path: string; extension: string }): string {
    return `${img.path}.${img.extension}`;  
  }

  agregarAlCarrito(producto: Productos) {
    // código para agregar producto al carrito
    this.servicioCarrito.agregarProducto(producto);
  }
}
