var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1:5501",
  user: "root",
  password: "fbye200721*"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});