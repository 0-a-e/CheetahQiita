import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy,Routes,RouterModule } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { Toast } from '@ionic-native/toast/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*
import { Tab2Page } from './tab2/tab2.page';
import { Tab1Page } from './tab1/tab1.page';
import { ViewPage } from './view/view.page';
import { SavedPage } from './saved/saved.page';
*/
/*
const routes: Routes = [
  { path: '', component: Tab2Page },
  { path: 'search', component: Tab1Page },
  { path: 'saved', component: SavedPage },
  { path: 'view', component: ViewPage },
];
*/
@NgModule({
  declarations: [AppComponent,
  /*
    Tab2Page,
    Tab1Page,
    SavedPage,
    ViewPage*/
  ],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  //  RouterModule.forRoot(routes),
    IonicStorageModule.forRoot()
  ], exports: [
    HttpClientModule,
    RouterModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Toast,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
