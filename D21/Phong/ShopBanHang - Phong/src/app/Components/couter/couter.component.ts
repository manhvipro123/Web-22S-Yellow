import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/Service/data.service';
import { Account } from '../Models/account.model';


@Component({
  selector: 'app-couter',
  templateUrl: './couter.component.html',
  styleUrls: ['./couter.component.scss']
})
export class CouterComponent implements OnInit {
  @Input() account!: Account;
  @Output() changValue = new EventEmitter();
  @Input() couter = 0;
  constructor(public dataSv:DataService) { }

  ngOnInit(): void {
  }

  increment() {
    if (this.couter >= 10) {
      return;
    } else {
      this.couter++;
      this.changValue.emit(this.couter)
      this.updateDB();

    }
  }

  decrement() {
    if (this.couter <= 0) {
      this.dataSv.delete(this.account);
      return;
    } else {
      this.couter--;
      this.changValue.emit(this.couter)
      this.updateDB();
    }

  }

  public updateDB(){
    this.dataSv.update(this.account);
  }

}
