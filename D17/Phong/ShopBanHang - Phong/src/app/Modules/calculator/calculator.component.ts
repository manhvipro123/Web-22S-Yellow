import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  form !: FormGroup
  constructor(private input:FormBuilder) { 
    this.form = this.input.group({
      so1 :'',
      so2 :'',
    })
  }

  ngOnInit(): void {
  }

  public tinh(){
    if(parseInt(this.form.value.so1) > parseInt(this.form.value.so2) )
    {
      alert("Số 1 lớn hơn số 2")
    }else if(parseInt(this.form.value.so1) < parseInt(this.form.value.so2) )
    {
      alert("Số 2 lớn hơn số 1")
    }else
    {
      alert("2 số bằng nhau")
    }
  }

}
