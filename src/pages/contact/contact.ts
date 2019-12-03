import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ViewPage } from '../view/view';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  list: any;
  constructor(private storage: Storage,public navCtrl: NavController) {

  }
  async ge(refresher) {
    try {
      this.storage.keys().then((k) => {
        console.table(k)
        this.list = k
      });
      refresher.complete();
    } catch (err) { 
      console.log(err);
    }
  }
  click(ki) {
    console.log(ki);
    this.storage.get(ki).then((val) => {
      console.log(val);
      this.navCtrl.push(ViewPage, { "body": val, "rendbody": val, "title": ki, "com":"d" });
    });
  }
  ionViewDidLoad() {
 // let items = [];
 // this.list =  this.storage.keys()
 //   .then(keys => Promise.all(keys.map(k => this.storage.get(k))));
 //   console.log(this.list);

 this.storage.keys().then((k) => {
  console.table(k)
  this.list = k
});
}
}
