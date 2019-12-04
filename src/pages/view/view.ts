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
  jsons: any;
  com: any;
  bts: any;
  created: any;
  updated: any;
  Likecount: any;
  tag: any;
  url: any;
  name: any;
  userdesc: any;
  usurl: any;
  PFIU: any;
  myStyles = {
    'width': '90%',
      'text-align': 'start',
'margin': '0 auto'
  }
  tagstyle = {
  'background-color': '#EFF4FF',
  'border': 'none',
    'color': '#2557D6',
    'padding': '10px 20px',
  'max-width':'100px',
  'text-align': 'center',
  'text-decoration': 'none',
  'display': 'inline-block',
  'margin-right': '13px',
  'margin-left': '-1px',
  'margin-bottom': '10px',
  'border-radius': '100px',
  }
  goodstyle = {
    'text-decoration':'none',
    'font-size': '40px',
    'color': '#387EF5'
  }
  constructor(public toastController: ToastController,private storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
  //    this.bod = navParams.get("rendbody");
  //    this.title = this.navParams.get("title");
      this.com = this.navParams.get("com");
    this.jsons = this.navParams.get("jsons");
    this.bod = this.jsons["rendered_body"];
    this.title = this.jsons["title"];
    this.created = this.jsons["created_at"];
    this.updated = this.jsons["updated_at"];
    this.Likecount = this.jsons["likes_count"];
    this.tag = this.jsons["tags"];
    this.url = this.jsons["url"];
    this.name = this.jsons["user"]["name"];
    this.PFIU = this.jsons["user"]["profile_image_url"];
    this.usurl = 'https://qiita.com/' + this.jsons["user"]["id"];
      if (this.com == "d") {
        this.bts = "trash";
      } else {
        this.bts = "add";
      }
  }
  ionViewCanEnter() {
    console.log('ionViewDidLoad ViewPage');

    //  this.bod = this.navParams.get("rendbody");
  //    this.title = this.navParams.get("title");
  this.jsons = this.navParams.get("jsons");
      this.com = this.navParams.get("com");
      this.bod = this.jsons["rendered_body"];
      this.title = this.jsons["title"];
      if (this.com == "d") {
        this.bts = "trash";
      } else {
        this.bts = "add";
      }
      console.log(this.bod);
      console.log(this.created);
  }
  TNE() { 
    console.log("RUN");
    var title = this.title;
    var inner = this.jsons;
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
        this.storage.set(title, this.jsons);
        const toast = this.toastController.create({
          message: '記事をダウンロードしました。[保存済み]の項目からオフライン時も閲覧することができます。',
          duration: 2000
        });
        toast.present();
      } catch (err) { 

      }
    }
  }
  ta(ins) { 
    console.log(ins);
    window.open('https://qiita.com/tags/' + ins + '/', '_system')
    }
}
