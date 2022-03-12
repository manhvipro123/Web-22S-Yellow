import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import { CalculatorService } from './calculator.service';
import { collection, collectionData, Firestore ,addDoc,updateDoc,deleteDoc, doc} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public collectItems = collection(this.firestore,'items')
public data : Game[] =[];
  constructor(public firestore : Firestore) {

}
public createListenersData(data: Game[]){
  let result: Game[] =[];
 return collectionData(this.collectItems,{
    idField: 'id',
  });
 }
 public updateAllData() {
  for (let item of this.data) {
    let tempId = (item as any)['id'];
    updateDoc(doc(this.firestore, 'items', tempId), {
      ...item,
    });
  }
}
public update(item: Game) {
  let tempId = (item as any)['id'];
  updateDoc(doc(this.firestore, 'items', tempId), {
    ...item,
  });
}
public delete(item: Game) {
  let tempId = (item as any)['id'];
  deleteDoc(doc(this.firestore, 'items', tempId));
}

// public pushAutoData(){
//  let collect = collection(this.firestore,'items');
//  for(let item of this.data){
//     addDoc(collect,item);
//  }
// }


}

// public list_item: Array<Game> = [{
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
