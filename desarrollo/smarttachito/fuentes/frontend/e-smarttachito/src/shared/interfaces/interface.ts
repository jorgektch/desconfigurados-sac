export interface Interface {
    usuarios: Usuarios[];
    productos: Productos[];
}

export interface Usuarios{
    role: string;
    id:string;
    nombre: string;
    apellido: string;
    usuario: string;
    contrasenia: string;
    genero: string;
}

export interface Productos{
    id: string;
    nombre: string;
    imagen: {
        path: string;
        extension: string;
    };
    precio: number;
}

export interface ProductoCarrito {
    id: String;
    producto: Productos;
    cantidad: number;
    precioSubTotal: number
}
