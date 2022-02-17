import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TopComponent } from 'src/app/components/top/top.component';
import { MidComponent } from 'src/app/components/mid/mid.component';
import { BottomComponent } from 'src/app/components/bottom/bottom.component';
import { ItemComponent } from 'src/app/components/item/item.component';
import { ListItemsComponent } from 'src/app/components/list-items/list-items.component';
import { MywebComponent } from 'src/app/components/myweb/myweb.component';
import { ShopaccComponent } from 'src/app/components/shopacc/shopacc.component';



@NgModule({
  declarations: [
    TopComponent,
    MidComponent,
    BottomComponent,
    ItemComponent,
    ListItemsComponent,
    MywebComponent,
    ShopaccComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [
    TopComponent,
    MidComponent,
    BottomComponent,
    ItemComponent,
    ListItemsComponent,
    MywebComponent,
    ShopaccComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ]
})
export class SharedModule {}
