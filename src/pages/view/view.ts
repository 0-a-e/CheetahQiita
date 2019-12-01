import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  body: object;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    try{
      this.body = navParams.get("body");
      console.log(navParams.get("body"));
      } catch (err) {
        console.log(err);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');

    try {

      console.log(this.body);
    } catch (err) { 
      console.log(err);
    }
  }

}
