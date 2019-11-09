import { Injectable } from '@angular/core';
import { AngularFireStorageReference,AngularFireUploadTask } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FileStorageService {

  triggerUpload(path: string, file: File): AngularFireUploadTask {
    throw new Error("Method not implemented.");
  }

  getRef(path: string):AngularFireStorageReference {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
