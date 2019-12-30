const assert = require('assert'); // 断言
const test = require('./index');
const testDemo = new test();
describe('场景2', () => {
  // it('测试1', () => {
  //   const name = 'NineNan';
  //   assert.strictEqual(name, 'NineNan'); // 严格等于
  //   // assert.strictEqual(name, 'NineNanS', '严格等于不对'); // 严格等于
  //   // assert.notStrictEqual(1, 1, '没有全等');
  //   // assert.ok(false, '是否返回true');
  //   // assert.ok(testDemo.isTrue(true), '是否返回true');
  //   // assert.ok(test.isTrue(false), '是否返回true123');
  //   // assert.strictEqual(testDemo.name(), 123, "正确返回123");
  // });
  // it('异步测试', (done) => {
  //   // 异步测试
  //   var x = false;
  //   var f = () => {
  //     x = true;
  //     assert.ok(x, '是否返回true');
  //     done(); // 通知Mocha测试结束
  //   };
  //   setTimeout(f, 4000);
  // });
  it('异步http请求', (done) => {
    // 异步http请求
    testDemo.getVal('top250', data => {
      let isVal = false;
      if (data.subjects) {
        isVal = true;
      } else {
        isVal = false;
      }
      assert.ok(isVal, '是否正确返回数据');
      done()
    })
  });
});