import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-luggage-history',
  templateUrl: './luggage-history.page.html',
  styleUrls: ['./luggage-history.page.scss'],
})
export class LuggageHistoryPage implements OnInit {

  private bag;
  private checkpoints : Observable<any>;

  constructor(
    private route : ActivatedRoute,
    private afs : AngularFirestore
  ) { }

  ngOnInit() {
    if (this.route.snapshot.data['special']) {
      this.bag = this.route.snapshot.data['special'];
    }

    this.checkpoints = this.afs.collection('bags').doc(this.bag).collection('checkpoints').valueChanges();
  }

  getDate(checkpoint: any, ) {
    return new Date(checkpoint.time.seconds * 1000).toLocaleString();
  }

}
