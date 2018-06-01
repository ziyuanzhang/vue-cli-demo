var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//var multer = require('multer'); 
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//app.use(multer()); // for parsing multipart/form-data



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

app.get('/http', function (req, res) {
  res.send('hellow get!');
});
app.post('/http', function (req, res) {
  console.log("postHttp:",req.body);
  res.send('hellow post! ');
});
app.post('/root',function(req,res){
   console.log("root:",req.body);
    let serverSend = {
      "root":"root post"
    }
   res.send({"serverRoot":serverSend});
});
app.post("/login",function(req, res){
   console.log("body:",req.body);
   res.send('ok');
})
/* app.all("*",function(req, res){
  res.redirect(302, '/');  
}) */

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
