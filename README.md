<h1 align="center">📇 SisCAPACIT 1.0</h1>

## :memo: Descrição

Projeto de sistema de capacitação para servidores públicos - Módulo Administrador. Consiste em 2 CRUDs (funcionalidades CREATE, READ, UPDATE, DELETE): um com os dados de cadastros dos servidores, e o outro com os dados dos cursos ofertados.

## :books: Funcionalidades

- <b>Página inicial</b>: Botão para entrar no sistema (não tem login e senha).
- <b>Navegação por navbar</b>: Componente que permite navegação dentro do projeto. Aparece de forma condicional
- <b>Listagem de servidores</b>: Página com tabela para visualização de dados e contagem do total de servidores cadastrados
- <b>Detalhes de servidores</b>: Navegação para uma página que mostra informações detalhadas do servidor selecionado
- <b>Cadastro de novo servidor</b>: Componente para cadastrar um novo servidor
- <b>Edição de informações de servidor</b>: Componente que permite alterar informações de servidor já cadastrado
- <b>Exclusão de cadastro de servidor</b>: Evento que permite deletar registro de servidor
- <b>Listagem de cursos</b>: Página com tabela para visualização de dados e contagem do total de cursos cadastrados
- <b>Detalhes de cursos</b>: Navegação para uma página que mostra informações detalhadas do curso selecionado
- <b>Cadastro de novo curso</b>: Componente para cadastrar um novo curso
- <b>Edição de informações de curso</b>: Componente que permite alterar informações de curso já cadastrado
- <b>Exclusão de cadastro de curso</b>: Evento que permite deletar registro de curso

## :wrench: Tecnologias utilizadas

- VS Code;
- React;
- JSX;
- axios;
- react-bootstrap;
- react-router-dom;
- react-imask
- font-awesome.

## :rocket: Rodando o projeto

Para rodar o repositório é necessário clonar o mesmo, dar o seguinte comando para instalar as dependências:

```
npm install
```

Após instaladas as dependências, dê o comando seguinte para rodar a aplicação:

```
npm start
```

Para fazer suas próprias alterações, não se esqueça de antes forkar o repositório e fazer o clone a partir do repositório criado pelo fork.

## :dart: Status do projeto

A versão 1.0 do projeto está concluída. No futuro, deseja-se criar uma nova versão integrando os elementos de servidores e cursos: por exemplo, incluir no sistema que o servidor A realizou os cursos 1, 2 e 3. Adicionalmente, além do módulo administrador, essa nova versão pode ter um módulo Servidor, onde os próprios servidores podem acessar suas informações de capacitação.
