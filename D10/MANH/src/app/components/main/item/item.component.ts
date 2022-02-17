import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Item } from '../../../../models/item.models';
// import { DataService } from '../../../services/data.service'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;
  @Output() changeItem = new EventEmitter();

  constructor(
    // private DataService:DataService,
    public CartService:CartService
  ) { }


  ngOnInit(): void {
    // console.log(this.item);
  }

  changeQuantity(e: number){
    this.item.quantity = e;
    // this.item.quantity = e;
    this.changeItem.emit(`Thay đổi số lương rồi nè, tính tổng tiền lại đi!`);
  }

}
