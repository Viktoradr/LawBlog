import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController) {

  }

  novoPost() {
    let profileModal = this.modalCtrl.create('PostEditPage');
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }

}
