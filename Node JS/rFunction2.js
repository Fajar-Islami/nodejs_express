let method = module.exports = {};

// method.updateServer = function () {
//   console.log('Important Function');
// }

// method.eatCookies = () => {
//   console.log("Makan kue");
// }

// method.node = () => {
//   console.log('NodeJS Express');
// }



this.output = 330;

// method.jumlah = (a, b) => {
//   return a + b;
// };

// method.luasLingkaran = (r) => {
//   return 2 * Math.PI * r;
// };

// method.luasPersegiPjg = (a, b) => {
//   return a * b
// }

// exports.data = method;
// module.exports.data = method;


// cara export banyak , dijadikan objek
module.exports = {
  jumlah: (a, b) => {
    return a + b;
  },

  luasLingkaran: (r) => {
    return 2 * Math.PI * r;
  },

  luasPersegiPjg: (a, b) => {
    return a * b
  }
}