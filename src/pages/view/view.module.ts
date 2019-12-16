import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPage } from './view';
//import {IONIC_DIRECTIVES} from '';
@NgModule({
  declarations: [
    ViewPage,
   // MdToHtmlPipe
  ],
  imports: [
    IonicPageModule.forChild(ViewPage),
  ],
})
export class ViewPageModule {}
