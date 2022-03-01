import { Component, OnInit } from '@angular/core';
import { GetitemService } from 'src/app/services/getitem.service';
import{Game} from '../../models/game.model'

@Component({
  selector: 'app-shoppecar',
  templateUrl: './shoppecar.component.html',
  styleUrls: ['./shoppecar.component.scss']
})
export class ShoppecarComponent implements OnInit {

  constructor(public cartsp :GetitemService) { }

  ngOnInit(): void {
     this.cartsp.Payment();
     console.log(this.cartsp.Payment())
  }
  public getSP : Array<Game> = [];
  public payment=0;
  public ThanhTien(){
    this.payment = this.cartsp.Payment();
    alert(this.payment);
  }

}
