// klo object berasosiasi jadi berubah
// nilai objectnya berubah
// module.exports = {
//   currentUrl: 'http://codedamn.com'
// }

function construct_func() {
  let nameHolder;
  return {
    name: function (fName, lName) {
      nameHolder = fName + lName;
    },

    consoleLog: function () {
      console.log(nameHolder);
    }

  }
}

module.exports = construct_func;