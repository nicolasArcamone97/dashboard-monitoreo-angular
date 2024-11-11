import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})


export class CardComponent {

  cardsPlantas?: any[] = [
    {titulo:"Lecturas Ok", value: 20, icono: 'bi-check-lg', claseIcono: 'circle'},
    {titulo:"Alertas medias", value: 50, icono: 'bi-exclamation-lg', claseIcono: 'circle-yell'},
    {titulo:"Alertas rojas", value: 120, icono: 'bi-exclamation-triangle', claseIcono: 'circle-red'},
    {titulo:"Sensores Deshabilitados", value: 1220, icono: 'bi-x-lg', claseIcono: 'circle-orange'}
  ]
  
  constructor() {
  
  }
  

  // paso siguiente desable que sean datos dinamicos desde el back



}
