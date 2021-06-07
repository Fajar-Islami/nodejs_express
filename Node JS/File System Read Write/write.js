// Cara baca file
let fs = require('fs');

console.log('Executed Before File Reading');

// Membuat file, params2 isi file
// let data = fs.writeFile('./file/file2', 'Hello there\n What\'s Up?', 'utf8', function (error) {
//   if (error) throw error;
//   console.log('file written');
// });

let data = fs.writeFileSync('./file/file3', 'Hello there\n What\'s Up?', 'utf8');
console.log('file written');

console.log('Executed After File Reading , probably');