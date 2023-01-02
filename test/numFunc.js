const { odd, even } = require('./test');

function checkOddEven(num) {
  const answer = num % 2 ? odd : even;
  return `${num}은 ${answer}`;
}

console.log(checkOddEven(Math.ceil(Math.random() * 10)));

module.exports = checkOddEven;
