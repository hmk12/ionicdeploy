import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SignupPage } from '../signup/signup';
import { ContactPage } from '../contact/contact';
import { RegisterPage} from '../register/register';
import { PaperPage } from '../paper/paper';
import { FeedbackPage } from '../feedback/feedback';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  getSignup(){ this.navCtrl.push(SignupPage);}
  getContact(){this.navCtrl.push(ContactPage);}
  getRegister(){this.navCtrl.push(RegisterPage);}
  getPaper(){this.navCtrl.push(PaperPage);}
  getFeedback(){this.navCtrl.push(FeedbackPage);}
  //getCustomerFeedback(){ this.navCtrl.push(customerReviewPage )};
}
