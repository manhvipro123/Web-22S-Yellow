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
  
  // public listItem : Array<Item> = [
  //   {name: "Ore no Yubi de Midarero",imageURL:'../../../assets/Ore-no-Yubi-de-Midarero-Heitengo-Futarikiri-no-Salon-de.jpg',price:1000000, description:"Picante Circus, Suiseisha",quantity:0},
  //   {name: "Amai Choubatsu Watashi wa Kanshu Senyou Pet",imageURL:'../../../assets/Amai-Choubatsu.jpg',price:1000, description:"Magic Bus, Picante Circus, Suiseisha",quantity:0},
  //   {name: "Omiai Aite wa Oshiego Tsuyoki na Mondaiji",imageURL:'../../../assets/Omiai-Aite.jpg',price:1000, description:"Seven",quantity:0},
  //   {name: "Yubisaki kara Honki no Netsujou",imageURL:'../../../assets/Yubisaki.jpg',price:1000, description:"Suiseisha",quantity:0},
  //   {name: "Kaifuku Jutsushi no Yarinaoshi",imageURL:'../../../assets/Kaifuku-Jutsushi.jpg',price:1000, description:"Glovision, Lantis",quantity:0},
  //   {name: "Eternity Shinya no Nurekoi Channel",imageURL:'../../../assets/Eternity-Shinya.jpg',price:1000, description:"Kanade Creative",quantity:0},
  //   {name: "Yakin Byoutou",imageURL:'../../../assets/Yakin-Byoutou.jpg',price:1000, description:"AT-2, Discovery",quantity:0},
  //   {name: "Hajimete no Hitozuma",imageURL:'../../../assets/Hajimete.jpg',price:1000, description:"Mary Jane",quantity:0},
  //   {name: "Souryo to Majiwaru Shikiyoku no Yoru ni",imageURL:'../../../assets/Souryo.jpg',price:1000, description:"Seven, Suiseisha",quantity:0},
  //   {name: "Mankitsu Happening",imageURL:'../../../assets/Mankitsu-Happening.jpg',price:1000, description:"Collabration Works",quantity:0},
  //   {name: "Onii-chan Asa made Zutto Gyutte Shite!",imageURL:'../../../assets/Onii-chan.jpg',price:1000, description:"Mary Jane, Studio 1st",quantity:0},
  //   {name: "Severance",imageURL:'../../../assets/severance.jpg',price:1000, description:"FOW",quantity:0},
  //   {name: "Aniyome Wa Ijippari",imageURL:'../../../assets/Aniyome-Wa-Ijippari.jpg',price:1000, description:"Discovery",quantity:0},
  //   {name: "Isekai Harem Monogatari",imageURL:'../../../assets/Isekai-Harem.jpg',price:1000, description:"Majin",quantity:0},
  //   {name: "Baku Ane 2 Otouto Ippai Shibocchau zo! The Animation",imageURL:'../../../assets/Baku-Ane-2.jpg',price:1000, description:"Pink PineApple, Seven",quantity:0},
  //   {name: "Yosuga No Sora",imageURL:'../../../assets/yosuga-no-sora.jpg',price:1000, description:"N/A",quantity:0},
  //   {name: "25-sai no Joshikousei",imageURL:'../../../assets/25-sai.jpg',price:1000, description:"Cosmic Ray, Picante Circus, Suiseisha",quantity:0},
  //   {name: "Reunion",imageURL:'../../../assets/reunion.jpg',price:1000, description:"poRo",quantity:0},
  //   {name: "Netoshizu",imageURL:'../../../assets/Netoshizu.jpg',price:1000, description:"Antechinus",quantity:0},
  //   {name: "Akane wa Tsumare Somerareru",imageURL:'../../../assets/Akane-wa.jpg',price:1000, description:"Antechinus",quantity:0},
  // ] 
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
