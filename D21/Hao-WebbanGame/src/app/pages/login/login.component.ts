import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'
import { collection, collectionData, Firestore ,addDoc} from '@angular/fire/firestore';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public data : Game[] = [];
  constructor(private firestore: Firestore, private dataSv:DataService) {
    // dataSv.pushData();
    dataSv.createListenersData(this.data)
    .subscribe(valua=>(this.data = valua as Game[]));
    console.log(this.data);
  }

  ngOnInit(): void {
  }

}
