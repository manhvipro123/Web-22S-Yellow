import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // public toTalSum:number=0;
  public arrayCart: Array<Game> = [];

  constructor() { }

  // public Payment(){
  //   // let temp=0;
  //   this.toTalSum = 0;
  //   for(let i=0; i<this.arrayCart.length; i++){
  //     this.toTalSum+=this.arrayCart[i].price * this.arrayCart[i].quantity  ;
  //   }
  //   console.log(this.toTalSum);
  //   // return temp;
  //   // alert(this.toTalSum);
  // }

  public sum=0;

  public Payment(){
    //let tong=0;
    // this.toTalSum = 0;
    this.sum=0;
    for(let i=0; i<this.arrayCart.length; i++){
      this.sum+=this.arrayCart[i].Price * this.arrayCart[i].Quantity  ;
    }
    return this.sum;
    // return temp;
    // alert(this.toTalSum);
  }

}
