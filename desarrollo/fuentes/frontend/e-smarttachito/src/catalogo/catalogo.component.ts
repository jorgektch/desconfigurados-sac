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
    
    // Simulación de la obtención de productos
    const producto1 = new Producto(1, 'Producto 1', 'Descripción del Producto 1', 'Corta Descripción 1', 'Col1', 'Col2', 100, ['imagen1.jpg'], 1);
    const producto2 = new Producto(2, 'Producto 2', 'Descripción del Producto 2', 'Corta Descripción 2', 'Col1', 'Col2', 200, ['imagen2.jpg'], 2);
    
    // Agregar los productos a la lista
    this.productos.push(producto1, producto2);
    
  }

  agregarAlCarrito() {
    // código para agregar producto al carrito
  }

}
