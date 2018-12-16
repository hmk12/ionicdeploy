import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserstoreProvider} from '../../providers/userstore/userstore';

/**
 * Generated class for the PaperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paper',
  templateUrl: 'paper.html',
})
export class PaperPage {

  info = {};

  constructor(public navCtrl: NavController, public navParams: NavParams , public userstoreProvider :UserstoreProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaperPage');
  }
  
  do()
  { 
    this.userstoreProvider.getuser(this.info).subscribe(data =>{
      console.log(data);
    });
    console.log(this.info);
  }
}
