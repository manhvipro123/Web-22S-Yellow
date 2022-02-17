import { Injectable, Input } from '@angular/core';
import { Game } from '../models/game.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(public calculator:DataService) {}
  public Calculator(arr: Array<Game>){
    let thanhTien=0;
    for(let i=0;i<this.calculator.List1.length;i++){
     thanhTien += this.calculator.List1[i].quantily * this.calculator.List1[i].atm;
    }
    return thanhTien;
  }
}