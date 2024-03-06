const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to the MySQL database.');
  }
});

connection.end();