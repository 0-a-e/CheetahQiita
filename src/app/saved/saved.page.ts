import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage {
  list: any;
  // public navCtrl: NavController
  //private storage: Storage
  constructor(public storage: Storage, public router: Router) {

    console.log("allcountry constuctor are called");
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

  ionViewDidEnter() {
    // let items = [];
    // this.list =  this.storage.keys()
    //   .then(keys => Promise.all(keys.map(k => this.storage.get(k))));
    //   console.log(this.list);

    this.storage.keys().then((k) => {
      console.table(k)
      this.list = k
    });
  }
  
  ionViewWillEnter() {
    // let items = [];
    // this.list =  this.storage.keys()
    //   .then(keys => Promise.all(keys.map(k => this.storage.get(k))));
    //   console.log(this.list);

    this.storage.keys().then((k) => {
      console.table(k)
      this.list = k
    });
  }
}
