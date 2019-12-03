import { Component } from '@angular/core';
//import {Observable} from "rxjs/Observable";
import { NavController,LoadingController } from 'ionic-angular';
import { ViewPage } from '../view/view';
import { HttpClient } from '@angular/common/http';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  spn: any;
  SN: any;
  si = {
    'width': '80px',
    'height': '80px',
    'color':'#EFF4FF'
  }
  pi = {
    'color':'pink'
  }
  kiji: Object;
  constructor(private http: HttpClient,public navCtrl: NavController,public loadingController: LoadingController) {
  }
  onKey(ev) { 
    console.log(ev);
    this.gech(ev);
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
  async gech(TX) {
    console.log("gech is RUN");
    try {
      this.spn = '<ion-spinner [ngStyle]="si"></ion-spinner>';
      const res =  await this.http.get("https://qiita.com/api/v2/items?per_page=100&query=" + TX)
        .toPromise();
      this.SN = TX;
      console.log(res);
      //    NE = res["0"]["title"];
      this.kiji = res;
    } catch (err) { 

      this.spn = '<h2 [ngStyle]="pi">エラーが発生しました。しばらく時間をおいて再度お試しください。</h2><p>' + err["status"] +err["error"]["message"] + '.</p>';
      console.log("大変申し訳ございませんが、エラーが発生しました。アプリを閉じて再度お試しください。");
      console.log(err);
    }
  }
  //constructor(public navCtrl: NavController) {

  //}

}
