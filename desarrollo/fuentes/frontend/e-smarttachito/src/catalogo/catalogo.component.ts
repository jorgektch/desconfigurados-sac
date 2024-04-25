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
  
  // esta lista almacenará los productos en el catálogo
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
    // Agregar los productos a la lista
    this.productos.push(new Producto(1, 'Producto 1', 'Descripción del Producto 1', 'Corta Descripción 1', 'Col1', 'Col2', 100, ['imagen1.jpg'], 1),
                        new Producto(2, 'Producto 2', 'Descripción del Producto 2', 'Corta Descripción 2', 'Col1', 'Col2', 200, ['imagen2.jpg'], 2),
                        new Producto(3, 'Producto 3', 'Descripción del Producto 3', 'Corta Descripción 3', 'Col1', 'Col2', 150, ['imagen3.jpg'], 1),
                        new Producto(4, 'Producto 4', 'Descripción del Producto 4', 'Corta Descripción 4', 'Col1', 'Col2', 180, ['imagen4.jpg'], 2),
                        new Producto(5, 'Producto 5', 'Descripción del Producto 5', 'Corta Descripción 5', 'Col1', 'Col2', 120, ['imagen5.jpg'], 1),
                        new Producto(6, 'Producto 6', 'Descripción del Producto 6', 'Corta Descripción 6', 'Col1', 'Col2', 250, ['imagen6.jpg'], 2),
                        new Producto(7, 'Producto 7', 'Descripción del Producto 7', 'Corta Descripción 7', 'Col1', 'Col2', 300, ['imagen7.jpg'], 1))
  }

  agregarAlCarrito() {
    // código para agregar producto al carrito
  }

}
