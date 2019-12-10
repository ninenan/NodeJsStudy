const querystring = require('querystring');
querystring.stringify({
  foo: 'bar',
  baz: ['qux', 'quux'],
  corge: ''
});
// Returns 'foo=bar&baz=qux&baz=quux&corge='

console.log(querystring.stringify({
  foo: 'bar',
  baz: 'qux'
}, ';', ':'));
// Returns 'foo:bar;baz:qux'

console.log(querystring.parse('foo:bar;baz:qux', ';', ','))
// { 'foo:bar': '', 'baz:qux': '' } 记得参数转换的时候要加上参数

console.log(
  querystring.escape('你好') // %E4%BD%A0%E5%A5%BD
)
console.log(
  querystring.unescape('%E4%BD%A0%E5%A5%BD') // 你好
)