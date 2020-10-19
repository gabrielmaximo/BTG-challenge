# Desafio do BTG Pactual Digital

Desenvolvendo um serviço web REST com 2 funcionalidades:

1. Endpoint para autenticação do serviço;
   - Login feito em memoria;
2. Endpoint para geração do documento com os dados inputados pelo usuário e salvar no disco
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
