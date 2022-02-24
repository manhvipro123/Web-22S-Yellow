import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import { CalculatorService } from './calculator.service';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 public list_item:Array<Game>=[];
  constructor(public firestore : Firestore) {
      let collect = collection(firestore,'product')
      collectionData(collect,{idField:'id'}).subscribe((data:any)=>{
        this.list_item= data as Game[];

      })

   }

  //  public list_item: Array<Game> = [
     //{
  //   name : "PUBG",
  //   pirce : 1000000,
  //   photoURL :"../../../assets/img/1.jpg",
  //   popularity:"Popular",
  //   quantity:0,
  // },

  // {
  //   name : "Pokemon",
  //   pirce : 500000 ,
  //   photoURL :"../../../assets/img/2.jpg",
  //   popularity:"Popular",
  //   quantity:0
  // },
  // {
  //   name : "League of Legends",
  //   pirce : 1000000,
  //   photoURL :"../../../assets/img/3.jpg",
  //   popularity:"Popular",
  //   quantity:0
  // },
  // {
  //   name : "Ark",
  //   pirce : 600000 ,
  //   photoURL:"../../../assets/img/5.jpg",
  //   popularity:"Popular",
  //   quantity:0
  // },
  
  // {
  //   name : "GTA 5",
  //   pirce : 1500000,
  //   photoURL :"../../../assets/img/6.jpg",
  //   popularity:"Hot",
  //   quantity:0
  // },
  // {
  //   name : "Sifu",
  //   pirce : 1700000 ,
  //   photoURL :"../../../assets/img/7.jpg",
  //   popularity:"Hot",
  //   quantity:0
  // },
  // {
  //   name : "Left4Dead",
  //   pirce : 400000,
  //   photoURL :"../../../assets/img/8.jpg",
  //   popularity:"Popular",
  //   quantity:0
  // },
  // {
  //   name : "NARAKA: BLADEPOINT",
  //   pirce : 1000000,
  //   photoURL :"../../../assets/img/9.jpg",
  //   popularity:"Hot",
  //   quantity:0
  // },
  // {
  //   name : "CyberPunk",
  //   pirce : 1000000,
  //   photoURL :"../../../assets/img/10.jpg",
  //   popularity:"Hot",
  //   quantity:0
  // },
// ]

// public Print(){
//   console.log(this.list_item);
// }
}
