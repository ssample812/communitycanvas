import { Component, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent{

  @Input() id:string;
  @Output() downloadUrl:EventEmitter<string>=new EventEmitter<string>();
  
  isHovering: boolean;
  filectr:number=0;

  files: File[]=[]

  toggleHover(event:boolean){
    this.isHovering=event;
  }

  onOutput(url:string){
    this.downloadUrl.emit(url);
  }

  onDrop(files:FileList){
    for(let i=0;i<files.length;i++){
      this.files.push(files.item(i))
    }
  }

  selectFile(event){
    this.files.push(event.target.files[0]);
  }
}
