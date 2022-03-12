import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Game } from 'src/app/models/game.model';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  @Input() itemPrice!: number;
  @Output() num = new EventEmitter();
  @Input() item!: Game;
  @Input() counter = 0;

  constructor(public dataSv: DataService) {}

  ngOnInit(): void {}

  // public counter: number = 0;
  public increase() {
    if (this.counter >= 10) {
      return;
    } else {
      this.counter++;
      this.num.emit(this.counter);
      this.updateOnDB();
    }
  }

  public decrease() {
    if (this.counter <= 0) {
      this.dataSv.delete(this.item);
      return;
    } else {
      this.counter--;
      this.num.emit(this.counter);
      this.updateOnDB();
    }
  }

  public updateOnDB() {
    this.dataSv.update(this.item);
  }
}
