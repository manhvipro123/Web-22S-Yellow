import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MidComponent} from '../app/components/mid/mid.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TopComponent } from './components/top/top.component';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatButtonModule} from '@angular/material/button';
// import {MatIconModule} from '@angular/material/icon';
// import { BotComponent } from './components/bot/bot.component';
// import { ItemComponent } from './components/item/item.component';
// import {MatTooltipModule} from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CarouselComponent } from './components/carousel/carousel.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import {MatSelectModule} from '@angular/material/select';
import { ShareModule } from './modules/share/share.module';
import { CommonModule } from '@angular/common';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,

  
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    FormsModule,
    HttpClientModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatIconModule,
    // MatTooltipModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),

    // NgbModule,
    // MatSelectModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
