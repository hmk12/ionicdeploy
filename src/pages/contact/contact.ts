import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';
import { UserstoreProvider } from '../../providers/userstore/userstore';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 all ={};
  constructor(public navCtrl: NavController , public userstorProvider :UserstoreProvider) {

  }
     
  pulluser()
  {
    this.userstorProvider.pulluser(this.all).subscribe(data =>{
      console.log(data);
    });
  console.log(this.all);
  }
}
