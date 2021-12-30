# chamada-senha

## Tabela de Conteúdo

- [Sobre](#about)
- [Usage](#usage)


## Sobre <a name = "about"></a>

Este projeto foi criado com o objetivo de realizar o backend de uma aplicação de chamada de senhas de forma bastante simples. O projeto é escrito em Javascript com NodeJS e utiliza banco de dados SQLITE para realizar o registro das senhas emitidas e as chamadas. Contempla a criação e chamada de senhas de prioridade.

### Pré Requisitos

O uso deste projeto está condicionado a instalação do NodeJS pois ele foi escrito utilizando este software.

Versão do node usada: v14.15.5 <br>
Versão do npm usado: 6.14.11

```
NodeJS (somente)
```

### Instalando

Para uso deste projeto, providencie a instalação do NodeJS conforme mencionado acima.

Passos para uso do projeto:

```
Criar um diretório local no PC, no meu projeto chamei de chamada-senha;
```

```
Clonar nesse diretório este projeto, através da ferramenta git;
```

```
Usar o comando npm install para instalar as dependências do projeto;
```

```
Renomear o arquivo env.model para .env e informar os dados para as variáveis de ambiente;
```

```
Executar o projeto com comando npm start.
```

## Usage <a name = "usage"></a>

O projeto possui 3 rotas somente:

POST: '/', enviar um json com conteúdo "id": number para chamar uma senha novamente, modo de chamada manual;

POST: '/novaSenha', enviar um json em branco para criar senha normal, e com conteúdo "senha_priority": true para criar uma senha de prioridade;

GET: '/proximaSenha', enviar para chamar a próxima senha disponível.
