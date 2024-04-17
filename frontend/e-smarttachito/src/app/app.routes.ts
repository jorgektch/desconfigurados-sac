import { Routes } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { LoginComponent } from '../login/login.component';
import { CarritoComponent } from '../carrito/carrito.component';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { DetalleCompraComponent } from '../detalle-compra/detalle-compra.component';
import { ListaComprasComponent } from '../lista-compras/lista-compras.component';
import { PagoComponent } from '../pago/pago.component';
import { ProductoComponent } from '../producto/producto.component';
import { RegistroComponent } from '../registro/registro.component';
import { UsuarioComponent } from '../usuario/usuario.component';

export const routes: Routes = [
    {
        path:'',
        component: LandingComponent,
        title: 'Smart Tachito',
        children: [
            {
                path:'login',
                component: LoginComponent,
                title: 'login'
            },
            {
                path:'carrito',
                component: CarritoComponent,
                title: 'carrito'
            },
            {
                path:'catalogo',
                component: CatalogoComponent,
                title: 'catalogo'
            },
            {
                path:'detalle-compra',
                component: DetalleCompraComponent,
                title: 'detalle-compra'
            },
            {
                path:'pago',
                component: PagoComponent,
                title: 'pago'
            },
            {
                path:'producto',
                component: ProductoComponent,
                title: 'producto'
            },
            {
                path:'registro',
                component: RegistroComponent,
                title: 'registro'
            },
            {
                path:'usuario',
                component: UsuarioComponent,
                title: 'usuario',
                children: [
                    {
                        path:'lista-compras',
                        component: ListaComprasComponent,
                        title: 'lista-compras'
                    }
                ]
            }
        ]
    } 
];
