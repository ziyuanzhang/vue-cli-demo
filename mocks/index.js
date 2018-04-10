var express = require('express');
var app = express();

//设置跨域访问
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.send(200); /让options请求快速返回/
  }
  else {
    next();
  }
});



app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.post('/', function (req, res) {
  res.send('Hello World post!');
});


app.listen(8079, function () {
  console.log('Example app listening on port 8079!');
});
