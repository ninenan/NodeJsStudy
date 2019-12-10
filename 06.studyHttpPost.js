const HTTP = require('http');
const querystring = require('querystring');
const POST_DATA = querystring.stringify({
  author: 'apple',
  age: 12
});
var options = {
  hostname: 'localhost',
  port: 3000,
  path: '/posts',
  method: 'post',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};
var resData = '';
var request = HTTP.request(options, response => {
  console.log(response.statusCode) // 状态码
  if (response.statusCode === 200) {
    // console.log(response)
  }
  response.on('data', chunk => {
    resData += chunk;
  });
  response.on('end', () => {
    // 监听end事件
    console.log(resData)
  });
});
request.write(POST_DATA);
request.end();