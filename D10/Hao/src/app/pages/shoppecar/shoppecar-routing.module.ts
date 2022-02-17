import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppecarComponent } from './shoppecar.component';

const routes: Routes = [{ path: '', component: ShoppecarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppecarRoutingModule { }
