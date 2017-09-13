import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RememberMyPasswordPage } from './remember-my-password';

@NgModule({
  declarations: [
    RememberMyPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(RememberMyPasswordPage),
  ],
})
export class RememberMyPasswordPageModule {}
