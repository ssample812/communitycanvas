import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BufferComponent } from './components/buffer/buffer.component';


const routes: Routes = [
  {path: 'create-post/:id',component: CreatePostComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'dashboard/:filter',component:DashboardComponent},
  {path: 'buffer/:value',component:BufferComponent},
  {path: 'buffer',component:BufferComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
