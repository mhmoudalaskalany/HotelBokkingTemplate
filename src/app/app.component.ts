import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  menus: any = [];
  selectedMenu: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    console.log('hi at home');
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translate.setDefaultLang('en');

      this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        this.translate.setDefaultLang(event.lang);
        this.menus = event.translations.MENUS;
      });


      this.translate.get(['MENUS']).subscribe((data) => {
        this.menus = data.MENUS;
      })
    });
  }

  signout() {
    this.router.navigate(['/signin']);
  }
}
