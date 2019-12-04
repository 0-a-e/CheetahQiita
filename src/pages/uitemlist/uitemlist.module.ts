import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UitemlistPage } from './uitemlist';

@NgModule({
  declarations: [
    UitemlistPage,
  ],
  imports: [
    IonicPageModule.forChild(UitemlistPage),
  ],
})
export class UitemlistPageModule {}
