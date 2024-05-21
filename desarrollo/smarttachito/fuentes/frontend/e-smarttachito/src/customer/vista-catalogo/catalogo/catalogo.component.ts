import { Component, inject, OnInit } from '@angular/core';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Productos } from '../../../shared/interfaces/interface';
import { Observable } from 'rxjs';
import { ApiPruebaService } from '../../../shared/services/api-prueba.service';
import { CarritoServiceService } from '../../../shared/services/carrito-service.service';
import { ProductosFiltradosComponent } from "../../buyer/productos-filtrados/productos-filtrados.component";

@Component({
    selector: 'app-catalogo',
    standalone: true,
    templateUrl: 'catalogo.component.html',
    styleUrl: 'catalogo.component.css',
    imports: [NgIf, NgFor, RouterModule, AsyncPipe, ProductosFiltradosComponent]
})
export class CatalogoComponent implements OnInit {

  filtered: Productos [] = [];
  productos: Productos [] = [];
  api: ApiPruebaService = inject(ApiPruebaService);
  constructor(private service: ApiPruebaService, private servicioCarrito: CarritoServiceService ){
    this.api.getApiProductos().subscribe((_productos: Productos[])=>{
      this.filtered = _productos;
      this.productos = _productos;
    })
  }

  //Define productos$ de tipo Observable<Productos[]> para recuperar la data del producto
  public productos$!: Observable<Productos[]>; 
  
  //Siempre al iniciar se va a realizar getApiProductos
  ngOnInit(): void {
    this.productos$ = this.service.getApiProductos();
  }
  filterResults(text: string){
    if(!text){
      this.filtered = this.productos;
      return;
    }
    this.filtered = this.productos.filter(producto =>(
      producto?.id.toLowerCase().includes(text.toLowerCase()) ||
      producto?.nombre.toLowerCase().includes(text.toLowerCase())
    ));
  }

}
