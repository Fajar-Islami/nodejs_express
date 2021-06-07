// let moduleX = require('./mainModule');

// moduleX.currentUrl = 'htttp://google.com';
// console.log('Current URL' + moduleX.currentUrl);

// agar nilainya berubah di 
let mod = require('./mainModule');

let nama = new mod();
nama.name("Ahmad ", "Fajar");
nama.consoleLog();