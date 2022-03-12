import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Game } from "../../models/game.model"
import { CalculatorService } from "../../services/calculator.service"

@Component({
  selector: 'app-mid',
  templateUrl: './mid.component.html',
  styleUrls: ['./mid.component.scss']
})
export class MidComponent implements OnInit {

  public midItem!: Array<any>;
  // public thanhTien='';

  constructor(public getData: DataService,
    public tinhTong: CalculatorService) {
    // print.Print();
  }
  public tong=0;

  public total(quantity: number , e:number) {
    // let x = this.tinhTong.calculator();
    // // alert(x)
    quantity=e;
    // this.tong = this.tinhTong.calculator(this.midItem);
    // this.thanhTien=`<p>${x}</p>`
    // this.tinhTong.thanhTien.

  }
  
  public get(){
    // this.midItem = this.getData.list_item;
    // console.log(this.getData.list_item);
  }


  ngOnInit(): void {

  }



}
