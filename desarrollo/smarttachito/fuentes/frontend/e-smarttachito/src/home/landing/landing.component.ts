import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/layouts/header/header.component";
import { CatalogoComponent } from "../../customer/vista-catalogo/catalogo/catalogo.component";

@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: 'landing.component.html',
    styleUrl: 'landing.component.css',
    imports: [HeaderComponent, CatalogoComponent]
})
export class LandingComponent {
  
}
