import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ContactPage } from '../contact/contact';
import { UserviewPage } from '../userview/userview';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
  styles: [
    `
    :host /deep/ .pod {
      text-align: start;
      margin: 0 auto;
      color: #1a1a1a;
      width: 90%;
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
export class ViewPage {
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
  }
  goodstyle = {
    'text-decoration':'none',
    'font-size': '40px',
    'color': '#387EF5'
  }
  constructor( private http: HttpClient,public toastController: ToastController,private storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
  //    this.bod = navParams.get("rendbody");
  //    this.title = this.navParams.get("title");
      this.com = this.navParams.get("com");
    this.jsons = this.navParams.get("jsons");
    this.bod = this.jsons["rendered_body"];
    this.title = this.jsons["title"];
    this.created = this.jsons["created_at"];
    this.updated = this.jsons["updated_at"];
    this.Likecount = this.jsons["likes_count"];
    this.tag = this.jsons["tags"];
    this.Duid = this.navParams.get("usernameid");
    this.Diid = this.navParams.get("itemid");
    this.itemid = this.jsons["id"];
    this.url = this.jsons["url"];
    this.name = this.jsons["user"]["name"];
    this.PFIU = this.jsons["user"]["profile_image_url"];
    this.usurl = 'https://qiita.com/' + this.jsons["user"]["id"];
    this.Sstyle = this.addstyle;
      if (this.com == "d") {
        this.bts = "trash";
      } else {
        this.bts = "add";
      }
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      const res = this.http.get("https://qiita.com/api/v2/items/"+this.itemid+"/comments")
        .subscribe(res => {
          console.log(res);
          this.comment = res;
    //      this.kiji = res;
    //      this.Fsave = res;
        }, error => {
    //      this.spn = '<h2 [ngStyle]="pi">エラーが発生しました。しばらく時間をおいて再度お試しください。</h2>';
      });
  }
 /*
  ionViewCanEnter() {
    console.log('ionViewDidLoad ViewPage');

    //  this.bod = this.navParams.get("rendbody");
    //
    this.title = this.navParams.get("title");
  this.jsons = this.navParams.get("jsons");
      this.com = this.navParams.get("com");
      this.bod = this.jsons["rendered_body"];
      this.title = this.jsons["title"];
      if (this.com == "d") {
        this.bts = "trash";
      } else {
        this.bts = "add";
      }
      console.log(this.bod);
    console.log(this.created);
  
  }
  */
  userinfo() {
    this.user = this.jsons["user"];
    this.navCtrl.push(UserviewPage, { "user":this.user });
  }
  CMUSI(us) {
    this.navCtrl.push(UserviewPage, { "user":us });
  }
  TNE() { 
    console.log("RUN");
    var title = this.title;
    var inner = this.jsons;
    var INE = String(inner);
    console.log(INE);
    console.log(title);

    if (this.bts == "trash") {
      this.storage.remove(title);
      this.bts = "add";
      const toast = this.toastController.create({
        message: 'ダウンロード済みの記事記事を削除しました。',
        duration: 2000
      });
      toast.present();
  //    this.navCtrl.push(ContactPage);

    } else {
      try {
        this.storage.set(title, this.jsons);
        this.bts = "trash";
        const toast = this.toastController.create({
          message: '記事をダウンロードしました。[保存済み]の項目からオフライン時も閲覧することができます。',
          duration: 2000
        });
        toast.present();
      } catch (err) { 

      }
    }
  }
  ta(ins) { 
    console.log(ins);
    window.open('https://qiita.com/tags/' + ins + '/', '_system')
    }
}
