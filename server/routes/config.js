// 引入mysql
const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'user'
});


//暴露模块
module.exports = connection;

connection.connect();