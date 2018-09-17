import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, MenuController, LoadingController, ToastController, Loading } from 'ionic-angular';
import { take } from 'rxjs/operators';
import { LoginModel } from '../../model/LoginModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../providers/AuthService';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formulario: FormGroup;
  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private menu: MenuController,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: ["viktoradr@gmail.com", [Validators.required, Validators.email]],
      senha: ["123456", Validators.required]
    });
  }

  ionViewDidEnter() {
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    this.menu.enable(true);
  }

  logar(form) {
    console.log(form);

    if (!form.valid) {
      this.presentToast("Email ou senha incorretos!");

    } else {
      this.showLoading();

      let user = new LoginModel(form.value);
      user.id = "5b9e62beb8f2cbd10382c74d";

      this.authService.login(user)
        .pipe(take(1))
        .subscribe((dados) => {
          this.loading.dismiss();
          console.log(dados);
          this.goToHome();
        }, err => {
          this.loading.dismiss();
          if (err.status == 0) { this.presentToast("Erro no servidor"); }
          /* else {
            let erros = '';
            err.error.forEach(element => {
              erros += element + '\n';
            });
            this.presentToast(erros);
          }*/
        });
    }
  }

  goToHome() {
    this.navCtrl.setRoot('HomePage', null, {
      animate: true,
      direction: 'forward'
    });
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
