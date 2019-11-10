import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule } from '@angular/fire/storage';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';

import { environment } from '../environments/environment';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { DropzoneDirective } from './directives/dropzone.directive';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostComponent } from './components/post/post.component';
import { BufferComponent } from './components/buffer/buffer.component';
import { NonimgUploadTaskComponent } from './components/nonimg-upload-task/nonimg-upload-task.component';



@NgModule({
  declarations: [
    AppComponent,
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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
