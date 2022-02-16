import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ItemComponent } from './components/item/item.component';
import { ListitemComponent } from './components/listitem/listitem.component';
import {MatButtonModule} from '@angular/material/button';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemComponent,
    ListitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
