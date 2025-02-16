import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([])  // ✅ Agrega enrutamiento si lo usas
  ]
}).catch(err => console.error(err));
