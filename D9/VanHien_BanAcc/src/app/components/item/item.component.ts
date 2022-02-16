import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  
  @Input() item !: Game;
  @Output() itemChange = new EventEmitter();
  onChange: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
  }
  public increase(){
    if (this.item.quantily >= 5){
      return;
    }else {
      this.item.quantily++;
      this.itemChange.emit(this.item.quantily);
    }
  }
  public decrease(){
    if (this.item.quantily <= 0){
      return;
    }else{
      this.item.quantily--;
    }
  }
}
