import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  kiji: Object;
  RC: any;
  kiji2: Object;
  count: any;
  plus: any;
  RCS: any;
  Fsave: any;
  spn: any;
  constructor(private http: HttpClient,private router:Router) { }
  ionViewWillEnter() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.toggleDarkTheme(prefersDark.matches);
//prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));
    this.onload();
    const btn = document.getElementById("DA");
    btn.addEventListener('click', function() {
      const body = document.getElementById("body");
      console.log(body);
      document.body.classList.toggle('dark');
      console.log('クリックされました！');
    
  }, false);
  }
  toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);
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
      refresher.target.complete();
    } catch (err) { 
      this.spn = '<h2 [ngStyle]="pi">エラーが発生しました。しばらく時間をおいて再度お試しください。</h2><p>' + err["status"] +err["error"]["message"] + '.</p>';
      console.log("大変申し訳ございませんが、エラーが発生しました。アプリを閉じて再度お試しください。");
      console.log(err);
      refresher.target.complete();
    }
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
    const list = document.getElementById('list');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    console.log("running> gs");
    try {
      const res = await this.http.get("https://qiita.com/api/v2/items?per_page=50&page=" + this.count)
        .toPromise(); 
      console.log("RES IS ");
      console.log(res);
      this.count++;
      console.log(this.count);
      //    NE = res["0"]["title"];
      for (this.RC = 0; 50 > this.RC; this.RC++) {
        var el = document.createElement('div');
        console.log(this.RC);
        var NR = res[this.RC];
        console.log(NR);
        el.setAttribute('id', NR.id);
        el.setAttribute('class', 'LIS');
        el.innerHTML = `<ion-item><ion-label>${NR.title}</ion-label></ion-item>`;
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
      let navJ: NavigationExtras = {
        state: {
          inner:res
         }
       };
       console.log(navJ);
       this.router.navigate(['view'],navJ);
     // this.kiji = res;
    }, error => {
    //  this.spn = '<h2 [ngStyle]="pi">エラーが発生しました。しばらく時間をおいて再度お試しください。</h2>';
    });
    
}, false);
  
}

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
