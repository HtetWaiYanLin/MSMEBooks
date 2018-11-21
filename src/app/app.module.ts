import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import {HTTP} from "@ionic-native/http";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CallNumber } from '@ionic-native/call-number';
import {CallphonePage} from "../pages/callphone/callphone";
import { NetworkProvider } from '../providers/network/network';
import { Toast } from '@ionic-native/toast';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    CallphonePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    CallphonePage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    HTTP,
    InAppBrowser,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NetworkProvider,
    NetworkProvider,
    Toast
  ]
})
export class AppModule {}
