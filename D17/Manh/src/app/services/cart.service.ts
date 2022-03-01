import { Injectable } from '@angular/core';
import { Item } from 'src/models/item.models';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public DataService:DataService) { }
  public arrayCart : Array<Item>=[];
  // getCart(){
  //   this.arrayCart = [];
  //   for(let i = 0; i < this.DataService.listItem.length; i++){
  //     if(this.DataService.listItem[i].quantity > 0){
  //       this.arrayCart.push(this.DataService.listItem[i]);
  //     }
  //   }
  //   return this.arrayCart;
  // }

  getCart(){
    this.arrayCart = [];
    for(let i = 0; i < this.DataService.data.length; i++){
      if(this.DataService.data[i].quantity > 0){
        this.arrayCart.push(this.DataService.data[i]);
      }
    }
    return this.arrayCart;
  }
  
}
