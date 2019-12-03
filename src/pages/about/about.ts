import { Component } from '@angular/core';
//import {Observable} from "rxjs/Observable";
import { NavController,LoadingController } from 'ionic-angular';
import { ViewPage } from '../view/view';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  kiji: Object;
  constructor(private http: HttpClient,public navCtrl: NavController,public loadingController: LoadingController) {
  }
  onKey(ev) { 
    console.log(ev);
    this.gech(ev);
  }
  click(body,MD,title) {
    console.log(body);
    console.log(MD);
    this.navCtrl.push(ViewPage, { "body": body, "rendbody":body,"title":title });
  }
  async ge(refresher) {
    console.log("ge is RUN");
    try {
      const res = await this.http.get("https://qiita.com/api/v2/items?per_page=100")
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
  async gech(TX) {
    console.log("gech is RUN");
    try {
      const loading = this.loadingController.create({
        duration: 2000
      });
      loading.present();
      const res =  await this.http.get("https://qiita.com/api/v2/items?per_page=100&query=" + TX)
        .toPromise();
      console.log(res);
      //    NE = res["0"]["title"];
      this.kiji = res;
    } catch (err) { 
      console.log("大変申し訳ございませんが、エラーが発生しました。アプリを閉じて再度お試しください。");
      console.log(err);
    }
  }
  //constructor(public navCtrl: NavController) {

  //}

}
