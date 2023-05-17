String.prototype.ipv4Address = function () {
    const arr = this.split('.')
    return arr.length === 4 && arr.every(el => el.length === (String(+el)).split('').length && +el >= 0 && +el <= 255)
}
console.log("10.20.30.40".ipv4Address());
console.log("10.256.30.40".ipv4Address());
console.log("10.20.030.40".ipv4Address());