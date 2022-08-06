// Write a function that returns the number of occurrences of an element in an array.

Array.prototype.numberOfOccurrences = function (num) {
    return this.filter(item => item === num).length
}


console.log([4, 0, 4].numberOfOccurrences(4));