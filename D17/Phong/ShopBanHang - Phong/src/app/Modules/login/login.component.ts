import { Component, OnInit } from '@angular/core';
import { Auth, authState, signInAnonymously, signOut, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:any
  constructor(private router:Router, public auth:Auth) {
    if (this.auth) {
      this.user = authState(this.auth);
      this.user.subscribe((user:any)=>{
        console.log(user)
      }
      )}
  }
  ngOnInit(): void {
  }
  public async login(){
    await signInWithPopup(this.auth,new GoogleAuthProvider());
  }
  
  public async logout(){
    await signOut(this.auth)
  }

}
