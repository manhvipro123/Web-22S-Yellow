import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public items: any=[{
    name : "PUBG",
    price : "1.000.000 vnd",
    photoUrl :"../../../assets/img/1.jpg",
    popularity:"Popular"
  },

  {
    name : "Pokemon",
    price : "500.000 vnd",
    photoUrl :"../../../assets/img/2.jpg",
    popularity:"Popular"
  },
  {
    name : "LoL",
    price : "1.000.000 vnd",
    photoUrl :"../../../assets/img/3.jpg",
    popularity:"Popular"
  },
  {
    name : "Ark",
    price : "600.000 vnd",
    photoUrl :"../../../assets/img/5.jpg",
    popularity:"Popular"
  },
  
  {
    name : "GTA 5",
    price : "1.500.000 vnd",
    photoUrl :"../../../assets/img/6.jpg",
    popularity:"Hot",
  },
  {
    name : "Sifu",
    price : "1.700.000 vnd",
    photoUrl :"../../../assets/img/7.jpg",
    popularity:"Hot"
  },
  {
    name : "Left4Dead",
    price : "400.000 vnd",
    photoUrl :"../../../assets/img/8.jpg",
    popularity:"Popular"
  },
  {
    name : "NARAKA: BLADEPOINT",
    price : "1,000.000 vnd",
    photoUrl :"../../../assets/img/9.jpg",
    popularity:"Hot"
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
