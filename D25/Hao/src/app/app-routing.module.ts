import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
 { path: 'shoppecar', loadChildren: () => import('./pages/shoppecar/shoppecar.module').then(m => m.ShoppecarModule) },
 { path: 'calculator', loadChildren: () => import('./pages/calculator/calculator.module').then(m => m.CalculatorModule) },
 { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
 { path: 'update', loadChildren: () => import('./pages/update/update.module').then(m => m.UpdateModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
