import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { deleteDoc, updateDoc } from 'firebase/firestore';
import { doc, docData } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  // public games: Array<Game> =
  // [{name:"BattleField",price:1000 , photoURL:"../../../assets/img/g1.png",des:"Game bắn súng dành cho trẻ em", quantity:0 },
  // {name:"League of Legend",price:2000, photoURL:"../../../assets/img/g2.jpg",des:"Chơi để thành quỷ vương phết cơ",quantity:0},
  // {name:"Valorant",price:3000, photoURL:"../../../assets/img/g3.jpg",des:"Đột kích hàng hiệu", quantity:0 },
  // {name:"God of War",price:4000, photoURL:"../../../assets/img/g4.jpg",des:"GOTY", quantity:0 },
  // {name:"Captain Tsubasa",price:5000, photoURL:"../../../assets/img/g19.png",des:"PES, FIFA gọi bằng bố",quantity:0 },
  // {name:"PES 2021",price:6000, photoURL:"../../../assets/img/g5.png",des:"FIFA tuổi tôm sánh bằng", quantity:0 },
  // {name:"Free Fire",price:7000, photoURL:"../../../assets/img/g6.jpg",des:"Game đuồi bầu, đờ bờ rờ rờ ", quantity:0 },
  // {name:"Genshin Impact",price:8000, photoURL:"../../../assets/img/g7.jpg",des:"Game kiếm vợ", quantity:0},
  // {name:"One Piece Pirate Warrior 3",price:9000, photoURL:"../../../assets/img/g18.png",des:"Giả lập làm hải tặc",quantity:0},
  // {name:"Naruto Storm 4",price:10000, photoURL:"../../../assets/img/g20.png",des:"Shinobi simulator", quantity:0}];

  // public data: Array<any> = [];
  // constructor(public firestore: Firestore) {
  //   let collect = collection(firestore, 'Game');
  //   collectionData(collect, { idField: 'id' }).subscribe((files: any) => {
  //     this.data = files;
  //   });
  // }

  public data: Game[] = [];
  public collectionItems = collection(this.firestore, 'Game');
  constructor(public firestore: Firestore) {}
  public createListenerData(data: Game[]) {
    return collectionData(this.collectionItems, {
      idField: 'id',
    });
  }

  public updateAllData() {
    for (let item of this.data) {
      let tempId = (item as any)['id'];
      updateDoc(doc(this.firestore, 'Game', tempId), { ...item });
    }
  }

  public update(item: Game) {
    let tempId = (item as any)['id'];
    updateDoc(doc(this.firestore, 'Game', tempId), { ...item });
  }

  public delete(item: Game) {
    let tempId = (item as any)['id'];
    deleteDoc(doc(this.firestore, 'Game', tempId));
  }
}
