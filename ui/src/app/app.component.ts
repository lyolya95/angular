import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular';

  constructor(public auth: AngularFireAuth) {
    console.log(auth)
  }

  signInClicked(): void {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signOutClicked(): void {
    this.auth.signOut();
  }
}
