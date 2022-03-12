import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss'],
})
export class AddCartComponent implements OnInit {
  form!: FormGroup;

  public name = '';
  public des = '';
  public price = 0;
  public quantity = 0;
  public photoURL = '';
  public collectName = '';
  public id = '';
  constructor(
    public httpSv: HttpClientService,
    public FormBuilder: FormBuilder
  ) {
    this.getData('api/Game');

    this.form = this.FormBuilder.group({
      collectName: ['', Validators.required],
      Id: ['', Validators.required],
      Name: ['', Validators.required],
      Price: ['', Validators.required],
      Des: ['', Validators.required],
      Quantity: ['', Validators.required],
      photoURL: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  public async getData(apiPath: string) {
    (await this.httpSv.getHelloWorld(apiPath)).subscribe(console.log);
  }

  public async addData() {
    await (
      await this.httpSv.postData(
        this.id,
        this.collectName,
        this.name,
        this.des,
        this.price,
        this.photoURL,
        this.quantity
      )
    ).subscribe((value: any) => {
      alert(value['message']);
    });
  }

  public async test() {
    let form = this.form.value;
    if (this.form.valid) {
      console.log(this.form.valid);
      alert(
        `Collection: ${form.collectName}\n ID: ${form.Id}\n Name: ${form.Name}\n Price: ${form.Price}\n Des: ${form.Des}\n Quantity: ${form.Quantity}\n Image: ${form.photoURL}`
      );
    }
    await (
      await this.httpSv.postData(
        this.form.value.Id,
        this.form.value.collectName,
        this.form.value.Name,
        this.form.value.Des,
        this.form.value.Price,
        this.form.value.photoURL,
        this.form.value.Quantity
      )
    ).subscribe((value: any) => {
      alert(value['message']);
    });
  }
}
