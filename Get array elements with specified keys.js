Array.prototype.only = function (keys) {
    return this.filter((el, i) => keys.includes(i))
}
console.log(['a', 'b', 'c', 'd', 'e'].only([0, 3]));
console.log(['a', 'b', 'c', 'a', 'b'].only([1, 2, 3, 4]));