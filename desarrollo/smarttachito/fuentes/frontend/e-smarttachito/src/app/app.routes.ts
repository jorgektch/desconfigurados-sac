import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { LoginComponent } from '../login/login.component';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { DetalleCompraComponent } from '../detalle-compra/detalle-compra.component';
import { ListaComprasComponent } from '../lista-compras/lista-compras.component';
import { PagoComponent } from '../pago/pago.component';
import { ProductoComponent } from '../producto/producto.component';
import { RegistroComponent } from '../registro/registro.component';
import { UsuarioComponent } from '../usuario/usuario.component';
import { AuthGuard } from '../auth.guard';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path:'',
        component: LandingComponent,
        title: 'Smart Tachito',
    },
    {
        path:'login',
        component: LoginComponent,
        title: 'login'
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
        canActivate: [AuthGuard],
    },
    {
        path: 'lista-compras',
        component: ListaComprasComponent,
        title: 'Lista de Compras',
        canActivate: [AuthGuard],
    } 
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
