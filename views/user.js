var userInfo = require('../userinfo')

function user() {

}
user.prototype = new userInfo()

module.exports = user