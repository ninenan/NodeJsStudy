var mysql = require("mysql"); // 引入 mysql 模块     require： commonJs 模块引入方式
// console.log(mysql); // 直接在终端输入 node 01.helloWorld.js 可以查看输出内容
//模块使用的时候记得先引入
const HTTP = require("http"); //引入了nodeJs的内置模块 http
const NAME = require("./views/name.js"); // 引入自定义模块 遵循的是commonJs规范
const fs = require('fs');
const URL = require('url');
// console.log(NAME);
const router = require('./router.js'); // 引入路由模块
HTTP.createServer((request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/html;charset=utf-8"
  }); // 设置了一个相应成功为200的请求头为"Content-Type": "text/html;charset=utf-8"
  // response.write("hello node.js"); // 响应成功输出这传字符
  // response.end(); //结束请求
  // response.end("hello node.js"); // 上面的两行代码可以简写成这一行代码
  // console.log('request.url:', request.url);
  if (request.url !== "/favicon.ico") {
    // response.end("hello node.js");
    // console.log('url', request.url);
    // const path = URL.parse(request.url, true).pathname.substring(1);
    // try {
    //   router[path](response, request);
    // } catch (error) {
    //   // 捕获异常的话 强制跳到首页
    //   router.home(response, request);
    // }
    // response.end(NAME.showName()); // 这里输出Nw
    // fs.readFile('123.txt', 'utf8', (err, data) => {
    //   if (err) console.log(err);
    //   response.end(data);
    // })
    // response.end();
  }
}).listen(8088); //8088 为监听服务器端口号
console.log("server is running  http://localhost:8088");