import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';

import { environment } from '../environments/environment';
<<<<<<< HEAD
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { PrivatePageComponent } from './components/private-page/private-page.component';
=======
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { DropzoneDirective } from './directives/dropzone.directive';
>>>>>>> 88b38c7ddc65f45b1ef04e1f4f55283612dc0ca4


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginPageComponent,
    RegisterPageComponent,
    PrivatePageComponent
=======
    UploadFileComponent,
    UploadTaskComponent,
    DropzoneDirective
>>>>>>> 88b38c7ddc65f45b1ef04e1f4f55283612dc0ca4
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'fatplant'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
