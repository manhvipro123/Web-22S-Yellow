import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/services/http-client.service';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.scss']
})
export class AddFilmComponent implements OnInit {

  form !: FormGroup;

  // public name = '';
  // public price = 0;
  // public quantity = 0;
  // public imageURL = '';
  // public description = '';
  
  constructor(public httpSv: HttpClientService, public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      imageURL: ['../../../assets/', Validators.required],
    });
  }

  ngOnInit(): void {
  }
  public async pushData(){
    let form = this.form.value;
    if (this.form.valid) {
      console.log(this.form.valid);
      alert(
        `collectionName: FillmStore\n name: ${form.name}\n Price: ${form.price}\n description: ${form.description}\n quantity: ${form.quantity}\n Image: ${form.imageURL}`
      );
    }
    await (
      await this.httpSv.postData(this.form.value.name,'FillmStore',this.form.value.price,this.form.value.quantity,this.form.value.imageURL,this.form.value.description)
      ).subscribe((value: any) => {
      alert(value['message']);
    });
  }
}
