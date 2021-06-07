// let moduleX = require('./mainModule');

// console.log('Current URL' + moduleX.currentUrl);

// agar nilainya berubah di 
let mod = require('./mainModule');

let nama = new mod();
nama.name("Ahmad 2 ", "Fajar 2");
nama.consoleLog();