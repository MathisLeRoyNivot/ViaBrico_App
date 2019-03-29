const mysql = require('mysql');
const express = require('express');
const app = express();
var path = require('path');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bdd-viabrico'
});



connection.connect((err) => {
  if (err) throw err;
  else{
    console.log('Connected!');
  }
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

const styles = path.join(__dirname, '../' + 'styles');
app.use(express.static(styles));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../' + "index.html"));
});

