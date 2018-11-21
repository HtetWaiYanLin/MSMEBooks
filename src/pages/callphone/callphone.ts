import { Component } from '@angular/core';
import {NavController, NavParams, reorderArray} from 'ionic-angular';
import {CallNumber} from "@ionic-native/call-number";

/**
 * Generated class for the CallphonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-callphone',
  templateUrl: 'callphone.html',
})
export class CallphonePage {
phData=['09 977 160 671','09 977 160 672','09 977 160 673',' 09 254 677 192',' 09 795 560 474'];
  /*Contact: 09 977 160 671~3, 09 254 677 192, 09 795 560 474*/
  constructor(private call:CallNumber,public navCtrl: NavController, public navParams: NavParams) {
  }
  reorderItems(indexes){
    this.phData = reorderArray(this.phData, indexes);
  }
backPage(){
    this.navCtrl.pop();
}
  tapEvent(ev){
    console.log(ev)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CallphonePage');
  }
  callPhone(ph){
    this.call.callNumber(ph, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

}
