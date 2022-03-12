import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateCartComponent } from './update-cart.component';

const routes: Routes = [{ path: '', component: UpdateCartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateCartRoutingModule { }
