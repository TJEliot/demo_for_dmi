const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

db.run('CREATE TABLE myStrings (col1 INTEGER PRIMARY KEY AUTOINCREMENT, quote varchar(255))');

let myQuery = 'SELECT quote FROM myStrings';

var selectAll = function(callback) {
  db.all(myQuery,  [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row.name);
    })
  })
}



// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'test'
// });

// var selectAll = function(callback) {
//   connection.query('SELECT * FROM test', function(err, results, fields) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// };

module.exports.selectAll = selectAll;
