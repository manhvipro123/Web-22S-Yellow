import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { TopComponent } from './components/top/top.component';
import { MatIconModule } from '@angular/material/icon';
import { ListItemComponent } from './components/list-item/list-item.component';
// import { BodyComponent } from './components/body/body.component';
// import { ItemComponent } from './components/item/item.component';
//import {MatButtonModule} from '@angular/material/button';
//import {MatTooltipModule} from '@angular/material/tooltip';
import { SharedModule } from './modules/shared/shared.module';
import { TopComponent } from './components/top/top.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { CounterComponent } from './components/counter/counter.component';
@NgModule({
  declarations: [AppComponent, TopComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
