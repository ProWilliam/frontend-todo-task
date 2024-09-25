import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService : AuthService) {}

  login() {
    
    if (this.username && this.password) {
      this.authService
      .login(this.username, this.password)
      .subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('isAuthenticated', 'true');
          this.router.navigate(['/dashboard']); 
        },
        error: (error: any) => {
          console.error('Error al registrarse:', error);
          alert('Invalid credentials');
        },
      });
      
    } else {
      alert('Invalid credentials');
    }
  }

  register() {
    this.router.navigate(['/register']); 
  }
}
