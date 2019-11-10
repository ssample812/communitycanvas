import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PrivatePageComponent } from './components/private-page/private-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { AuthenticationGuard } from './services/authentication.guard';
import { UserResolver } from './components/private-page/user.resolver';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BufferComponent } from './components/buffer/buffer.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'private', component: PrivatePageComponent, resolve: { data: UserResolver} },
  {path: 'create-post/:id',component: CreatePostComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'dashboard/:filter',component:DashboardComponent},
  {path: 'buffer/:value',component:BufferComponent},
  {path: 'buffer',component:BufferComponent},
  {path: 'upload',component: UploadFileComponent},
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
