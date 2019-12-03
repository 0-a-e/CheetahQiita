import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ViewPage } from '../view/view';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  kiji: Object;
  constructor(public navCtrl: NavController, private http: HttpClient) {
  }
  ionViewDidLoad() {
    try {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      const res = this.http.get("https://qiita.com/api/v2/items?per_page=20")
        .subscribe(res => {
          console.log(res);
          this.kiji = res;
        })
    } catch (err) { 
      console.log("大変申し訳ございませんが、エラーが発生しました。アプリを閉じて再度お試しください。");
      console.log(err);
    }
  }
  click(body) {
    console.log(body);
    this.navCtrl.push(ViewPage, { "body": body });
  }
  async ge(refresher) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    console.log("ge is RUN");
    try {
      const res = await this.http.get("https://qiita.com/api/v2/items?per_page=20")
        .toPromise();
      console.log(res);
      //    NE = res["0"]["title"];
      this.kiji = res;
      refresher.complete();
    } catch (err) { 
      console.log("大変申し訳ございませんが、エラーが発生しました。アプリを閉じて再度お試しください。");
      console.log(err);
      refresher.complete();
    }
  }
  }