import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CounterComponent } from 'src/app/components/counter/counter.component';
import { ListItemComponent } from 'src/app/components/list-item/list-item.component';
import { ItemComponent } from 'src/app/components/list-item/item/item.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AddFilmComponent } from 'src/app/components/add-film/add-film.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateFilmComponent } from 'src/app/components/update-film/update-film.component';

@NgModule({
  declarations: [
    CounterComponent,
    ListItemComponent,
    ItemComponent,
    AddFilmComponent,
    UpdateFilmComponent
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
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ],
  exports:[
    CommonModule, 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    ListItemComponent,
    ItemComponent,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ]
})
export class ShareModule { }
