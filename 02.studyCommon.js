// CommonJs 模块继承写法
const user = require("./views/user.js");
const HTTP = require("http");
const USER = new user();
HTTP.createServer((request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/html;charset=utf-8"
  });
  if (request.url !== "/favicon.ico") {
    console.log(111);
    response.end(USER.returnName());
  }
}).listen(8089);
console.log("server is running  http://localhost:8089");