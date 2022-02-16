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
    if (this.counter >= 10) {
      console.log('kdc > 10');
    } else {
      this.counter++;
    }
    
  }
  public minus() {
    if (this.counter <= 0) {
      this.counter = 0;
    } else {
      this.counter--;
    }
  }
}


