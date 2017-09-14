import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  
    travel = {
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("Llego en NavController travel ->")
    this.travel = navParams.data
    console.log(this.travel)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowTravelPage');
  }

}
