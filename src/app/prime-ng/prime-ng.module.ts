// El objetivo de este modulo, es exportar todos los modulos
//    que yo voy a necesitar para mi aplicacion.
//

import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    MenuModule
  ]
})
export class PrimeNgModule {

}
