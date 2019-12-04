import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserviewPage } from './userview';

@NgModule({
  declarations: [
    UserviewPage,
  ],
  imports: [
    IonicPageModule.forChild(UserviewPage),
  ],
})
export class UserviewPageModule {}
