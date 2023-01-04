const path = require('path');

// 경로 처리

console.log(path.join(__dirname, 'path.js'));

console.log(path.resolve(__dirname, '..', '/path.js'));

// 경로 추출
path.dirname();

//확장자 확인
path.extname();
