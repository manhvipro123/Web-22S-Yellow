import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-couter',
  templateUrl: './couter.component.html',
  styleUrls: ['./couter.component.scss']
})
export class CouterComponent implements OnInit {

  @Output() changValue = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public couter = 0;

  increment() {
    if (this.couter >= 10) {
      return;
    } else {
      this.couter++;
      this.changValue.emit(this.couter)

    }
  }

  decrement() {
    if (this.couter <= 0) {
      return;
    } else {
      this.couter--;
      this.changValue.emit(this.couter)
    }

  }


}
