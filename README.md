# 🎬 MyAPI - API REST com Node.js, TypeScript, Prisma e MySQL

Uma API RESTful simples e bem estruturada construída com **Node.js**, **TypeScript**, **Express**, **Prisma ORM** e **MySQL**. Esta API fornece funcionalidade completa de CRUD para gerenciar usuários e filmes.

---

## 📁 Estrutura do Projeto

```
├── prisma/
│   └── schema.prisma         # Esquema do Prisma com modelos e configuração do banco
├── src/
│   ├── controllers/          # Controladores de usuários e filmes
│   ├── helpers/              # Helper do cliente Prisma
│   ├── router/               # Arquivo de rotas do Express
│   └── server.ts             # Ponto de entrada da aplicação
├── .env                      # Variáveis de ambiente (credenciais do banco)
├── package.json              # Metadados e dependências do projeto
├── tsconfig.json             # Configurações do compilador TypeScript
└── README.md                 # Documentação do projeto
```

---

## 🚀 Funcionalidades

- 📦 API RESTful com CRUD completo
- 🧠 Acesso ao banco com segurança de tipos usando Prisma
- 🔒 Segurança básica com Helmet
- 🌐 CORS habilitado
- 🛠 Desenvolvimento local fácil com TypeScript

---

## ⚙️ Requisitos

- Node.js (v18 ou mais recente)
- npm
- Banco de dados MySQL (local ou remoto)

---

## 🧪 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/LUKKA0101/Tela-infinita.git
cd myapi
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie uma Cópia do arquivo `.env.example` na raiz do projeto

### 4. Execute as migrações

```bash
npx prisma migrate dev --name init
```

> Isso criará suas tabelas no banco de dados.

### 5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

---

## 📡 Endpoints da API

### 🔹 Usuários

| Método | Rota         | Descrição        |
|--------|--------------|------------------|
| GET    | `/user`      | Lista usuários   |
| POST   | `/user`      | Cria novo usuário|
| PUT    | `/user/:id`  | Atualiza usuário |
| DELETE | `/user/:id`  | Deleta usuário   |

### 🔹 Filmes

| Método | Rota          | Descrição        |
|--------|---------------|------------------|
| GET    | `/movie`      | Lista filmes     |
| POST   | `/movie`      | Cria novo filme  |
| PUT    | `/movie/:id`  | Atualiza filme   |
| DELETE | `/movie/:id`  | Deleta filme     |

---

## 🧰 Scripts

```bash
npm run dev     # Inicia o servidor de desenvolvimento
```

---

## 🖥 Tecnologias Usadas

- Node.js
- Express.js
- Prisma ORM
- MySQL
- TypeScript
- Helmet
- CORS

---

## 🧠 Dicas Extras

- Use `npx prisma studio` para visualizar seu banco de dados.
- Nunca envie o `.env` ou a pasta `node_modules/` para o Git.

---

## 📄 Licença

Licença MIT – Sinta-se livre para usar e modificar.

---

# 🎬 MyAPI - RESTful API with Node.js, TypeScript, Prisma & MySQL

A simple and well-structured RESTful API built with **Node.js**, **TypeScript**, **Express**, **Prisma ORM**, and **MySQL**. This API provides full CRUD functionality for managing users and movies.

---

## 📁 Project Structure

```
├── prisma/
│   └── schema.prisma         # Prisma schema with models and DB config
├── src/
│   ├── controllers/          # User and movie controllers
│   ├── helpers/              # Prisma client helper
│   ├── router/               # Express router
│   ├── public/               # Static files (HTML/CSS if needed)
│   └── server.ts             # Entry point of the application
├── .env                      # Environment variables (DB credentials)
├── package.json              # Project metadata and dependencies
├── tsconfig.json             # TypeScript compiler options
└── README.md                 # Project documentation
```

---

## 🚀 Features

- 📦 RESTful API with full CRUD
- 🧠 Type-safe DB access using Prisma
- 🔒 Helmet for basic security
- 🌐 CORS enabled
- 🛠 Easy local development with TypeScript

---

## ⚙️ Requirements

- Node.js (v18 or newer)
- npm
- MySQL database (local or remote)

---

## 🧪 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-user/myapi.git
cd myapi
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a copy of the `.env.example` file in the project root

### 4. Run migrations

```bash
npx prisma migrate dev --name init
```

> This will create your tables in the database.

### 5. Start the development server

```bash
npm run dev
```

---

## 📡 API Endpoints

### 🔹 Users

| Method | Route         | Description      |
|--------|---------------|------------------|
| GET    | `/user`       | List all users   |
| POST   | `/user`       | Create new user  |
| PUT    | `/user/:id`   | Update a user    |
| DELETE | `/user/:id`   | Delete a user    |

### 🔹 Movies

| Method | Route         | Description       |
|--------|---------------|-------------------|
| GET    | `/movie`      | List all movies   |
| POST   | `/movie`      | Create new movie  |
| PUT    | `/movie/:id`  | Update a movie    |
| DELETE | `/movie/:id`  | Delete a movie    |

---

## 🧰 Scripts

```bash
npm run dev     # Start development server
```

---

## 🖥 Tools Used

- Node.js
- Express.js
- Prisma ORM
- MySQL
- TypeScript
- Helmet
- CORS

---

## 🧠 Extra Tips

- Use `npx prisma studio` to visually explore your DB.
- Do **not** commit your `.env` or `node_modules/` folder.

---

## 📄 License

MIT License – Feel free to use and modify as needed.