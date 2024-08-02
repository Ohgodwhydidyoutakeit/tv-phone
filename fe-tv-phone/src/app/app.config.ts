import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { websocketProviders } from '../libs/providers/websocker.providers';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideClientHydration(),
    websocketProviders,
  provideServiceWorker('ngsw-worker.js', {
    // enabled: !isDevMode(),  this now always work - also in dev
    enabled: true,
    registrationStrategy: 'registerWhenStable:30000'
  })]
};
