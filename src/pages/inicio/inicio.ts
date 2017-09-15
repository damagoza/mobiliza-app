import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DemandTravelPage } from '../demand-travel/demand-travel';
import { OfferTravelPage } from '../offer-travel/offer-travel';
import { DemandTravelUserPage } from '../demand-travel-user/demand-travel-user';
import { OfferTravelUserPage } from '../offer-travel-user/offer-travel-user';
/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }
  
	loadDemandTravelPage(){
		this.navCtrl.push(DemandTravelPage, {})
	}

	loadOfferTravelPage(){
		this.navCtrl.push(OfferTravelPage, {})
	}  


  loadOfferTravelUserPage(){
    this.navCtrl.push(OfferTravelUserPage, {})
  }

  loadDemandlUserPage(){
    this.navCtrl.push(DemandTravelUserPage, {})
  }    

}
