import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCartRoutingModule } from './add-cart-routing.module';
import { AddCartComponent } from './add-cart.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [AddCartComponent],
  imports: [SharedModule, CommonModule, AddCartRoutingModule],
})
export class AddCartModule {}
