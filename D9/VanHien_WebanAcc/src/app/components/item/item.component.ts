import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/modules/game.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public counter = 0;
  @Input() item !: Game;

  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
  }
  public increase(){
    if (this.counter >= 5){
      return;
    }else {
      this.counter++;
    }
  }
  public decrease(){
    if (this.counter <= 0){
      return;
    }else{
      this.counter--;
    }
  }
}
