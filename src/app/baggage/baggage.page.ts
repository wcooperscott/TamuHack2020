import { Component, OnInit, ɵConsole } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { map } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-baggage',
  templateUrl: './baggage.page.html',
  styleUrls: ['./baggage.page.scss'],
})
export class BaggagePage implements OnInit {

  bags: Observable<any[]>;
  private alert: any;

  constructor(
    private afs: AngularFirestore,
    private dataService: DataService,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    //this.bags = this.afs.collection('bags').valueChanges();
    this.bags = this.afs.collection('bags').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getDate(bag: any) {
    return new Date(bag.lastUpdated.seconds * 1000).toLocaleString();
  }

  public history(bag: any) {
    console.log(bag);
    this.dataService.setData(12, bag);
    this.router.navigateByUrl("luggage-history/12");
  }

  ngOnInit() {
  }

  async onLongPress(bag) {
    console.log("Long-pressed bag!", bag);
    this.alert = await this.alertCtrl.create({
      header: "Report missing?",
      message: "Would you like to report this luggage missing?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Report',
          handler: () => {
            this.dataService.setData(99, bag);
            this.router.navigateByUrl("submit-missing-luggage-ticket/99");
          }
        }
      ]

    });
    await this.alert.present();
  }

}
