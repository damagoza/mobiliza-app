import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MobilizaDataProvider } from '../../providers/mobiliza-data/mobiliza-data';
import { UserProvider } from '../../providers/user/user';
import { User} from '../../obj/user';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {NgForm} from '@angular/forms';

/**
 * Generated class for the AddVehiclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-vehicle',
  templateUrl: 'add-vehicle.html',
})
export class AddVehiclePage {

	formAddVehicle: FormGroup	
	typeVehicles = []
	currentUser = {'id': '', 'emai': '', 'birthday': '', 'created_at': '', 'updated_at': ''}
	message = ''

	constructor(public navCtrl: NavController, public navParams: NavParams, public mobilizaDataProvider: MobilizaDataProvider, private formBuilder: FormBuilder, public userProvider: UserProvider) {
  		this.mobilizaDataProvider.requestGet('type_vehicle/all').subscribe(typeVehiclesData => this.typeVehicles = typeVehiclesData) // inicializa el select de las ciudades		
  		this.currentUser = this.userProvider.getUser().user
		this.formAddVehicle = formBuilder.group({ // inicializamos el formulario sign up
			user_id: this.currentUser.id,
			type_vehicle_id: '',
			model: 'cualquier cosa'
		});  			
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddVehiclePage');
	}

	handleSuccess(data){
		if (data.state == true) { 
			console.log("Vehículo creado")
		} else {
		  this.message = data.message
		}

	}

	handleHerror(error){
		console.log(error)
	}	

	addVehiculo(){
		return this.mobilizaDataProvider.requestPost(this.formAddVehicle.value, 'vechicle/create').subscribe(
		  data => this.handleSuccess(data),
		  error => this.handleHerror(error)
		)
	}

}
