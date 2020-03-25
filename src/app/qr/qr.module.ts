import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { VqrPage } from '../vqr/vqr.page';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [VqrPage],
  imports: [
    CommonModule,
    NgxQRCodeModule,
    IonicModule
  ],
  entryComponents: [
    VqrPage
  ],
  exports:[
    NgxQRCodeModule
  ]
})
export class QrModule { }
