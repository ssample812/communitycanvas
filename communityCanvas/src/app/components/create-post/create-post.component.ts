import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  private docID:string;
  private newPost:Post;
  // private user:string;

  createPostForm=new FormGroup({
    title:new FormControl(''),
    text:new FormControl(''),
  })
  urlList: string[]=new Array<string>();
  constructor(private db:PostsService, private route:ActivatedRoute) { }

  ngOnInit() {
    let user=this.route.snapshot.paramMap.get('id');
    this.docID=this.db.getID();
    this.newPost={
      postedby:user,
      title:null,
      comments:null,
      files:[],
      text:null
    }
  }

  onSubmit(){
    this.newPost.text=this.createPostForm.value.text;
    this.newPost.title=this.createPostForm.value.title;
    this.newPost.files=this.urlList;
    this.db.store(this.newPost);
  }

  onOutput(url:string){
    console.log("THIS IS BEING CALLED");
    this.urlList.push(url);
  }

}
