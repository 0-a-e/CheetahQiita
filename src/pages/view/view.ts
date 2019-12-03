import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  bod: object;
  title: any;
  constructor(private storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
    try {
      this.bod = navParams.get("rendbody");
      this.title = this.navParams.get("title");
      console.log(navParams.get("rendbody"));
      } catch (err) {
        console.log(err);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');

    try {
      this.bod = this.navParams.get("rendbody");
      this.title = this.navParams.get("title");
      console.log(this.bod);
    } catch (err) { 
      console.log(err);
    }
  }
  TNE() { 
    console.log("RUN");
    var title = this.title;
    var inner = this.bod;
    var INE = String(inner);
    console.log(INE);
    console.log(title);
    this.storage.set(title, INE);
  }
}
