import { Component } from '@angular/core';
import {NavController, NavParams, Platform, ToastController} from 'ionic-angular';
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {Network} from "@ionic-native/network";
import {Storage} from "@ionic/storage";
import {HTTP} from "@ionic-native/http";
import {Toast} from "@ionic-native/toast";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //https://app-my.msmebooks.com
  msite='https://app-my.msmebooks.com';
  esite='https://app.msmebooks.com';
  //location=no,
  options:any='hideurlbar=yes,toolbar=yes,toolbarcolor=#0147c3,navigationbuttoncolor=#ffffff,closebuttoncolor=#ffffff';
  flagb=false;
  isLoading:boolean;
  constructor(private toast:Toast,private storage:Storage,private http:HTTP,private toastCtrl:ToastController,private network:Network,private platform:Platform,public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser) {

    if(this.navParams.get('pagestatus')==1){
      this.flagb=true;
    }else{
      this.getData();
    }

  }

  getData(){
    this.storage.get('wurl').then((mywurl) => {
      if (mywurl != null && mywurl != '' && mywurl != undefined) {
        this.http.get(mywurl, {}, {})
          .then(data => {
            const browser = this.iab.create(mywurl, '_blank', this.options);
           browser.show();


            setTimeout(()=>{
              this.flagb=true;
            }, 1000);

          })
          .catch(error => {
            this.showToastMsg('You are still in offline!')


            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
            this.flagb=true;

          });
      }
      else{
        this.flagb=true;
        /* this.storage.set('wurl',this.msite);
         const browser = this.iab.create(this.msite, '_blank', 'hideurlbar=yes,toolbar=yes,toolbarcolor=#0147c3,navigationbuttoncolor=#ffffff,closebuttoncolor=#ffffff');
         browser.show();*/
      }

    });
  }
  mLanguage(){
    this.isLoading=true;

    this.flagb=true;
    this.storage.set('wurl',this.msite);
      this.http.get(this.msite, {}, {}).then(data => {
        const browser = this.iab.create(this.msite, '_blank', this.options);
        browser.show();
        this.isLoading=false;

      })
        .catch(error => {
          this.showToastMsg('You are still in offline!');
          this.isLoading=false;

          //console.log(error.status);
         // console.log(error.error); // error message as string
          //console.log(error.headers);

        });

  }
  eLanguage(){
    this.isLoading=true;
    this.flagb=true;
    this.storage.set('wurl',this.esite);

      this.http.get(this.msite, {}, {}).then(data => {
        const browser = this.iab.create(this.esite, '_blank', this.options);
        browser.show();
        this.isLoading=false;

      })
        .catch(error => {
          this.isLoading=false;

          this.showToastMsg('You are still in offline!');

          //console.log(error.status);
        //  console.log(error.error); // error message as string
         // console.log(error.headers);

        });

  }

  showToastMsg(msg){
    this.toast.show(msg, '9000', 'bottom').subscribe(
      toast => {
        console.log(toast);
      }
    );
  /*  this.toast.showWithOptions({
      message: msg,
      duration: 10000, //
      position: "bottom",
      styling: {
        opacity: 0.75, // 0.0 (transparent) to 1.0 (opaque). Default 0.8
        backgroundColor: '#222', // make sure you use #RRGGBB. Default #333333
        textColor: '#FFFFFF', // Ditto. Default #FFFFFF
      }
    }).subscribe(
      toast => {
        console.log(toast);
      }
    );*/
  }

}
