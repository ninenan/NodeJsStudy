const https = require('https');
class test {
  isTrue(arr) {
    if (arr) {
      return true;
    } else {
      return false;
    }
  };
  name() {
    return 123
  };
  getVal(api, callback) {
    let requestUrl = `https://douban.uieee.com/v2/movie/${api}`;
    https.get(requestUrl, res => {
      let resData = '';
      res.setEncoding('utf-8');
      res.on('data', chunk => {
        resData += chunk;
      })
      res.on('end', () => {
        console.log(JSON.parse(resData));
        callback(JSON.parse(resData));
      });
    })
  }
}
module.exports = test;