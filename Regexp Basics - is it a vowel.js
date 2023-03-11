String.prototype.vowel = function () {
    return String(this).length === 1 && /[aeiou]/gi.test(String(this))
};

console.log('a'.vowel());