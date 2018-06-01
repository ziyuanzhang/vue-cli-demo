var Mock = require('mockjs')
var data = Mock.mock('http://localhost:3000/mock/get', {
  'list|1-10': [{
    'id|1-100.1-10': 1,
    'name|2-7': true
  }]
})
var datas = Mock.mock('http://localhost:3000/login', 'ok')

console.log(JSON.stringify(data, null, 4))
