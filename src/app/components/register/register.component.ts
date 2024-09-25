import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService : AuthService) {}

  register() {
    console.log(this.username, this.password);
    if (this.username && this.password) {

      this.authService
      .register(this.username, this.password)
      .subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: (error: any) => {
          console.error('Error al registrarse:', error);
        },
      });

      this.router.navigate(['/login']); 
    } else {
      alert('llena los espacios');
    }
  }
  
}
