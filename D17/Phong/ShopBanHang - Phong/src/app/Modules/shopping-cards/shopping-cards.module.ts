import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCardsRoutingModule } from './shopping-cards-routing.module';
import { ShoppingCardsComponent } from './shopping-cards.component';


@NgModule({
  declarations: [
    ShoppingCardsComponent
  ],
  imports: [
    CommonModule,
    ShoppingCardsRoutingModule
  ]
})
export class ShoppingCardsModule { }
