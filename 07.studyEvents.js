const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// myEmitter.on('event', truck => {
//   // 监听事件
//   console.log(truck);
// });
myEmitter.once('event', truck => {
  // 监听事件只执行一次
  console.log(truck);
});
myEmitter.emit('event', 'apple');
myEmitter.emit('event', 'banana');
myEmitter.emit('event', 'origin');