const fs = require('fs');
const files = function (path, res) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end()
  })
}
module.exports = {
  home: function (res) {
    res.writeHead(200, {
      "Content-Type": "text/html;charset=utf-8 "
    });
    files('./templates/home.html', res);
  },
  login: function (res) {
    files('./templates/login.html', res);
  },
  register: function (res) {
    files('./templates/register.html', res);
  },
}