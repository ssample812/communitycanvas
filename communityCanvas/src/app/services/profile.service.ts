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

  store(ProfileService) {
    return;
  }

  read():Observable<Users[]> {
    let data=this.collection.valueChanges();
    return data;
  }

  constructor(username:string, afs:AngularFirestore ) { 
    super(afs);
    this.username = username;
    this.collection= this.afs.collection('items', ref => ref.where("username", "==", username));
  }
}
