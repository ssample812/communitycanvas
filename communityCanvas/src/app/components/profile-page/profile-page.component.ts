import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit
 {
  public password: string;
  public username: string;
  public bio: string;
  public image: string;

  constructor(private profileService: ProfileService, private router: Router, private route:ActivatedRoute) { 
    this.profileService = profileService;
  }

  store() {
    return;
  }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    this.profileService.read(this.username).subscribe(data=>{
      this.bio = data["bio"];
      this.image = data["image"];
    })

  }

}
