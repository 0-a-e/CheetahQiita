import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  kiji: any;
  RC: any;
  kiji2: Object;
  count: any;
  plus: any;
  RCS: any;
  Fsave: any;
  spn: any;
  constructor(private http: HttpClient, private router: Router) {
    this.count = 1;
   }
  ionViewWillEnter() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
this.toggleDarkTheme(prefersDark.matches);
prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));
    this.onload();
  }
  toggleDarkTheme(shouldAdd) {
    console.log(shouldAdd);
    document.body.classList.toggle('dark', shouldAdd);
  }
  tdb() {
  //  console.log(shouldAdd);
    document.body.classList.toggle('dark');
  }
  async ge(refresher) {
    this.RC = 0;
    await console.log("refreshing...");
    const res = await this.http.get("https://qiita.com/api/v2/items?per_page=50")
        .subscribe(res => {
          console.log(res);
          this.kiji = res;
          this.Fsave = res;
          refresher.target.complete();
        }, error => {
          this.spn = '<h2 [ngStyle]="pi">エラーが発生しました。しばらく時間をおいて再度お試しください。</h2>';
      });
  }
  click(jsons) {
    if (jsons) {
      console.log("jsons is(sender)");
      console.log(jsons);
      let navJ: NavigationExtras = {
       state: {
         inner: jsons
        }
      };
      console.log(navJ);
      this.router.navigate(['view'],navJ);
    }
  }

  async gs(refresher) {
    this.count++;
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    try {
      const res = await this.http.get("https://qiita.com/api/v2/items?per_page=50&page=" + this.count)
        .toPromise(); 
      console.log(res);
      Array.prototype.push.apply(this.kiji,res);
      refresher.target.complete();
    } catch (err) { 
      //this.spn = '<h2 [ngStyle]="pi">エラーが発生しました。しばらく時間をおいて再度お試しください。</h2><p>' + err["status"] +err["error"]["message"] + '.</p>';
      console.log("大変申し訳ございませんが、エラーが発生しました。アプリを閉じて再度お試しください。");
      console.log(err);
      refresher.target.complete();
    }
  }
  async onload() {
    try {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      const res = await this.http.get("https://qiita.com/api/v2/items?per_page=50")
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
}
