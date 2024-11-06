import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent  {

  listPaises?: any[] = [];

  paisSelected?: any;

  nombreIngresado: string = '';

  constructor(private paisService:PaisService) {}

  ngOnInit(){
    this.obtenerPaises()
  }


  obtenerPaises(){
    this.paisService.obtenerPaises().subscribe( paises => {
      this.listPaises = paises;
    })
  }


  onSubmit(){
    this.paisSelected;
    this.nombreIngresado;

    console.log('Nombre enviado:', this.nombreIngresado);
    console.log('País enviado:', this.paisSelected);
  }


  selectPais(pais:any){
    this.paisSelected = pais
    
    console.log(this.paisSelected)
  }



}
