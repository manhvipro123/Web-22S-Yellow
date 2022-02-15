import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MidComponent} from '../app/components/mid/mid.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './components/top/top.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BotComponent } from './components/bot/bot.component';
import { ItemComponent } from './components/item/item.component';
@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    MidComponent,
    BotComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
