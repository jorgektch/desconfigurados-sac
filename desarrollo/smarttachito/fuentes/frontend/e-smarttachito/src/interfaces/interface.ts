export interface Interface {
    usuarios: Usuarios[];
    productos: Productos[];
}

export interface Usuarios{
    id:string;
    usuario: string;
    contrasenia: string;
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
