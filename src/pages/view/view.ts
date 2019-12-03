import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ContactPage } from '../contact/contact';
@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  bod: object;
  title: any;
  com: any;
  bts: any;
  myStyles = {
    'width': '90%',
      'text-align': 'start',
'margin': '0 auto'
    }
  constructor(public toastController: ToastController,private storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
    try {
      this.bod = navParams.get("rendbody");
      this.title = this.navParams.get("title");
      this.com = this.navParams.get("com");
      if (this.com == "d") {
        this.bts = "trash";
      } else {
        this.bts = "add";
      }
      
      console.log(navParams.get("rendbody"));
      } catch (err) {
        console.log(err);
    }
  }
  ionViewCanEnter() {
    console.log('ionViewDidLoad ViewPage');

    try {
      this.bod = this.navParams.get("rendbody");
      this.title = this.navParams.get("title");
      this.com = this.navParams.get("com");
      if (this.com == "d") {
        this.bts = "trash";
      } else {
        this.bts = "add";
      }
      console.log(this.bod);
    } catch (err) { 
      console.log(err);
    }
  }
  ionViewDidEnter() {
    console.log('ionViewDidLoad ViewPage');

    try {
      this.bod = this.navParams.get("rendbody");
      this.title = this.navParams.get("title");
      this.com = this.navParams.get("com");
      if (this.com == "d") {
        this.bts = "trash";
      } else {
        this.bts = "add";
      }
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

    if (this.bts == "trash") {
      this.storage.remove(title);
      const toast = this.toastController.create({
        message: 'ダウンロード済みの記事記事を削除しました。',
        duration: 2000
      });
      toast.present();
      this.navCtrl.push(ContactPage);

    } else {
      try {
        this.storage.set(title, INE);
        const toast = this.toastController.create({
          message: '記事をダウンロードしました。[保存済み]の項目からオフライン時も閲覧することができます。',
          duration: 2000
        });
        toast.present();
      } catch (err) { 

      }
    }
  }
}
