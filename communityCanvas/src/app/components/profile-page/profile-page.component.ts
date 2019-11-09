import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Users } from 'src/app/interfaces/users';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements Users {
  public password: string;
  public username: string;
  public bio: string;
  public image: File;
  private afs: AngularFirestore;

  private profileService = new ProfileService(this.username, this.afs);
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
        this.bio = data["bio"];
        this.image = data["image"];
      }
    });
  }

  ngOnInit() {
  }

}
