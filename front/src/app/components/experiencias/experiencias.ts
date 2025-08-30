import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';
import { IExperiencias } from '../interface/IExperiencias.interface';

@Component({
  selector: 'app-pagina-inicial',
  imports: [RouterModule, Footer],
  templateUrl: './experiencias.html',
  styleUrls: ['./experiencias.css', '../navbar.css']

})
export class Experiencias implements AfterViewInit {

  public arrayExperiencias = signal<IExperiencias[]>([
    {
      summary: {
        strong: 'Estagiária em engenharia de requisitos',
        p: 'Superus Engenharia | maio 2025 - maio 2027',
      },
      text: "atuo como estagiária em Engenharia de Software, com foco em levantamento e análise de requisitos, documentação técnica e melhoria de processos. Minhas atividades envolvem: Produção de documentos com base em requisitos coletados junto aos usuários e stakeholders; Levantamento, análise e priorização de requisitos funcionais e não funcionais, garantindo clareza e alinhamento com as necessidades do negócio; Proposição de melhorias em processos internos, visando aumentar a eficiência e reduzir gargalos; Desenvolvimento de sistemas utilizando a plataforma Bubble.io, aplicando conceitos de low-code/no-code para criar soluções ágeis e escaláveis.Essa experiência tem me permitido unir práticas de engenharia de requisitos com desenvolvimento de software, além de fortalecer minhas habilidades de comunicação, organização e visão crítica para propor soluções tecnológicas que agregam valor ao negócio.",
    },
    {
      summary: {
        strong: 'Projeto de Extensão',
        p: 'PROJETO ELAS++ | fevereiro 2024 - dezembro 2025',
      },
      text: "Organizo e ministro workshops para alunas do ensino médio, incentivando o interesse em tecnologia. Desenvolvo materiais didáticos e estratégias de engajamento. Trabalho diretamente no planejamento e execução de eventos educacionais. Produzi um artigo científico que foi publicado: https://sol.sbc.org.br/index.php/wit/article/view/36013",
    },
        {
      summary: {
        strong: 'Projeto de Extensão',
        p: 'Helth Med | março 2025 - dezembro 2025',
      },
      text: "COLOQUE AQUI UMA BREVE DESCRIÇÃO DA SUA EXPERIÊNCIA",
    },
    {
      summary: {
        strong: 'Projeto de Pesquisa',
        p: 'Produtividade em Equipes de Engenharia de Software | agosto 2024 - fevereiro 2025',
      },
      text: "Participei de grupo de estudos focado em relações interpessoais e produtividade em equipes de engenharia de software. Analisei artigos científicos e discuti metodologias para melhoria de processos e ferramentas ágeis. Produzi um artigo científico como resultado do projeto.",
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