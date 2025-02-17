# Projeto Vue.js com API Backend

Este projeto consiste em uma aplicação desenvolvida com Vue.js no frontend e uma API backend. Ele permite a gestão de funcionários, incluindo cadastro, edição, remoção e pesquisa.

## 📌 Requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão recomendada: 18+)
- [Vue.js](https://vuejs.org/) (utilizando Vue 3)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🚀 Instalação e Configuração

### 1️⃣ Clone o repositório
```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
```

### 2️⃣ Instale as dependências
```bash
   npm install
   # ou
   yarn install
```

### 3️⃣ Configuração do ambiente
Crie um arquivo `.env` na raiz do projeto e adicione a seguinte variável:

```env
VITE_API_URL="http://localhost:3333"
```

Isso define a URL base da API backend. Caso a API esteja rodando em outro local, atualize esse valor.

### 4️⃣ Executando o Projeto

Inicie o frontend:
```bash
   npm run dev
   # ou
   yarn dev
```

A aplicação estará disponível em `http://localhost:5173/` (ou outra porta definida pelo Vite).

## 🔧 Backend (API)

Certifique-se de que o backend está rodando antes de iniciar o frontend. Caso esteja utilizando um backend em Node.js com Express e Prisma, siga os passos abaixo:

1. Acesse o diretório do backend:
   ```bash
   cd backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```
3. Configure o banco de dados (se necessário):
   ```bash
   npx prisma migrate dev --name init
   ```
4. Inicie o servidor:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

O backend rodará na porta `3333`, conforme definido na variável de ambiente.

## 🛠️ Estrutura do Projeto

```bash
📂 seu-projeto
├── 📂 src
│   ├── 📂 components
│   │   ├── 📂 AddFunc
│   │   ├── 📂 EditFunc
│   │   ├── 📂 RemoveFunc
│   │   ├── 📂 ListFunc
│   │   └── main.vue
│   ├── 📂 assets
│   ├── 📂 services
│   ├── 📂 views
│   ├── App.vue
│   ├── main.js
│   └── router.js
├── 📂 backend (caso esteja junto no mesmo repositório)
├── .env
├── package.json
├── vite.config.js
└── README.md
```

## 📄 Rotas do Sistema

- `/` → Página principal
- `/cadastrar` → Cadastro de funcionários
- `/editar/:id` → Edição de funcionários
- `/excluir/:id` → Remoção de funcionários

## 📢 Contribuição

Se quiser contribuir para este projeto, siga os seguintes passos:

1. Faça um fork do repositório.
2. Crie uma nova branch (`git checkout -b minha-feature`).
3. Commit suas mudanças (`git commit -m 'Adicionei minha nova feature'`).
4. Envie para o repositório (`git push origin minha-feature`).
5. Abra um Pull Request!

---

Caso tenha dúvidas ou precise de suporte, entre em contato! 🚀

---
---
---

# TesteDassVue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
