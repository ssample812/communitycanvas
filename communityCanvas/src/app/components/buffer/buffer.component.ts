import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.css']
})
export class BufferComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    let value=this.route.snapshot.paramMap.get('value');
    if(value){
      this.router.navigate(['dashboard',value]);
    }
    else{
      this.router.navigate(['dashboard']);
    }
  }

}
