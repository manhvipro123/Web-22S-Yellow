import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { MatDialog } from '@angular/material/dialog';
import { AddFilmComponent } from '../add-film/add-film.component';

import { ItemComponent } from '../list-item/item/item.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public user : any;
  constructor(
    public RouterService:Router,
    public auth: Auth,
    public dialog: MatDialog) {
      if(auth){
        authState(auth).subscribe((temp:any)=>{
          this.user=temp;
        });
        console.log( this.user);
      }
    }
  typeOfFilms: string[] = ['Animal','Ahegao','Action','BDSM','Bondage','Elf','GangBang','Guro','MILF','MindBreaking','NTR','Slave','Stocking','3Some','Vannila'];

  ngOnInit(): void {
  }

  turnBackHome(){
    this.RouterService.navigate(['/']);
  }
  openDialog1() {
    this.dialog.open(AddFilmComponent);
  }
 
  public async login(){
    return await signInWithPopup(this.auth,new GoogleAuthProvider());
  }
  public async logout(){

    return await signOut(this.auth);
   
  }

}
