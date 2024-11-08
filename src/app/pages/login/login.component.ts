import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  onLogin() {
    const usuarioLogin = { email: this.email, password: this.password };
    this.usuarioService.login(usuarioLogin).subscribe({
      next: (response) => {
        console.log('Inicio de sesión exitoso:', response.user.email);
        
        if (response.user) {
          localStorage.setItem('user', JSON.stringify(response.user));
        }

        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Error de inicio de sesión:', err);
        alert('Datos incorrectos. Por favor, intenta nuevamente.');
      }
    });
  }

}
