import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BotComponent } from 'src/app/components/bot/bot.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { ItemComponent } from 'src/app/components/item/item.component';
import { MidComponent } from 'src/app/components/mid/mid.component';
import { TopComponent } from 'src/app/components/top/top.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TopComponent,
    MidComponent,
    BotComponent,
    ItemComponent,
    CarouselComponent,
 

  ],
  imports: [
    CommonModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule
  ], exports: [
    ReactiveFormsModule,
    TopComponent,
    MidComponent,
    BotComponent,
    ItemComponent,
    CarouselComponent,
    CommonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatInputModule,


  ]
})
export class ShareModule { }
