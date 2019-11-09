import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostComponent } from './components/post/post.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {path: 'create-post/:id',component: CreatePostComponent},
  {path: 'card',component:PostComponent},
  {path: 'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
