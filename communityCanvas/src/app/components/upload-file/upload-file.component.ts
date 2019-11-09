import { Component} from '@angular/core';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFileComponent{

  isHovering: boolean;

  files: File[]=[]

  toggleHover(event:boolean){
    this.isHovering=event;
  }

  onDrop(files:FileList){
    for(let i=0;i<files.length;i++){
      this.files.push(files.item(i))
    }
  }
}
