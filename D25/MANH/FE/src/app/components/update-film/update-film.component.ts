import { Component, Inject, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/services/http-client.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styleUrls: ['./update-film.component.scss']
})
export class UpdateFilmComponent implements OnInit {
  
  form !: FormGroup;
  // public name = this.data.name;
  // public price = this.data.price;
  // public quantity = this.data.quantity;
  // public imageURL = this.data.imageURL;
  // public description = this.data.description;
  // public docId = '';

  constructor(public httpSv: HttpClientService, @Inject(MAT_DIALOG_DATA) public data: any,public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [`${this.data.name}`, Validators.required],
      price: [`${this.data.price}`, Validators.required],
      description: [`${this.data.description}`, Validators.required],
      quantity: [`${this.data.quantity}`, Validators.required],
      imageURL: [`${this.data.imageURL}`, Validators.required],
    });
  }
  public value: any;

  ngOnInit(): void {

  }

  public async updateData() {
    let form = this.form.value;
    if (this.form.valid) {
      console.log(this.form.valid);
      alert(
        `collectionName: FillmStore\n docId: ${this.data.id}\n name: ${form.name}\n Price: ${form.price}\n description: ${form.description}\n quantity: ${form.quantity}\n Image: ${form.imageURL}`
      );
    }
    await (
      await this.httpSv.putData(this.form.value.name, 'FillmStore', this.data.id, this.form.value.price, this.form.value.quantity, this.form.value.imageURL, this.form.value.description)
    ).subscribe((value: any) => {
      alert(value['message']);
    });
  }
}
