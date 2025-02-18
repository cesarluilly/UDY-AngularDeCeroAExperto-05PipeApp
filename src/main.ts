import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

//platformBrowserDynamic es para la version 15 de angular y tambien para la version 17
//    si se quiere seguir trabajando con modulos.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


//bootstrapApplication solo es para angular17 ya que aqui en esta version manejan mucho los standalone,
//  y al parecer es como si los modulos ya se volvieran obsoletos
//Manera de usar cuando estamos utilizando StandaloneComponents
// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter([])  // ✅ Agrega enrutamiento si lo usas
//   ]
// }).catch(err => console.error(err));
