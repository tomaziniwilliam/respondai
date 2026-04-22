# 💬 Sistema Respondai.

Aplicação web desenvolvida com Node.js que permite criar perguntas e responder perguntas existentes, inspirado no estilo do Yahoo Respostas.

## 🚀 Tecnologias utilizadas

* Node.js
* Express
* EJS (Template Engine)
* body-parser
* MySQL
* Sequelize (ORM)

* ## 📌 Funcionalidades

* 📄 Listagem de perguntas
* ❓ Criação de novas perguntas
* 🔍 Visualização de uma pergunta específica
* 💬 Envio de respostas
* 📚 Exibição de respostas relacionadas à pergunta

* ## 🛠️ Funcionalidades futuras

* 🔐 Sistema de autenticação (login e cadastro)
* 👍 Sistema de votos
* 🧑‍💻 Perfil de usuário
* ✏️ Edição e exclusão de perguntas/respostas
* 🔔 Notificações

---

## ⚙️ Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/respondai.git
```

### 2. Acesse a pasta do projeto

```bash
cd respondai
```

### 3. Instale as dependências

```bash
npm install
```

---

## 📦 Dependências

```json
"dependencies": {
  "body-parser": "^2.2.2",
  "ejs": "^5.0.1",
  "express": "^5.2.1",
  "mysql2": "^3.22.1",
  "sequelize": "^6.37.8"
}
```

---

## 🗄️ Configuração do banco de dados

Edite o arquivo `database.js` com suas credenciais:

```javascript
const Sequelize = require('sequelize');

const connection = new Sequelize('nome_do_banco', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;
```

---

## ▶️ Executando o projeto

```bash
node index.js
```

A aplicação estará disponível em:

```
http://localhost:3000
```

---
## 🌐 Rotas principais

| Método | Rota            | Descrição                  |
| ------ | --------------- | -------------------------- |
| GET    | /               | Lista todas as perguntas   |
| GET    | /perguntar      | Página para criar pergunta |
| POST   | /salvarpergunta | Salva uma nova pergunta    |
| GET    | /pergunta/:id   | Exibe pergunta específica  |
| POST   | /responder      | Salva uma resposta         |

---

## 🖥️ Páginas

* 🏠 Página inicial → lista de perguntas
* ❓ Página de pergunta → realizar pergunta
* ✍️ Página de resposta → formulário para responder
  
## 📄 Licença

Este projeto está sob a licença MIT.

---

## 👨‍💻 Autor

William Tomazini
