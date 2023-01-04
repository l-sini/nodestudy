const hash = require('crypto');

console.log(
  'base64>>>>',
  hash.createHash('sha512').update('pw').digest('base64')
);
console.log('hex>>>>', hash.createHash('sha512').update('pw').digest('hex'));
