const WebSocket = require("ws"); // 引入ws模块
var chatServer = new WebSocket.Server({
  port: 9000
}); // 创建服务并设值端口号为9000
var clientMap = {};
var i = 0;
// console.log(chatServer);
chatServer.on("connection", client => {
  // 服务端模块
  client.name = ++i;
  clientMap[client.name] = client;

  client.on("message", data => {
    // 监听消息的发送
    console.log("[server]发送消息:" + data);
    subscription(data, client);
  });

  client.on("error", err => {
    // 监听错误
    console.log("error:", err);
  });

  client.on("close", data => {
    // xx退出聊天室
    delete clientMap[client.name];
    subscription(client.name + "下线了", client);
  });
});

function subscription(message, client) {
  for (const key in clientMap) {
    clientMap[key].send(client.name + "say:" + message + "\n");
  }
}
