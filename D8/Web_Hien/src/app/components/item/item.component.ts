import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public List:any=[{
    photoUrl:"../../../assets/images/vietnambest.png",
    BanAcc: "Tài khoản:FO4#214625478", 
    name: "Đội hình Việt Nam mùa VietNamBest",
    price: "Giá cũ:6000000VNĐ",
    atm:   "Giá mới:5000000VNĐ",
  },
  // {
  //   photourl:"../../../assets/images/mancity.jpg",
  //   BanAcc: "Tài khoản:FO4#214625478", 
  //   name: "Đội hình ManCity mùa 2017-2018", 
  //   price: "Giá cũ:500000VNĐ",
  //   atm:   "Giá mới:2000000VNĐ",
  // },
  // {
  //   photourl:"../../../assets/images/realmadrid.jpg",
  //   BanAcc: "Tài khoản:FO4#214625478", 
  //   name: "Đội hình Real Madrid 3.0", 
  //   price: "Giá cũ:3000000VNĐ",
  //   atm:   "Giá mới:3000000VNĐ",
  // },
  // {
  //   photourl:"../../../assets/images/acmilan.jpg",
  //   BanAcc: "Tài khoản:FO4#214625478", 
  //   name: "Đội hình AC Milan 2003-2004", 
  //   price: "Giá cũ:3000000VNĐ",
  //   atm:   "Giá mới:3000000VNĐ",
  // },
  // {
  //   photourl:"../../../assets/images/vietnambest.png",
  //   BanAcc: "Tài khoản:FO4#214625478", 
  //   name: "Đội hình Việt Nam mùa VietNam",
  //   price: "Giá cũ:6000000VNĐ",
  //   atm:   "Giá mới:5000000VNĐ",
  // }, 
  // {
  //   photourl:"../../../assets/images/barcelona.jpg",
  //   BanAcc: "Tài khoản:FO4#214625478", 
  //   name: "Đội hình Barcelona", 
  //   price: "Giá cũ:500000VNĐ",
  //   atm:   "Giá mới:2000000VNĐ",
  // },
  // {
  //   photourl:"../../../assets/images/intermilan.png",
  //   BanAcc: "Tài khoản:FO4#214625478", 
  //   name: "Đội hình Inter Milan", 
  //   price: "Giá cũ:3000000VNĐ",
  //   atm:   "Giá mới:3000000VNĐ",
  // },
  // {
  //   photourl:"../../../assets/images/mancity11-12.jpg",
  //   BanAcc: "Tài khoản:FO4#214625478", 
  //   name: "Đội hình Mancity 2011-2012", 
  //   price: "Giá cũ:3000000VNĐ",
  //   atm:   "Giá mới:3000000VNĐ",
  // },
  // {
  //   photourl:"../../../assets/images/manu.jpg",
  //   BanAcc: "Tài khoản:FO4#214625478", 
  //   name: "Đội hình ManUnited 2007-2008", 
  //   price: "Giá cũ:3000000VNĐ",
  //   atm:   "Giá mới:3000000VNĐ",
  // },
  // {
  //   photourl:"../../../assets/images/chelsea.jpg",
  //   BanAcc: "Tài khoản:FO4#214625478", 
  //   name: "Đội hình Chelsea", 
  //   price: "Giá cũ:3000000VNĐ",
  //   atm:   "Giá mới:3000000VNĐ",
  // },
  // {
  //   photourl:"../../../assets/images/bi.jpg",
  //   BanAcc: "Tài khoản:FO4#214625478", 
  //   name: "Đội hình đội tuyển Bỉ", 
  //   price: "Giá cũ:3000000VNĐ",
  //   atm:   "Giá mới:3000000VNĐ",
  // },
  // {
  //   photourl:"../../../assets/images/phap.png",
  //   BanAcc: "Tài khoản:FO4#214625478", 
  //   name: "Đội hình đội tuyển Pháp", 
  //   price: "Giá cũ:3000000VNĐ",
  //   atm:   "Giá mới:3000000VNĐ",
  // },
  // {
  //   photourl:"../../../assets/images/anh.jpg",
  //   BanAcc: "Tài khoản:FO4#214625478", 
  //   name: "Đội hình đội tuyển Anh", 
  //   price: "Giá cũ:3000000VNĐ",
  //   atm:   "Giá mới:3000000VNĐ",
  // },
  // {
  //   photourl:"../../../assets/images/duc.jpg",
  //   BanAcc: "Tài khoản:FO4#214625478", 
  //   name: "Đội hình đội tuyển Đức", 
  //   price: "Giá cũ:3000000VNĐ",
  //   atm:   "Giá mới:3000000VNĐ",
  // },
]

  constructor() { }

  ngOnInit(): void {
  }

}
