import { Productos, ProductoCarrito as interfazProductoCarrito } from "../../../shared/interfaces/interface";

export class ProductoCarrito implements interfazProductoCarrito  {
    id: String;
    producto: Productos;
    cantidad: number = 1;
    precioSubTotal: number;

    constructor(id: String, producto: Productos) {
        this.id = id;
        this.producto = producto;
        this.precioSubTotal = producto.precio;
    }

    aumentarCantidadProducto() {
        this.cantidad = this.cantidad + 1
        this.precioSubTotal = this.producto.precio * this.cantidad
    }
}