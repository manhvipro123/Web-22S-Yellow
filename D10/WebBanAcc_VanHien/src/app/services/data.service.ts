import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}
  public List1:Array<Game> =[{
    photoUrl:"../../../assets/images/vietnambest.png",
    BanAcc: "Tài khoản:FO4#0123467", 
    name: "Đội hình Việt Nam mùa VietNamBest",
    price: "Giá cũ:6000000VNĐ",
    atm:   5000000,
    quantily:0,
  },
  {
    photoUrl:"../../../assets/images/mancity.jpg",
    BanAcc: "Tài khoản:FO4#7894562", 
    name: "Đội hình ManCity mùa 2017-2018", 
    price: "Giá cũ:500000VNĐ",
    atm:   2000000,
    quantily:0,
  },
  {
    photoUrl:"../../../assets/images/realmadrid.jpg",
    BanAcc: "Tài khoản:FO4#214625478", 
    name: "Đội hình Real Madrid 3.0", 
    price: "Giá cũ:3000000VNĐ",
    atm:   3000000,
    quantily:0,
  },
  {
    photoUrl:"../../../assets/images/barcelona.jpg",
    BanAcc: "Tài khoản:FO4#2358761", 
    name: "Đội hình Barcelona", 
    price: "Giá cũ:5000000VNĐ",
    atm:   1000000,
    quantily:0,
  },
  {
    photoUrl:"../../../assets/images/intermilan.png",
    BanAcc: "Tài khoản:FO4#3786512", 
    name: "Đội hình Inter Milan", 
    price: "Giá cũ:3000000VNĐ",
    atm:   300000,
    quantily:0,
  },
  {
    photoUrl:"../../../assets/images/mancity11-12.jpg",
    BanAcc: "Tài khoản:FO4#8102357", 
    name: "Đội hình Mancity 2011-2012", 
    price: "Giá cũ:3000000VNĐ",
    atm:   5000000,
    quantily:0,
  },
  {
    photoUrl:"../../../assets/images/manu.jpg",
    BanAcc: "Tài khoản:FO4#3578910", 
    name: "Đội hình ManUnited 2007-2008", 
    price: "Giá cũ:3000000VNĐ",
    atm:   9000000,
    quantily:0,
  },
  {
    photoUrl:"../../../assets/images/chelsea.jpg",
    BanAcc: "Tài khoản:FO4#0234780", 
    name: "Đội hình Chelsea", 
    price: "Giá cũ:3000000VNĐ",
    atm:   90000000,
    quantily:0,
  },
  {
    photoUrl:"../../../assets/images/bi.jpg",
    BanAcc: "Tài khoản:FO4#3647810", 
    name: "Đội hình đội tuyển Bỉ", 
    price: "Giá cũ:3000000VNĐ",
    atm:   50000000,
    quantily:0,
  },
  {
    photoUrl:"../../../assets/images/phap.png",
    BanAcc: "Tài khoản:FO4#9647135", 
    name: "Đội hình đội tuyển Pháp", 
    price: "Giá cũ:3000000VNĐ",
    atm:   100000000,
    quantily:0,
  },
  {
    photoUrl:"../../../assets/images/anh.jpg",
    BanAcc: "Tài khoản:FO4#4563217", 
    name: "Đội hình đội tuyển Anh", 
    price: "Giá cũ:3000000VNĐ",
    atm:   3000000,
    quantily:0,
  },
]
  public Print(){
    console.log(this.List1);
  }
}