import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCardsComponent } from './shopping-cards.component';

const routes: Routes = [{ path: '', component: ShoppingCardsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCardsRoutingModule { }
