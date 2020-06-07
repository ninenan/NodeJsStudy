const jwt = require('jsonwebtoken')
const secret = 'NineNanSecret' // 私钥
/**
 * @description 创建token
 * @param {object} payload 
 * @returns {string} 
 * @author NineNan
 */
function createToken (payload) {
  payload.createdDateTime = Date.now() // 创建时间戳
  return jwt.sign(payload, secret)
}
/**
 * @description 验证token
 * @param {string} token
 * @returns {object || string}
 * @author NineNan
 */
function verificationToken (token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, data) => {
      if(err) reject('token无效')
      resolve(data)
    }) 
  })
}
module.exports = {
  createToken,
  verificationToken
}