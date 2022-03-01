import { Component, OnInit } from '@angular/core';
// import { CartService } from 'src/app/service/cart.service';
import { Firestore } from '@angular/fire/firestore';
import { DataService } from 'src/app/service/data.service';
import { Game } from 'src/app/models/game.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // constructor() { }

  public data: Game[] = [];
  constructor(public firestore: Firestore, public dataSv: DataService) {
    dataSv.createListenerData(this.data).subscribe((value) => {
      this.data = value as Game[];
      this.dataSv.data = value as Game[];
      console.log(this.data);
    });
  }

  ngOnInit(): void {}
}
