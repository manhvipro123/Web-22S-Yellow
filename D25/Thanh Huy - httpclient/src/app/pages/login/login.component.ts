import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { DataService } from 'src/app/service/data.service';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(public Router: Router, public FormBuilder: FormBuilder) {
    this.form = this.FormBuilder.group({
      email: ['', Validators.required],
      text: ['', Validators.required],
    });
  }

  // public data: Game[] = [];
  // constructor(public firestore: Firestore, public dataSv: DataService) {
  //   dataSv.createListenerData(this.data).subscribe((value) => {
  //     this.data = value as Game[];
  //     this.dataSv.data = value as Game[];
  //     console.log(this.data);
  //   });
  // }

  ngOnInit(): void {}

  // public linked(path:any){
  //   this.Router.navigate(path);
  // }

  // public result(){
  //   if(parseInt(this.form.value.num1) > parseInt(this.form.value.num2)){
  //     alert('Số A lớn hơn Số B');
  //   }
  //   else if(parseInt(this.form.value.num1) < parseInt(this.form.value.num2)){
  //     alert('Số A nhỏ Số B');
  //   }
  //   else{
  //     alert('Số A bằng Số B');
  //   }
  // }

  public test() {
    let form = this.form.value;
    if (this.form.valid) {
      console.log(this.form.valid);
      alert(`Email: ${form.email}\n Text: ${form.text}`);
      // alert("Email: " + this.form.value.email + "\nText: " + this.form.value.text);
    }
  }
}
