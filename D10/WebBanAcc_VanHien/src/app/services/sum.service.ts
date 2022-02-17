import { Injectable, Input } from '@angular/core';
import { Game } from '../models/game.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class SumService {

  public toTalSum:number=0;
  constructor(public sum:DataService) {}
  getPayment(){
    this.toTalSum = 0;
    for(let i=0; i<this.sum.List1.length; i++){
      this.toTalSum+=this.sum.List1[i].atm * this.sum.List1[i].quantily;
    }
    console.log(this.toTalSum);
  }
}
