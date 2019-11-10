import { Injectable } from '@angular/core';
import { AngularFireStorageReference,AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FileStorageService {

  constructor(private storage:AngularFireStorage) { }

  triggerUpload(path: string, file: File): AngularFireUploadTask {
    return this.storage.upload(path,file);
  }

  getRef(path: string):AngularFireStorageReference {
    return this.storage.ref(path);
  }
}
