import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'
import { collection, collectionData, Firestore ,addDoc} from '@angular/fire/firestore';
import { Game } from '../../models/game.model';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // public data : Game[] = [];
  // constructor(private firestore: Firestore, private dataSv:DataService) {
  //   // dataSv.pushData();
  //   dataSv.createListenersData(this.data)
  //   .subscribe(valua=>(this.data = valua as Game[]));
  //   console.log(this.data);
  // }

  public data : Game[] = [];
  constructor(public httpSv: HttpClientService){
    (this.getData('api/items'));

  }
  public async getData(apiPath:string){
    (await this.httpSv.getHelloWorld(apiPath)).subscribe(valua=>(this.data = valua as Game[]));
    console.log(this.data)

  }

  ngOnInit(): void {
  }

}
