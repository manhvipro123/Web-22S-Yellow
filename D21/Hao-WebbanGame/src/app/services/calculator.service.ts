import { Injectable, Input } from '@angular/core';
import { Game } from '../models/game.model';
import {DataService} from '../services/data.service'

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  // constructor(public calulator:DataService) { }
  // public calculator(arr:Array<Game>){
  //   let thanhTien = 0;
  //   for(let i =0; i<this.calulator.list_item.length;i++){
  //     thanhTien+=this.calulator.list_item[i].quantity * this.calulator.list_item[i].pirce;
     
  //   }
  //   return thanhTien;
  // }
}
