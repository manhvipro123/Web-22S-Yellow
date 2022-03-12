import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { PaymentService } from 'src/app/service/payment.service';
import { Game } from '../../models/game.model';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  public data: Game[] = [];
  constructor(
    public dataSv: DataService,
    public paymentSv: PaymentService,
    public httpSv: HttpClientService
  ) {
    this.getData('api/Game');
  }

  ngOnInit(): void {}

  // Pay(){
  //   let temp = this.paymentSv.getPayment();
  //   alert(temp);
  // }

  // public getData() {
  //   console.log(this.dataSv.data);
  // }

  public async getData(apiPath: string) {
    (await this.httpSv.getHelloWorld(apiPath)).subscribe((value) => {
      this.data = value;
      console.log(this.data);
    });
  }
}
