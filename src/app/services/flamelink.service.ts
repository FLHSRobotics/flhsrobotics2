import { Injectable, Inject } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';
import { FirebaseApp } from '@angular/fire';
// @ts-ignore
import flamelink from 'flamelink/app';
import 'flamelink/content';
import 'flamelink/storage';
import 'flamelink/navigation';

@Injectable({
  providedIn: 'root'
})
export class FlamelinkService {

  // GET|SET flApp
  private _flApp: flamelink.app.App;

  get flApp() {
    return this._flApp;
  }

  set flApp(value) {
    this._flApp = value;
  }

  constructor(@Inject(FirebaseApp) private _fb: firebase.app.App) {
    this.flApp = flamelink({
      firebaseApp: this._fb,
      env: 'production', // optional, defaults to `production`
      locale: 'en-US', // optional, defaults to `en-US`
      dbType: 'cf' // optional, defaults to `rtdb` - can be 'rtdb' or 'cf' (Realtime DB vs Cloud Firestore
    });
  }

  getApp() {
    return this.flApp;
  }
}
