import { Component, EventEmitter, Output } from '@angular/core';
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

export class ModalComponent {

  listPaises: any[] = []; 
  paisSelected?: any;       
  nombreIngresado: string = '';
  detallePais?:any

  @Output() plantaEnviada = new EventEmitter<any>();

  constructor(private paisService: PaisService) {}

  ngOnInit() {
    this.obtenerPaises();
   
  }

  obtenerPaises() {
    this.paisService.obtenerPaises().subscribe(paises => {
      this.listPaises = paises;
    });
  }

  obtenerPais(pais:any){
    this.paisService.obtenerPais(this.paisSelected).subscribe( (pais) => {
      this.detallePais = pais
      console.log(this.detallePais)
    })
  }


  onSubmit() {
    const nuevaPlanta = {
      nombre: this.nombreIngresado,
      pais: this.detallePais[0].name.common,
      bandera: this.detallePais[0].flags.png
    };

    console.log(nuevaPlanta);
    this.plantaEnviada.emit(nuevaPlanta);

  }
}


