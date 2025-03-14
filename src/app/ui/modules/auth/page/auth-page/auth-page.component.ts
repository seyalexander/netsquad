import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AuthServiceService } from '../../../../../infraestructure/auth/auth-service.service';

@Component({
  selector: 'app-auth-page',
  imports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule

  ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {
  hidePassword = true;
  loading = false;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private authService: AuthServiceService) {}

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      const { username, password } = this.loginForm.value;

      this.authService.login(username!, password!)
        .subscribe({
          next: () => {
            console.log('Login exitoso');
            this.loading = false;
            // Redirigir a la página de inicio o dashboard
          },
          error: (error) => {
            console.error('Error al iniciar sesión', error);
            this.loading = false;
          }
        });
    }
  }

  loginWithGoogle() {
    this.loading = true;
    this.authService.loginWithGoogle()
      .subscribe({
        next: (result) => {
          console.log('Login con Google exitoso', result);
          this.loading = false;
          // Redirigir a la página de inicio o dashboard
        },
        error: (error) => {
          console.error('Error en el login con Google', error);
          this.loading = false;
        }
      });
  }
}
