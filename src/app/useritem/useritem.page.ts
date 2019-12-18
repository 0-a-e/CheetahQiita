import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Routes,ActivatedRoute,Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-useritem',
  templateUrl: './useritem.page.html',
  styleUrls: ['./useritem.page.scss'],
})
  
export class UseritemPage {


  constructor(private route: ActivatedRoute, private router: Router, public navCtrl: NavController, private http: HttpClient) {
    this.route.queryParams.subscribe(params => {
      console.log("recive booted");
      if (this.router.getCurrentNavigation().extras.state.inner) {
        this.ID = this.router.getCurrentNavigation().extras.state.inner;
        console.log("this.ID is⬇️");
        console.log(this.ID);
        this.ioV()
      } else {
        console.log("dont recived");
      }
    });
  }

  ID: any;
  kiji: any;
  spn: any;

ioV() {
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
  
  }

  click(jsons) {
    if (jsons) {
      let navJ: NavigationExtras = {
        state: {
          inner: jsons
        }
      };
      console.log(navJ);
      this.router.navigate(['view'], navJ);
    }
  }

}

