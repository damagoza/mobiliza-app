import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddVehiclePage } from '../add-vehicle/add-vehicle';

import { MobilizaDataProvider } from '../../providers/mobiliza-data/mobiliza-data';
import { UserProvider } from '../../providers/user/user';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { NgForm } from '@angular/forms';

/**
 * Generated class for the OfferTravelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offer-travel',
  templateUrl: 'offer-travel.html',
})
export class OfferTravelPage {
  
  formOfferTravel: FormGroup
  title = "Ofrecer viaje"

  constructor(public navCtrl: NavController, public navParams: NavParams, public mobilizaDataProvider: MobilizaDataProvider, private formBuilder: FormBuilder, public userProvider: UserProvider) {
		this.formOfferTravel = formBuilder.group({
		  email: 'damagoza@gmail.com',      
		  password: 'cataratas'      
		})		    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferTravelPage');
  }
  
  loadAddVehiclePage(){
    this.navCtrl.push(AddVehiclePage, {})
  }

}
