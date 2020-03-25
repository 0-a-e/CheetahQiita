import { VqrPage } from './../vqr/vqr.page';
import { Component, OnInit } from '@angular/core';
import { Routes, NavigationExtras } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
  styles: [
    `
    :host /deep/ .pod {
      text-align: start;
      margin: 0 auto;
      width: 90%;
    }
    :host /deep/ .pod > h1 { 
      font-size: 1.8em;
    border-bottom: 1px solid #ddd;
    padding-bottom: .1em;
      }
        :host /deep/ .pod > h3 { 
          font-size: 1.4em;
          }
    :host /deep/ .c1 { 
      color:#9dabae ;
      }
      :host /deep/ .cs { 
        color:#9dabae ;
        }
        :host /deep/ .cpf { 
          color:#9dabae ;
          }
    :host /deep/ pre { 
      padding: 10px;
      border-radius: 5px;
      background: #364549;
      color: #e5e5e5;
      font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
      }
      :host /deep/ .s2 { 
        color: #41b7d7;
        }
        :host /deep/ .kn { 
          color: #ff8095;
          }
          :host /deep/ .k { 
            color: #ebd247;
            }
            :host /deep/ .kd { 
              color: #ebd247;
              }
              :host /deep/ .kc { 
                color: #ebd247;
                }
                :host /deep/ .kr { 
                  color: #ebd247;
                  }
            //
            :host /deep/ .ow { 
              color: #ff8095;
              }
              :host /deep/ .o { 
                color: #ff8095;
                }
              :host /deep/ .s { 
                color: #41b7d7;
                }
                :host /deep/ .s1 { 
                  color: #41b7d7;
                  }
                  :host /deep/ .dl { 
                    color: #41b7d7;
                    }
                    :host /deep/ .nf { 
                      color:#8bdf4c;
                      }
                      :host /deep/  .nx  { 
                        color:#8bdf4c;
                        }
                        :host /deep/ .ne { 
                          color:#8bdf4c;
                          }
                          :host /deep/  .nc  { 
                            color:#8bdf4c;
                            }
                            :host /deep/ .nd { 
                              color:#8bdf4c;
                              }
                              :host /deep/ .na { 
                                color:#8bdf4c;
                                }


      `
    ]
})
export class ViewPage implements OnInit {
  bod: object;
  title: any;
  jsons: any;
  com: any;
  itemid: any;
  comment: any;
  bts: any;
  created: any;
  user: any;
  updated: any;
  Likecount: any;
  tag: any;
  Duid: any;
  Diid: any;
  Sstyle: any;
  url: any;
  name: any;
  userdesc: any;
  usurl: any;
  PFIU: any;
  addstyle = "'pre': {'background: '606060'}"
/*
  tagstyle = {
  'background-color': '#EFF4FF',
  'border': 'none',
    'color': '#2557D6',
    'padding': '10px 20px',
  'max-width':'100px',
  'text-align': 'center',
  'text-decoration': 'none',
  'display': 'inline-block',
  'margin-right': '13px',
  'margin-left': '-1px',
  'margin-bottom': '10px',
  'border-radius': '100px',
  }*/
  goodstyle = {
    'text-decoration':'none',
    'font-size': '40px',
    'color': '#387EF5',
    'text-align':'center'
  }
  constructor( public modalCtrl: ModalController,private socialSharing: SocialSharing,private toastController:ToastController,private storage:Storage,private http:HttpClient,private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      console.log("recive booted");
      if (this.router.getCurrentNavigation().extras.state.inner) {
        this.jsons = this.router.getCurrentNavigation().extras.state.inner;
        this.set();
      console.log("this.json is");
      console.log(this.jsons);
    } else {
      console.log("dont recived");
      }
      if (this.router.getCurrentNavigation().extras.state.com) {
        this.com = this.router.getCurrentNavigation().extras.state.com;
        this.set();
      console.log("this.com is");
      console.log(this.com);
    } else {
      console.log("dont recived");
    }
    });

  }
  async vqrs(){
  const modal = await this.modalCtrl.create({
    component: VqrPage,
    componentProps: {
      'url': this.url
    },
    swipeToClose: true
  });
  return await modal.present();
}
  async social() {
    this.socialSharing.share(this.title, 'subject', null, this.url);
  }
  async rm() {
      this.storage.remove(this.title);
      this.bts = "cloud-download";
      console.log(this.bts);
      const toast = await this.toastController.create({
        message: 'ダウンロード済みの記事を削除しました。',
        duration: 2000
      });
      toast.present();
  }
  CMUSI(user) {
    console.log("run cmusi");
    console.log(user);
    let navJ: NavigationExtras = {
      state: {
        inner: user
       }
    };
    
     console.log(navJ);
     this.router.navigate(['user'],navJ);
  }
  userinfo() {
    this.user = this.jsons["user"];
    let navJ: NavigationExtras = {
      state: {
        inner: this.user
      }
    };
      
    console.log(navJ);
    this.router.navigate(['user'], navJ);
  }
  ta(ins) { 
    console.log(ins);
    window.open('https://qiita.com/tags/' + ins + '/', '_system')
    }
  async add() {
    console.log("RUN");
    var title = this.title;
    var inner = this.jsons;
    var INE = String(inner);
    console.log(INE);
    console.log(title);

    if (this.bts == "trash") {
      console.log(title);
      this.rm();
    } else {
      try {
        this.storage.set(title, this.jsons);
        this.bts = "trash";
        const toast = await this.toastController.create({
          message: '記事をダウンロードしました。[保存済み]の項目からオフライン時も閲覧することができます。',
          duration: 2000
        });
        toast.present();

   //     toast.present();
      } catch (err) { 

      }
    }
  }
  set() {
    this.bod = this.jsons["rendered_body"];
    this.title = this.jsons["title"];
    this.created = this.jsons["created_at"];
    this.updated = this.jsons["updated_at"];
    this.Likecount = this.jsons["likes_count"];
    this.tag = this.jsons["tags"];
    // this.Duid = this.navParams.get("usernameid");
    // this.Diid = this.navParams.get("itemid");
    this.itemid = this.jsons["id"];
    this.url = this.jsons["url"];
    this.name = this.jsons["user"]["name"];
    this.PFIU = this.jsons["user"]["profile_image_url"];
    this.usurl = 'https://qiita.com/' + this.jsons["user"]["id"];
    this.Sstyle = this.addstyle;
    let headers = new HttpHeaders();
    if (this.com == "d") {
      this.bts = "trash";
    } else {
      this.bts = "cloud-download";
    }
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const res = this.http.get("https://qiita.com/api/v2/items/"+this.itemid+"/comments")
      .subscribe(res => {
        console.log(res);
      //  try{
      //  this.comment = res.reverse();
     // } catch {
        this.comment = res;
    //  }

  //      this.kiji = res;
  //      this.Fsave = res;
      }, error => {
  //      this.spn = '<h2 [ngStyle]="pi">エラーが発生しました。しばらく時間をおいて再度お試しください。</h2>';
    });
  }
  ngOnInit() {
  }

}
