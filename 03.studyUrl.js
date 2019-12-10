const myURL = new URL('https://a:b@測試?abc#foo');
const url = require('url');
console.log(myURL.href);
// Prints https://a:b@xn--g6w251d/?abc#foo

console.log(myURL.toString());
// Prints https://a:b@xn--g6w251d/?abc#foo

console.log(url.format(myURL, {
  fragment: false,
  unicode: true,
  auth: false
}));
// Prints 'https://測試/?abc'

let resolveUrl = url.resolve('http://example.com/one', '/two'); // 'http://example.com/two'
console.log(resolveUrl)