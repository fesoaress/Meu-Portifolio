import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';
import { CommonModule } from '@angular/common';
imports: [RouterModule, CommonModule, Footer]


interface Projeto {
  titulo: string;
  descricao: string;
  imagem: string;
}

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [RouterModule, CommonModule, Footer], // ⬅️ ADICIONA O CommonModule
  templateUrl: './projetos.html',
  styleUrls: ['./projetos.css', '../navbar.css']
})

export class Projetos {
  projetos: Projeto[] = [
    {
      titulo: 'Banco de Currículos (em andamento)',
      descricao: `Desenvolvi, na plataforma Bubble.io, um sistema de gestão de currículos voltado para diretores e gestores da empresa.
      O aplicativo permite cadastro e armazenamento centralizado de currículos, com busca e filtros avançados, organização por área de atuação e nível de experiência.`,
      imagem: 'https://github.com/fesoaress/Portifolio-Fernanda-Soares/blob/main/bancodecurriculos.png?raw=true'
    },
    {
      titulo: 'Reserva de Salas',
      descricao: `Aplicativo no Power Apps integrado ao Microsoft Teams e Outlook Calendar.
      Permite reservas rápidas de salas, evitando conflitos e enviando notificações automáticas.`,
      imagem: 'https://github.com/fesoaress/Portifolio-Fernanda-Soares/blob/main/powerapps-salas.png?raw=true'
    },
    {
      titulo: 'Help Desk',
      descricao: `Aplicativo em Power Apps para registro e acompanhamento de chamados técnicos.
      Suporte a tickets com prioridade, categorização e dashboards interativos para análise.`,
      imagem: 'https://github.com/fesoaress/Portifolio-Fernanda-Soares/blob/main/helpdesk.png?raw=true'
    },
    {
      titulo: 'APPTITE',
      descricao: `Aplicativo desenvolvido no Trabalho Interdisciplinar 2 para busca e filtro de restaurantes.
      Inclui filtros de culinária, preço, localização e avaliações, com foco em usabilidade.`,
      imagem: 'https://github.com/fesoaress/Portifolio-Fernanda-Soares/blob/main/apptite.png?raw=true'
    }
  ];
}
