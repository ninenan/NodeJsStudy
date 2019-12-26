const net = require('net'); // 引入net模块
const chatServe = net.createServer(); // 创建服务
const clientMap = {};
var i = 0;
chatServe.on('connection', client => {
  // 服务端模块
  // console.log('client:', client);
  client.name = ++i;
  clientMap[client.name] = client;

  client.on('data', data => {
    // 监听消息的发送
    console.log('[server]发送消息:' + data);
    subscription(data, client);

  });

  client.on('error', err => {
    // 监听错误
    console.log('error:', err)
  });

  client.on('close', data => {
    // xx退出聊天室
    delete clientMap[client.name];
    subscription(client.name + '下线了', client);
  })

})

function subscription(message, client) {
  for (const key in clientMap) {
    clientMap[key].write(client.name + 'say:' + message);
  }
}

chatServe.listen(3306);