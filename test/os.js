const os = require('os');

// cpu  정보 가져오기
console.log(os.cpus());

// 남은 메모리 확인
console.log(os.freemem());

// 전체 메모리 확인
console.log(os.totalmem());

// hostname 확인
console.log(os.hostname());

//os type
console.log(os.type());

//부팅후 흐른 시간
console.log(os.uptime());

// node api document
