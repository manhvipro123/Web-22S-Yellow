import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'cart', loadChildren: () => import('./page/cart/cart.module').then(m => m.CartModule) }, { path: 'home', loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule) }, { path: 'login', loadChildren: () => import('./page/login/login/login.module').then(m => m.LoginModule) }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
