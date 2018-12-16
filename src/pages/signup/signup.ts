import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserstoreProvider} from '../../providers/userstore/userstore';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  info = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserstoreProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  do(){
    this.userService.getuser(this.info).subscribe(data => {

    });
    console.log(this.info);
  }

}
