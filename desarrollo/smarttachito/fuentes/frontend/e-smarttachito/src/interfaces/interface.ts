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
    imagen: imgTacho;
    precio: number;
}

export interface imgTacho{
    path: string;
    extension: string;
}
