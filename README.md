# To-Do List Feita em React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scripts Disponíveis

No diretório do projeto, você pode rodar:

### `npm start`

Roda o app no modo desenvolvedor.\
Abra [http://localhost:3000](http://localhost:3000) para ver no seu browser.

### Instruções

O app foi feito para ser demonstrado o funcionamento de um sistema de lista de tarefas, onde um usuário
poderá adicionar suas tarefas, editar, marcar como concluída ou excluir.

Por ser apenas uma demonstração de um simples C.R.U.D, não foi implementado métodos reais de login ou de validações complexas de dados.
Sendo assim, o campo de login funciona com qualquer email(é necessário ter @ para ser válido) e senha, porém cada usuário tem sua própria lista de tarefas.

O banco de dados utilizado foi o Firebase firestore para persistência dos dados, as coleções foram separadas pelo nome do usuário, sendo assim, cada usuário vai ver apenas sua lista de tarefas.

A parte visual foi feita utilizando Tailwind css e alguns components nativos do React



