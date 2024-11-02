import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterOutlet, ModalComponent, ModalEditComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  plantas = [
    { pais: 'USA', nombre: 'Planta 1', lecturas: 'mdo', alertasMedias: 'Mark', alertasRojas: 'Otto' },
    { pais: 'UK', nombre: 'Planta 2', lecturas: 'fat', alertasMedias: 'Mark', alertasRojas: 'Otto' },
    { pais: 'Canada', nombre: 'Planta 3', lecturas: 'twitter', alertasMedias: 'Mark', alertasRojas: 'Otto' },
  ];

  
  editarPlanta(planta:any) {
   
    console.log('Editar planta:', planta);
  }

  
  eliminarPlanta(planta:any) {
    
    console.log('Eliminar planta:', planta);
  }
}

