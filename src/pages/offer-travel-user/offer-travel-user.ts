import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ShowTravelPage } from '../show-travel/show-travel';

import { MobilizaDataProvider } from '../../providers/mobiliza-data/mobiliza-data';
import { UserProvider } from '../../providers/user/user';
import { User} from '../../obj/user';


import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { NgForm } from '@angular/forms';

/**
 * Generated class for the OfferTravelUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offer-travel-user',
  templateUrl: 'offer-travel-user.html',
})
export class OfferTravelUserPage {

	offerTravels = []
	currentUser = {'id': '', 'emai': '', 'birthday': '', 'created_at': '', 'updated_at': ''}

	constructor(public navCtrl: NavController, public navParams: NavParams, public mobilizaDataProvider: MobilizaDataProvider, private formBuilder: FormBuilder, public userProvider: UserProvider) {
		this.currentUser = this.userProvider.getUser().user
		this.mobilizaDataProvider.requestPost({'user_id':this.currentUser.id.toString()}, 'offer_travel/for_user').subscribe(offerTravelsData => this.offerTravels = offerTravelsData)
		console.log(this.offerTravels)
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad OfferTravelUserPage');
	}

	loadShowTravel(travel){
		this.navCtrl.push(ShowTravelPage, travel)
	}	

}
