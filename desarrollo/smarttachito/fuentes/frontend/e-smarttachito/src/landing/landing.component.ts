import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CatalogoComponent } from "../catalogo/catalogo.component";

@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: 'landing.component.html',
    styleUrl: 'landing.component.css',
    imports: [HeaderComponent, CatalogoComponent]
})
export class LandingComponent {
  
}
