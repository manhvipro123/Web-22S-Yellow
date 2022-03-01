import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
 form !: FormGroup
  constructor(private input:FormBuilder) {
    this.form = this.input.group({
      so1:'',
      so2: '',
    })
   }

  ngOnInit(): void {
  }
  public Tinh(){
    if(parseInt(this.form.value.so1) > parseInt(this.form.value.so2) ){
      alert('so 1 lon hon so 2');
    }else{
      alert('so 2 lon hon so 1 ')
    }
  }


}
