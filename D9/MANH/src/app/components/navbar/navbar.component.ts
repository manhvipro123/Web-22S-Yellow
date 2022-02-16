import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  typeOfFilms: string[] = ['Animal','Ahegao','Action','BDSM','Bondage','Elf','GangBang','Guro','MILF','MindBreaking','NTR','Slave','Stocking','3Some','Vannila'];

  ngOnInit(): void {
  }

}
