import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';
import { IExperiencias } from '../interface/IExperiencias.interface';

@Component({
  selector: 'app-experiencias',
  imports: [RouterModule, Footer],
  templateUrl: './experiencias.html',
  styleUrls: ['./experiencias.css', '../navbar.css']
})
export class Experiencias implements AfterViewInit {

  public arrayExperiencias = signal<IExperiencias[]>([
    {
      summary: {
        strong: 'Estagiária em Engenharia de Requisitos',
        p: 'Superus Engenharia | maio 2025 - maio 2027',
      },
      text: `
        Atuo como estagiária em <strong>Engenharia de Software</strong>, com foco em:
        <ul>
          <li>Levantamento e análise de requisitos;</li>
          <li>Documentação técnica clara e objetiva;</li>
          <li>Proposição de melhorias em processos internos;</li>
          <li>Desenvolvimento de soluções em <strong>Bubble.io</strong>, aplicando low-code/no-code.</li>
        </ul>
        Essa experiência tem me permitido unir práticas de engenharia de requisitos com
        desenvolvimento de software, além de fortalecer minhas habilidades de comunicação,
        organização e visão crítica para propor soluções tecnológicas que agregam valor ao negócio.
      `,
    },
    {
      summary: {
        strong: 'Projeto de Extensão',
        p: 'PROJETO ELAS++ | fevereiro 2024 - dezembro 2025',
      },
      text: `
        Organizo e ministro workshops para alunas do ensino médio, incentivando o interesse em
        <strong>tecnologia</strong>. Desenvolvo materiais didáticos e estratégias de engajamento,
        além de atuar no planejamento e execução de eventos educacionais.<br><br>
        Produzi um artigo científico publicado: 
        <a href="https://sol.sbc.org.br/index.php/wit/article/view/36013" target="_blank">clique aqui</a>.
      `,
    },
    {
      summary: {
        strong: 'Projeto de Extensão',
        p: 'Health Med | março 2025 - dezembro 2025',
      },
      text: "No projeto Helth Med, desenvolvido na PUC Minas, aplicamos técnicas de inteligência artificial e algoritmos avançados para prever a ocorrência de sepse em pacientes. Nosso objetivo é auxiliar profissionais de saúde na identificação precoce dessa condição crítica, aumentando a chance de intervenção rápida e salvando vidas. <br><br>O projeto envolve desde a análise de dados clínicos, identificação de padrões relevantes, até o desenvolvimento de modelos preditivos baseados em aprendizado de máquina. <br> <br>Trabalhamos com diferentes tipos de algoritmos para avaliar a sensibilidade e eficácia de cada abordagem, garantindo resultados confiáveis e interpretáveis para o ambiente hospitalar. Além disso, o Helth Med explora o potencial da tecnologia para transformar a prática médica, combinando ciência de dados, engenharia de software e conhecimento em saúde para entregar uma solução inovadora e prática.",
    },
    {
      summary: {
        strong: 'Projeto de Pesquisa',
        p: 'Produtividade em Equipes de Engenharia de Software | agosto 2024 - fevereiro 2025',
      },
      text: `
        Participei ativamente de um grupo de estudos dedicado a investigar <strong>como relações interpessoais e práticas de trabalho impactam a produtividade em equipes de desenvolvimento de software</strong>. Minha atuação envolveu a análise crítica e sistemática de artigos científicos, identificando insights relevantes sobre comunicação, colaboração e dinâmicas de equipe. Além disso, desempenhei papel central na elaboração de um artigo científico, consolidando os resultados do estudo e destacando as melhores práticas observadas.
        <br><br>Essa experiência não apenas ampliou meu entendimento sobre gestão de equipes e produtividade, mas também fortaleceu minhas competências em pesquisa, análise crítica, comunicação científica e aplicação prática de metodologias ágeis em contextos reais de desenvolvimento de software.
      `,
    }
  ]);

  ngAfterViewInit(): void {
    const detailsElements = document.querySelectorAll<HTMLDetailsElement>('.experiencias details');
    detailsElements.forEach(det => {
      det.addEventListener('toggle', () => {
        if (det.open) {
          setTimeout(() => {
            det.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 200);
        }
      });
    });
  }
}
