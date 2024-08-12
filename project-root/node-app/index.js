const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configuração do banco de dados
const config = {
  host: 'db',
  user: 'root',
  password: 'rootpassword',
  database: 'nodedb'
};

const connection = mysql.createConnection(config);

// Cria a tabela se não existir
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS people (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  );
`;
connection.query(createTableQuery);

app.get('/', (req, res) => {
  const name = `User_${Math.floor(Math.random() * 1000)}`;
  const insertQuery = `INSERT INTO people(name) VALUES('${name}')`;

  connection.query(insertQuery, (err) => {
    if (err) throw err;

    connection.query('SELECT name FROM people', (err, results) => {
      if (err) throw err;

      let namesList = '<ul>';
      results.forEach(person => {
        namesList += `<li>${person.name}</li>`;
      });
      namesList += '</ul>';

      res.send(`<h1>Full Cycle Rocks!</h1>${namesList}`);
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
