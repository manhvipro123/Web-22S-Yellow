import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './calculator.component';
import { SharedModulesModule } from 'src/app/Shared/shared-modules/shared-modules.module';


@NgModule({
  declarations: [
    CalculatorComponent,

  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    SharedModulesModule
  ]
})
export class CalculatorModule { }
