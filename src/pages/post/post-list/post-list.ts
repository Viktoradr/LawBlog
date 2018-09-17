import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { take } from 'rxjs/operators';
import { PostService } from '../../../providers/PostService';
import { PostModel } from '../../../model/PostModel';

@IonicPage()
@Component({
  selector: 'page-post-list',
  templateUrl: 'post-list.html',
})
export class PostListPage implements OnInit {

  posts: PostModel[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private postService: PostService,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.postService.All()
    .pipe(take(1))
    .subscribe((dados: PostModel[]) => {
      console.log(dados);
      this.posts = dados;
    }, err => {
      if (err.status == 0) { this.presentToast("Erro no servidor"); }
    });
  }

  editPost(item: PostModel) {
    let profileModal = this.modalCtrl.create('PostEditPage', { info: item });
    profileModal.onDidDismiss(data => {
      console.log(data);
      this.getPosts();
    });
    profileModal.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

}
