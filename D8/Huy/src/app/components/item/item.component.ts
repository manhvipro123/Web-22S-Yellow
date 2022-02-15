import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
   public list: any=[{
     name: "NIKE METCON 2",
     price: 130,
     photo: "http://www.supah.it/dribbble/012/2.jpg"  
   },{
     name
   },{
     
   }]

  constructor() { }

  ngOnInit(): void {
  }


  click(){
    console.log(`click ne`)
  }

}
