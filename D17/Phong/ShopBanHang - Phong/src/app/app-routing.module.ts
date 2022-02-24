import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./Modules/home/home.module').then(m => m.HomeModule) }, { path: 'shopping-cards', loadChildren: () => import('./Modules/shopping-cards/shopping-cards.module').then(m => m.ShoppingCardsModule) }, { path: 'introduce', loadChildren: () => import('./Modules/introduce/introduce.module').then(m => m.IntroduceModule) }, { path: 'calculator', loadChildren: () => import('./Modules/calculator/calculator.module').then(m => m.CalculatorModule) }, { path: 'login', loadChildren: () => import('./Modules/login/login.module').then(m => m.LoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
