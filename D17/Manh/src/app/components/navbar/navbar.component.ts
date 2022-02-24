import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { authState } from 'rxfire/auth';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public user : any;
  constructor(
    public RouterService:Router,
    public auth: Auth) {
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
    this.RouterService.navigate(['/home']);
  }

  public async login(){
    return await signInWithPopup(this.auth,new GoogleAuthProvider());
  }
  public async logout(){

    return await signOut(this.auth);
   
  }

}
