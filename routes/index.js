var express = require('express');
var mysql = require('mysql');
var data = require('../data.json');
var router = express.Router();
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'myblog'
});
 
connection.connect();
data.forEach(function(item){
  var oneSql = `INSERT INTO users(user_id,user_name,user_age,user_gend) VALUES(${item.id},'${item.name}',${item.age},'${item.gend}')`;

connection.query(oneSql, function(err, rows, fields) {
  if (err) throw err;
});
})
//var oneSql = "INSERT INTO users(user_id,user_name,user_age,user_gend) VALUES(1,'zz',12,'nan')";

 
connection.end();
module.exports = router;
