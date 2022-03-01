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
}
