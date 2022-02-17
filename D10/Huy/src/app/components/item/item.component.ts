import { Component, OnInit,Input, Output } from '@angular/core';
import { Shoes } from '../../models/shoes.models';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public counter=0;
  @Output() onChange = new EventEmitter<Number>();
  @Input() items!: Shoes; 
  
   
  constructor() { }

  ngOnInit(): void {
    console.log(this.items)
  }

  public plus() {
    if (this.items.quantity >= 10) {
      console.log('kdc > 10');
    } else {
      this.items.quantity++;
    }
    this.onChange.emit(this.items.quantity)
    
    
  }
  public minus() {
    if (this.items.quantity <= 0) {
      this.items.quantity = 0;
    } else {
      this.items.quantity--;
    }
    this.onChange.emit(this.items.quantity)
  }
}


