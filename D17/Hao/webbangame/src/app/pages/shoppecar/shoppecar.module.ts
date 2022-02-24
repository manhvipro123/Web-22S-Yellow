import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppecarRoutingModule } from './shoppecar-routing.module';
import { ShoppecarComponent } from './shoppecar.component';
import { ShareModule } from 'src/app/modules/share/share.module';
import{Game} from '../../models/game.model'

@NgModule({
  declarations: [
    ShoppecarComponent
  ],
  imports: [
    CommonModule,
    ShoppecarRoutingModule,
    ShareModule
  ]
})
export class ShoppecarModule { }
