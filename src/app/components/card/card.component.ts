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

  
  

}
