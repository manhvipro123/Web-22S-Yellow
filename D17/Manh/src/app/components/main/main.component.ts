import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Item } from '../../../models/item.models'
import { PaymentService } from '../../services/payment.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  public arr!: Array<Item>;
  constructor(
    public dataService: DataService,
    public PaymentService:PaymentService,
    public RouterService:Router
    ) {
    // console.log(dataService.listItem);
   }
  
  ngOnInit(): void {
  }


  getData(){
    console.log(this.dataService.data);
  }

  // public thanhTien = 0;
  public tongTien = 0;
  tinhTien(e: string, item:any){
    this.tongTien = this.PaymentService.getTotal();
    
  //   // alert(`Tổng tiền của bạn là: ${this.tongTien} vnđ`);
  //   // // this.thanhTien = `<p>${this.tongTien} vnđ</p>`;
  //   // console.log(this.tongTien)
  }
  tinhToTal(){
    
    // this.thanhTien = this.PaymentService.getTotal();
    this.RouterService.navigate(['/cart']);
  }

}
