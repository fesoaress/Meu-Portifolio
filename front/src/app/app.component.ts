import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
    RouterOutlet, 
    HttpClientModule, 
    TranslateModule
  ],
})
export class AppComponent {
  currentLang: 'pt' | 'en' = 'pt';

  constructor(
    private translate: TranslateService
  ) {
    // Configura as linguagens disponíveis
    translate.addLangs(['pt', 'en']);
    translate.setDefaultLang('pt');
    
    // Verifica se há um idioma salvo
    const savedLang = localStorage.getItem('selectedLanguage') as 'pt' | 'en';
    if (savedLang && translate.getLangs().includes(savedLang)) {
      this.currentLang = savedLang;
      translate.use(savedLang);
    } else {
      translate.use('pt');
    }
  }

  switchLanguage() {
    this.currentLang = this.currentLang === 'pt' ? 'en' : 'pt';
    this.translate.use(this.currentLang);
    localStorage.setItem('selectedLanguage', this.currentLang);
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/files/curriculo.pdf';
    link.download = 'Curriculo_Fernanda.pdf';
    link.click();
  }
}