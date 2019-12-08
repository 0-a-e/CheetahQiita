import { NgModule,Component } from '@angular/core';
import {
  IonicPageModule, NavController, PopoverController} from 'ionic-angular';
import { HomePage } from './home';
import { ViewPage } from '../view/view';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
@NgModule({
  declarations: [
    HomePageModule,
    PopoverController
  ], entryComponents: [ 
    PopoverController
  ],
  imports: [
      IonicPageModule.forChild(HomePage),
      HttpClientModule,
      HttpHeaders,
      HTTP
  ],
})
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
    
export class HomePageModule {
    kiji: Object;
    constructor(public http: HTTP, public navCtrl: NavController) {
    }
    click(body) {
      console.log(body);
      this.navCtrl.push(ViewPage, { "body": body });
    }
    async ge(refresher) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
       console.log("ge is RUN");
       await this.http.get("https://qiita.com/api/v2/items?per_page=20", {}, {})
         .then(data => {
           console.log(data);
           //    NE = res["0"]["title"];
           this.kiji = data;
           refresher.complete();
         }).catch(err => {
           console.log("大変申し訳ございませんが、エラーが発生しました。アプリを閉じて再度お試しください。");
           console.log(err);
           refresher.complete();
         });
     }

}
 console.log("HMTSLOAD");