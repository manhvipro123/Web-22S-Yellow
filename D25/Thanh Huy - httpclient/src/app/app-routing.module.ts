import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('../app/pages/home/home.module').then(m => m.HomeModule) }, { path: 'shopping_cart', loadChildren: () => import('../app/pages/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) }, { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }, { path: 'add-cart', loadChildren: () => import('./pages/add-cart/add-cart.module').then(m => m.AddCartModule) }, { path: 'update-cart', loadChildren: () => import('./pages/update-cart/update-cart.module').then(m => m.UpdateCartModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
