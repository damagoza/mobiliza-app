import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddVehiclePage } from '../add-vehicle/add-vehicle';
import { OfferTravelUserPage } from '../offer-travel-user/offer-travel-user';

import { MobilizaDataProvider } from '../../providers/mobiliza-data/mobiliza-data';
import { UserProvider } from '../../providers/user/user';
import { User} from '../../obj/user';

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
  vehicles = []
  message = ''
  currentUser = {'id': '', 'emai': '', 'birthday': '', 'created_at': '', 'updated_at': ''}

  constructor(public navCtrl: NavController, public navParams: NavParams, public mobilizaDataProvider: MobilizaDataProvider, private formBuilder: FormBuilder, public userProvider: UserProvider) {
    this.currentUser = this.userProvider.getUser().user
    this.mobilizaDataProvider.requestPost({'id':this.currentUser.id.toString()}, 'vechicle/vechicle_for_user').subscribe(vehiclesData => this.vehicles = vehiclesData) // inicializa el select de las ciudades        
		this.formOfferTravel = formBuilder.group({
      user_id: this.currentUser.id.toString(),
      vechicle_id: '', 
      coordenada_start: '36.997644',
      coordenada_end: '-3.177966',
      name_start: '',
      name_end: '',
      state: true
		})		    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferTravelPage');
  }

  handleSuccess(data){
    if (data.state == true) { 

    } else {
      this.message = data.message
    }
    this.loadOfferTravelUserPage()

  }

  handleHerror(error){
    console.log(error)
  }    
  
  loadAddVehiclePage(){
    this.navCtrl.push(AddVehiclePage, {})
  }

  createOfferTravel(){
    return this.mobilizaDataProvider.requestPost(this.formOfferTravel.value, 'offer_travel/create').subscribe(
      data => this.handleSuccess(data),
      error => this.handleHerror(error)
    )
  }

  loadOfferTravelUserPage(){
    this.navCtrl.push(OfferTravelUserPage, {})
  }  

}


