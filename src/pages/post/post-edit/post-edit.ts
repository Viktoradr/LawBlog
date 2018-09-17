import { AutorService } from './../../../providers/AutorService';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, Loading, LoadingController } from 'ionic-angular';
import { take } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostModel } from '../../../model/PostModel';
import { AutorModel } from '../../../model/AutorModel';
import { PostService } from '../../../providers/PostService';
import { UsuarioModel } from '../../../model/UsuarioModel';

@IonicPage()
@Component({
  selector: 'page-post-edit',
  templateUrl: 'post-edit.html',
})
export class PostEditPage implements OnInit {

  post: PostModel = new PostModel();
  autores: AutorModel[] = [];
  formulario: FormGroup;
  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private postService: PostService,
    private autorService: AutorService) {
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      Titulo: [null, Validators.required],
      Descricao: [null, Validators.required],
      Autor: [null, Validators.required]
    });

    this.autorService.All()
      .pipe(take(1))
      .subscribe((dados: AutorModel[]) => {
        console.log(dados);
        this.autores = dados;

        this.popularForm();
      }, err => {
        if (err.status == 0) { this.presentToast("Erro no servidor"); }
      });
  }

  popularForm() {
    let _post = this.navParams.get('info');
    console.log(_post);
    if (_post) {
      this.formulario = this.formBuilder.group({
        Titulo: [_post.Titulo, Validators.required],
        Descricao: [_post.Descricao, Validators.required],
        Autor: [_post.Autor.id, Validators.required]
      });
    }
  }

  onSubmit(form) {
    if (!form.valid) {
      this.presentToast("Insira as informações que faltam!");

    } else {
      this.showLoading();

      this.post.Usuario = new UsuarioModel();
      this.post.Usuario.id = "5b9e62beb8f2cbd10382c74d";
      console.log("_post: ", this.post);

      this.postService.Novo(this.post)
        .pipe(take(1))
        .subscribe((dados) => {
          this.loading.dismiss();
          console.log(dados);
          if (dados) {
            this.presentToast("Post adicionado com sucesso!");
            this.closeModal();
          }
        }, err => {
          this.loading.dismiss();
          if (err.status == 0) { this.presentToast("Erro no servidor"); }
        });
    }
  }

  closeModal() {
    this.viewCtrl.dismiss(this.post);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando...',
      dismissOnPageChange: true
    });
    this.loading.present();
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