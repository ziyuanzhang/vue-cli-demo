var Mock = require('mockjs')
var data = Mock.mock('http://5b77a93c3ce04b00146a5401.mockapi.io/get', {
  'list|1-10': [{
    'id|1-100.1-10': 1,
    'name|2-7': true
  }]
})
var data = Mock.mock('http://localhost:3001/root', 'post', (req, res) => {
  console.log('req.body:', req.body)
  let userName = JSON.parse(req.body).root
  return {
    'data': 'mockRoot'
  }
})

var datas = Mock.mock('http://5b77a93c3ce04b00146a5401.mockapi.io/login', 'post', (req, res) => {
  console.log('req.body:', req.body)
  let userName = JSON.parse(req.body).userName
  console.log('req.body:', req.body)
  if (userName === 'AdminA') {
    return {
      'state': 'ok',
      'userRole': 'AdminA'
    }
  } else if (userName === 'AdminB') {
    return {
      'state': 'ok',
      'userRole': 'AdminB'
    }
  } else {
    return {
      'state': 'ok',
      'userRole': 'member'
    }
  }
})
/* var datas = Mock.mock('http://localhost:3000/login', 'post', {
  'state': 'ok',
  'userRole': 'Admin'
}) */
// console.log(JSON.stringify(datas, null, 4))
