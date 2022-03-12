import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  form!: FormGroup;
  constructor(public httpSv: HttpClientService,
    public FormBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public async test() {
    let form = this.form.value;
    if (this.form.valid) {
      console.log(this.form.valid);
      alert(
       `Name:${form.name}\n Pirce:${form.pirce}\n PhotoURL:${form.photoURL}\n Popularity:${form.popularity}\n Quantity:${form.quantity}\n CollectionName:${form.collectionName}`
      );
    }
    await (await this.httpSv.postData(this.form.value.name,
     parseInt( this.form.value.pirce),
      this.form.value.photoURL,
      this.form.value.popularity,
     parseInt( this.form.value.quantity),
      this.form.value.collectionName)
    ).subscribe((value: any) => {
      alert(value['message']);
    });
  }
}
