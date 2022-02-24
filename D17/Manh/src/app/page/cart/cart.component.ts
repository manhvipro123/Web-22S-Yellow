import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Item } from 'src/models/item.models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public array : Array<Item> = [];
  // public array : Array<Item> = [];
  constructor(
    public cartService: CartService
  ) { }

  ngOnInit(): void {
    console.log(this.cartService.getCart());
    this.array = this.cartService.getCart();
  }

}
