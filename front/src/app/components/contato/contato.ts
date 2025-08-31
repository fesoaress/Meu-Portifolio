import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com'; 

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [RouterModule, Footer, FormsModule, CommonModule],
  templateUrl: './contato.html',
  styleUrls: ['./contato.css']
})
export class Contato {
  // Dados do formulário
  formData = {
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  };

  // Estados do formulário
  isLoading = false;
  isSent = false;
  errorMessage = '';
  showEmailOptions = false;

  // Configurações do EmailJS
  private serviceID = 'service_3zlpoz8';
  private templateID = 'template_f9jo1lo';
  private publicKey = 'IfCe09wPWGD3Pz93u';

  constructor(private cdRef: ChangeDetectorRef) {
    // Inicializar EmailJS de forma segura
    try {
      emailjs.init(this.publicKey);
      console.log('EmailJS inicializado com sucesso');
    } catch (error) {
      console.error('Erro ao inicializar EmailJS:', error);
    }
  }

  async onSubmit() {
    console.log('Iniciando envio do formulário...');
    
    // Validar formulário
    if (!this.validateForm()) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.isSent = false;
    
    // Forçar detecção de mudanças
    this.cdRef.detectChanges();

    try {
      // Preparar parâmetros para o template
      const templateParams = {
        from_name: this.formData.nome,
        from_email: this.formData.email,
        subject: this.formData.assunto,
        message: this.formData.mensagem,
        reply_to: this.formData.email
      };

      console.log('Parâmetros do template:', templateParams);
      console.log('Service ID:', this.serviceID);
      console.log('Template ID:', this.templateID);

      // Enviar email usando EmailJS
      const response = await emailjs.send(
        this.serviceID, 
        this.templateID, 
        templateParams
      );

      console.log('Email enviado com sucesso!', response);
      
      // MOSTRAR MENSAGEM DE SUCESSO
      this.isSent = true;
      this.isLoading = false;
      this.resetForm();
      
      // Forçar atualização da visualização
      this.cdRef.detectChanges();
      
      console.log('Mensagem de sucesso deve estar visível');
      
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      this.isLoading = false;
      
      // Mensagem de erro mais específica
      if (error instanceof Error) {
        this.errorMessage = `Erro ao enviar: ${error.message}`;
      } else {
        this.errorMessage = 'Erro ao enviar mensagem. Verifique sua conexão e tente novamente.';
      }
      
      // Forçar atualização da visualização
      this.cdRef.detectChanges();
      
      console.log('Mensagem de erro definida:', this.errorMessage);
    }
  }

  validateForm(): boolean {
    this.errorMessage = '';
    
    if (!this.formData.nome || !this.formData.email || 
        !this.formData.assunto || !this.formData.mensagem) {
      this.errorMessage = 'Por favor, preencha todos os campos.';
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      this.errorMessage = 'Por favor, insira um email válido.';
      return false;
    }

    return true;
  }

  resetForm() {
    this.formData = {
      nome: '',
      email: '',
      assunto: '',
      mensagem: ''
    };
  }

  // Métodos para o modal de email
  openEmailOptions() {
    this.showEmailOptions = true;
    this.cdRef.detectChanges();
  }

  closeEmailOptions() {
    this.showEmailOptions = false;
    this.cdRef.detectChanges();
  }

  copyEmailToClipboard() {
    navigator.clipboard.writeText('fefesoares16@gmail.com')
      .then(() => {
        alert('Email copiado para a área de transferência!');
        this.closeEmailOptions();
      })
      .catch(err => {
        console.error('Falha ao copiar email: ', err);
        alert('Não foi possível copiar o email. Tente manualmente: fefesoares16@gmail.com');
        this.closeEmailOptions();
      });
  }

  openGmail() {
    const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=fefesoares16@gmail.com&su=Contato através do Portfólio';
    window.open(gmailUrl, '_blank');
    this.closeEmailOptions();
  }

  openOutlook() {
    const outlookUrl = 'https://outlook.live.com/mail/0/deeplink/compose?to=fefesoares16@gmail.com&subject=Contato através do Portfólio';
    window.open(outlookUrl, '_blank');
    this.closeEmailOptions();
  }

  openDefaultEmail() {
    try {
      window.location.href = 'mailto:fefesoares16@gmail.com?subject=Contato através do Portfólio';
      this.closeEmailOptions();
    } catch (error) {
      console.error('Erro ao abrir cliente de email:', error);
      this.openGmail(); // Fallback para Gmail
    }
  }
}