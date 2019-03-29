const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bdd-viabrico'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

con.query('SELECT * FROM fournisseur', (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:\n');
    console.log(rows);
});