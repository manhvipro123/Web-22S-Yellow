import { Injectable } from '@angular/core';
import { Shoes } from '../models/shoes.models';






@Injectable({
  providedIn: 'root'
})
export class DataService {
  public Listitem: Array<Shoes> = [{
    name: "Nike Metcon 1",
    price: 300,
    photo: "http://www.supah.it/dribbble/012/2.jpg",
    quantity:0,
  },{
    name: "Nike Metcon 2",
    price: 300,
    photo: "http://www.supah.it/dribbble/012/3.jpg",
    quantity:0,
  },{
  name: "Nike Metcon 3",
  price: 300,
  photo: "http://www.supah.it/dribbble/012/4.jpg",
  quantity:0,
  },
  {
  name: "Nike Metcon 4",
  price: 500,
  photo: "http://www.supah.it/dribbble/012/1.jpg",
  quantity:0,
  },
  {
    name: "Nike Metcon 5",
    price: 900,
  photo: "https://chiasebaiviet.com/wp-content/uploads/2019/09/Sp19_BB_Nike_Adapt_20181218_NIKE0538_Detail5_rectangle_1600.jpg",
  quantity:0,
  },
  {
    name: "Nike Metcon 6",
    price: 100,
  photo: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/47da3f6e-9d88-4bf0-a010-384140f43163/air-max-270-shoe-V4DfZQ.png",
  quantity:0,

  
  }
  ]

  constructor() { }
  public printAllItem(){
    console.log(this.Listitem)
  }
}
