export class Producto {
    id: number;
    nombre: string;
    precio: number;
    image: string;
    descripcion: string;

    constructor(id: number, nombre: string, precio: number, imagen: string, descripcion: string) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.image = imagen;
        this.descripcion = descripcion;
    }
}