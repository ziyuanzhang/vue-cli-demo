var Mock = require('mockjs')
var data = Mock.mock('http://localhost:3000/mock/get', {
  'list|1-10': [{
    'id|1-100.1-10': 1,
    'name|2-7': true
  }]
})

var datas = Mock.mock('http://localhost:3000/login', 'post', (req, res) => {
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
  /*  return {
    'state': 'ok',
    'userRole|1': ['AdminA', 'AdminB', 'member']
  } */
})
/* var datas = Mock.mock('http://localhost:3000/login', 'post', {
  'state': 'ok',
  'userRole': 'Admin'
}) */
// console.log(JSON.stringify(datas, null, 4))
