import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  private docID:string;
  private newPost:Post;
  private imgFileUrl:string;
  // private user:string;

  createPostForm=new FormGroup({
    title:new FormControl(''),
    text:new FormControl(''),
    medium:new FormControl('')
  })
  urlList: string[]=new Array<string>();
  constructor(private db:PostsService, private route:ActivatedRoute) { }

  ngOnInit() {

    //written, media(photos), music, visual 
    let user=this.route.snapshot.paramMap.get('id');
    this.docID=this.db.getID();
    this.newPost={
      postedby:user,
      medium:null,
      title:null,
      comments:null,
      files:[],
      imgFileUrl:null,
      text:null
    }
  }

  onSubmit(){
    this.newPost.text=this.createPostForm.value.text;
    this.newPost.title=this.createPostForm.value.title;
    this.newPost.files=this.urlList;
    this.newPost.medium=this.createPostForm.value.medium;
    console.log(this.newPost.imgFileUrl);
    this.db.store(this.newPost);
  }

  onOutput(url:string){
    this.urlList.push(url);
  }

  onImgOutput(url:string){
    console.log("CALLED")
    this.newPost.imgFileUrl=url;
  }

}
