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
      imagem: 'https://previews.dropbox.com/p/thumb/ACuFBO0dKPFswaTZaNsYAjLr3fo3QSEPcIJVAvL2uz6yBKAGujKU4iuZ78MjhB5LcO-eU6sryS51cFF7lSsxNHXdyf5KfO__JeDKsIhfFZe_Zl21CgAHNXg_SbngoYggiBlTcIIZZgwcNAbgQ0Grii8QFJGbnDc7ynRAe6894Cd9vUwo8iSpbPNRidDJJ2_uv5MMokQvnVhC4joTOD1vsY6msMSx8bLck2C4hvaEnuSOtBM06TaE0AqZyCGiZ5Mp1veR0N_hufDMeT4Ii9CF3F8ODL0rrDpdyUO8OJiTcJ2QYuPqqBsBKIlH5MV6IXJAwLw/p.png'
    },
    {
      titulo: 'Reserva de Salas',
      descricao: `Aplicativo no Power Apps integrado ao Microsoft Teams e Outlook Calendar.
      Permite reservas rápidas de salas, evitando conflitos e enviando notificações automáticas.`,
      imagem: 'https://previews.dropbox.com/p/thumb/ACsgSe3Nuxm2vW0jarpUjcJ47EQwZkTIRqpH2qC-_9TjP9nuL0COX9t3Gxtx0pXondgwhmMflcH7myZVtlmA1TTMxnsjhd2pADtrVLuLjb6jaCfzt68pmrBdw9zCUDoqiPe9Rf0XD8tN1dLMv0HZNMvvvgON_2_c6P14IbsQaYCMlvLHdc-k6Axn6dfS9f99UmG5J6uOFM0SMi_B0VgGUwuLAN6DJmlWYSeWk-A6pYnsrh7ilOmfkiQRevT4sDH89Oo78wqFnkw4uZcd-PykaksiVmY-zMoDBfP93l7REoiryV3bkHYGLiYHY4WLxv6s2KISIYaZ7CjzooaXgYQCYYM-/p.png'
    },
    {
      titulo: 'Help Desk',
      descricao: `Aplicativo em Power Apps para registro e acompanhamento de chamados técnicos.
      Suporte a tickets com prioridade, categorização e dashboards interativos para análise.`,
      imagem: 'https://previews.dropbox.com/p/thumb/ACtySRTtuy7E0F2HaFZYWOla_bs-bws3z5OygfsXI3C7OaEhptcYlLexzNsYGfHuZotXZGklcB9k8HznClDmsbHwZ-51LzabAflYfPiN8qqYNO_wjp7uFPOLnGF70X2kf0FuK6D8I3kLQofEhgYhh39yDFRYZVeLo2AjpnvRSqUSzp1mnjlrm2nPXA49TVu-aQ-6kzAS8g_0n2EM2H6dOUvKJNjnNOvDs0-aLrgJ_xc4F9iXdUHlBEEXd-qruu0liqet2ziheCIx_2bikDtzHsCCO2q-LwvXKf83UxQ0zuGkKCb455wenM5v5kTLl3RN-uG-DHrTRSfQ4Bx71dtBUdPk/p.png'
    },
    {
      titulo: 'APPTITE',
      descricao: `Aplicativo desenvolvido no Trabalho Interdisciplinar 2 para busca e filtro de restaurantes.
      Inclui filtros de culinária, preço, localização e avaliações, com foco em usabilidade.`,
      imagem: 'https://previews.dropbox.com/p/thumb/ACuoVcrR_pOEWM-BUQ1K4n4N2rF46uBlEJrOI2v3NHNhjHmfCWi6uouj8IDji4JRbqFk0dehkHTd7wuIWU3AuZsEwwEgD1T0eogPR1rLPwwp4rYtQQR8VWKlINJDPCQ7bB2NuEp6elt3El7outmsHBACkhqZHT71p90zPBK5dAppjT9_T1Q_ur_1xsxS6MQ1Ld0U1rwJjUa_DFgqm9cHHQcQ-seZnJUlPwUoMrjH4x0HH4LV8ExqasWPcPQ_fcdqY2YcqaiUfpx0UW7Yw4-znrRl9sEGacRNGhoXLS6zpCfXCg5gypKHcy09B5Va7ZaYuKMvrhKOQ55dIZbettQDV2-Q/p.png'
    }
  ];
}
