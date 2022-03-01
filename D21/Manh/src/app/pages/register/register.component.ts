import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  typeOfFilms: string[] = ['Animal','Ahegao','Action','BDSM','Bondage','Elf','GangBang','Guro','MILF','MindBreaking','NTR','Slave','Stocking','3Some','Vannila'];
  public data: Item[] = [];
  constructor(private firestore: Firestore, private dataService: DataService) {
    dataService.pushAutoData();
   }

  ngOnInit(): void {
  }

}
