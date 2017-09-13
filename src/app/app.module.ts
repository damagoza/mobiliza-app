import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignInPage } from '../pages/sign-in/sign-in';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { RememberMyPasswordPage } from '../pages/remember-my-password/remember-my-password';
import { InicioPage } from '../pages/inicio/inicio';
import { AddVehiclePage } from '../pages/add-vehicle/add-vehicle';
import { DemandTravelPage } from '../pages/demand-travel/demand-travel';
import { OfferTravelPage } from '../pages/offer-travel/offer-travel';

import { HttpModule } from '@angular/http';
import { MobilizaDataProvider } from '../providers/mobiliza-data/mobiliza-data';
import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignInPage, 
    SignUpPage,
    RememberMyPasswordPage,
    InicioPage, 
    AddVehiclePage,
    DemandTravelPage,
    OfferTravelPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignInPage, 
    SignUpPage,
    RememberMyPasswordPage,
    InicioPage, 
    AddVehiclePage,
    DemandTravelPage,
    OfferTravelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MobilizaDataProvider,
    UserProvider
  ]
})
export class AppModule {}
