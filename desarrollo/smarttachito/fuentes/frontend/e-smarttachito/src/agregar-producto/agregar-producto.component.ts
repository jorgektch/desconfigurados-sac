import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiPruebaService } from '../services/api-prueba.service';
import { Productos } from '../interfaces/interface';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent implements OnInit{
  @ViewChild('addProductForm') addProductForm: any;
  constructor(private modalService: NgbModal, private servicio: ApiPruebaService){}
  ngOnInit(): void { }
  open(): void{
    this.modalService.open(this, {centered: true});
  }
  close(): void{
    this.modalService.dismissAll();
  }
  onSubmit(): void{
    if (this.addProductForm.invalid) return;

    const newProduct: Productos = {
      id: 'new-id',
      nombre: this.addProductForm.value.nombre,
      imagen:{
        path: this.addProductForm.value.imagenPath,
        extension: this.addProductForm.value.imagenExtension
      },
      precio: this.addProductForm.value.precio
    };
    // this.servicio.agregarProducto(newProduct).subscribe(()=>{
    //   this.close();
    // });
  }
}
