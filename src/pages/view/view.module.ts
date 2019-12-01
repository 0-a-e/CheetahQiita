import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPage } from './view';
import { MarkdownModule } from '../../../node_modules/ngx-markdown'

@NgModule({
  declarations: [
    ViewPage,
  ],
  imports: [
    MarkdownModule.forChild(),
    IonicPageModule.forChild(ViewPage),
  ],
})
export class ViewPageModule {}
