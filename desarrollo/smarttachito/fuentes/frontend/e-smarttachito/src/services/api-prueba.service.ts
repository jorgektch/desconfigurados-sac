import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Productos } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ApiPruebaService {

  constructor(private http: HttpClient) { }

  getApiProductos(){
    return this.http.get(`http://localhost:3000/productos`).pipe(
      map((data: any) => { // Cast the response to 'any' for temporary access
        const productos: Productos[] = [];
        for (const item of data) { // Iterate through the API response
          const producto: Productos = {
            id: item.id, // Assuming 'id' is the property name in your API response
            nombre: item.nombre, // Assuming 'nombre' is the property name in your API response
            imagen: {
              path: item.imagen.path, // Assuming 'imagen' is an object with 'path' and 'extension' properties
              extension: item.imagen.extension
            },
            precio: item.precio // Assuming 'precio' is the property name in your API response
          };
          productos.push(producto);
        }
        return productos;
      })
    );
  }
}
