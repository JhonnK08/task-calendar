Task Calendar
=============

Task Calendar é uma aplicação para gerenciamento de tarefas.

Tecnologias Utilizadas
----------------------

-   Typescript
-   Nest.js
-   Prisma
-   PostgreSQL
-   React.js
-   Vite
-   TailwindCSS
-   [ShadcnUI](https://ui.shadcn.com/)

Requisitos
----------

-   Node.js: Versão 18
-   PNPM: Versão 8 (instalado com `npm i -g pnpm@8`)

Instalação
----------

1.  Instale as dependências com PNPM:

    `pnpm i`

Como Rodar
----------

### Backend

Para iniciar o servidor backend em modo de desenvolvimento:

`pnpm -F backend start:dev`

### Frontend

Para iniciar a aplicação frontend:

`pnpm -F frontend dev`


### Banco local

Para iniciar a imagem do banco PostgreSQL, basta rodar o comando abaixo e atualizar o `.env`.

`docker compose up`
