import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() itemPrice!:number;
  @Output() num = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public counter:number = 0;
  public increase(){

    if(this.counter >=10){
        return;
    }else{
      this.counter++;
      this.num.emit(this.counter);
    }
  }

  public decrease(){
    if(this.counter <= 0){
        return;
    }else{
      this.counter--;
      this.num.emit(this.counter);
    }
  }
}
