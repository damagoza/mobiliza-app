import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ShowTravelPage } from '../show-travel/show-travel';

import { MobilizaDataProvider } from '../../providers/mobiliza-data/mobiliza-data';
import { UserProvider } from '../../providers/user/user';
import { User} from '../../obj/user';


import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { NgForm } from '@angular/forms';

/**
 * Generated class for the DemandTravelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demand-travel',
  templateUrl: 'demand-travel.html',
})
export class DemandTravelPage {

	offerTravels = []

	constructor(public navCtrl: NavController, public navParams: NavParams, public mobilizaDataProvider: MobilizaDataProvider, private formBuilder: FormBuilder, public userProvider: UserProvider) {
    	this.mobilizaDataProvider.requestPost({'state':true}, 'offer_travel/travel_for_state').subscribe(offerTravelsData => this.offerTravels = offerTravelsData)
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DemandTravelPage');
	}
	
	loadShowTrave(travel){
		this.navCtrl.push(ShowTravelPage, travel)
	}

}
