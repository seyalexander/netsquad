import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private auth: Auth) {}

  // Iniciar sesión con usuario y contraseña
  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  // Iniciar sesión con Google
  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, provider));
  }

  // Cerrar sesión
  logout() {
    return from(signOut(this.auth));
  }
}
