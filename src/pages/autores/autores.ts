import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-autores',
  templateUrl: 'autores.html',
})
export class AutoresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutoresPage');
  }

  verPosts(){
    this.navCtrl.push('PostViewListPage');
  }

}
