import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() data:Post;
  fileList: any;

  constructor() { }

  ngOnInit() {
    this.fileList=this.data.files
    console.log(this.fileList)
  }

}
