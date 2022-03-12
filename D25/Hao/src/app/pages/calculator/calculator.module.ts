import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './calculator.component';
import { ShareModule } from 'src/app/modules/share/share.module';


@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule,
 
    ShareModule
  ]
})
export class CalculatorModule { }
