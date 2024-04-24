
/*
    Clase producto según la base de datos
    db_smarttachito
*/

export class Producto {
    id: number;
    nombre: string;
    descripcion: string;
    descripcionCorta: string;
    productocol1: string;
    productocol: string;
    precio: number;
    image: string[];
    categoria: number;

    constructor(id: number, nombre: string, descripcion: string, 
        descripcionCorta: string, productocol1: string, 
        productocol: string, precio: number, imagen: string[], categoria: number) {
            
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.descripcionCorta = descripcionCorta;
        this.productocol1 = productocol1;
        this.productocol = productocol;
        this.precio = precio;
        this.image = imagen;  
        this.categoria = categoria;  
    }
}