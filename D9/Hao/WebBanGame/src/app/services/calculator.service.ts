import { Injectable, Input } from '@angular/core';
import { Game } from '../models/game.model';
import {DataService} from '../services/data.service'

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
// @Input() list_item!:Game;
thanhTien = 0;
  constructor(public calulator:DataService) { }
  public calculator(){
    let thanhTien = 0;
    for(let i =0; i<this.calulator.list_item.length;i++){
      thanhTien+=this.calulator.list_item[i].quantity * this.calulator.list_item[i].pirce;
     
    }
    return thanhTien;
  }
}
