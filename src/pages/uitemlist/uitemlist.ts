import { Component } from '@angular/core';
import { ViewPage } from '../view/view';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
/**
 * Generated class for the UitemlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-uitemlist',
  templateUrl: 'uitemlist.html',
})
export class UitemlistPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }
  ID: any;
  kiji: any;
  spn: any;
  ionViewDidLoad() {
    this.ID = this.navParams.get("user");
    console.log('ionViewDidLoad UitemlistPage');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const res = this.http.get("https://qiita.com/api/v2/users/" + this.ID + '/items?per_page=100')
      .subscribe(res => {
        console.log(res);
        this.kiji = res;
      }, error => {
        this.spn = '<h2 [ngStyle]="pi">エラーが発生しました。しばらく時間をおいて再度お試しください。</h2>';
      });
  } catch(err) {
    console.log("大変申し訳ございませんが、エラーが発生しました。アプリを閉じて再度お試しください。");
    console.log(err);
  }
  click(jsons) {
    if (jsons) {
  //    console.log(body);
   //   console.log(MD);
        this.navCtrl.push(ViewPage, { "jsons":jsons });
    }
  }
}

