const express = require('express');
const router = express.Router();
const connection = require('./config')

// 连接数据库
connection.connect(() => {
  console.log('数据库连接成功');
})
/* GET home page. */
router.post('/checklogin', (rep, res) => {
  let { username, password } = rep.body;
  // 打印接收前台来的数据
  // console.log(username, password);
  //查询核对login
  const sqlStr = `select * from users where username='${username}'and password='${password}'`;
  connection.query(sqlStr, (error, data) => {
    if (error) {
      throw error;
    } else {
      res.send(data);
    }
  })
})
// 请求数据
router.get('/getuserlist', (rep, res) => {
  // 查询所有数据据
  const sqlStr = `select * from users`
  connection.query(sqlStr, (error, data) => {
    if (error) {
      throw error;
    } else {
      res.send(data);
    }
  })
})
module.exports = router;

//数据库查询是否存在用户信息
/* CREATE TABLE users(
id int key auto_increment,
username varchar(50),
password varchar(50),
realname varchar(50),
idcard   varchar(50)
);
*/
/*
insert into users(username,password,realname,idcard)values("yzg987654321","yzg987654321","柯南","987654321");
*/
  //连接数据库
  // res.send("成功连接后台")