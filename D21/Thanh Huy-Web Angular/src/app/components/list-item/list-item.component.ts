import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { PaymentService } from 'src/app/service/payment.service';
import {Game} from '../../models/game.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {



  constructor( public dataSv: DataService, public paymentSv: PaymentService) {   
  }

  ngOnInit(): void {
  }

  // Pay(){
  //   let temp = this.paymentSv.getPayment();
  //   alert(temp);
  // }

  public getData(){
    console.log(this.dataSv.data);
  }
}
