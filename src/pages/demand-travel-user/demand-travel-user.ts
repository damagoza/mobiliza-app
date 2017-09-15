import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MobilizaDataProvider } from '../../providers/mobiliza-data/mobiliza-data';
import { UserProvider } from '../../providers/user/user';
import { User} from '../../obj/user';

import { ShowTravelPage } from '../show-travel/show-travel';


import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { NgForm } from '@angular/forms';

/**
 * Generated class for the DemandTravelUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demand-travel-user',
  templateUrl: 'demand-travel-user.html',
})
export class DemandTravelUserPage {

	demandTravels = []
	currentUser = {'id': '', 'emai': '', 'birthday': '', 'created_at': '', 'updated_at': ''}	

	constructor(public navCtrl: NavController, public navParams: NavParams, public mobilizaDataProvider: MobilizaDataProvider, private formBuilder: FormBuilder, public userProvider: UserProvider) {
		this.currentUser = this.userProvider.getUser().user
		this.mobilizaDataProvider.requestPost({'user_id':this.currentUser.id.toString()}, 'demand_travel/for_user').subscribe(demandTravelsData => this.demandTravels = demandTravelsData)
		console.log("demandTravels")			
		console.log(this.demandTravels)			
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DemandTravelUserPage');
	}

	loadShowTravel(travel){
		this.navCtrl.push(ShowTravelPage, travel)
	}		

}
