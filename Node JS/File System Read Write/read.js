// Cara baca file
let fs = require('fs');

console.log('Executed Before File Reading');

// fs.readFile('./file/file', 'utf8', function (error, data) {
//   console.log(data);
// });

// Supaya asyn
let data = fs.readFileSync('./file/file', 'utf8');
console.log(data);

console.log('Executed After File Reading , probably');