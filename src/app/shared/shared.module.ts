import { NgModule } from '@angular/core';

import { ErrorMsgDirective } from './directives/error-msg.directive';


// Se declara y se exporta el ErrorMsgDirective para que otros modulos puedan
// hacer uso de esa directiva
@NgModule({
  declarations: [
    ErrorMsgDirective
  ],
  exports: [
    ErrorMsgDirective
  ]
})
export class SharedModule { }
