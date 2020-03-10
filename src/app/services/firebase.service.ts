// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Recipes } from '../shared/Recipes';
// import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
// import { map, take } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class FirebaseService {

//   private cooking: Observable<Recipes[]>;
//   private cookingCollection: AngularFirestoreCollection<Recipes>;

//   constructor(private afs: AngularFirestore) {
//     this.cookingCollection = this.afs.collection<Recipes>(path: 'cooking');
//     this.cooking = this.cookingCollection.snapshotChanges().pipe(
//       map (project: actions => { 
//         return actions.map(a =>{
//           const data = a.payload.doc.data();
//           const id = a.payload.doc.id;
//           return {id, ...data};
//         })

//       })
//     )
//    }
// }
