import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserviewPage } from './userview';
import { UitemlistPage } from '../uitemlist/uitemlist';
@NgModule({
  declarations: [
    UserviewPage,
    UitemlistPage
  ],
  imports: [
    IonicPageModule.forChild(UserviewPage),
    UitemlistPage
  ],
})
export class UserviewPageModule {}
