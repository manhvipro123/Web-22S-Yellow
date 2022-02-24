import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GetitemService } from 'src/app/services/getitem.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() Item!:Game;
  @Output() itemChange = new EventEmitter();
  
  constructor( public pay:GetitemService) {
    
   }
   public couter = 0;

   public increment() {
     if(this.Item.quantity >= 10){
     return;
   }else{
     this.Item.quantity++;
     this.total = this.Item.quantity*this.Item.pirce;

   }this.itemChange.emit(this.Item.quantity);
   }
 
   public decrement(){
     if(this.Item.quantity <= 0){
       return;
     }else{
       this.Item.quantity--;
       this.total = this.Item.quantity*this.Item.pirce;
     }this.itemChange.emit(this.Item.quantity);
     
   }
 public total:number = 0;
  ngOnInit(): void {
    console.log(this.Item)
   
  }
  public get(){
    this.pay.arrayCart.push(this.Item);
    console.log(this.pay.arrayCart);
    alert(`${this.Item.name}+${this.Item.quantity}`);
  }

}
