import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { collection, collectionData ,Firestore, addDoc, doc } from '@angular/fire/firestore';
import { deleteDoc, updateDoc } from 'firebase/firestore';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  public data : Item[] = [];
  public collectItems = collection(this.firestore, 'FillmStore');
  
  constructor(public firestore: Firestore) {}
  // public pushAutoData(){
  //   let collect = collection(this.firestore,'FillmStore');
  //   for(let item of this.listItem){
  //     addDoc(collect, item);
  //   }
  // }
  public createListenerData(data:Item[]){
    return collectionData(this.collectItems,{
      idField : 'id',
    });
  }
  public updateAllData(){
    for(let item of this.data){ 
      let tempId = (item as any)['id'];
      console.log(tempId);
      updateDoc(doc(this.firestore,'FillmStore', tempId ), {...item});
    }
  }
  public update(item:Item){
    let tempId = (item as any)['id'];
      console.log(tempId);
      updateDoc(doc(this.firestore,'FillmStore', tempId ), {...item});
  }
  public delete(item:Item){
    let tempId = (item as any)['id'];
    deleteDoc(doc(this.firestore,'FillmStore', tempId ));
  }
}
