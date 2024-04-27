export interface Interface {
    usuarios: Usuarios[];
    productos: Productos[];
}

export interface Usuarios{
    id:string;
    usuario: string;
    contraseña: string;
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
