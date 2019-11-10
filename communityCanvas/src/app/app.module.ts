import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationGuard } from './services/authentication.guard';
import { AuthenticationService } from './services/authentication.service';
import { UserResolver } from './components/private-page/user.resolver';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
  

import { environment } from '../environments/environment';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { DropzoneDirective } from './directives/dropzone.directive';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostComponent } from './components/post/post.component';
import { BufferComponent } from './components/buffer/buffer.component';
import { NonimgUploadTaskComponent } from './components/nonimg-upload-task/nonimg-upload-task.component';


import * as firebase from 'firebase';
import { UserService } from './services/user.service';
import { PrivatePageComponent } from './components/private-page/private-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    PrivatePageComponent,
    UploadFileComponent,
    UploadTaskComponent,
    DropzoneDirective,
    CreatePostComponent,
    DashboardComponent,
    PostComponent,
    BufferComponent,
    NonimgUploadTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'fatplant'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
  ],
  providers: [AuthenticationService, UserService, UserResolver, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
