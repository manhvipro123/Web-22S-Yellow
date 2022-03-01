import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, authState, signInAnonymously, signOut, User } from '@angular/fire/auth';
import { user } from 'rxfire/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { provideFirebaseApp } from '@angular/fire/app';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit,OnDestroy {
  user!: User | null
  dispose!: Subscription
  constructor(public router: Router, private auth: Auth) {

    if (this.auth) {
      this.dispose = authState(this.auth).subscribe((user: any) => {
        this.user = user
        console.log(user)
      })
    }

  }
  ngOnDestroy(): void {
      this.dispose.unsubscribe();
  }
  public async login() {
    return await signInWithPopup(this.auth, new GoogleAuthProvider())
  }
  public async logout() {
    return await signOut(this.auth)
  }
 

  ngOnInit(): void {
  }
  navigate(path: string) {
    this.router.navigate([path])
  }


}
