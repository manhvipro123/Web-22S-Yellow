import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Item } from 'src/app/models/item.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  public arr!: Array<Item>;
  constructor(public dataService: DataService,
    public RouterService: Router) {
   }

  ngOnInit(): void {
  }

  
}
