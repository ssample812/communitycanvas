import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  private docID:string;
  private postList:Observable<Post[]>

  constructor(private db:PostsService) { }

  ngOnInit() {
    this.db.getID();
  }

}
