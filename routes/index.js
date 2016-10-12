var express = require('express');
var mysql = require('mysql');
var data = require('../data.json');
var router = express.Router();
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'root',
  database : 'myblog'
});
 
connection.connect();
// data.forEach(function(item){
//   var oneSql = `INSERT INTO users(user_id,user_name,user_age,user_gend) VALUES(${item.id},'${item.name}',${item.age},'${item.gend}')`;

// connection.query(oneSql, function(err, rows, fields) {
//   if (err) throw err;
// });
// })
//var oneSql = "INSERT INTO users(user_id,user_name,user_age,user_gend) VALUES(1,'zz',12,'nan')";
//查询操作
  // var selSql = "SELECT * FROM users WHERE user_id = '2'";

  //   connection.query(selSql, function(err, rows, fields) {
  //         if (err) throw err;
  //         console.log(rows)
  //   });
  //删除操作
  // var delSql = "DELETE FROM users WHERE user_id = '2'";

  //   connection.query(delSql, function(err, rows, fields) {
  //         if (err) throw err;
  //         console.log(rows)
  //   });
  
//更改操作
  var upSql = "UPDATE users SET user_gend = \"好吧就这样吧\" WHERE user_id = '3'";

    connection.query(upSql, function(err, rows, fields) {
          if (err) throw err;
          console.log(rows)
    });
 
connection.end();
module.exports = router;
