# Gerenciamento de Biblioteca

## Objetivo

Realizar uma pesquisa e apresentar o funcionamento de um framework de Mapeamento Objeto-Relacional (ORM – Object-Relational Mapping) desenvolvendo um protótipo simples com uma determinada linguagem de programação e para um banco de dados de preferência do grupo.

## Tecnologias Utilizadas

- Node.js: Ambiente de execução JavaScript.
- TypeScript: Superset de JavaScript que adiciona tipagem estática.
- Sequelize: ORM (Object-Relational Mapping) para Node.js.
- SQLite: Banco de dados relacional leve e autossuficiente.
- VSCode: Editor de código recomendado.
- Extensão SQLite para VSCode: Extensão para Visual Studio Code que facilita a visualização e manipulação de bancos de dados SQLite.

## Case Utilizado: Gerenciamento de Biblioteca

Este projeto implementa um sistema de gerenciamento de biblioteca utilizando Sequelize e SQLite. O sistema inclui os seguintes modelos e relacionamentos:

### Modelos

1. Author: Representa um autor de livros.
2. Book: Representa um livro na biblioteca.
3. Detail: Representa detalhes adicionais de um livro, como resumo e número de páginas.
4. Student: Representa um estudante que pode pegar livros emprestados.
5. Loan: Representa um empréstimo de livro, associando um livro a um estudante.

### Relacionamentos

1. 1:1 (Um para Um):
   - Cada Book tem um Detail único.
   - Implementado com Book.hasOne(Detail) e Detail.belongsTo(Book).
2. 1:N (Um para Muitos):
   - Um Author pode ter escrito vários Books.
   - Implementado com Author.hasMany(Book) e Book.belongsTo(Author).
3. N:N (Muitos para Muitos):
   - Um Student pode pegar emprestado vários Books e um Book pode ser emprestado por vários Students.
   - Implementado com Book.belongsToMany(Student, { through: Loan }) e Student.belongsToMany(Book, { through: Loan }).

## Como Rodar

### Pré-requisitos

- Node.js: Certifique-se de ter o Node.js instalado. Você pode baixá-lo em nodejs.org.
- npm: O Node.js geralmente vem com o npm (Node Package Manager) instalado.

### Passos para Rodar o Projeto

1. Clone o Repositório:

```bash
    git clone https://github.com/brunaschneiders/banco_de_dados_II_GA.git
    cd banco_de_dados_II_GA
```

2. Instale as Dependências:

```bash
    npm install
```

3. Compile o TypeScript:

```bash
    npx tsc
```

4. Execute o Script de Inserção de Dados e Consultas:

```bash
    node dist/scripts/data.js
```
