import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myweb',
  templateUrl: './myweb.component.html',
  styleUrls: ['./myweb.component.scss']
})
export class MywebComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  navigate(path:string){
    this.router.navigateByUrl(path);
  }
}
