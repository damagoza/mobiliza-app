import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferTravelUserPage } from './offer-travel-user';

@NgModule({
  declarations: [
    OfferTravelUserPage,
  ],
  imports: [
    IonicPageModule.forChild(OfferTravelUserPage),
  ],
})
export class OfferTravelUserPageModule {}
