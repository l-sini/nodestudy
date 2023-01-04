console.log('처음으로 적었어요');

process.nextTick(() => {
  console.log('두번째로 적었어요');
});

setTimeout(() => {
  console.log('세번째로 적었어요');
}, 0);

Promise.resolve().then(() => console.log('4번째로 적었어요'));
