import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPage } from './view';
import { MdToHtmlPipe } from '../../pipes/md-to-html/md-to-html';

@NgModule({
  declarations: [
    ViewPage,
    MdToHtmlPipe
  ],
  imports: [
    IonicPageModule.forChild(ViewPage),
  ],
})
export class ViewPageModule {}
