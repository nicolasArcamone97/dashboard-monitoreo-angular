import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { PlantaService } from '../../services/planta.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterOutlet, ModalComponent,CommonModule,FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{

  listPlantas?: any[] = []

  plantaSeleccionada?: any = {}

  constructor(private plantaService:PlantaService){}


  ngOnInit(): void{
    this.obtenerPlantas()
    this.listPlantas
    
  }
  
 
  
  obtenerPlantas(){
    this.plantaService.obtenerPlantas().subscribe( data => {
      this.listPlantas = data
      console.log(this.listPlantas)
    })
  }


  eliminarPlanta(plantaId:number) {
    this.plantaService.eliminarPlanta(plantaId).subscribe( (data) => {
      this.obtenerPlantas()
      console.log(data)
    })
  }



  agregarPlanta(nuevaPlanta: any) {
    this.plantaService.crearPlanta(nuevaPlanta).subscribe( () => {
      this.obtenerPlantas()
    })
  }

  editarPlanta(planta:any) {
    this.plantaSeleccionada = { ...planta };
  }

  actualizarPlanta(planta:any){
    this.plantaSeleccionada = { ...planta };
    this.plantaService.editarPlanta(this.plantaSeleccionada.id,this.plantaSeleccionada).subscribe( (data) => {
      this.obtenerPlantas()
      console.log(data)
    })
  }



}

