import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  user?: any;

  constructor(private usuarioService:UsuarioService){}

  
  ngOnInit(): void {
    this.user = this.usuarioService.getUser()
  }

 

}

