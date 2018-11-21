import { Component, ViewChild } from '@angular/core';
import {AlertController, Nav, NavParams, Platform, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {AboutPage} from "../pages/about/about";
import { CallNumber } from '@ionic-native/call-number';
import {Storage} from "@ionic/storage";
import {HTTP} from "@ionic-native/http";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {CallphonePage} from "../pages/callphone/callphone";
import {NetworkProvider} from "../providers/network/network";
import {Toast} from "@ionic-native/toast";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any,icon:any}>;

  constructor(private toast:Toast,private alertCtrl:AlertController,private netstatus:NetworkProvider,private iab: InAppBrowser,private storage:Storage,private http:HTTP,private toastCtrl:ToastController,private call:CallNumber,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.rootPage=HomePage;

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage,icon:'ios-home' },
/*
      { title: 'Website', component: '' ,icon:'md-globe'},
*/
      { title: 'About', component: AboutPage,icon:'md-information-circle' },
      { title: 'Call', component: CallphonePage ,icon:'ios-call-outline'},

    ]

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.getData();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#014fda');
      this.statusBar.backgroundColorByName('#ffffff');
     // this.statusBar.styleLightContent();

      this.statusBar.styleDefault();
      this.splashScreen.hide();

   //   this.getnetWork();

    });
   /* this.platform.pause.subscribe(() => {
   //  this.getnetWork();

    });
    this.platform.pause.subscribe(() => {
     // this.getnetWork();

    });*/
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.title=='Home'){
      this.nav.setRoot(page.component,{pagestatus:1});

    }else{
      this.nav.push(page.component)
    }
    /*else if(page.title=='Website'){
      window.open('https://demo.msmebooks.com/login', '_system');

    }else if(page.title=='Call'){
      this.call.callNumber('+959773481038', true)
        .then(() => console.log('Launched dialer!'))
        .catch(() => console.log('Error launching dialer'));
    }*/
  }

}
