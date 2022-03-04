import { NgModule } from '@angular/core';

import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';


// Se declara y se exporta el ErrorMsgDirective para que otros modulos puedan
// hacer uso de esa directiva
@NgModule({
  declarations: [
    ErrorMsgDirective,
    CustomIfDirective
  ],
  exports: [
    ErrorMsgDirective,
    CustomIfDirective
  ]
})
export class SharedModule { }
