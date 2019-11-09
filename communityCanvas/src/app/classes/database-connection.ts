import {AngularFirestore} from '@angular/fire/firestore';

export abstract class DatabaseConnection {

    protected docID: string;

    constructor(protected afs:AngularFirestore) {
      this.docID=afs.createId();
     }

    getID():string {
      return this.docID;
    }

    abstract store(doc:Object);

    abstract read():Object;
}
