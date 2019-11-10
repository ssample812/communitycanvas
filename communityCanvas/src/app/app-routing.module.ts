import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';


const routes: Routes = [
  {path: 'upload',component: UploadFileComponent},
  {path: 'profile',component: ProfilePageComponent},
  {path: 'username',component: ProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
