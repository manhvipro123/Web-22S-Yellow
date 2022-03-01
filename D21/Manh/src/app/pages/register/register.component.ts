import { Component, OnInit } from '@angular/core';
import {
  Firestore,
  doc,
  collection,
  collectionData,
} from '@angular/fire/firestore';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  typeOfFilms: string[] = [
    'Animal',
    'Ahegao',
    'Action',
    'BDSM',
    'Bondage',
    'Elf',
    'GangBang',
    'Guro',
    'MILF',
    'MindBreaking',
    'NTR',
    'Slave',
    'Stocking',
    '3Some',
    'Vannila',
  ];
  public data: Item[] = [];

  constructor(private dataService: DataService, private Firestore: Firestore) {
    // dataService.pushAutoData();
    collectionData(this.ref, { idField: 'id' }).subscribe((res: any) => {
      console.log(res);
    });
  }

  private ref = collection(this.Firestore, 'fruits');

  ngOnInit(): void {}
}
