var history = require('connect-history-api-fallback');
var connect = require('connect');

var app = connect()
  .use(history({
    index: '/dist/index.html'
  }))
  .listen(3000);