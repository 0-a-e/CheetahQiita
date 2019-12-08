import { Component } from '@angular/core';
//import {Observable} from "rxjs/Observable";
import { NavController,LoadingController } from 'ionic-angular';
import { ViewPage } from '../view/view';
import { HttpClient } from '@angular/common/http';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { REACTIVE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  spn: any;
  SN: any;
  timerId: any;
  si = {
  }
  pi = {
    'color':'pink'
  }
  kiji: Object;
  constructor(private http: HttpClient,public navCtrl: NavController,public loadingController: LoadingController) {
  }
  onKey(ev,n) { 
    console.log(ev);
    this.gech(ev, n);
    console.log("N is ", n);
  }
  ionB(ivl) { 
    console.log("ionb");
    this.gech(ivl);
  }
  click(jsons) {
    console.log(jsons);
   // console.log(MD);
    this.navCtrl.push(ViewPage, {"jsons":jsons});
  }
  //async ge(refresher) {
 // console.log("ge is RUN");
 //   try {
 //   const res = await this.http.get("https://qiita.com/api/v2/items?per_page=100")
 //   .toPromise();
//      console.log(res);
      //    NE = res["0"]["title"];
 //     this.kiji = res;
 //     refresher.complete();
  //  } catch (err) { 
 //     console.log("大変申し訳ございませんが、エラーが発生しました。アプリを閉じて再度お試しください。");
//      console.log(err);
//      refresher.complete();
//    }
//  }
  NDE(TX) { 

    try {
      this.RE(TX);
        } catch (err) {
      this.spn = '<h2 [ngStyle]="pi">エラーが発生しました。しばらく時間をおいて再度お試しください。</h2><p>' + err["status"] + err["error"]["message"] + '.</p>';
      console.log("大変申し訳ございませんが、エラーが発生しました。アプリを閉じて再度お試しください。");
      console.log(err);
    }

  }
  async RE(TX) {
    try {
      this.spn = '<div padding><ion-spinner name="dots"></ion-spinner></div><p>読み込み中...</p>';
      setTimeout(() => this.spn='<ion-icon style="font-size: 80px;" name="search"></ion-icon><p>まだ何も検索していないか、検索結果が見つかりません。</p>', 5000);
      const res = await this.http.get("https://qiita.com/api/v2/items?per_page=100&query=" + TX)
        .toPromise();
      this.SN = TX;
      console.log(res);
      //    NE = res["0"]["title"];
    //  if (res["length"] = 0) { 
    //    this.spn = '<p>検索結果はありません。</p>';
    //  }
      this.kiji = res;
    }catch (err) {
      this.spn = '<h2 [ngStyle]="pi">エラーが発生しました。しばらく時間をおいて再度お試しください。</h2><p>' + err["status"] + err["error"]["message"] + '.</p>';
      console.log("大変申し訳ございませんが、エラーが発生しました。アプリを閉じて再度お試しください。");
      console.log(err);
    }
}
  async gech(TX) {
    
    console.log("gech is RUN");
    if (TX) {
      this.NDE(TX);
    }
  }
  //constructor(public navCtrl: NavController) {

  //}

}
