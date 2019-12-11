const fs = require('fs');
// fs.appendFile('message.txt', '再次追加的数据', (err) => {
//   //异步创建文件
//   if (err) throw err;
//   // console.log('数据已追加到文件');
// });
// fs.appendFileSync('message.txt', '我最快')

// let readDataSync = fs.readFileSync('message.txt', 'utf8');
// console.log(readDataSync); // 我最快 但是文件当中的内容其实是-我最快再次追加的数据 因为这是同步读取文件 

// fs.readFile('message.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data); // 我最快再次追加的数据
// });
fs.unlink('message.txt', (err, data) => {
  // 异步删除文件
  if (err) throw err;
  console.log('message.txt is remove')
})