# Helpinho Backend

Este é o backend do projeto Helpinho, uma plataforma onde pessoas podem ajudar e pedir ajuda. O backend é construído com Node.js, Express e MongoDB, e gerencia a autenticação de usuários e as operações CRUD para solicitações de ajuda.

## Requisitos

- Node.js
- MongoDB

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/helpinho-backend.git
    cd helpinho-backend
    ```

2. Instale as dependências:

    ```bash

    npm install
    ```

3. Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

```plaintext

PORT=3000
MONGODB_URI=mongodb://localhost:27017/helpinho
JWT_SECRET=your_jwt_secret
```
4. Inicie o servidor:

```bash

    npm start
```
    O servidor estará disponível em http://localhost:3000.

## Rotas
### Autenticação

- POST /api/users/register - Registro de usuário
- POST /api/users/login - Login de usuário

### Helpinhos

- POST /api/helps - Criação de helpinho (requer autenticação)
- GET /api/helps - Listagem de todos os helpinhos
- GET /api/helps/:id - Detalhes de um helpinho específico

## Estrutura do Projeto

```lua

helpinho-backend/
│
├── config/
│   └── aws.js
│
├── middleware/
│   └── auth.js
│
├── models/
│   ├── Help.js
│   └── User.js
│
├── routes/
│   ├── helps.js
│   └── users.js
│
├── uploads/
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```
## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- Bcrypt.js
- Multer

# Helpinho Frontend

Este é o frontend do projeto Helpinho, uma plataforma onde pessoas podem ajudar e pedir ajuda. O frontend é construído com Angular e Tailwind CSS.

## Requisitos

- Node.js
- Angular CLI

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/helpinho-frontend.git
   cd helpinho-frontend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:

```bash
    ng serve
```

O frontend estará disponível em http://localhost:4200.

## Estrutura do Projeto

```lua

helpinho-frontend/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── help-list/
│   │   │   ├── create-help/
│   │   │   ├── view-help/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   └── help.service.ts
│   │   ├── models/
│   │   │   ├── help.model.ts
│   │   │   └── user.model.ts
│   │   ├── guards/
│   │   │   └── auth.guard.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   │
│   ├── assets/
│   ├── environments/
│   ├── styles.css
│   └── index.html
│
├── .gitignore
├── angular.json
├── package.json
├── package-lock.json
└── README.md
```

## Funcionalidades

- Página de Listagem de Helpinhos: Listar todos os helpinhos criados com função de pesquisa.
- Página de Criação de Helpinho: Formulário para criar um novo helpinho.
- Página de Visualização de Helpinho: Exibir detalhes de um helpinho específico.
- Página de Autenticação: Tela de login e cadastro.

## Tecnologias Utilizadas

- Angular
- Tailwind CSS
- TypeScript

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.
Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.