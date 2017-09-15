import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MobilizaDataProvider } from '../../providers/mobiliza-data/mobiliza-data';
import { UserProvider } from '../../providers/user/user';
import { User} from '../../obj/user';

import { DemandTravelUserPage } from '../demand-travel-user/demand-travel-user';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {NgForm} from '@angular/forms';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ShowTravelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-travel',
  templateUrl: 'show-travel.html',
})
export class ShowTravelPage {

    message = ""
    formCreateDemand: FormGroup    
     
    currentUser = {'id': '', 'emai': '', 'birthday': '', 'created_at': '', 'updated_at': ''}     

    OfferTravel = {
        "id":"",
        "coordenada_start": "",
        "coordenada_end": "",
        "name_start": "",
        "name_end": "",
        "state": "",
        "user": {
            "id": "",
            "email": "",
            "created_at": "",
            "updated_at": "",
            "birthday": ""
        },
        "vechicle": {
            "id": "",
            "user_id": "",
            "type_vehicle_id": "",
            "model": "",
            "created_at": "",
            "updated_at": ""
        }
    }

    constructor(public navCtrl: NavController, public navParams: NavParams, public mobilizaDataProvider: MobilizaDataProvider, private formBuilder: FormBuilder, public userProvider: UserProvider, public toastCtrl: ToastController) {
        this.currentUser = this.userProvider.getUser().user
        this.OfferTravel = navParams.data
        this.formCreateDemand = formBuilder.group({ // inicializamos el formulario sign up
            user_id: this.currentUser.id.toString(),
            offer_travel_id: this.OfferTravel.id,
            accept: false,
            state: true
        });                      
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ShowTravelPage');
    }

    showToast(position, text){
        let toast = this.toastCtrl.create({
            message: text,
            duration: 2000,
            position: position
        });
        toast.present(toast);
    }

    handleSuccess(data){
        if (data.state == true) { 
            this.showToast('top', "Solicitud envíada")
        } else {
            this.showToast('top', data.message)
        }
        this.loadDemandlUserPage()

    }

    handleHerror(error){
        console.log(error)
    }      

    createDemand(){

        return this.mobilizaDataProvider.requestPost(this.formCreateDemand.value, 'demand_travel/create').subscribe(
          data => this.handleSuccess(data),
          error => this.handleHerror(error)
        )        
    }

  loadDemandlUserPage(){
    this.navCtrl.push(DemandTravelUserPage, {})
  }        

}
