import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Productos, Usuarios } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ApiPruebaService {
  httpOptions={
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Acces-Control-Allow-Origin": "*"
    })
  }

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

  private formatErrors(error: any){
    return throwError(error.error)
  }

  get(path: string, params: HttpParams = new HttpParams()):Observable<any>{
    return this.http.get(path, {params}).pipe(catchError(this.formatErrors))
  }

  put(path: string, body: Object = {}):Observable<any>{
    return this.http.put(path, JSON.stringify(body), this.httpOptions).pipe(catchError
      (this.formatErrors)
    )
  }

  post(path:string, body:Object ={}):Observable<any>{
    return this.http.post(path,JSON.stringify(body), this.httpOptions).pipe(catchError(this.formatErrors))
  }

  delete(path: string):Observable<any>{
    return this.http.delete(path).pipe(catchError(this.formatErrors))
  }
}
