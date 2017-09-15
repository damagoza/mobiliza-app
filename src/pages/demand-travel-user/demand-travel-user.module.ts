import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemandTravelUserPage } from './demand-travel-user';

@NgModule({
  declarations: [
    DemandTravelUserPage,
  ],
  imports: [
    IonicPageModule.forChild(DemandTravelUserPage),
  ],
})
export class DemandTravelUserPageModule {}
