import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutorizacionSericios } from './servicios/autorizacion.servicios';


import {AngularFireModule} from "@angular/fire"
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';

const  firebaseConfig = {
  apiKey: "AIzaSyDCuSSpHi3L9PSbLnCOGid3zuQLqSSwNj0",
  authDomain: "fistpips.firebaseapp.com",
  databaseURL: "https://fistpips.firebaseio.com",
  projectId: "fistpips",
  storageBucket: "",
  messagingSenderId: "823849314972"}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
        // import HttpClientModule after BrowserModule.
  ],
  providers: [AutorizacionSericios],
  bootstrap: [AppComponent]
})
export class AppModule { }
