import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, AlertController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export interface PageInterface {
  title: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';
  pages: Array<PageInterface> = [
    { title: 'Home', component: 'HomePage', icon: 'ios-home-outline' },
    { title: 'Autores', component: 'AutoresPage', icon: 'ios-list-box-outline' }
  ];

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public app: App,
    private alertCtrl: AlertController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }


  isActive(page: PageInterface) {
    if (this.nav.getActive() && this.nav.getActive().name === page.component.name) {
      return 'primary';
    }
    return;
  }

  logout() {
    let alertPopup = this.alertCtrl.create({
      title: 'Sair',
      message: 'Tem certeza? ',
      buttons: [{
        text: 'Não',
        handler: () => { }
      },
      {
        text: 'Sim',
        handler: () => {
          setTimeout(() => this.backToLogin(), 100);
        }
      }]
    });
    alertPopup.present();
  }

  backToLogin() {
    const root = this.app.getRootNavs()[0];
    root.setRoot('LoginPage');
  }
}

