import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {InAppBrowser} from "@ionic-native/in-app-browser";

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  wetsite='https://www.msmebooks.com';
  facebook='https://www.facebook.com/MSMEAccountingSolutions';
  emailinfo='info@msmebooks.com';
  companysite='https://businesscentricnetwork.com';

  maillink='https://mail.google.com/';
  options:any='hideurlbar=yes,toolbar=yes,toolbarcolor=#0147c3,navigationbuttoncolor=#ffffff,closebuttoncolor=#ffffff';

  constructor(private iab:InAppBrowser,public navCtrl: NavController, public navParams: NavParams) {
  }
  goSite(){
    //window.open(this.companysite, '_system');
    const browser = this.iab.create(this.companysite, '_blank', this.options);
    browser.show();
  }
  goSite1(){
    //window.open(this.wetsite, '_system');
    const browser = this.iab.create(this.wetsite, '_blank', this.options);
    browser.show();
  }
  goSite2(){
   // window.open(this.facebook, '_system');
    const browser = this.iab.create(this.facebook, '_blank', this.options);
    browser.show();
  }
  goSite3(){
   // window.open(this.maillink, '_system');
    const browser = this.iab.create(this.maillink, '_blank', this.options);
    browser.show();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
