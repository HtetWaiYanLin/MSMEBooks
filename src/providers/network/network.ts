import { Injectable } from '@angular/core';

import { Events } from 'ionic-angular'

import { Network } from '@ionic-native/network'

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import {HTTP} from "@ionic-native/http";
import 'rxjs/add/observable/interval';
import {Toast} from "@ionic-native/toast";


export enum ConnectionStatus {
  Online,
  Offline,
}
@Injectable()
export class NetworkProvider {
  sub:any;
  public status: ConnectionStatus;
  private _status: BehaviorSubject<ConnectionStatus> = new BehaviorSubject(null);

  constructor(
    public network: Network,
    public events: Events,
    public http:HTTP,
    public toast:Toast,
  ) {
    this.status = ConnectionStatus.Online;
    this.setStatus(ConnectionStatus.Online);

    //setInterval(this.checkdataConnection,5000);

    this.sub = this.getNetworkStatus()
      .subscribe((val) => {
        console.log('called');
        this.getnetWork();
      });
   // to stop it use

  // this.sub.unsubscribe();


  }
  getnetWork(){
    this.initializeNetworkEvents();

    this.getNetworkStatus().subscribe(data=>{
      console.log('networkdata'+data);
      if(data==1){
        this.toast.show(`You are offline!`, '10000', 'bottom').subscribe(
          toast => {
            console.log(toast);
          }
        );
      }else if(data==null){
        this.toast.show(`You are offline!`, '10000', 'bottom').subscribe(
          toast => {
            console.log(toast);
          }
        );
      }


    });
  }
  public initializeNetworkEvents(): void {

    /* OFFLINE */
    this.network.onDisconnect().subscribe(() => {
      if (this.status === ConnectionStatus.Online) {
        this.setStatus(ConnectionStatus.Offline);
      }
      this.checkdataConnection();

    });

    /* ONLINE */
    this.network.onConnect().subscribe(() => {
      if (this.status === ConnectionStatus.Offline) {
        this.setStatus(ConnectionStatus.Online);
      }
      this.checkdataConnection();

    });






  }
  checkdataConnection(){
    console.log('check');
  this.http.get('https://www.youtube.com', {}, {})
    .then(data => {
     // this.sub.unsubscribe();
    })
    .catch(error => {
      if (this.status === ConnectionStatus.Online) {
        this.setStatus(ConnectionStatus.Offline);
      }

    });
}
  public getNetworkType(): string {
    return this.network.type
  }

  public getNetworkStatus(): Observable<ConnectionStatus> {
    return this._status.asObservable();
  }

  private setStatus(status: ConnectionStatus) {
    this.status = status;
    this._status.next(this.status);
  }

}
