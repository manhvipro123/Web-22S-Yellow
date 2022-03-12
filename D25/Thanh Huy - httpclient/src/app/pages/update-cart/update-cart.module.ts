import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateCartRoutingModule } from './update-cart-routing.module';
import { UpdateCartComponent } from './update-cart.component';


@NgModule({
  declarations: [
    UpdateCartComponent
  ],
  imports: [
    CommonModule,
    UpdateCartRoutingModule
  ]
})
export class UpdateCartModule { }
