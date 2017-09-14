import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../../obj/user';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  public currentUser  
  public userSignIn

  constructor(public http: Http) {
  	this.userSignIn = false
  }

  setUser(data){
  	this.currentUser = data
  	this.userSignIn = true
  }

  getUser(){
  	return this.currentUser
  }

  destroyUserSession(){
  	this.currentUser = null
  	this.userSignIn = false
  }

}
