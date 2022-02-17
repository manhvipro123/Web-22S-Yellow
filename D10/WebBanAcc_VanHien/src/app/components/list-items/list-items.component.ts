import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Game } from 'src/app/models/game.model';
import { CalculatorService } from 'src/app/services/calculator.service';
import { DataService } from 'src/app/services/data.service';
import { SumService } from 'src/app/services/sum.service';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  public DataItem!:Array<Game>;
  constructor(public print:DataService,public tongTien:CalculatorService) {
    print.Print();
  }
  public thanhTien=0;
  public total(quantify:number , e:number){
    quantify = e;
    this.thanhTien = this.tongTien.Calculator(this.DataItem);
  }

  ngOnInit(): void {
  }

}