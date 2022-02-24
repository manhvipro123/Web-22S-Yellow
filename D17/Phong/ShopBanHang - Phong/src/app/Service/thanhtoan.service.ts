import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ThanhtoanService {
  public tongtien:number=0
  constructor(public data:DataService) {}

  getSum(){
    this.tongtien =0;
    for(let i=0;i<this.data.accounts.length;i++){
     this.tongtien += this.data.accounts[i].quantity * this.data.accounts[i].price
   }
   console.log(this.tongtien);
   return this.tongtien;
  }

}
