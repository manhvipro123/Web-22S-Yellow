import { Component, OnInit } from '@angular/core';
// import { CartService } from 'src/app/service/cart.service';
import { Firestore } from '@angular/fire/firestore';
import { DataService } from 'src/app/service/data.service';
import { Game } from 'src/app/models/game.model';
import { HttpClientService } from 'src/app/service/http-client.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // constructor() { }

  // public name = '';
  // public data: Game[] = [];
  constructor(
    public firestore: Firestore,
    public dataSv: DataService,
    public httpSv: HttpClientService
  ) {
    // dataSv.createListenerData(this.data).subscribe((value) => {
    //   this.data = value as Game[];
    //   this.dataSv.data = value as Game[];
    //   console.log(this.data);
    // });
    // this.getData('api/Game');
  }

  ngOnInit(): void {}

  // public async getData(apiPath: string) {
  //   (await this.httpSv.getHelloWorld(apiPath)).subscribe((value) => {
  //     this.data = value;
  //     console.log(this.data);
  //   });
  // }

  // public async addData() {
  //   await (
  //     await this.httpSv.postData(
  //       this.name,
  //       'Game',
  //       'TL2',
  //       'kimochi',
  //       1234,
  //       'haha.jpg',
  //       444
  //     )
  //   ).subscribe((value: any) => {
  //     alert(value['message']);
  //   });
  // }
}
