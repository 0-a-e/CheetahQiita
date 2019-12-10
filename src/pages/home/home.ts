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
  RC: any;
  kiji2: Object;
  count: any;
  plus: any;
  RCS: any;
  Fsave: any;
  spn: any;
  constructor(public popoverController: PopoverController,public navCtrl: NavController, private http: HttpClient) {
  }
 presentPopover() {
  this.navCtrl.push(PopPage);
  }

  ionViewDidLoad() {
    this.count = 2;
    try {
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
    const list = document.getElementById('list');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    console.log("running> gs");
    try {
      const res = await this.http.get("https://qiita.com/api/v2/items?per_page=100&page=" + this.count)
        .toPromise(); 
      console.log("RES IS ");
      console.log(res);
      this.count++;
      console.log(this.count);
      //    NE = res["0"]["title"];
      var ret = res;
      this.kiji2 = ret;
      this.RCS = "";
      for (this.RC = 0; 100 > this.RC; this.RC++) {
        var el = document.createElement('div');
        console.log(this.RC);
        var NR = ret[this.RC];
        //  this.RCS = NR.title;
        console.log(NR);
        el.setAttribute('id', NR.id);
        el.setAttribute('class', 'LIS');
        el.innerHTML = `<hr><ion-item class="item item-block item-ios" _ngcontent-c1 ><ion-label class="label label-ios label-md" _ngcontent-c1>${NR.title}</ion-label></ion-item>`;
        list.appendChild(el);
      }
      const targets = document.getElementsByClassName('LIS');
for(let i = 0; i < targets.length; i++){
  targets[i].addEventListener('click', () => {
    console.log(i + `をクリックしました`);
    var id = targets[i].getAttribute("id");
    console.log(id);
    const res = this.http.get("https://qiita.com/api/v2/items/" + id)
    .subscribe(res => {
      console.log(res);
      this.navCtrl.push(ViewPage, { "jsons": res });
     // this.kiji = res;
    }, error => {
    //  this.spn = '<h2 [ngStyle]="pi">エラーが発生しました。しばらく時間をおいて再度お試しください。</h2>';
    });
    
}, false);
  
}

      refresher.complete();
    } catch (err) { 
      //this.spn = '<h2 [ngStyle]="pi">エラーが発生しました。しばらく時間をおいて再度お試しください。</h2><p>' + err["status"] +err["error"]["message"] + '.</p>';
      console.log("大変申し訳ございませんが、エラーが発生しました。アプリを閉じて再度お試しください。");
      console.log(err);
      refresher.complete();
    }
  }
  async ge(refresher) {
    this.RC = 0;
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