import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Productos, Usuarios } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ApiPruebaService {

  constructor(private http: HttpClient) { }

  getApiProductos() {
    return this.http.get(`http://localhost:3000/productos`).pipe( //pipe permite transformar el observable para castear
      map((data: any) => { // Castear la respuesta a any para acceso temporal en un mapa
        const productos: Productos[] = []; //Crear un array de tipo Productos
        for (const item of data) { // Iterar en el API
          const producto: Productos = {
            id: item.id, //Asignar a id la información del id del producto en el API obtenida a través de item.id
            nombre: item.nombre, //Asignar a nombre la información del nombre del producto en el API obtenida a través del item.nombre
            imagen: {
              path: item.imagen.path, //Asignar a path la información del path de la imagen del producto en el API obtenida a través del item.imagen.path
              extension: item.imagen.extension //Asignar a path la información del extension de la imagen del producto en el API obtenida a través del item.imagen.extension
            },
            precio: item.precio //Asignar a precio la información del precio del producto en el API obtenida a través de item.precio
          };
          productos.push(producto); //Agregar al array el producto en la iteración del API
        }
        return productos; //Retornar el array productos
      })
    );
  }
  getApiUsuarios(){
    return this.http.get(`http://localhost:3000/usuarios`).pipe(
      map((data: any)=>{
        const usuarios: Usuarios[] = [];
        for (const item of data) {
          const usser: Usuarios = {
            id: item.id,
            usuario: item.usario,
            contrasenia: item.contrasenia
          };
          usuarios.push(usser)
        }
        return usuarios;
      })
    )
  }

  setApiUsuarios(u: string, c: string){
    return this.http.get(`http://localhost:3000/usuarios`).pipe(
      map((data: any)=>{
        const usuarios: Usuarios[] = [];
        for (const item of data) {
          const usser: Usuarios = {
            //this.id: item.id + 1,
            usuario: u,
            contrasenia: c,
            id: ''
          };
          usuarios.push(usser)
        }
      })
    )
  }
}
