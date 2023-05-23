var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

function SubstitutionCipher(abc1, abc2) {
    this.encode = function (str) {
        return str.split('').map(el => abc2[abc1.indexOf(el)] || el).join('')
    }
    this.decode = function (str) {
        return str.split('').map(el => abc1[abc2.indexOf(el)] || el).join('')
    }
}

var sub = new SubstitutionCipher(abc1, abc2);
console.log(sub.encode("abc")) // => "eta"
console.log(sub.encode("xyz")) // => "qxz"
console.log(sub.encode("aeiou")) // => "eirfg"

console.log(sub.decode("eta")) // => "abc"
console.log(sub.decode("qxz")) // => "xyz"
console.log(sub.decode("eirfg")) // => "aeiou"