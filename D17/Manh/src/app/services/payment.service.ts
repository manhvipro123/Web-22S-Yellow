import { Injectable } from '@angular/core';
import { DataService } from './data.service'
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(public DataService:DataService) { }

  // getTotal(){
  //   let total = 0;
  //   for(let i = 0; i<this.DataService.listItem.length; i++){
  //     total += this.DataService.listItem[i].price * this.DataService.listItem[i].quantity;
  //   }
  //   return total;
  // }

  getTotal(){
    let total = 0;
    for(let i = 0; i<this.DataService.data.length; i++){
      total += this.DataService.data[i].price * this.DataService.data[i].quantity;
    }
    return total;
  }

}
