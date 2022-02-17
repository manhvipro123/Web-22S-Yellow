import { Injectable } from '@angular/core';
import { DataService } from './data.service'; 

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(public dtS:DataService ) { }
  public payment(){
    let tongcong = 0;
    for (let i = 0; i < this.dtS.Listitem.length; i++) {
      tongcong += this.dtS.Listitem[i].quantity * this.dtS.Listitem[i].price;
    }
    return tongcong;
  }

  
  }

  

