
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
//import { IonicStorageModule } from '@ionic/'
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler,NavController } from 'ionic-angular';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { MyApp } from './app.component';
import { Firebase } from '@ionic-native/firebase/ngx';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ViewPage } from '../pages/view/view';
//import { CodePush } from "@ionic-native/code-push";
//import { CodePush } from "@ionic-native/code-push";
import { PopPage } from '../pages/pop/pop';
import { UitemlistPage } from '../pages/uitemlist/uitemlist';
import { UserviewPage } from '../pages/userview/userview';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ViewPage,
    PopPage,
    UitemlistPage,
    UserviewPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    TabsPage,
    ViewPage,
    UitemlistPage,
    PopPage,
    UserviewPage
  ],
  providers: [
    StatusBar,
//   CodePush,
    Firebase,
    SplashScreen,
    Deeplinks,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}