import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlantaService } from '../../services/planta.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})


export class CardComponent {

  cardsPlantas?: any[] = [
    {titulo:"Lecturas Ok", value: 1220, icono: 'bi-check-lg', claseIcono: 'circle'},
    {titulo:"Alertas medias", value: 1250, icono: 'bi-exclamation-lg', claseIcono: 'circle-yell'},
    {titulo:"Alertas rojas", value: 1220, icono: 'bi-exclamation-triangle', claseIcono: 'circle-red'},
    {titulo:"Sensores Deshabilitados", value: 1220, icono: 'bi-x-lg', claseIcono: 'circle-orange'}
  ]
  
  constructor() {
  
  }
  

  // paso siguiente desable que sean datos dinamicos desde el back



}
