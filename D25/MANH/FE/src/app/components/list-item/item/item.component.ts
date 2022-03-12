import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { MatDialog } from '@angular/material/dialog';
import { UpdateFilmComponent } from '../../update-film/update-film.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;
  @Output() changeItem = new EventEmitter();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openDialogForUpdate(item: any) {
    console.log(this.item)
    this.dialog.open(UpdateFilmComponent, { data: item })
  }
  changeQuantity(e: number) {
    this.item.quantity = e;
    // this.changeItem.emit(`Thay đổi số lương rồi nè, tính tổng tiền lại đi!`);
  }

  // addItem(){
  //   this.CartService.arrayCart.push(this.item);
  //   console.log(this.CartService.arrayCart);
  // }
}
