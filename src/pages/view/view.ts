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
  created: any;
  updated: any;
  Likecount: any;
  tag: any;
  url: any;
  name: any;
  userdesc: any;
  PFIU: any;
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
      try {
        this.created = this.navParams.get("created");
      } catch (err) { 
        this.created = "このデーターはオフラインでは表示されません。";
      }
      try {
        this.updated = this.navParams.get("updated");
      } catch (err) { 
        this.updated = "このデーターはオフラインでは表示されません。";
      }
      try {
        this.Likecount = this.navParams.get("Likecount");
      } catch (err) { 
        this.Likecount = "このデーターはオフラインでは表示されません。";
      }
      try {
        this.tag = this.navParams.get("tag");
      } catch (err) { 
        this.tag = "このデーターはオフラインでは表示されません。";
      }
      try {
        this.url = this.navParams.get("url");
      } catch (err) { 
        this.url = "このデーターはオフラインでは表示されません。";
      }
      try {
        this.name = this.navParams.get("name");
      } catch (err) { 
        this.name = "このデーターはオフラインでは表示されません。";
      }
      try {
        this.userdesc = this.navParams.get("UDS");
      } catch (err) { 
        this.userdesc = "このデーターはオフラインでは表示されません。";
      }
      try {
        this.PFIU = this.navParams.get("pfim");
      } catch (err) { 
        this.PFIU = "このデーターはオフラインでは表示されません。";
      }
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
