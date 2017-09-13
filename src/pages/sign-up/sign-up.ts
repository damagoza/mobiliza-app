import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignInPage } from '../sign-in/sign-in';
import { RememberMyPasswordPage } from '../remember-my-password/remember-my-password';

import { MobilizaDataProvider } from '../../providers/mobiliza-data/mobiliza-data';
import { UserProvider } from '../../providers/user/user';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {NgForm} from '@angular/forms';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  formSignUp: FormGroup	
  message = ''


  constructor(public navCtrl: NavController, public navParams: NavParams, public mobilizaDataProvider: MobilizaDataProvider, private formBuilder: FormBuilder, public userProvider: UserProvider) {
    this.formSignUp = formBuilder.group({ // inicializamos el formulario sign up
  		email: 'damagoza@gmail.com',
  		password: 'cataratas'
    });  	
  }

  handleSuccess(data){
    if (data.state == true) { 
      this.userProvider.setUser(data)
      this.message = ''
      console.log("handleSucces del signUp la data:")
      console.log(data)
      //this.navCtrl.push(ProductoPage, {})
    } else {
      this.message = data.message
    }
  }

  handleHerror(error){
    console.log(error)
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage')    
  }

  signUp() {
    return this.mobilizaDataProvider.requestPost(this.formSignUp.value, 'user/sign_up').subscribe(
      data => this.handleSuccess(data),
      error => this.handleHerror(error)
    )    
  }


  loadSignIn(){
    this.navCtrl.push(SignInPage, {})
  }

  loadRememberMyPassword(){
    this.navCtrl.push(RememberMyPasswordPage, {})
  }      

}
