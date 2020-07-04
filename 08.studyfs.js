const fs = require('fs');
// fs.appendFile('message.txt', '再次追加的数据', (err) => {
//   // 异步创建文件
//   if (err) throw err;
//   console.log('数据已追加到文件');
// });
// fs.appendFileSync('message.txt', '我最快')

// let readDataSync = fs.readFileSync('message.txt', 'utf8');
// console.log(readDataSync); // 我最快 但是文件当中的内容其实是-我最快再次追加的数据 因为这是同步读取文件 

// fs.readFile('message.txt', 'utf8', (err, data) => {
//   // 默认是buffer二进制读取 但是可以设置中间参数为utf-8
//   if (err) throw err;
//   console.log(data); // 我最快再次追加的数据
// });

// fs.writeFile('message.txt','我是覆盖性写入,会把所有的内容全部变成我123123', err => {
//   // 覆盖性写入 如果没有该文件 也会自己创建
//   if (err) throw err
//   console.log('success')
// })

// fs.unlink('message.txt', (err, data) => {
//   // 异步删除文件
//   if (err) throw err;
//   console.log('message.txt is remove')
// })

// try {
//   const dirSync = fs.readdirSync('../NodeJsStudy') // 同步读取文件目录
// } catch (error) {
//   console.error('error:',error)
//   console.log('报错')
// }

// const dir = fs.readdir('../NodeJsStudy', (err,data) => {
//   // 异步操作不会终止执行
//   if (err) {
//     throw err
//   } else {
//     console.log('异步读取:', data)
//   }
// })

// fs.mkdir('./fs_mkdir',(err) => {
//   // 创建一个名为fs_mkdir的文件夹
//   if (err) throw err
// })

// fs.rename('./views/name1.js','./views/name.js', err => {
//   // 更改文件夹/文件名称
//   if (err) throw err
// })

// fs.rmdir('./fs_mkdir_newName',err =>{
//   // 删除文件夹 但是只能是空文件夹 如果里面有内容 可以递归 但是是实验性功能
//   if (err) throw err
// })

fs.stat('./01.helloWorld.js',(err,state) => {
  // 判断文件类型
  if (state.isFile()) {
    // 是文件
    console.log('是文件')
  } else if (state.isDirectory()) {
    // 是文件夹
    console.log('是文件夹')
  }
})