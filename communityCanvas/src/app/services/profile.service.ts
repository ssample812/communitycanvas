import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { DatabaseConnection } from 'src/app/classes/database-connection';
import { Users } from 'src/app/interfaces/users';
@Injectable({
  providedIn: 'root'
})
export class ProfileService extends DatabaseConnection implements Users{
  username: string;
  password: string;
  bio: string;
  image: File;
  afs: AngularFirestore;

  private collection:AngularFirestoreCollection<Users>;

  store() {
    return;
  }

  read(username:string):Observable<Users[]> {
    this.collection= this.afs.collection('items', ref => ref.where("username", "==", username));
    let data=this.collection.valueChanges();
    return data;
  }

  constructor(afs:AngularFirestore ) { 
    super(afs);
  }
}
