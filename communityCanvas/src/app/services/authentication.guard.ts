import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, UrlSerializer } from "@angular/router";
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserService } from './user.service';


@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(
    public afAuth: AngularFireAuthModule,
    public userService: UserService,
    private router: Router
  ) {}

  canActivate(): Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(user => {
        this.router.navigate(['/private']);
        return resolve(false);
      }, err => {
        return resolve(true);
      })
    })
  }
}