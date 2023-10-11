String.prototype.isLetter = function () {
    return this.length === 1 && (this.charCodeAt(0) >= 65 && this.charCodeAt(0) <= 90 || this.charCodeAt(0) >= 97 && this.charCodeAt(0) <= 122)
}

console.log("*".isLetter());
console.log("A".isLetter());
console.log("Z".isLetter());
console.log("a".isLetter());
console.log("z".isLetter());