import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { DataService } from 'src/app/services/data.service';
import { SumService } from 'src/app/services/sum.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  
  @Input() item !: Game;
  @Output() itemChange = new EventEmitter();

  constructor(public sum:SumService) {}

  ngOnInit(): void {
    console.log(this.item)
  }
  public increase(){
    if (this.item.quantily >= 5){
      return;
    }else {
      this.item.quantily++;
      this.total = this.item.quantily * this.item.atm;    
    }
    this.itemChange.emit(this.item.quantily);
  }
  public decrease(){
    if (this.item.quantily <= 0){
      return;
    }else{
      this.item.quantily--;
      this.total = this.item.quantily * this.item.atm;
    }
    this.itemChange.emit(this.item.quantily);
  }
  // public sumimg='';
  // public Sum(){
  //   let x = this.sum.Sum();
  //   this.sumimg = `<p>${x}</p>`;
  // }
  public total:number=0; 
}
