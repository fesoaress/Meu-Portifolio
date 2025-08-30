import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';
import { IExperiencias } from '../interface/IExperiencias.interface';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-pagina-inicial',
  imports: [RouterModule, Footer, TranslateModule], // ← TranslateModule aqui
  templateUrl: './pagina-inicial.html',
  styleUrls: ['./pagina-inicial.css', '../navbar.css']
})
export class PaginaInicial implements AfterViewInit {

  
  public arrayExperiencias = signal<IExperiencias[]>([]);
  

  constructor(public translate: TranslateService) {} // ← TranslateService injetado

  toggleLanguage(): void {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    this.translate.use(newLang);
    localStorage.setItem('selectedLanguage', newLang);
  }

downloadCV(): void {
  const link = document.createElement('a');
  link.href = 'assets/files/curriculo.pdf';
  link.download = 'curriculo.pdf';
  link.click();
}

  ngAfterViewInit(): void {
    // ... seu código existente
  }
  
}
