import { Component, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  public user:any;

  constructor( private auth: Auth) {
    if (auth) {
      authState(auth).subscribe((temp:any)=>{
        this.user=temp;
         console.log(this.user);
      });
     
   }
  }
  ngOnInit(): void {
  }

  public async login(){
      return await signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  public async logOut(){   
    // alert('có cái db djt me may');
    return await signOut(this.auth);
  }

  
}
