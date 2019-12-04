import { Component } from '@angular/core';
import { NavController,PopoverController } from 'ionic-angular';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ViewPage } from '../view/view';
import { PopPage } from '../pop/pop';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  kiji: Object;
  count: any;
  plus: any;
  Fsave: any;
  spn: any;
  constructor(public popoverController: PopoverController,public navCtrl: NavController, private http: HttpClient) {
  }
 presentPopover() {
  this.navCtrl.push(PopPage);
  }

  ionViewDidLoad() {
    try {
      this.count = 1;
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      const res = this.http.get("https://qiita.com/api/v2/items?per_page=100")
        .subscribe(res => {
          console.log(res);
          this.kiji = res;
          this.Fsave = res;
        }, error => {
          this.spn = '<h2 [ngStyle]="pi">エラーが発生しました。しばらく時間をおいて再度お試しください。</h2>';
      });
    } catch (err) { 
      console.log("大変申し訳ございませんが、エラーが発生しました。アプリを閉じて再度お試しください。");
      console.log(err);
    }
  }
  click(jsons) {
    if (jsons) {
  //    console.log(body);
   //   console.log(MD);
        this.navCtrl.push(ViewPage, { "jsons":jsons });
    }
  }
  async gs(refresher) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    console.log("ge is RUN");
    try {
      const res = await this.http.get("https://qiita.com/api/v2/items?per_page=100&page=" + this.count)
        .toPromise(); 
      console.log("RES IS ");
      console.log(res);
      this.count++;
      console.log(this.count);
      //    NE = res["0"]["title"];
      var ret = Object.assign(this.kiji, res);
      console.log("KIJI IS ");
      console.log(this.kiji);
      console.log("RET IS");
      console.log(ret);
      this.kiji = ret;
      refresher.complete();
    } catch (err) { 
      this.spn = '<h2 [ngStyle]="pi">エラーが発生しました。しばらく時間をおいて再度お試しください。</h2><p>' + err["status"] +err["error"]["message"] + '.</p>';
      console.log("大変申し訳ございませんが、エラーが発生しました。アプリを閉じて再度お試しください。");
      console.log(err);
      refresher.complete();
    }
  }
  async ge(refresher) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    console.log("ge is RUN");
    try {
      const res = await this.http.get("https://qiita.com/api/v2/items?per_page=100")
        .toPromise();
      console.log(res);
      this.kiji = res;
      refresher.complete();
    } catch (err) { 
      this.spn = '<h2 [ngStyle]="pi">エラーが発生しました。しばらく時間をおいて再度お試しください。</h2><p>' + err["status"] +err["error"]["message"] + '.</p>';
      console.log("大変申し訳ございませんが、エラーが発生しました。アプリを閉じて再度お試しください。");
      console.log(err);
      refresher.complete();
    }
  }
  }