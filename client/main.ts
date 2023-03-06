import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './app/interceptor';

const ROUTES: Route[] = [
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('client/app/features/profile/profile.routes').then(
        (m) => m.PROFILE_ROUTES
      ),
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(ROUTES),
    provideHttpClient(withInterceptors([errorInterceptor])),
  ],
}).catch((err) => console.error(err));
