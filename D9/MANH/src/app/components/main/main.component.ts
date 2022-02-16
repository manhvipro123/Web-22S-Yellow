import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Item } from '../../../models/item.models'
import { PaymentService } from '../../services/payment.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  public arr!: Array<Item>;
  constructor(
    public dataService: DataService,
    public PaymentService:PaymentService
    ) {
    console.log(dataService.listItem);
   }
  
  ngOnInit(): void {
  }

  getData(){
    this.dataService.printAllItem()
  }

  public thanhTien = '';
  
  tinhTien(){
    let total = this.PaymentService.getTotal();
    // alert(`Tổng tiền của bạn là: ${total} vnđ`);
    this.thanhTien = `<p>${total}</p>`;
  }

}
