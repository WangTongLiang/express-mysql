###简单的express结合mysql数据库
+ 初步实现数据的插入
#### data.forEach(function(item){
  var oneSql = `INSERT INTO users(user_id,user_name,user_age,user_gend) VALUES(${item.id},'${item.name}',${item.age},${item.gend})`;

connection.query(oneSql, function(err, rows, fields) {
  if (err) throw err;
});