import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
//import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    ShoppingCartComponent
    
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    SharedModule,
    //MatTooltipModule
  ]
})
export class ShoppingCartModule { }
