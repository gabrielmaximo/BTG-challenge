# Desafio do BTG Pactual Digital

Desenvolvendo um serviço web REST com 2 funcionalidades:

## dependências de execução do projeto:

- node (latest)
- yarn or npm (latest)

## 1. Endpoint para autenticação do serviço;
   - Login feito em memoria;
   
## 2. Endpoint para geração do documento com os dados inputados pelo usuário e salvar no disco

   - Dados: Nome Completo, Data de Nascimento, CPF, RG;
   - Documento salvo em formato .txt dentro da pasta tmp com os dados escritos no seguinte formato:
   - Ex:

     - Document

     ```json
     {
       "fullName": "Luis Gabriel Maximo",
       "birthDate": "1997-07-23",
       "cpf": "91265994064",
       "rg": "497567696"
     }
     ```

     - Login

     ```json
     {
       "login": {
         "email": "maximou@fu.br",
         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDMwODAwMDQsImV4cCI6MTYwMzY4NDgwNCwic3ViIjoibWF4aW1vdUBmdS5iciJ9.R46HW4BBM3u_t6xTHYG7NjHEmjZjbwnvlIF9pz8MQ7U"
       },
       "ip": "127.0.0.1"
     }
     ```

## 3. Testes implementados com 100% de coverage.
   - Podem ser consultados atraves do coverage report do jest no caminho: ```src/__tests__/coverage/lcov-report/index.html``` (abrir com navegador)
   - Para visualizar via bash basta executar o comando ```yarn test``` (equivalente a ```npm run test```)

## 4. Para startar o servidor:
   - ```yarn dev``` ou ```npm run dev```
   
## 5. Documentação de rotas:
   - Para fazer authenticação use http://localhost:3333/session - ```POST```
   - Payload:
   ```json
   {
	   "email": "maximou@fu.br",
	   "password": "123456"
   }
   ```
   **obs:** O password pode ser qualquer valor com no minimo 6 caracters e o email precisa ser valido. Ex: seu_email@gmail.com
   
   - Para armazenar um documento em disco use http://localhost:3333/document - ```POST```
   - Payload:
   ```json
   {
      "fullName": "Luis Gabriel Maximo",
	   "birthDate": "1997-07-23",
	   "cpf": "912.659.940-64",
	   "rg": "497567696"
   }
   ```
   **obs:** O documento criado será armazenado no formato .txt na pasta tmp localizada na raiz do projeto. O cpf utilizado será o nome do arquivo. Para criar um documento é necessario estar autenticado (enviar um token jwt via header), o token de autenticação pode ser obtido no payload da rota de session. Submeti um arquivo Insomnia_2020_10_19.json onde nele contem as configurações listadas acima, com configurações prontas para testar as chamadas e um token valido pré configurado.
