import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CounterComponent } from 'src/app/components/counter/counter.component';
import { MainComponent } from 'src/app/components/main/main.component';
import { ItemComponent } from 'src/app/components/main/item/item.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ 
    CounterComponent,
    MainComponent,
    ItemComponent,

  ],
 
  imports: [
    CommonModule, 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule, 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MainComponent,
    ItemComponent,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule

  ]
})
export class ShareModule { }
