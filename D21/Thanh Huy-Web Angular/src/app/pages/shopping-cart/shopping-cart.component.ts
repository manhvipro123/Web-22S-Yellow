import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(public cartSerVice:CartService) {}

  public Tong = 0;

  ngOnInit(): void {
    this.cartSerVice.Payment();
  }

  public thanhToan(){
    this.Tong = this.cartSerVice.Payment();
    alert('Thanh toán thành công!!!!!!!\n' + 'Tổng giá trị sản phẩm là: '+ this.Tong + ' VNĐ');
    this.cartSerVice.arrayCart = [];
    this.cartSerVice.sum = 0;
  }
}
