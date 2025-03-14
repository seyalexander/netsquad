import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment.development';

export const appConfig: ApplicationConfig = {
  providers: [
    BrowserModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideZoneChangeDetection(
    { eventCoalescing: true }),
    provideRouter(routes)
  ]
};
