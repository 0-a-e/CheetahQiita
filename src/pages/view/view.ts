import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  bod: object;
  title: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

}
