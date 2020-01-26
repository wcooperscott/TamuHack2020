import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(
    private afs : AngularFirestore,
    private platform : Platform
  ) {
    
  }

  listenToNotifications() {
    return (<any>window).FirebasePlugin.onMessageReceived();
  }
}
