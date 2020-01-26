import { Component } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FcmService } from './fcm.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm : FcmService,
    private toastCtrl : ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Get a FCM token
      (<any>window).FirebasePlugin.getToken(token => {
        console.log("Device token: ", token);
      });

      // Listen to incoming messages
      this.fcm.listenToNotifications().pipe(
        tap(msg => {
          const toast = this.toastCtrl.create({
            message: "You recieved a notification",
            duration: 3000
          });
          toast.then(data => {
            data.present();
          })
        })
      ).subscribe();


      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
