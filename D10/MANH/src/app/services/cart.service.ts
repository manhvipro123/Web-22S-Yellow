import { Injectable } from '@angular/core';
import { Item } from 'src/models/item.models';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public DataService:DataService) { }
  public arrayCart : Array<Item>=[];
  getCart(){
    for(let i = 0; i < this.DataService.listItem.length; i++){
      if(this.DataService.listItem[i].quantity > 0){
        this.arrayCart.push(this.DataService.listItem[i]);
      }
    }
  }
}
