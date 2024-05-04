import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../home/landing/landing.component';
import { LoginComponent } from '../customer/login/login.component';
import { CatalogoComponent } from '../customer/vista-catalogo/catalogo/catalogo.component';
import { ListaComprasComponent } from '../user-profile/lista-compras/lista-compras.component';
import { ProductoComponent } from '../customer/vista-catalogo/producto/producto.component';
import { RegistroComponent } from '../customer/registro/registro.component';
import { UsuarioComponent } from '../user-profile/usuario/usuario.component';
import { ComprarComponent } from '../customer/buyer/comprar/comprar.component';
import { AuthGuardService } from '../shared/services/auth-guard.service';
import { CarritoComponent } from '../customer/buyer/carrito/carrito.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LandingComponent,
        title: 'landing',
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'login'
    },
    {
        path: 'registro',
        component: RegistroComponent,
        title: 'registro'
    },
    {
        path: 'catalogo',
        component: CatalogoComponent,
        title: 'catalogo'
    },
    {
        path: 'carrito',
        component: CarritoComponent,
        title: 'Carrito de Compras'
    },
    {
        path: 'comprar',
        component: ComprarComponent,
        title: 'comprar'
    },
    {
        path: 'producto',
        component: ProductoComponent,
        title: 'producto'
    },
    {
        path: '',
        canActivate: [AuthGuardService],
        children: [
            {
                path: 'usuario',
                component: UsuarioComponent,
                title: 'usuario'
            },
            {
                path: 'lista-compras',
                component: ListaComprasComponent,
                title: 'Lista de Compras'
            }
        ]
    }   
];