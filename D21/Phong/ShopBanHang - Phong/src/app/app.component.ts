import { Component } from '@angular/core';
import { Auth, authState, signInAnonymously, signOut, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ShopBanHang';

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
    return await signInWithPopup(this.auth,new GoogleAuthProvider());
  }
  
  public async logout(){
    return await signOut(this.auth)
  }

}
