import { Component } from '@angular/core';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet, RouterLink,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  nombre?: string = '';
  email?: string = '';
  password?: string = '';

  constructor(private usuarioService: UsuarioService,
              private router:Router
  ) { }

  onSubmit() {
    const user = { nombre: this.nombre, email: this.email, password: this.password };

    this.usuarioService.crearUsuario(user).subscribe( (response) => {
        console.log('Usuario registrado:', response);
        this.router.navigate(['/login']); 
      }
    ), (err:HttpErrorResponse) => {
      console.log("Error al crear usuario",err)
    }
  }


}
