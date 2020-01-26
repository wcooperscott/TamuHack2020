import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private afs : AngularFirestore) { }

  public getBags(){
    let query = this.afs.collection('bags');

    return query.snapshotChanges();

    // return query.get()
    // .pipe(
    //     map(snapshot => {
    //         let items = [];
    //         snapshot.docs.map(a => {
    //             const data = a.data();
    //             const id = a.id;
    //             items.push({ id, ...data })
    //         })
    //         return items
    //     }),
    // );
  }
}
