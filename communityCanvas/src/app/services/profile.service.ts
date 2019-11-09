import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { DatabaseConnection } from 'src/app/classes/database-connection';
@Injectable({
  providedIn: 'root'
})
export class ProfileService extends DatabaseConnection {

  private collection:AngularFirestoreCollection<Profile>;
  username:string;
  protected afs:AngularFirestore;

  store(ProfileService) {
    return;
  }

  read():Observable<Profile> {
    let data=this.collection.valueChanges();
    return data;
  }

  constructor(username:string) { 
    super(afs);
    this.username = username;
    this.collection = this.afs.collection('items', ref => ref.where("username", "==", username))<Profile>();
  }
}
