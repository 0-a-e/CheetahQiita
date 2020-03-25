import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-vqr',
  templateUrl: './vqr.page.html',
  styleUrls: ['./vqr.page.scss'],
})

export class VqrPage implements OnInit {
  
  url: string;
  constructor( private modalCtrl:ModalController,private navparams: NavParams) { this.url = navparams.get("url"); }

  ngOnInit() {
    console.log(this.url);
  }
  closemodal() {
    console.log("close modal");
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
