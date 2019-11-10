import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data:Post[];
  titleFilter:string;
  noFilter:boolean=true;
  mediumFilter: string;

  constructor(private db:PostsService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.mediumFilter=this.route.snapshot.paramMap.get('filter');
    let docs=this.db.read().subscribe(data=>{
      this.data=data;
    });
  }

  selectChange(value:string){
    // console.log(value);
    if(value!="null"){
      this.router.navigate(['/buffer',value]);
    }
    else{
      this.router.navigate(['/buffer'])
    }
  }


}
