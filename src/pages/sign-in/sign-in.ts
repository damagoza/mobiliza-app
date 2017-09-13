import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignUpPage } from '../sign-up/sign-up';
import { RememberMyPasswordPage } from '../remember-my-password/remember-my-password';

import { MobilizaDataProvider } from '../../providers/mobiliza-data/mobiliza-data';
import { UserProvider } from '../../providers/user/user';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { NgForm } from '@angular/forms';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

	formSignIn: FormGroup
	title = "Sign In"
	message = ''

	constructor(public navCtrl: NavController, public navParams: NavParams, public mobilizaDataProvider: MobilizaDataProvider, private formBuilder: FormBuilder, public userProvider: UserProvider) {
		this.formSignIn = formBuilder.group({
		  email: 'damagoza@gmail.com',      
		  password: 'cataratas'      
		})		
	}

	ionViewDidLoad() {
	console.log('ionViewDidLoad SignInPage');
	}

	handleSuccess(data){
	if (data.state == true) { 
	  this.userProvider.setUser(data)
	  this.message = ''
	  console.log("handleSucces sig-in data:")
	  console.log(data)
	  // this.navCtrl.push(ProductoPage, {})
	} else {
	  this.message = data.message
	}

	}

	handleHerror(error){
	console.log(error)
	}

	signIn(){
	return this.mobilizaDataProvider.requestPost(this.formSignIn.value, 'user/sign_in').subscribe(
	  data => this.handleSuccess(data),
	  error => this.handleHerror(error)
	)
	}

	loadSignUp(){
	this.navCtrl.push(SignUpPage, {})
	}

	loadRememberMyPassword(){
	this.navCtrl.push(RememberMyPasswordPage, {})
	}  	

}
