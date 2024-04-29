import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/layouts/header/header.component';
import { CatalogoComponent } from '../customer/vista-catalogo/catalogo/catalogo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CatalogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'e-smarttachito';

  ngOnInit(): void {
    // código al iniciar
  }

}
