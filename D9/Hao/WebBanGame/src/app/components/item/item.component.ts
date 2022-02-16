import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() Item!:Game;
  @Output() itemChange = new EventEmitter();
  
  constructor() {
    
   }
   public couter = 0;

   public increment() {
     if(this.Item.quantity >= 10){
     return;
   }else{
     this.Item.quantity++;
     

   }this.itemChange.emit(this.Item.quantity);
   }
 
   public decrement(){
     if(this.Item.quantity <= 0){
       return;
     }else{
       this.Item.quantity--;
     }
     
   }
 
  ngOnInit(): void {
    console.log(this.Item)
   
  }

}
