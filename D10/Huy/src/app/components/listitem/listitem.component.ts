import { Component, OnInit } from '@angular/core';
import { Shoes } from 'src/app/models/shoes.models';
import { DataService } from 'src/app/service/data.service';
import {PaymentService} from '../../service/payment.service'

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss']
})
export class ListitemComponent implements OnInit {
  public sum = 0
  public Item!:Array<Shoes>
  

  constructor(public dtS:DataService,public pay:PaymentService) { }
  public Tinhtien(quantity: number,e:any){
    quantity = e;
    this.sum=this.pay.payment();
  }

  ngOnInit(): void {
  }

}
