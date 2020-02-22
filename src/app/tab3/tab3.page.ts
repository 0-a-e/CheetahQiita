import { Router,NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  list: any;
  constructor(private router:Router,private storage:Storage) {}
  ionViewDidEnter() {
    this.load();
  }
  
  ionViewWillEnter() {
    this.load();
  }
  load() {
    this.storage.keys().then((k) => {
      console.table(k)
      this.list = k
    });
  }
  async ge(refresher) {
    console.log("run GE");
    try {
      this.storage.keys().then((k) => {
        console.table(k);
        this.list = k;
      });
      refresher.target.complete();
    } catch (err) {
      setTimeout(() => { refresher.target.complete(), 3000 });
        console.log(err);
      }
  }
  click(ki) {
    console.log(ki);

    this.storage.get(ki).then((val) => {
      console.log(val);
      let navJ: NavigationExtras = {
        state: {
          inner: val,
          com: "d"
        }
      };
      console.log(navJ);
      this.router.navigate(['view'], navJ);
      //   });
    });
  }
}
