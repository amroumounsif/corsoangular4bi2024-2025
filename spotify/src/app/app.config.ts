import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
<<<<<<< HEAD

export const appConfig: ApplicationConfig = {
  // Attenzione!!! Senza provideHttpClient(), non avremo a disposizione un'istanza della classe HttpClient
  // da utilizzare in componenti e servizi con il meccanismo di dependency injection.
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient()]
=======
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  //attenzione senza provideRouter(routes), provideHttpClient(), non avremo a disposizione un'istanza della classe HttpClient
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), provideAnimationsAsync()]
>>>>>>> 79f92169428bac774ff2772401cdfbfc030c0013
};
