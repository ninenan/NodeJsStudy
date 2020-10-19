const app = require("express")();
const http = require("http").createServer(app);
const chatServer = require("socket.io")(http);
const fs = require("fs");

app.get("/", (req, res, next) => {
  fs.readFile("./webSocketIo.html", (err, data) => {
    res.send(data.toString());
  });
});

var clientMap = {};
var i = 0;
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

  client.on("disconnect", data => {
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

http.listen(9000, () => {
  console.log("server is running 9000");
  console.log("test");
});
