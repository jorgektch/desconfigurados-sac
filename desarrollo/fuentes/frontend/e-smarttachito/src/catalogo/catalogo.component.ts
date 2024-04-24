import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto/producto.class';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [NgFor],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {
  
  productos: Producto[] = [];
  
  constructor() {
    // Inyecta el servicio ProductService
  }
  
  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    // metodo para actualizar lista de productos
  }

  agregarAlCarrito(producto: Producto) {
    // código para agregar producto al carrito
  }

}
