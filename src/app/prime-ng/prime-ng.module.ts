// El objetivo de este modulo, es exportar todos los modulos
//    que yo voy a necesitar para mi aplicacion.
//

import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    MenuModule,
    MenubarModule
  ]
})
export class PrimeNgModule {

}
