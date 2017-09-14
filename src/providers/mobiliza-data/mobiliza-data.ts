import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { User } from '../../obj/user';

/*
  Generated class for the MobilizaDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MobilizaDataProvider {

  //url = 'http://localhost:3000/api/'
  url = 'https://mobiliza-damagoza.c9users.io/api/'

  constructor(public http: Http) {
    console.log('Hello MobilizaDataProvider');
  }

  requestPost(data, path){ // funcional
    console.log('peticion a : ' + this.url+path)
    console.log('llego data =  ' + data.state)
    return this.http.post(this.url+path, data)
      .map(res => res.json())
  }

  requestGet(path){
    return this.http.get(this.url+path)
      .map(res => res.json())
  }

  requestGetTry(path){
    return this.http.get(this.url+path)
      .map(res => console.log(res.json()))
  }  

}
