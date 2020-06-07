const jwt = require('jsonwebtoken')
// 默认是hs256加密 
const secret = 'qwerNNN12332121312' // 私钥
let payload = {
  user: 'NNN',
  age: '2521312'
} // 这里绝对不能存放关键数据 传递的数据
// let token = jwt.sign(payload, secret) // 生成token
// let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiTk5OIiwiYWdlIjoiMjUiLCJpYXQiOjE1OTE1MzAzODZ9.-RpbFytlBAo891U9RAgtrekBOXqBaUnMiO-TK1WRX_o'
// jwt.verify(token, secret, (err, data) => {
//   // 解析token 是否是我生成
//   console.log('err:', err) // null
//   console.log('data:', data) // { user: 'NNN', age: '25', iat: 1591530386 }
// })

// let otherToken = 'iIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiTk5OIiwiYWdlIjoiMjUi.-RpbFytlBAo891U9RAgtrekBOXqBaUnMiO-TK1WRX_o' // 混乱写的token
// jwt.verify(otherToken, secret, (err, data) => {
//   console.log('err:',err) // JsonWebTokenError: invalid token 直接抛出异常 中止执行
//   console.log('data:',data)
// })

// 如果想使用别的加密方式
// 可以使用第三个参数 algorithm-算法
// let token = jwt.sign(payload, secret, { algorithm: 'HS512' });
// console.log('token:', token)
