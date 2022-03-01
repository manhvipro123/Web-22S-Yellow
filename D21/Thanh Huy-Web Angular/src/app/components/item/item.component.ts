import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item!: Game;
  constructor(public cartSerVice: CartService) {}

  ngOnInit(): void {}

  public total: number = 0;

  public test(quantity: any) {
    this.item.Quantity = quantity;
    this.total = quantity * this.item.Price;
    //console.log(a);
  }

  public get() {
    this.cartSerVice.arrayCart.push(this.item);
    console.log(this.cartSerVice.arrayCart);
    alert(
      'Đã thêm ' +
        `${this.item.Name} + ${this.item.Quantity}` +
        ' vào giỏ hàng thành công!!!!'
    );
    // this.item.quantity = 0;
  }
}
