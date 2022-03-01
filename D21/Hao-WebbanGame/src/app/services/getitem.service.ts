import { Injectable } from '@angular/core';
import{Game} from '../models/game.model'
@Injectable({
  providedIn: 'root'
})
export class GetitemService {
 public arrayCart: Array<Game> = [];
 public tong = 0;
  constructor() { }
  public Payment(){
    this.tong = 0;
    for(let i =0;i<this.arrayCart.length;i++){
      this.tong += this.arrayCart[i].quantity * this.arrayCart[i].pirce;
    }
    return this.tong;
  }
}
