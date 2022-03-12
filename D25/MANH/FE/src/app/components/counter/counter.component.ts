import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() counter = 0;
  @Output() change = new EventEmitter<number>(); 
  @Input() item !: Item;
  constructor(public dataService: DataService,) { }

  ngOnInit(): void {
  }

  public plus(){
    // if(this.counter >= 10){
    //   console.log("quantity > 10");
    // }else{
      this.counter++;
    // }
    this.change.emit(this.counter);
    this.updateOnDb();
  }
  
  public minus(){
    if(this.counter <= 0){
      this.counter = 0;
      this.dataService.delete(this.item);
    }else{
      this.counter--;
    }
    this.change.emit(this.counter);
    this.updateOnDb();
  }
  public updateOnDb(){
    this.dataService.update(this.item);
  }
}
