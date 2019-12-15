const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const files = function (path, res) {
  fs.readFile(path, 'UTF-8', (err, data) => {
    // utf8为默认值 如果默认为utf-8 可以不写
    if (err) throw err;
    res.write(data);
    res.end()
  })
};
const fileImg = function (path, res) {
  fs.readFile(path, {
    encoding: 'binary'
  }, (err, data) => {
    if (err) throw err;
    res.write(data, 'binary'); // 这里记得写binary格式问题 不然默认为utf-8
    res.end();
  })
};
module.exports = {
  home: function (res, req) {
    res.writeHead(200, {
      "Content-Type": "text/html;charset=utf-8 "
    });
    files('./templates/home.html', res);
  },
  login: function (res, req) {
    files('./templates/login.html', res);
  },
  register: function (res, req) {
    files('./templates/register.html', res);
  },
  image: function (res, req) {
    fileImg('./1.jpg', res)
  },
  loginAction: function (res, req) {
    // get 方法地址栏中可以直接获取到参数
    let urlObj = url.parse(req.url, true).query;
    // console.log('req.url:', url.parse(req.url, true));
    res.end(`用户名:${urlObj.userName}<br>密码:${urlObj.password}`);
  },
  registerAction: function (res, req) {
    let postData = '';
    let postVal = {};
    req.on('data', chunk => {
      postData = `${chunk}`;
    })
    req.on('end', () => {
      // res.end()方法写在外面的话 会先执行 所以为undefined 写在这里面就不会
      postVal = querystring.parse(postData);
      res.end(`注册用户名：${postVal.userName}<br>注册密码：${postVal.password}`)
    })
  }
}