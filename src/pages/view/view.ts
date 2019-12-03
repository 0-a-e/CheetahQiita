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
  bod: object;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    try{
      this.bod = navParams.get("body");
      console.log(navParams.get("body"));
      } catch (err) {
        console.log(err);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');

    try {

      console.log(this.bod);
    } catch (err) { 
      console.log(err);
    }
  }

}
