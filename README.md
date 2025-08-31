# 🌟 Portfólio Profissional #

## 📖 Descrição do Projeto ##

Este projeto consiste no desenvolvimento de um **website de portfólio profissional**, criado para apresentar de forma moderna, responsiva e acessível a trajetória, habilidades, projetos e formas de contato de seus desenvolvedores.

O site inclui as seguintes seções:

- **Sobre Mim** – Apresentação em português e inglês, destacando formação acadêmica, área de atuação, interesses e objetivos profissionais.

- **Projetos** – Linha do tempo interativa de projetos, com nome, descrição, tecnologias utilizadas, links para repositórios e imagens/GIFs demonstrativos.

- **Experiências** – Registro de experiências profissionais, estágios, trabalhos e participação em eventos ou projetos relevantes.

- **Contato** – Ícones clicáveis para redes sociais e formulário funcional para envio de mensagens por e-mail.

## 👥 Desenvolvedores ##

Fernanda Soares

Gabriel Reis

Olavo Vales


## 🛠️ Tecnologias Utilizadas ##

**Back-end**: Asp.NET 

**Front-end**: Angular

**Design e prototipagem**: Figma

**Controle de versão**: GitHub e Git

## 📂 Estrutura Inicial do Site ##

Organização de pastas, componentes e módulos do Angular, integração com back-end.

## 🎨 Protótipos e Telas ##

Protótipos desenvolvidos no Figma, mostrando layout, responsividade e fluxo de navegação do usuário.

https://www.figma.com/design/ssPbqhfPPkHvpcmmEfnnLj/Portfolio-Projeto-1-Lab-Desenvolvimento-de-Software?node-id=0-1&t=IpJKXVAlB2iwBQSe-1

<img width="896" height="591" alt="image" src="https://github.com/user-attachments/assets/cde6a6e9-59ca-490e-84e3-aa4ecb2c43e0" />


<img width="897" height="438" alt="image" src="https://github.com/user-attachments/assets/dd786003-2a02-4859-91d1-64aa329501a2" />


<img width="894" height="560" alt="image" src="https://github.com/user-attachments/assets/221edab0-1625-4f59-8056-753f6dd50e30" />


<img width="943" height="778" alt="image" src="https://github.com/user-attachments/assets/53649b92-53e9-4761-ab11-12b6864fc776" />


<img width="785" height="764" alt="image" src="https://github.com/user-attachments/assets/0b240350-ecfd-4708-8843-bef953b2cea8" />


<img width="796" height="779" alt="image" src="https://github.com/user-attachments/assets/8002e828-57ac-4e30-9b63-dccc526fb146" />

## Como Executar o Front-end da aplicação ##

Este passo a passo explica como **clonar, instalar e rodar** o projeto Angular no Windows usando o **VS Code** e o **Angular CLI**. Inclui também uma seção de **solução de problemas** com os erros mais comuns.

---

## ✅ Pré‑requisitos

