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
  ionViewWillLeave() {
    this.load();
  }
  
  ionViewWillEnter() {
    this.load();
  }
  load() {
    this.storage.keys().then((k) => {
      console.table(k);
      try {
        if (typeof k !== 'undefined' && k.length > 0) {
          console.log("found: " + k);
          this.list = k;
        } else {
          console.log("not found: " + k);
          this.list = false;
        }
      } catch{
        this.list = false;
      }
    });
  }
  async ge(refresher) {
    console.log("run GE");
    try {
      this.load();
      refresher.target.complete();
    } catch (err) {
      setTimeout(() => { refresher.target.complete(), 3000 });
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
