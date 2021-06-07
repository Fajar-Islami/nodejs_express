// Event and eventEmitter

let events = require('events');

let eventEmitter = new events.EventEmitter();

eventEmitter.on('myCustomEvent', function (arg1, arg2) {
  console.log(arg1 + arg2);
});
// document.querySelector('tag').onclick = function(){};
eventEmitter.on('myCustomEvent', function (arg1, arg2, arg3) {
  console.log(arg1 + arg2 + arg3);
});

setTimeout(function () {
  eventEmitter.emit('myCustomEvent', 'String 1', ' dan String 2', ' ini string 3');
}, 2000)