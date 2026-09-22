//Esto es de la version de angular15, pero sin problemas en la version de angular 17 se puede
//    seguir trabajando con modulos.
//
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//Esto es la nueva version en angular17, pero debido a que en esa version ya no existen los modulos,
//    es por eso que ahora se tiene esta escructura ya que ahora se trabaja con StandaloneComponents.
// import { provideRouter } from '@angular/router';
// import { ApplicationConfig } from '@angular/core';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter([])
//   ]
// };
