import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  public toTalSum:number = 0;
  //public sum:number = 0;  
  constructor(public data:DataService) { }

  // getPayment(){
  //   // let temp=0;
  //   this.toTalSum = 0;
  //   for(let i=0; i<this.data.games.length; i++){
  //     this.toTalSum+=this.data.games[i].price * this.data.games[i].quantity  ;
  //   }
  //   console.log(this.toTalSum);
  //   // return temp;
  //   // alert(this.toTalSum);
  // }

}
