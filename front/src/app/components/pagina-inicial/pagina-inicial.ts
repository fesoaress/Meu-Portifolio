// pagina-inicial.ts
import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';

interface IExperiencias {
  summary: {
    strong: string;
    p: string;
  };
  text: string;
}

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [RouterModule, Footer],
  templateUrl: './pagina-inicial.html',
  styleUrls: ['./pagina-inicial.css']
})
export class PaginaInicial implements AfterViewInit {

  public arrayExperiencias = signal<IExperiencias[]>([
    {
      summary: {
        strong: 'Estagiária em engenharia de requisitos',
        p: ' | maio 2025 - maio 2027',
      },
      text: `Atuo como estagiária em <strong>Engenharia de Software</strong>, com foco em:
        <ul>
          <li>Levantamento e análise de requisitos;</li>
          <li>Documentação técnica clara e objetiva;</li>
          <li>Proposição de melhorias em processos internos;</li>
          <li>Desenvolvimento de soluções em <strong>Bubble.io</strong>, aplicando low-code/no-code.</li>
        </ul>
        Essa experiência tem me permitido unir práticas de engenharia de requisitos com
        desenvolvimento de software, além de fortalecer minhas habilidades de comunicação,
        organização e visão crítica para propor soluções tecnológicas que agregam valor ao negócio.`,
    },
    {
      summary: {
        strong: 'Projeto Elas++ | ',
        p: 'fevereiro 2024 - dezembro 2025',
      },
      text: `Organizo e ministro workshops para alunas do ensino médio, incentivando o interesse em
        <strong>tecnologia</strong>. Desenvolvo materiais didáticos e estratégias de engajamento,
        além de atuar no planejamento e execução de eventos educacionais.<br><br>
        Produzi um artigo científico que foi publicado: 
        <a href="https://sol.sbc.org.br/index.php/wit/article/view/36013" target="_blank">clique aqui</a>.`,
    }
  ]);

  constructor() {}

  ngAfterViewInit(): void {
    const detailsElements = document.querySelectorAll<HTMLDetailsElement>('.experiencias details');
    detailsElements.forEach(det => {
      det.addEventListener('toggle', () => {
        if (det.open) {
          setTimeout(() => {
            det.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 200);
        }
      });
    });
  }
}