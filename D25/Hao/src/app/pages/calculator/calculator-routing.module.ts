import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from 'src/app/modules/share/share.module';
import { CalculatorComponent } from './calculator.component';

const routes: Routes = [{ path: '', component: CalculatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes),ShareModule],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
