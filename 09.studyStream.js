const fs = require('fs');
const zlib = require('zlib');

// fs.createWriteStream('message.rar') // 创建了一个message.rar的文件
fs.readFile('message.txt', 'utf8', (err, data) => {
  // console.log(data); // message.txt中的内容
});
const stream = fs.createReadStream('message.txt', {
  start: 0,
  end: 90
});
// console.log(stream);
stream.once('data', chunk => {
  // console.log(chunk.toString()); // 伤害为49，相较于其他5.56子弹的步枪三兄弟来说，伤害要高一些。
})