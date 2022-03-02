import { Injectable } from '@angular/core';
import { Account } from '../Components/Models/account.model';
import { collection , collectionData, Firestore, addDoc } from '@angular/fire/firestore';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data: Account[]=[];
  public collectProduce = collection(this.firestore, 'produce')
  constructor(public firestore: Firestore) {}
  public createListenerData(data: Account[]){
    return collectionData(this.collectProduce, {
      idField:'id', 
    });

  }

  public updataAllData(){
    for(let account of this.data){
      let tempId = (account as any)['id'];
      console.log(tempId)
      updateDoc(doc(this.firestore, 'produce',tempId),{
        ...account,
      });

    }
  }

  public update(account:Account){
    let tempId = (account as any)['id'];
    updateDoc(doc(this.firestore, 'produce',tempId),{
      ...account,
    });
   
  }

  public delete(account:Account){
    let tempId = (account as any)['id'];
    deleteDoc(doc(this.firestore, 'produce',tempId)); 
  }

  public accounts:Array<Account>= [
  //   {
  //   name: "Sản Phẩm 1:",
  //   price: 120,  
  //   photoURL: "../../../assets/1495863.jpg",
  //   description: " Đẹp ^^",
  //   quantity: 0,
  // },

  // {
  // name: "Sản Phẩm 2:",
  // price: 110,
  // photoURL: "../../../assets/I0cw3N.jpg",
  // description: " Ngầu ^^",
  // quantity: 0,
  // },
  // {
  // name: "Sản Phẩm 3:",
  // price: 120,
  // photoURL: "../../../assets/673691-the-best-csgo-wallpaper-you-have-ever-seen-dmarket.jpg",
  // description: " Ngầu ^^",
  // quantity: 0,
  // },
  // {
  // name: "Sản Phẩm 4:",
  // price: 160,
  // photoURL: "../../../assets/a35a4f755944263778d83434f9540336.jpg",
  // description: " Ngầu ^^",
  // quantity: 0,
  // },
  // {
  // name: "Sản Phẩm 5:",
  // price: 100,
  // photoURL: "../../../assets/9b810acd4fd224e8310fa60d89987c64.jpg",
  // description: " Ngầu ^^",
  // quantity: 0,
  // },
  // {
  // name: "Sản Phẩm 6:",
  // price: 300,
  // photoURL: "../../../assets/CSGO-Shattered-Web-Weapon-skins.jpg",
  // description: " Ngầu ^^",
  // quantity: 0,
  // },
  // {
  // name: "Sản Phẩm 7:",
  // price: 400,
  // photoURL: "../../../assets/image038.jpg",
  // description: " Ngầu ^^",
  // quantity: 0,
  // },
  // {
  // name: "Sản Phẩm 8:",
  // price: 700,
  // photoURL: "../../../assets/thumb.jpg",
  // description: " Ngầu ^^",
  // quantity: 0,
  // },
  // {
  // name: "Sản Phẩm 9:",
  // price: 500,
  // photoURL: "../../../assets/251-2518912_dragon-lore-m4a4-wallpaper-hd.jpg",
  // description: " Ngầu ^^",
  // quantity: 0,
  // },
  // {
  // name: "Sản Phẩm 10:",
  // price: 300,
  // photoURL: "../../../assets/13_hu72e133212d8bfddeec207a17c1eed613_1257994_1920x1080_resize_q75_lanczos.jpg",
  // description: " Ngầu ^^",
  // quantity: 0,
  // },
  // {
  // name: "Sản Phẩm 11:",
  // price: 500,
  // photoURL: "../../../assets/81195cd15d579b8395cddb63bc65e6be.jpg",
  // description: " Ngầu ^^",
  // quantity: 0,
  // },
  // {
  // name: "Sản Phẩm 12:",
  // price: 300,
  // photoURL: "../../../assets/sawed-off-rise-workshop-cs-go.jpg",
  // description: " Ngầu ^^",
  // quantity: 0,
  // },
]

      // public pushAutoData(){
      //   let collect = collection(this.firestore,'produce');
      //   for(let account of this.accounts){
      //     addDoc(collect,account)
      //   }
      // }
}