* **Node.js** (recomendado: versão **LTS**) → [https://nodejs.org/](https://nodejs.org/)
* **npm** (vem junto com o Node.js)
* **Angular CLI** (instalação global)
* **Git** (para clonar o repositório) → [https://git-scm.com/](https://git-scm.com/)
* **VS Code** (opcional, mas recomendado) → [https://code.visualstudio.com/](https://code.visualstudio.com/)

> **Dica:** após instalar, confirme as versões no terminal (PowerShell):

```powershell
node -v
npm -v
ng version
```

---

## 🚀 Passo a passo (TL;DR)

1. **\[Windows/PowerShell] Habilitar execução de scripts (uma vez só):**

   * Abra o **PowerShell** como **Administrador** e rode:

   ```powershell
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
   ```

   * Confirme com **S** (Sim) quando solicitado.

2. **Clonar o repositório:**

```powershell
git clone https://github.com/<SEU_USUARIO>/<SEU_REPOSITORIO>.git
cd <SEU_REPOSITORIO>
```

3. **Instalar dependências:**

```powershell
npm install
```

4. **Rodar o servidor de desenvolvimento:**

```powershell
ng serve --open
```

> O projeto abrirá em `http://localhost:4200/`.

5. **Abrir no VS Code (opcional):**

```powershell
code .
```

---

## 📦 Scripts úteis

> Os comandos abaixo usam o **Angular CLI**. Execute dentro da pasta do projeto.

* **Servir em modo dev:**

```powershell
ng serve
# ou especifique outra porta
ng serve --port 4300
```

* **Build de produção:**

```powershell
ng build --configuration production
```

* **Rodar testes (se configurados):**

```powershell
ng test
```

---

## 🧭 Estrutura esperada do projeto (resumo)

```
<SEU_REPOSITORIO>/
├─ angular.json        # configurações do workspace Angular
├─ package.json        # dependências e scripts npm
├─ src/                # código-fonte da aplicação
└─ ...
```

---

## 🛠️ Solução de problemas (FAQ)

### 1) **PowerShell bloqueando o comando `ng`**

**Erro:**

```
ng : O arquivo ... ng.ps1 não pode ser carregado porque a execução de scripts foi desabilitada neste sistema.
```

**Causa:** política de execução do PowerShell.
**Como resolver:**

```powershell
# Execute UMA VEZ no PowerShell como Administrador
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Feche e reabra o terminal.

---

### 2) **“This command is not available when running the Angular CLI outside a workspace.”**

**Causa:** você está fora da pasta do projeto (onde existe `angular.json`).
**Como resolver:**

```powershell
cd CAMINHO/DA/PASTA/DO/PROJETO
# confirme que existem angular.json e package.json
ng serve
```

---

### 3) **“Node packages may not be installed… Could not find '@angular/build\:dev-server'”**

**Causa:** dependências não instaladas.
**Como resolver:**

```powershell
npm install
ng serve
```

Se persistir, tente limpar e reinstalar:

```powershell
rmdir /s /q node_modules
Del package-lock.json
npm cache clean --force
npm install
ng serve
```

---

### 4) **`npm v` vs `npm -v`**

Para ver a versão do npm, use **`npm -v`** (com hífen).
`npm v` tenta buscar um pacote chamado `v` e pode gerar erro.

---

### 5) **Porta 4200 ocupada**

```powershell
ng serve --port 4300
```

---

### 6) **Pergunta do CLI: “Do you want to create a 'zoneless' application without zone.js (Developer Preview)? (y/N)”**

Se você busca **estabilidade** (recomendado), responda **N** (ou apenas **Enter**) para manter `zone.js` (modo padrão).

---

### 7) **Compatibilidade de versões (Node/Angular)**

* Prefira **Node LTS**.
* Se houver discrepâncias, instale a versão mais recente do CLI **localmente** no projeto e use via `npx`:

```powershell
npm i -D @angular/cli@latest
npx ng version
npx ng serve
```

---

## Como Executar o Back-end da aplicação ##

1. Instale o Visual Studio

<img width="1867" height="920" alt="{7EF7E6A6-3F95-4573-9326-62EDC6FF0784}" src="https://github.com/user-attachments/assets/59979500-adff-4925-b011-929755f35d8e" />

2. Instale as dependências de "ASP.NET e desenvolvimento Web"

<img width="1579" height="859" alt="{C6AB6199-FD18-4C1F-AF65-8172BF8EBD13}" src="https://github.com/user-attachments/assets/8f1d7a74-2491-47ea-8045-4f2aa88bd022" />

3. Com o git clone do projeto já feito anteriormente, abra a estrutura das pastas do projeto da seguinte forma:
   Portfolio-Projeto-1-Lab-Desenvolvimento-de-Software -> back -> PortfolioAPI -> Portfolio.sln

4. No canto superior, clique em https, para executar o projeto

<img width="1920" height="987" alt="{FB8DBA09-DADA-4E18-87D1-4A7CEE2333C7}" src="https://github.com/user-attachments/assets/c02b8c96-0d11-4d09-a1b4-60379c42accc" />

5. Abrirá o swagger da API, abra o POST, clique em try it out, edite o corpo da requisição, de forma que o campo email obrigatoriamente tenha um @ na string, após isso mande a requisição

<img width="1860" height="970" alt="{81C4CB17-E451-4B0A-A4DA-BBA85D4015EA}" src="https://github.com/user-attachments/assets/ce290dd5-4767-45c0-8020-aa1210bc6813" />
<img width="1857" height="926" alt="{05FC9B37-5228-49C3-A940-49984805B0FA}" src="https://github.com/user-attachments/assets/57a9cabf-aa96-45e0-b638-bec10dc37c8e" />
<img width="1863" height="921" alt="{64B69126-E317-4042-8BD3-006BB6AE00EC}" src="https://github.com/user-attachments/assets/8dda3c51-fcdc-4ed3-a53d-591c2cecd244" />
<img width="1859" height="918" alt="{2BA7DA1C-AE36-4350-8BB0-75DEE923512F}" src="https://github.com/user-attachments/assets/f1fb11e0-4ee5-49f6-9003-9eb05f0f95ad" />



