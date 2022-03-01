import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup
  result : any 
  constructor(
    public Router:Router,
    public formBuilder: FormBuilder){
      this.form = this.formBuilder.group({
        soA : "",
        soB : "",
      });
    }

  ngOnInit(): void {
  }
  public link(path:any){
    this.Router.navigate(path);  
  }
  public compare(){
    if(parseInt(this.form.value.soA) > parseInt(this.form.value.soB)){
        this.result = "A > B";
    }else if(parseInt(this.form.value.soA) < parseInt(this.form.value.soB)){
      this.result = "A < B";
    }else{
      this.result = "A == B";
    }
  }

}
