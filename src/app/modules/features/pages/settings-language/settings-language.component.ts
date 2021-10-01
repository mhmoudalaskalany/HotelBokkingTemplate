/**
 * Language Settings Screen Component
 * @author    FlawlessThemes <flawlesstemplates@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   FlawlessThemes
 * 
 */

import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-settings-language',
  templateUrl: './settings-language.component.html',
  styleUrls: ['./settings-language.component.scss'],
})
export class SettingsLanguageComponent implements OnInit {

  languages: any;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.getLanguage();
  }

  getLanguage() {
    this.translate.get(['LANGUAGES']).subscribe((data: any) => {
      this.languages = data.LANGUAGES;
    });
  }


  changeLanguage(value) {
    this.translate.use(value.lngCode);

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translate.setDefaultLang(event.lang);
      this.languages = event.translations.LANGUAGES;
    });

    if (value.lngCode === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }
}
