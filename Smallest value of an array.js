function min(arr, toReturn) {
    return toReturn === 'value' ? Math.min(...arr) : toReturn === 'index' ? arr.indexOf(Math.min(...arr)) : null
}

console.log(min([1, 2, 3, 4, 5], 'value'));//1
console.log(min([1, 2, 3, 4, 5], 'index'));//0