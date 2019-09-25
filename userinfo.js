function userInfo() {
  this.name = 'Nw';
  this.sex = '男';
  this.age = '18'
}
userInfo.prototype.returnName = function () {
  return this.name
}
module.exports = userInfo;