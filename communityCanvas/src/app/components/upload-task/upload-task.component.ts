import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireUploadTask} from '@angular/fire/storage';
import { tap, finalize } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { FileStorageService } from 'src/app/services/file-storage.service';
import { PostsService } from 'src/app/services/posts.service';
import { async } from 'q';

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.css']
})
export class UploadTaskComponent implements OnInit {

  @Input() file:File;
  @Input() postid:string;
  @Output() imgdownloadURL:EventEmitter<string>=new EventEmitter<string>();
  
  task: AngularFireUploadTask;
  url:string;
  static ctr:number=0;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;
  constructor(private storage:FileStorageService,private db:PostsService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.startUpload();
  }

  startUpload(){
    const path=this.postid+"_IMG"

    const ref=this.storage.getRef(path)

    this.task=this.storage.triggerUpload(path,this.file)

    this.percentage=this.task.percentageChanges();

    this.snapshot=this.task.snapshotChanges().pipe(
      // tap(console.log),

      finalize(async()=>{
        this.url=await ref.getDownloadURL().toPromise();
        this.imgdownloadURL.emit(this.url)
      }),
    );
  }

  isActive(snapshot){
    return snapshot.state==='running' &&snapshot.bytesTrasnferred <snapshot.totalBytes;
  }
}