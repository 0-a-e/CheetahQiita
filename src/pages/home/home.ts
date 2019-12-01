import { Component } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler,NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  kiji: Object;
  constructor(public navCtrl: NavController, private http: HttpClient) {
  }
    ge(refresher) {
      console.log("ge is RUN");
      return this.http.get("http://qiita.com/api/v2/items?per_page=20")
        .toPromise()
        .then((res) => {
          console.log(res);
      //    NE = res["0"]["title"];
          this.kiji = res;
          refresher.complete();
        })
    }
  }
