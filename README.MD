# Projeto Multipedidos

## Descrição

Esta aplicação se comunica com um simulador de balança através de uma porta COM virtual, salva os valores de peso enviados por fornecedores em um banco de dados MySQL, e exibe esses valores em tempo real em um frontend simples.

## Configuração do Ambiente

### Pré-requisitos

- Node.js
- MySQL
- Software de emulação de porta COM (ex: Free Virtual Serial Ports)

### Configuração

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/multipedidos.git
    cd multipedidos
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure o MySQL e crie o banco de dados e tabelas:
    ```sql
    CREATE DATABASE multipedidos;

    USE multipedidos;

    CREATE TABLE suppliers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT
    );

    CREATE TABLE weights (
        id INT AUTO_INCREMENT PRIMARY KEY,
        weight DECIMAL(10, 2) NOT NULL,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        supplier_id INT,
        FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
    );
    ```

4. Inicie o servidor:
    ```bash
    npm start
    ```

5. Abra o navegador e acesse `http://localhost:3000`.

## Uso

- A aplicação se conectará à porta COM1 para receber os dados simulados de peso.
- Os dados serão exibidos em tempo real na página HTML com paginação de 20 itens por página.

## Autor

Guilherme Mendes
