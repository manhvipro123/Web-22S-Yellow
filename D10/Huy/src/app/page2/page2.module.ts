import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page2RoutingModule } from './page2-routing.module';
import { Page2Component } from './page2.component';
import { SharedModule } from '../components/shared/shared.module';

@NgModule({
  declarations: [
    Page2Component,

  ],
  imports: [
    CommonModule,
    Page2RoutingModule,
    SharedModule
  ]
})
export class Page2Module { }
