import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
   
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

  color1: string = 'gray';
  color2: string = 'gray';
  color3: string = 'gray';
  color4: string = 'gray';
  color5: string = 'gray';
  colorArray: string[] = [this.color1, this.color2, this.color3, this.color4, this.color5];


  fillStar(i) {
    for (let index = 0; index < this.colorArray.length; index++) {
      this.colorArray[index] = "gray";
    }
    for (let index = 0; index < i; index++) {
      this.colorArray[index] = "orange";
    }
    //this.customerReview.rate = i;
  }
 
    
   
  
  

}
