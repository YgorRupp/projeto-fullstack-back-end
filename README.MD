PARA INICIALIZAR O PROJETO UTILIZE:

yarn init

APÓS A INICIALIZAÇÃO É NECESSARIO GERAR E RODAR AS MIGRAÇÕES

yarn typeorm migration:generate src/migrations/createUser -d src/data-source.ts
yarn typeorm migration:run -d src/data-source.ts

PARA RODAR O SERVIDOR UTILIZE:

yarn dev

ROTA PARA A DOCUMENTAÇÃO DA API LOCALMENTE:

http://localhost:3000/api-docs/
