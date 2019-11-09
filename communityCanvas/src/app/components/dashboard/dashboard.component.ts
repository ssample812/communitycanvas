import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data:Post[];

  constructor(private db:PostsService) { }

  ngOnInit() {
    let docs=this.db.read().subscribe(data=>{
      this.data=data;
    });
  }

}
