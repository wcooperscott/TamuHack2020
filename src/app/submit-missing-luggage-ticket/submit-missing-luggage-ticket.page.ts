import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-submit-missing-luggage-ticket',
  templateUrl: './submit-missing-luggage-ticket.page.html',
  styleUrls: ['./submit-missing-luggage-ticket.page.scss'],
})
export class SubmitMissingLuggageTicketPage implements OnInit {

  bag : any;
  customerNotes : string = "";
  private loader;

  constructor(
    private route : ActivatedRoute,
    private afs : AngularFirestore,
    private router : Router,
    private loadingCtrl : LoadingController
  ) { }

  ngOnInit() {
    if (this.route.snapshot.data['special']) {
      this.bag = this.route.snapshot.data['special'];
    }
  }

  getDate(bag: any) {
    return new Date(bag.lastUpdated.seconds * 1000).toLocaleString();
  }

  async submitData(){
    this.loader = await this.loadingCtrl.create({
      message: "loading"
    });
    await this.loader.present();
     await this.afs.collection("MissingLuggage").add({
      "name" : this.bag.name,
      "id" : this.bag.id,
      "lastLoggedDate" : this.bag.lastUpdated
    });
    await this.loader.dismiss();
    this.router.navigateByUrl("/home");
  }

}
