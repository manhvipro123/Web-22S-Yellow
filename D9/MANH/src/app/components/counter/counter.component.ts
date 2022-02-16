import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component,Output, EventEmitter, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() counter = 0;
  @Output() change = new EventEmitter<number>(); 
  constructor() { }
  
  ngOnInit(): void {
  }

  public plus(){
    if(this.counter >= 10){
      console.log("quantity > 10");
    }else{
      this.counter++;
    }
    this.change.emit(this.counter);
  }
  
  public minus(){
    if(this.counter <= 0){
      this.counter = 0;
    }else{
      this.counter--;
    }
    this.change.emit(this.counter);
  }

}
