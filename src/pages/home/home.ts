import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignInPage } from '../sign-in/sign-in';
import { SignUpPage } from '../sign-up/sign-up';
import { RememberMyPasswordPage } from '../remember-my-password/remember-my-password';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	title = "Mobiliza prueba"
	constructor(public navCtrl: NavController) {

	}

	loadSignIn(){
		this.navCtrl.push(SignInPage, {})
	}

	loadSignUp(){
		this.navCtrl.push(SignUpPage, {})
	}

	loadRememberMyPassword(){
		this.navCtrl.push(SignInPage, {})
	}	

}
