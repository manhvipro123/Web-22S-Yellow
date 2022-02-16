import { Injectable, Input } from '@angular/core';
import { Game } from '../models/game.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(public calculator:DataService) {}
  public thanhTien=0;
  public Calculator(){
    for(let i=0;i<this.calculator.List1.length;i++){
     this.thanhTien += this.calculator.List1[i].quantily * this.calculator.List1[i].atm;
    }
    return this.thanhTien;
  }
}