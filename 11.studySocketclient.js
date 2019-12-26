const port = 3306;
const host = '127.0.0.1';
const net = require('net');
const readline = require('readline'); // 引入逐行读取
const client = new net.Socket(); // 新建客户端

client.setEncoding = 'utf-8'; // 设置编码
client.connect(port, host, () => {
  // 连接上服务器
  client.write('[client]你好');
});

client.on('data', data => {
  // 客户端监听服务器端返回的信息
  console.log('[serve]服务器端发来信息' + data);
  // 下面可以做一些写入的操
  say();
});

client.on('close', () => {
  // 监听客户端退出
  console.log('connect close one');
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function say() {
  rl.question('请输入', (str) => {
    if (str !== 'byby') {
      client.write(str + '\n');
    } else {
      client.destroy(); // 销毁客户端
      rl.close() // 关闭读写的操作
    }
  });
}