import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterModulesModule } from './master-modules/master-modules.module';

// import * as firebase from "firebase/app";
import { environments } from './Commons.environment';

// firebase.initializeApp(environments.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MasterModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
