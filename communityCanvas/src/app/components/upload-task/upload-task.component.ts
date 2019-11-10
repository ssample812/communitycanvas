import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { tap, finalize } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
//import { DatabaseService } from 'src/app/services/database.service';
import { FileStorageService } from 'src/app/services/file-storage.service';

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.css']
})
export class UploadTaskComponent implements OnInit {

  @Input() file:File;
  
  task: AngularFireUploadTask;

  static ctr:number=0;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;
  constructor(private storage:FileStorageService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.startUpload();
  }

  startUpload(){
    const path='EX PATH'

    const ref=this.storage.getRef(path)

    this.task=this.storage.triggerUpload(path,this.file)

    this.percentage=this.task.percentageChanges();

    this.snapshot=this.task.snapshotChanges().pipe(
      tap(console.log),

      finalize(async()=>{
        this.downloadURL=await ref.getDownloadURL().toPromise();
      }),
    );
  }

  isActive(snapshot){
    return snapshot.state==='running' &&snapshot.bytesTrasnferred <snapshot.totalBytes;
  }
}