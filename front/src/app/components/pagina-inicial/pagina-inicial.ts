import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';
import { IExperiencias } from '../interface/IExperiencias.interface';

@Component({
  selector: 'app-pagina-inicial',
  imports: [RouterModule, Footer],
  templateUrl: './pagina-inicial.html',
  styleUrls: ['./pagina-inicial.css', '../navbar.css']
})

export class PaginaInicial implements AfterViewInit {

  public arrayExperiencias = signal<IExperiencias[]>([
    {
    summary: {
        strong: 'Estagiária em engenharia de requisitos',
        p: ' | maio 2025 - maio 2027',
      },
      text: "atuo como estagiária em Engenharia de Software, com foco em levantamento e análise de requisitos, documentação técnica e melhoria de processos. Minhas atividades envolvem: Produção de documentos com base em requisitos coletados junto aos usuários e stakeholders; Levantamento, análise e priorização de requisitos funcionais e não funcionais, garantindo clareza e alinhamento com as necessidades do negócio; Proposição de melhorias em processos internos, visando aumentar a eficiência e reduzir gargalos; Desenvolvimento de sistemas utilizando a plataforma Bubble.io, aplicando conceitos de low-code/no-code para criar soluções ágeis e escaláveis.Essa experiência tem me permitido unir práticas de engenharia de requisitos com desenvolvimento de software, além de fortalecer minhas habilidades de comunicação, organização e visão crítica para propor soluções tecnológicas que agregam valor ao negócio.",
     },
    {
      summary: {
        strong: 'Projeto Elas++ | ',
        p: 'fevereiro 2024 - dezembro 2025',
      },
      text: "Organizo e ministro workshops para alunas do ensino médio, incentivando o interesse em tecnologia. Desenvolvo materiais didáticos e estratégias de engajamento. Trabalho diretamente no planejamento e execução de eventos educacionais. Produzi um artigo científico que foi publicado: https://sol.sbc.org.br/index.php/wit/article/view/36013",
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