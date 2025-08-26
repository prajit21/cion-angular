import { Component, inject } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { NavservicesService } from '../../../../shared/services/nav/navservices.service';

interface selectedLanguage {
  language?: string;
  code: string;
  type?: string;
  icon?: string;
}

@Component({
  selector: 'app-language',
  imports: [],
  providers: [TranslateService],
  templateUrl: './language.html',
  styleUrls: ['./language.scss'],
})
export class Language {
  public language: boolean = false;

  public languages: selectedLanguage[] = [
    {
      language: 'English',
      code: 'en',
      type: 'US',
      icon: 'us',
    },
    {
      language: 'Español',
      code: 'es',
      icon: 'es',
    },
    {
      language: 'Français',
      code: 'fr',
      icon: 'fr',
    },
    {
      language: 'Português',
      code: 'pt',
      type: 'BR',
      icon: 'pt',
    },
  ];

  public selectedLanguage: selectedLanguage = {
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us',
  };

  public navServices: NavservicesService = inject(NavservicesService);
  private translate: TranslateService = inject(TranslateService);

  constructor() {}

  changeLanguage(lang: selectedLanguage) {
    this.translate.use(lang.code);
    this.selectedLanguage = lang;
  }
}
