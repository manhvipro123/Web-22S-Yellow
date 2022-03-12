import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/services/http-client.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form!: FormGroup;
  constructor(public httpSv: HttpClientService,
    public FormBuilder: FormBuilder) {
      (this.getData('api/items'));
      this.form = this.FormBuilder.group({
        name: ['', Validators.required],
        pirce:[0, Validators.required],
        photoURL:['',Validators.required],
        popularity:['',Validators.required],
        quantity:[0, Validators.required],
        collectionName:['',Validators.required]

      });
   }

  ngOnInit(): void {

  }

  public async getData(apiPath:string){
    (await this.httpSv.getHelloWorld(apiPath)).subscribe(console.log)
  }
  // public async addData(){
  //   await (await this.httpSv.postData(this.name,this.pirce,this.photoURL,this.popularity,this.quantity,this.collectionName))
  //   .subscribe((value: any) =>{
  //       alert(value['message']);
  //   });
  // }
  
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

