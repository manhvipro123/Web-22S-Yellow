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
    this.dataService.printAllItem();
  }

  public thanhTien = 0;
  public tongTien = 0;
  tinhTien(e: string, item:any){
    this.tongTien = this.PaymentService.getTotal();
    
    // alert(`Tổng tiền của bạn là: ${this.tongTien} vnđ`);
    // // this.thanhTien = `<p>${this.tongTien} vnđ</p>`;
    // console.log(this.tongTien)
  }
  tinhToTal(){
    this.thanhTien = this.PaymentService.getTotal();
    alert(`Tổng tiền của bạn là: ${this.thanhTien} vnđ`);
  }

}
