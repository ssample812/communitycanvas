import { Injectable } from '@angular/core';
import { DatabaseConnection } from '../classes/database-connection';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Post } from '../interfaces/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends DatabaseConnection {

  private collection:AngularFirestoreCollection<Post>;

  constructor(afs:AngularFirestore) {
    super(afs);
    this.collection=this.afs.collection<Post>('Posts');
   }
   
   store(post:Post){
     this.collection.doc(this.docID).set(post);
   }

   read():Observable<Post[]>{
     let data=this.collection.valueChanges();
     return data;
   }
}
