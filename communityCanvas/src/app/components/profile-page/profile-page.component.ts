import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  private username: string
  private bio: string
  private image: File
  private mediums: Array<string>
  private profileService = new ProfileService(this.username);
  constructor(username:string) { 
    this.username = username;
  }

  store(profileService: ProfileService) {
    return;
  }

  read() {
    let data = this.profileService.read()
    data.subscribe({
      next(data) {
        this.bio = data.bio;
        this.image = data.image;
        this.mediums = data.mediums;
      }
    });
  }

  ngOnInit() {
  }

}
