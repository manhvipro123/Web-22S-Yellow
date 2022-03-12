import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/modules/share/share.module';
import { UpdateRoutingModule } from './update-routing.module';
import { UpdateComponent } from './update.component';


@NgModule({
  declarations: [
    UpdateComponent
  ],
  imports: [
    CommonModule,
    UpdateRoutingModule,
    ShareModule 
  ]
})
export class UpdateModule { }
