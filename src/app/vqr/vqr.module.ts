import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { NgxQRCodeModule } from 'ngx-qrcode2';
import { VqrPageRoutingModule } from './vqr-routing.module';
import { QrModule } from '../qr/qr.module';
//import { VqrPage } from './vqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  //  NgxQRCodeModule,
    QrModule,
    VqrPageRoutingModule
  ],
  
  declarations: []
})
export class VqrPageModule {}
