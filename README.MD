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

    INSERT INTO suppliers (name, description) VALUES ('Fornecedor A', 'Fornecedor de maquinas pesadas');
    INSERT INTO suppliers (name, description) VALUES ('Fornecedor B', 'Fornecedor de maquinas leves');
    ```

4. Inicie o simulador:
    ```bash
    npm simulation
    ```
    (Obs: A aplicação foi feita no sistema operacional MacOS, o software de emulação `freevirtualserialports` não é compativel com o mesmo. O `socket` que também serve para criar uma porta COM virtual e simular a comunicação serial entre aplicações pode vir a não funcionar como deveria. Foi criado então um script que simula essa comunicação, e para utiliza-la é só rodar o comando acima)

5. Inicie o servidor:
    ```bash
    npm start
    ```

6. Abra o navegador e acesse `http://localhost:3000`.

## Uso

- A aplicação se conectará à porta COM1 para receber os dados simulados de peso.
- Os dados serão exibidos em tempo real na página HTML com paginação de 20 itens por página.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:
    ```bash
    multipedidos/
    ├── node_modules/
    ├── public/
    │   ├── index.html
    │   └── styles.css
    ├── src/
    │   ├── controllers/
    │   │   └── weightController.js
    │   ├── models/
    │   │   ├── supplierModel.js
    │   │   └── weightModel.js
    │   ├── routes/
    │   │   └── weightRoutes.js
    │   ├── services/
    │   │   └── serialService.js
    │   ├── index.js
    │   └── database.js
    ├── package.json
    └── README.md
    ```

## Fluxograma da Aplicação
    ```bash
    Início -> Configurar ambiente (Node.js, MySQL, Porta COM)
            -> Iniciar servidor Node.js
            -> Configurar conexão com banco de dados MySQL
            -> Configurar comunicação com porta COM (serial)
            -> Aguardar dados de peso da balança
            -> Receber dados de peso -> Salvar no banco de dados
            -> Enviar dados atualizados para o frontend via WebSocket
            -> Frontend recebe dados -> Exibir em tempo real
            -> Fim
    ```

## Autor

Guilherme Mendes
